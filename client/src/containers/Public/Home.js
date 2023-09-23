import React, {useEffect} from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import {Navigation, Search} from "./index";
import {Intro, Contact} from "../../components";
import * as actions from "../../store/action/";
import {useDispatch} from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);
  return (
    <div className="w-full flex gap-6 flex-col items-center h-full border border-red-500">
      <Header />
      <Navigation />
      <Search />
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start mt-3 justify-start">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
