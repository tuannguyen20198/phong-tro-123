import React from "react";
import icons from "../utils/icons";
const {GrLinkPrevious} = icons;
const Modal = ({setIsShowodal, content, name}) => {
  return (
    <div
      onClick={() => {
        setIsShowodal(false);
      }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowodal(true);
        }}
        className="w-1/3 bg-white rounded-md"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-100">
          <span
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowodal(false);
            }}
          >
            <GrLinkPrevious size={24} />
          </span>
        </div>
        <div className="p-4 flex flex-col">
          {content?.map((item) => {
            return (
              <span
                key={item.code}
                className="py-2 flex gap-2 items-center border-b border-gray-200"
              >
                <input
                  type="radio"
                  name={name}
                  id={item.code}
                  value={item.code}
                />
                <label htmlFor={item.code}>{item.value}</label>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
