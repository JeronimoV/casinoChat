"use client";

import io from "socket.io-client";
import styles from "../styles/landing.module.css";

const { useState, useEffect } = require("react");

const home = () => {
  const [actualSocket, setActualSocket] = useState();
  const [chats, setChats] = useState([]);
  const [name, setName] = useState();
  const [temporalName, setTemporalName] = useState();
  const [chatId, setChatId] = useState(null);
  const [chatUserName, setChatUserName] = useState();
  const [message, setMessage] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (name) {
      const socket = io("https://casinoredback.onrender.com", { secure: true });
      setIsWaiting(true);
      setActualSocket(socket);
      socket.on("connect", () => {
        socket.emit("connect_user", name);
      });

      socket.on("connection_completed", () => {
        if (name !== "casino1112") {
          socket.emit("create-chat", name);
        }
        setIsWaiting(false);
      });

      return () => {
        socket.off("connect");
      };
    }
  }, [name]);

  useEffect(() => {
    if (actualSocket) {
      actualSocket.on("new-chat", (response) => {
        setChats((oldChats) => [...oldChats, response]);
      });
      return () => {
        actualSocket.off("new-chat");
      };
    }
  }, [actualSocket]);

  useEffect(() => {
    if (actualSocket && chats.length > 0) {
      actualSocket.on("new-message", (response) => {
        const actualChatId = chats.findIndex(
          (value) => value.name === response.name
        );
        const oldChat = [...chats];
        oldChat[actualChatId].message.text.unshift(response.text);
        setChats(oldChat);
      });
      actualSocket.on("served-status-updated", (response) => {
        const oldChat = [...chats];

        oldChat[response.chatId].served = true;
        setChats(oldChat);
      });
      return () => {
        actualSocket.off("new-message");
        actualSocket.off("served-status-updated");
      };
    }
  }, [actualSocket, chats]);

  const sendData = (event) => {
    event.preventDefault();
    setName(temporalName);
    temporalName !== "casino1112" ? setChatId(0) : null;
  };

  const selectChat = (name) => {
    const actualChatId = chats.findIndex((value) => value.name === name);
    const userName = chats[actualChatId].name;
    setChatId(actualChatId);
    setChatUserName(userName);
  };

  const writeMessage = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (name === "casino1112") {
      actualSocket.emit("send-message", {
        name: chatUserName,
        message: message,
        admin: true,
      });
      setMessage("");
    } else {
      actualSocket.emit("send-message", {
        name: name,
        message: message,
        admin: false,
      });
      setMessage("");
    }
  };

  const sendServedStatus = () => {
    actualSocket.emit("update-served-status", {
      chatId: chatId,
    });
  };

  const endChat = () => {
    chats.splice(chatId, 1);
    setChatId(null);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src="/newBack.jpg" />
      <p className={isWaiting ? styles.wait : styles.off}>
        Espere un segundo...
      </p>
      {!name ? (
        <form className={styles.start} onSubmit={sendData}>
          <img className={styles.redBlack} src="/logo.png" />
          <p className={styles.bienvenido}>
            Ingrese su nombre para contactar con un asesor y crear usuario
          </p>
          <input
            placeholder="Ingrese aqui su nombre"
            className={styles.username}
            onChange={(text) => setTemporalName(text.target.value)}
          />
          <button className={styles.buttonForm}>Aceptar</button>
        </form>
      ) : null}
      <div className={styles.options}>
        {name &&
        name === "casino1112" &&
        chatId !== null &&
        chats[chatId].served === false ? (
          <div className={styles.servedButtons}>
            <p>¿Esta siendo atendido?</p>
            <div className={styles.buttonslist}>
              <button onClick={sendServedStatus}>Si</button>
            </div>
          </div>
        ) : null}
        {name && name === "casino1112" && chatId !== null ? (
          <div className={styles.servedButtons}>
            <p>¿El problema fue resuelto?</p>
            <div className={styles.buttonslist}>
              <button onClick={endChat}>Si</button>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.containerLit}>
        {name === "casino1112" ? (
          <div className={styles.chats}>
            {chats.map((value) => (
              <div onClick={() => selectChat(value.name)}>
                <p className={styles.name}>{value.name}</p>
                <p className={styles.served}>
                  {value.served === true ? "Atendido" : "No Atendido"}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        {name ? (
          <div className={styles.chatContainer}>
            <div className={styles.chatView}>
              {chats && chats.length && chatId !== null
                ? chats[chatId].message.text.map((value) => {
                    return value[1] ? (
                      <p className={styles.admin}>{value[0]}</p>
                    ) : (
                      <p className={styles.client}>{value[0]}</p>
                    );
                  })
                : null}
            </div>
            {name ? (
              <div className={styles.inputDiv}>
                <form className={styles.form} onSubmit={sendMessage}>
                  <input
                    className={styles.input}
                    value={message}
                    onChange={writeMessage}
                  />
                  <button className={styles.button}>Enviar</button>
                </form>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default home;
