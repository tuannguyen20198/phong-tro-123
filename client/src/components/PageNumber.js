import React, {memo} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
const noActive =
  "w-[46px] h-[48px] flex justify-center items-center bg-white hover:bg-gray-300 rounded-md";
const active =
  "w-[46px] h-[48px] flex justify-center items-center bg-[#E13427] text-white rounded-md";
const PageNumber = ({text, currenPage, icon,setCurrentPage,type}) => {
  const navigate = useNavigate();
  const handleChangePage = () => {
    if (!(text === '...')) {
      setCurrentPage(+text)
      navigate({
        pathname: "/",
        search: createSearchParams({
          page: text,
        }).toString(),
      });
    }
  };

  return (
    <div
      className={+text === +currenPage ? `${active} ${text === '...' ? 'cursor-text':'cursor-pointer'}` : `${noActive} ${text === '...' ? 'cursor-text':'cursor-pointer'}`}
      onClick={() => handleChangePage()}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
