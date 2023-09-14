import React, { memo } from "react";

const ProvinceBtn = ({ name, image }) => {
  return (
    <div className="cursor-pointer text-blue-700 shadow-md rounded-br-md hover:text-orange-600">
      <img
        src={image}
        alt={name}
        className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="font-medium p-2  hover:text-orange-400 text-center">
        {name}
      </div>
    </div>
  );
};

export default memo(ProvinceBtn);
