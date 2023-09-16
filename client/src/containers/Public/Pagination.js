import React from "react";
import {useSelector} from "react-redux";
import {PageNumber} from "../../components";
import icons from "../../utils/icons";
const {GrLinkNext} = icons;
const Pagination = () => {
  const {count, posts} = useSelector((state) => state.post);
  const handlePageNumber = () => {
    let max = Math.floor(count / posts.length);
    let arrNumber = [];
    for (let i = 1; i <= max; i++) arrNumber.push(i);

    return arrNumber.length > 3 ? arrNumber.filter((i) => i < 4) : arrNumber;
  };
  console.log(handlePageNumber());
  return (
    <div className="flex items-center cursor-pointer justify-center gap-2 py-5">
      {handlePageNumber().length > 0 &&
        handlePageNumber().map((item) => {
          return <PageNumber key={item} number={item} />;
        })}
      <PageNumber number={"..."} />

      <PageNumber number={<GrLinkNext />} />
    </div>
  );
};

export default Pagination;
