import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

const Main = () => {
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

  console.log("sss", resultData);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Komal</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards"></div>

            {resultData && (
              <div className="gemini-response">
                <h3>Gemini Response:</h3>
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              </div>
            )}
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img onClick={handleSend} src={assets.send_icon} alt="Send" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini is a family of AI models developed by Google DeepMind,
            designed to compete with models like OpenAI's GPT-4. It's part of
            Google's effort to integrate powerful AI across its products and
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
