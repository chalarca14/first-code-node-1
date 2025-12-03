import express from "express";
import user from "./route/user.js";
import post from "./route/post.js";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/user", user);
app.use("/posts", post);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`http://127.0.0.1:${PORT}`); //ip vesion 6
  console.log(`http://[::]:${PORT}`);
});
