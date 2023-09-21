import React from "react";

const Sitem = ({title, price, image, createdAt}) => {
  return (
    <div className="w-full flex items-center py-2 gap-2 border-b border-dashed border-gray-300">
      <img
        src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/07/14/8_1657763752.jpg"
        alt="anh"
        className="w-[65px] h-[65px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-between w-full">
        <h4 className="text-blue-600 text-[14px] capitalize">{`${title?.slice(
          0,
          40
        )}...`}</h4>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-300">{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Sitem;
