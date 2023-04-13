import React from "react";

const Notification = ({ type, message }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const textColor = type === "success" ? "text-green-100" : "text-red-100";
  return (
    <>
      <div className={`${bgColor} ${textColor} p-4 rounded-md`}>
        <p className="font-bold">{message}</p>
      </div>
    </>
  );
};

export default Notification;
