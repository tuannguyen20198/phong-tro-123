import React from "react";
import {useSelector} from "react-redux";
import anonAvatar from "../assets/anon-avatar.png"
import { blobToBase64 } from "../utils/Common/tobase64";

const User = () => {
  const {currentData} = useSelector((state) => state.user);

  return (
    <div className="flex items-center gap-2">
      <img src={blobToBase64(currentData?.avatar) || anonAvatar} alt="avatar" className="w-10 object-cover rounded-full h-10 border-2 shadow-md border-white"/>
      <div className="flex flex-col justify-center">
        <span>
          Xin chào,
          <span className="font-semibold">{currentData?.name}</span>
        </span>
        <span>
          Mã tài khoản:
          <span className="font-semibold">{`${currentData?.id?.slice(0,20)}...`}</span>
        </span>
      </div>
    </div>
  );
};

export default User;
