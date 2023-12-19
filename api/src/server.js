const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, CHATKEY } = process.env;

server.use(express.json());
server.use(cors());

const actualServer = server.listen(PORT, () => {
  console.log("Server connected");
});
const io = require("socket.io")(actualServer, {
  cors: { origin: "*" },
});

let allUsers = [];

io.on("connection", (socket) => {
  socket.on("connect_user", (name) => {
    const connectData = { socket: socket, name: name, served: false };
    allUsers.push(connectData);
    socket.emit("connection_completed");
  });

  socket.on("create-chat", async (name) => {
    const usersToSend = allUsers.filter(
      (value) => value.name === name || value.name === CHATKEY
    );

    usersToSend.forEach((value) =>
      io.to(value.socket.id).emit("new-chat", {
        name: name,
        served: value.served,
        message: { text: [], name: name },
      })
    );
  });
  socket.on("send-message", async (data) => {
    console.log("data", data);
    const usersToSend = allUsers.filter(
      (value) => value.name === data.name || value.name === CHATKEY
    );
    console.log("data all users", allUsers, data.message);
    console.log("to send", usersToSend);

    usersToSend.forEach((value) =>
      io.to(value.socket.id).emit("new-message", {
        text: [data.message, data.admin], // [text message, is admin?]
        name: data.name,
      })
    );
  });
  socket.on("update-served-status", async (data) => {
    console.log(data);
    const usersToSend = allUsers.filter((value) => value.name === CHATKEY);

    console.log(usersToSend);

    usersToSend.forEach((value) =>
      io.to(value.socket.id).emit("served-status-updated", {
        chatId: data.chatId,
      })
    );
  });
  socket.on("disconnect", () => {
    const newUserList = allUsers.filter(
      (value) => value.socket.id !== socket.id
    );
    const userData = allUsers.find((value) => value.socket.id === socket.id);
    socket.emit("user_disconnected", userData.name);
    allUsers = newUserList;
  });
});
