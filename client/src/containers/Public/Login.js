import React, { useEffect, useState } from "react";
import { Button, InputForm } from "../../components";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { apiRegister } from "../../services/auth";
import * as actions from "../../store/action";
import { useDispatch } from "react-redux";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payLoad, setPayLoad] = useState({
    phone: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  const handleSubmit = async () => {
    await dispatch(actions.register(payLoad));
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            label={"HỌ TÊN"}
            value={payLoad.name}
            setValue={setPayLoad}
            type={"name"}
          />
        )}
        <InputForm
          label={"SỐ ĐIỆN THOẠI"}
          value={payLoad.phone}
          setValue={setPayLoad}
          type={"phone"}
        />
        <InputForm
          label={"MẬT KHẨU"}
          value={payLoad.password}
          setValue={setPayLoad}
          type={"password"}
        />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex justify-between">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản ?{" "}
            <span
              onClick={() => {
                setIsRegister(false);
              }}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </small>
            <small
              onClick={() => {
                setIsRegister(true);
              }}
              className="text-[blue] hover:text-[red] cursor-pointer"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
