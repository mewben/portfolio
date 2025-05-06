"use client";

import { useState, useEffect } from "react";

import { data } from "@/lib/data";

export const MyTime = () => {
  // State to hold the formatted time
  const [time, setTime] = useState("");

  // Function to get the current time in Madrid
  const getCurrentTime = () => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: data.currentTimezone,
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour format with AM/PM
    });

    return formatter.format(new Date());
  };

  // Update the time immediately when the component mounts
  useEffect(() => {
    // Set the initial time
    setTime(getCurrentTime());

    // Update the time every minute (60 seconds)
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000); // 60000ms = 60 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return time;
};
