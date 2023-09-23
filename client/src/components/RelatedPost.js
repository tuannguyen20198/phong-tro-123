import React, {useEffect} from "react";
import {Sitem} from "./index";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../store/action";
import moment from "moment";
const RelatedPost = () => {
  const {newPosts} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getNewPosts());
  }, []);
  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">Tin mới đăng</h3>
      <div className="w-full flex flex-col gap-2">
        {newPosts.length > 0 &&
          newPosts.map((item, index) => {
            return (
              <Sitem
                key={item.id}
                title={item.title}
                alt={item.title}
                price={item.attributes?.price}
                createdAt={moment(item.createdAt, "YYYYMMDD").fromNow()}
                image={JSON.parse(item?.images?.image)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RelatedPost;
