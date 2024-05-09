import { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../Sidebar/sidebar";

const MainSection = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [messageQueue] = useState([]);
  const [question, setQuestion] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setShowSidebar(false);

      // console.log("Window width:", width, "Is mobile:", width <= 768);
    };

    window.addEventListener("resize", handleResize);

    const savedChatHistory = localStorage.getItem("chatHistory");

    if (savedChatHistory) {
      setChatHistory(JSON.parse(savedChatHistory));
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messageQueue]);

  const toggleSidebar = () => {
    if (isMobile) {
      setShowSidebar(!showSidebar);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setChatHistory([...chatHistory, userMessage]);

  //   const currMessageQueue = [
  //     ...messageQueue,
  //     { role: "user", content: question },
  //   ];
  //   setQuestion("");
  //   setMessageQueue(currMessageQueue);

  //   const requestBody = {
  //     model: "gryphe/mythomist-7b:free",
  //     messages: currMessageQueue,
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://openrouter.ai/api/v1/chat/completions",
  //       {
  //         method: "POST",
  //         headers: {
  //           Authorization:
  //             "Bearer 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",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(requestBody),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const responseData = await response.json();
  //     const assistantReply = responseData?.choices?.[0]?.message;

  //     setMessageQueue((messageQueue) => [...messageQueue, assistantReply]);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userMessage = { role: "user", content: question };

    setChatHistory([...chatHistory, userMessage]);

    setQuestion("");

    try {
      const requestBody = {
        model: "gryphe/mythomist-7b:free",
        messages: [...chatHistory, userMessage], // Sending all chat history, you might want to revise this
      };

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();
      const assistantReply = responseData?.choices?.[0]?.message;

      setChatHistory((prevChatHistory) => [...prevChatHistory, assistantReply]);
      // console.log("prevChatHistory", chatHistory);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (chatHistory != null && chatHistory.length > 0)
      localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  return (
    <div style={{ backgroundColor: "#131313" }}>
      {isMobile && showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}

      <div
        id="message-container"
        style={{
          maxHeight: "80vh",
          height: "770px",
          overflowY: "auto",
        }}
      >
        {chatHistory.map((message, index) => (
          <div style={{ color: "white" }} key={index}>
            {message.role === "user" ? (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                  >
                    <p style={{ color: "#7d756c" }}>cutie</p>{" "}
                    <AccountCircleIcon style={{ marginLeft: "5px" }} />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#252525",
                      padding: "10px",
                      marginRight: "30px",
                      borderRadius: "10px 0 10px 10px",
                      overflowY: "scroll",
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      cursor: isMobile ? "pointer" : "default",
                    }}
                    onClick={toggleSidebar}
                  >
                    <AccountCircleIcon style={{ marginLeft: "5px" }} />
                    <p style={{ marginLeft: "6px", color: "#7d756c" }}>
                      Jessica
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#d2295d",
                    borderRadius: "0 10px 10px 10px",
                    marginLeft: "40px",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {!showSidebar && (
        <div style={{ overflow: "hidden", position: "fixed" }}>
         
          <div
            style={{
              position: "fixed",
              bottom: 25,
              left: "60%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div style={{}}>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type a message here..."
                    style={{
                      backgroundColor: "#131313",
                      padding: 10,
                      border: "2px solid red",
                      color: "white",
                      outline: "none",
                      maxWidth: "80vw",
                      width: "500px",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: !showSidebar ? "30px" : "10px",
                  }}
                >
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSection;
