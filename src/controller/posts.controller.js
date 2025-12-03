import prisma from "../prismaClient.js";

// Create post
export const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ message: "Title and userId are required" });
    }

    const post = await prisma.post.create({
      data: { title, content, userId: parseInt(userId) },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating post" });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { user: true }, // opcional
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching posts" });
  }
};

// Get post by ID
export const getPostById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await prisma.post.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching post" });
  }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: { title, content },
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(500).json({ message: "Error updating post" });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    await prisma.post.delete({ where: { id } });

    res.status(204).send();
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(500).json({ message: "Error deleting post" });
  }
};
