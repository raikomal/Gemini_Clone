// src/context/context.jsx
import React, { createContext, useState } from "react";
import { ai } from "../config/Gemini";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [resultData, setResultData] = useState("");
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSent = async () => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
      });

      const result = await response.text();
      setResultData(result);
    } catch (error) {
      console.error("Gemini API Error:", error);
    }
  };

  const contextValue = {
    onSent,
    resultData,
    prevPrompts,
    setPrevPrompts,
    setRecentPrompt,
    recentPrompt,
    showResult,
    setLoading,
    resultData,
    input,
    setInput,
    loading,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export { ContextProvider };
