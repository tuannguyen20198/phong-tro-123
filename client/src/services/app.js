import axiosConfig from "../axiosConfig";

export const apiGetPrices = () =>
  new Promise(async (resolve, reject) => {
    const response = await axiosConfig({
      method: "get",
      url: `api/v1/price/all`,
    });
    resolve(response);
    try {
    } catch (error) {
      reject(error);
    }
  });
