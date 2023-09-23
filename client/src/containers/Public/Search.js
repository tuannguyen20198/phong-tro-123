import React, {useState} from "react";
import {SearchItem, Modal} from "../../components";
import icons from "../../utils/icons";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {useSelector} from "react-redux";
const {
  BsChevronRight,
  MdOutlineHouseSiding,
  RiCrop2Line,
  TbReportMoney,
  FiSearch,
} = icons;

const Search = () => {
  const [isShowodal, setIsShowodal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");

  const {provinces, areas, prices, categories} = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content, name) => {
    setContent(content);
    setName(name);
    setIsShowodal(true);
  };

  return (
    <>
      <div className="p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal(categories, "category")}
        >
          <SearchItem
            fontWeight
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text="Phòng trọ, nhà trọ"
          />
        </span>
        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal(provinces, "provinces")}
        >
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text="Toàn quốc"
          />
        </span>
        <span onClick={() => handleShowModal(prices, "prices")}>
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text="Chọn giá"
          />
        </span>
        <span
          className="flex-1 cursor-pointer"
          onClick={() => handleShowModal(areas, "areas")}
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156,163,175)" />}
            text="Chọn diện tích"
          />
        </span>
        <button
          type="button"
          className="outline-none py-2 px-4 flex-1 bg-secondary1 text-white rounded-md text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowodal && (
        <Modal content={content} name={name} setIsShowodal={setIsShowodal} />
      )}
    </>
  );
};

export default Search;
