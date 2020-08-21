import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getColorList = () => {
  return axiosWithAuth()
    .get("/api/colors")
    .then((res) => {
      return res;
      console.log(res);
      //   setColorList(res.data);
    });
};
