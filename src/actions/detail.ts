import axiosClient from "../axios/axiosClient";
import { Chapter } from "../models/Chapter";
import { Novel } from "../models/Novel";
import { readText } from "../models/readText";

interface IDetailAPI {
  novel: (slug: string) => Promise<Novel>;
  read: (id: string) => Promise<readText>;
  chapter: (id: string) => Promise<Chapter[]>;
}
const DetailAPI: IDetailAPI = {
  novel: async (slug: string) => {
    const result = await axiosClient.get(`/detail/read/${slug}`);
    return result.data;
  },
  read: async (id: string) => {
    const result = await axiosClient.get(`/detail?id=${id}`);
    return result.data;
  },
  chapter: async (id: string) => {
    const result = await axiosClient.get(`/detail/chapter?id=${id}`);
    return result.data;
  },
};

export default DetailAPI;
