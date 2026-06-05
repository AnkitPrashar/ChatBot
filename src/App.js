import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import logo1 from "./assets/logo1.png";
import addbtn from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
 
import sendbtn from "./assets/send.svg";
import usericon from "./assets/user-icon.png";
import chatbotlogo from "./assets/chatbotlogo.png";

import { sendmsg } from "./chatbot";

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968) {
        setSidebarActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const msgEnd = useRef(null);

  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([
    {
      text: " Hello, I am artificial intelligence, designed to understand and interact with human language just like you. I process text, recognize patterns, and respond in ways that feel natural and helpful. My purpose is to assist—whether it’s answering questions, solving problems, or simplifying tasks—by learning from vast amounts of information and adapting to your needs.",
      isbot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handlesend = async () => {
    const text = input;
    setinput("");
    setmessages([...messages, { text, isbot: false }]);
    const res = await sendmsg(text);
    // console.log(res);
    setmessages([
      ...messages,
      { text, isbot: false },
      { text: res, isbot: true },
    ]);
  };

  const handleenter = async (e) => {
    if (e.key === "Enter") await handlesend();
  };

  const handlequery = async (e) => {
    const text = e.target.value;

    setmessages([...messages, { text, isbot: false }]);
    const res = await sendmsg(text);
    setmessages([
      ...messages,
      { text, isbot: false },
      { text: res, isbot: true },
    ]);
  };

  return (
    <div className="App">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      {sidebarActive && (
        <div className="sidebar-overlay active" onClick={toggleSidebar}></div>
      )}
      <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="upperside">
          <div className="uppersidetop">
            <img src={logo1} alt="logo" className="logo" />
            <span className="brand">ChatBot</span>
          </div>

          <button
            onClick={() => {
              window.location.reload();
            }}
            className="midbtn"
          >
            <img src={addbtn} alt="new chat" className="addbtn" />
            New Chat
          </button>

          <div className="uppersidebottom">
            <button
              onClick={handlequery}
              className="query"
              value={"What is Programming ?"}
            >
              <img src={msgicon} alt="query" />
              What is Programming ?
            </button>

            <button
              onClick={handlequery}
              className="query"
              value={"How to use an API ?"}
            >
              <img src={msgicon} alt="query" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listitems">
            <img src={home} alt="" className="listitemsimg" />
            Home
          </div>
          <div className="listitems">
            <img src={saved} alt="" className="listitemsimg" />
            Saved
          </div>
        </div>
      </div>

      <div className={`main ${sidebarActive ? "" : "expanded"}`}>
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={message.isbot ? "chat bot" : "chat"}>
              <img
                className="chatimg"
                src={message.isbot ? chatbotlogo : usericon}
                alt=""
              />
              <p className="txt">{message.text} </p>
            </div>
          ))}

          <div ref={msgEnd} />
        </div>
        <div className="chatfooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onKeyDown={handleenter}
              onChange={(e) => {
                setinput(e.target.value);
              }}
            />{" "}
            <button className="send" onClick={handlesend}>
              <img src={sendbtn} alt="send" />
            </button>
          </div>

          <p>
            chatbot may Produce inaccurate information about People, Places, or
            facts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
