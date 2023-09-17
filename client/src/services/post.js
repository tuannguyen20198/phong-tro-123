import axiosConfig from "../axiosConfig";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    const response = await axiosConfig({
      method: "get",
      url: `api/v1/post/all`,
    });
    resolve(response);
    try {
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPostsLimit = (page) =>
  new Promise(async (resolve, reject) => {
    const response = await axiosConfig({
      method: "get",
      url: `api/v1/post/limit?page=${page}`,
    });
    resolve(response);
    try {
    } catch (error) {
      reject(error);
    }
  });