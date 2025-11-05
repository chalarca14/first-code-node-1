import express from "express";
const app = express();
const PORT = 3000;
import user from "./route/user.js";

app.use(express.json());

app.use("/user", user);



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`); //ip vesion 6
    console.log(`http://[::]:${PORT}`);
})