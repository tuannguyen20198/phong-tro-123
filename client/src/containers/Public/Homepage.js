import React from "react";
import { Search } from "./index";
import { text } from "../../utils/constant";
const Homepage = () => {
  return (
    <div className="border border-red-500 w-full flex flex-col gap-3">
      <Search />
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITILE}</h1>
        <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default Homepage;
