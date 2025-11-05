import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
    res.send({
        message: "lista de todos los productos",
        status: 200,
        type: "get product"
    });
})
route.post("/", (req, res)=>{
        res.send({
        message: "eliminando un producto",
        status: 200,
        type: "POST product"
    });
})

route.delete("/", (req, res)=> {
    res.send({
        message: "eliminando un producto",
        status: 200,
        type: "DELETE product"
    });
})
route.put("/", (req, res)=>{
    res.send({
        message: "PUT de productos",
        status: 200,
        type: "PUT product"
    });
})

route.patch("/", (req, res)=>{
    
    res.send({
        message: "PATCH de un producto",
        status: 200,
        type: "PATCH product"
    });

})
export default route;