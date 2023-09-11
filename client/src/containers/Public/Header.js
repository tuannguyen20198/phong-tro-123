import React, { useCallback } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/action/auth";
import { path } from "../../utils/constant";
const { AiOutlinePlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  return (
    <div className="w-3/5">
      <div className="w-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          <small>Tên !</small>
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <Button
                text={"Đăng nhập"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              />
              <Button
                text={"Đăng ký"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              />
              <Button
                text={"Đăng tin mới"}
                textColor="text-white"
                bgColor="bg-secondary2"
                IcAfter={AiOutlinePlusCircle}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-1">
              <Button
                text={"Đăng xuất"}
                textColor="text-white"
                bgColor="bg-secondary1"
                onClick={() => dispatch(action.logout())}
              />
              <Button
                text={"Đăng tin mới"}
                textColor="text-white"
                bgColor="bg-secondary2"
                IcAfter={AiOutlinePlusCircle}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
