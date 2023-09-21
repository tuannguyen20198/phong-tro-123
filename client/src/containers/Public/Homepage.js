import React, {useEffect} from "react";

import {text} from "../../utils/constant";
import {Province, ItemSidebar, RelatedPost} from "../../components";
import {List, Pagination} from "./index";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/action/";

const Homepage = () => {
  const dispatch = useDispatch();
  const {categories, prices, areas} = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITILE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
          <div></div>
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={categories} title={"Danh sách cho thuê"} />
          <ItemSidebar
            isDouble={true}
            type="priceCode"
            content={prices}
            title="Xem theo giá"
          />
          <ItemSidebar
            isDouble={true}
            content={areas}
            type="areaCode"
            title="Xem theo diện tích"
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
