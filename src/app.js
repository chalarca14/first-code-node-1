import express from "express";
const app = express();
const PORT = 3000;
import user from "./route/user.js";
import product from "./route/product.js"


app.use("/user", user);
app.use("/product", product);


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`); //ip vesion 6
    console.log(`http://[::]:${PORT}`);
})