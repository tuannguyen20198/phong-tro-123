import React, {useEffect} from "react";

import {text} from "../../utils/constant";
import {Province, ItemSidebar} from "../../components";
import {List, Pagination} from "./index";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/action/";

const Homepage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const {categories, prices, areas} = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  return (
    <div className="border border-red-500 w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITILE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List page={params.get("page")} />
          <Pagination page={params.get("page")} />
          <div className="h-[500px]"></div>
        </div>
        <div className="w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center">
          <ItemSidebar content={categories} title={"Danh sách cho thuê"} />
          <ItemSidebar isDouble={true} content={prices} title="Xem theo giá" />
          <ItemSidebar
            isDouble={true}
            content={areas}
            title="Xem theo diện tích"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
