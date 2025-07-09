import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

const Main = () => {
  console.log("Main component rendered");
  const {
    onSent,
    resultData,
    recentPrompt,
    showResult,
    loading,
    setInput,
    input,
  } = useContext(context);

  const handleSend = () => {
    if (input.trim() !== "") {
      onSent(input);
      setInput("");
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, komal</span>
              </p>
              <p>How can i help you today ?</p>
            </div>

            <div className="cards"></div>

            {resultData && (
              <div className="gemini-response">
                <h3>Gemini Response:</h3>
                <p>{resultData}</p>
              </div>
            )}
          </>
        ) : (
          <div className="result">
            <div className="resulr-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="assets.gemini_icon" alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}>
                  {resultData}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter prompt here"
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                onClick={() => onSent("")}
                src={assets.send_icon}
                alt=""
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <p className="bottom-info">
            Gemini is a family of AI models developed by Google DeepMind,
            designed to compete with models like OpenAI’s GPT-4. It’s part of
            Google’s effort to integrate powerful AI across its products and
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
