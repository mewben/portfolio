"use client";

import { useState } from "react";

import { data } from "@/lib/data";

export const Email = () => {
  const [displayText, setDisplayText] = useState("Email"); // Initial text
  const email = data.email; // The email address to copy

  // Function to handle the click event
  const handleClick = async () => {
    try {
      // Copy the email to the clipboard
      await navigator.clipboard.writeText(email);

      // Update the text to "Copied"
      setDisplayText("Copied");

      // Revert back to "Email" after 1 second
      setTimeout(() => {
        setDisplayText("Email");
      }, 1000);
    } catch (error) {
      console.error("Failed to copy email:", error);
      setDisplayText("Failed to copy"); // Fallback text in case of error
    }
  };

  return (
    <span
      className="cursor-pointer hover:opacity-75 transition-all duration-200 ease-in-out"
      onClick={handleClick}
    >
      {displayText}
    </span>
  );
};
