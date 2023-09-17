import React, {useEffect,useRef} from "react";
import {Button, Item} from "../../components";
import {getPosts, getPostsLimit} from "../../store/action/post";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "./index";
const List = ({page}) => {
  const {posts} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const listRef = useRef()
    useEffect(() => {
      let offset = page ? + page - 1 : 0
    dispatch(getPostsLimit(offset));

  }, [page]);
  console.log(page)
  return (
    <div  className="w-full p-2 bg-white shadow-md rounded-md px-6">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 12:05 25/08/2022</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor="bg-gray-200" text="Măt định" />
        <Button bgColor="bg-gray-200" text="Mới nhất" />
      </div>
      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
