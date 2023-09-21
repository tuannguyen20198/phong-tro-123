import React from "react";
import {Sitem} from "./index";

const RelatedPost = () => {
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">Tin mới đăng</h3>
      <div className="w-full flex flex-col gap-2">
        <Sitem
          title="Cho thuê phòng trọ 128/46 Thiên Phước, P.9, Q.Tân Bình (gần vòng xoay Lê Đại Hành)"
          price="2 triệu/tháng"
          createdAt="Hôm nay"
        />
        <Sitem
          title="PHÒNG CHO THUÊ NGAY LOTTE Q.7 - CHỈ TỪ 3TR - BAO GIÁ TỐT - Alo 0988.373.731"
          price="2 triệu/tháng"
          createdAt="Hôm nay"
        />
        <Sitem
          title="Cho thuê Nhà, Kho, Bãi Phong Phú, Đa Phước, Bình Chánh"
          price="2 triệu/tháng"
          createdAt="Hôm nay"
        />
      </div>
    </div>
  );
};

export default RelatedPost;
