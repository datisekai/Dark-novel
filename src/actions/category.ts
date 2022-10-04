import axiosClient from "../axios/axiosClient";

const CategoryAPI = {
  getCategory: async () => {
    const result = await axiosClient.get("/category");
    return result.data;
  },
};

export default CategoryAPI;
