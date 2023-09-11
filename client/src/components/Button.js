import React, { memo } from "react";
const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) => {
  return (
    <div>
      <button
        type="button"
        className={`p-2 ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1 ${fullWidth &&
          "w-full"}`}
        onClick={onClick}
      >
        <span>{text}</span>
        <span>{IcAfter && <IcAfter />}</span>
      </button>
    </div>
  );
};

export default memo(Button);
