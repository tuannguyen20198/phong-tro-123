import React from "react";

import { text } from "../../utils/constant";
import { Province } from "../../components";
import { List } from "./index";

const Homepage = () => {
  return (
    <div className="border border-red-500 w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITILE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex justify-center items-center gap-4">
        <div className="w-[70%]">
          <List />
        </div>
        <div className="w-[30%] border border-green-500">Sidebar</div>
      </div>
    </div>
  );
};

export default Homepage;
