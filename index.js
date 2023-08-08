const http=require("http");
const express=require("express");
const path=require('path');
const app=express();

const {Server}=require("socket.io");
const server=http.createServer(app);
const io=new  Server(server);//handle socket handles
//socket.io
io.on("connection",(socket)=>{
// console.log("A new user has connected ", socket.id);//every socket has a id it is automatically managed and it is unique
socket.on('user-message',(message)=>{
    io.emit("message",message);
});

});
app.use(express.static(path.resolve("./public")));

app.get('/',(req,res)=>{
return res.sendFile("/public/index.html");
})

server.listen(9000,()=>console.log(`Server started at 9000`))