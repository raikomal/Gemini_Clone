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

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const result = response.text;
      setResultData(result);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setResultData("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    onSent,
    prevPrompts,
    setPrevPrompts,
    setRecentPrompt,
    recentPrompt,
    showResult,
    setLoading,
    input,
    setInput,
    loading,
    resultData,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export { ContextProvider };
