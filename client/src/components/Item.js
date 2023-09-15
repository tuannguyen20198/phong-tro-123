import React, { memo } from "react";
import icons from "../utils/icons";
const { GrStar, RiHeartsFill, RiHeartLine, BsBookmarkStarFill } = icons;

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/e1ff0d06dbad09f350bc_1693359997.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/279a6494b13f63613a2e_1693359996.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/78d8fdf6285dfa03a34c_1693359989.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/30/4a5f4d4098eb4ab513fa_1693359991.jpg",
];

const Item = () => {
  return (
    <div className="w-full flex items-start">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center">
        <img
          src={images[0]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[1]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[2]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[3]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
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
            KÝ TÚC XÁ CAO CẤP GIÁ RẺ (CÓ CHO THUÊ NGĂN HẠN)
          </span>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2">
          <span className="font-bold text-green-600">1.5 triệu/tháng</span>
          <span>300m²</span>
          <span>Quận Thủ Đức, Hồ Chí Minh</span>
        </div>
        <p className="text-gray-500">
          RẤT PHÙ HỢP VỚI SINH VIÊN, NGƯỜI ĐI LÀM HOẶC CÔNG TÁC.TOÀN BỘ THIẾT BỊ
          HIỆN ĐẠI VÀ MỚI 100%- Phong cách thiết kế hiện đại, tiện nghi công
          năng…
        </p>
        <div className="flex items-center my-3 justify-between">
          <div className="flex items-center">
            <img
              src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png"
              alt="avatar"
              className="w-[30x] h-[30px] object-cover rounded-full"
            />
            <p>Tuệ Thu</p>
          </div>
          <div className="flex items-center gap-1 rounded-md">
            <button
              type="button"
              className="bg-blue-700 text-white p-2 rounded-md"
            >
              Gọi 4465465464
            </button>
            <button
              type="button"
              className="border border-blue-500 p-2 rounded-md text-blue-500"
            >
              Gọi 4465465464
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
