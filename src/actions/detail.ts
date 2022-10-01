import axiosClient from "../axios/axiosClient";
import { Novel } from "../models/Novel";

interface IDetailAPI {
  novel: (slug: string) => Promise<Novel>;
}
const DetailAPI: IDetailAPI = {
  novel: async (slug: string) => {
    const result = await axiosClient.get(`/detail/read/${slug}`);
    return result.data;
  },
};

export default DetailAPI;
