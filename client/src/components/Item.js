import React, { memo, useState } from "react";
import icons from "../utils/icons";

const indexs = [0, 1, 2, 3];
const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const Item = ({
  images,
  address,
  attributes,
  description,
  star,
  title,
  user,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);

  return (
    <div className="w-full flex items-start py-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer">
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  key={index}
                  src={i}
                  alt="preview"
                  className="w-[140px] h-[120px] object-cover"
                />
              );
            })}
        <span className="bg-overlay-70 text-white px-2 rounded-md absolute bottom-4 left-1">
          {`${images.length} ảnh`}
        </span>
        <span
          className="text-white absolute bottom-1 right-8"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <RiHeartFill size={26} color="red" />
          ) : (
            <RiHeartLine size={26} />
          )}
        </span>
      </div>
      {/* <div className="flex gap-"></div> */}
      <div className="w-3/5">
        <div className="flex justify-between gap-4 w-full">
          <span className="text-red-600 font-medium py-[2px]">
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            <GrStar className="star-item" size={18} color="yellow" />
            {title}
          </span>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 gap-2">
          <span className="font-bold text-green-600 flex-3 whitespace-nowrap overflow-hidden text-ellipsis">
            {attributes?.price}
          </span>
          <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
            {attributes?.acreage}
          </span>
          <span className="flex-3 whitespace-nowrap overflow-hidden text-ellipsis">{`${
            address.split(",")[address.split(",").length - 2]
          }${address.split(",")[address.split(",").length - 1]}`}</span>
        </div>
        <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden ">
          {description}
        </p>
        <div className="flex items-center my-3 justify-between">
          <div className="flex items-center">
            <img
              src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
              alt="avatar"
              className="w-[30x] h-[30px] object-cover rounded-full"
            />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center gap-1 rounded-md">
            <button
              type="button"
              className="bg-blue-700 text-white p-2 rounded-md"
            >
              {`Gọi ${user?.phone}`}
            </button>
            <button
              type="button"
              className="border border-blue-500 p-2 rounded-md text-blue-500"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);