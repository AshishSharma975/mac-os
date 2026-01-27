import React from "react";

const DateTime = () => {
  const formatDateTime = () => {
    const now = new Date();

    const date = now.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${date} ${time}`;
  };

  return <div>{formatDateTime()}</div>;
};

export default DateTime;
