import { UpComingNovel } from "./../models/upComingNovel";
import axiosClient from "../axios/axiosClient";
import HotNovel from "../models/hotNovel";
import { DoneNovel } from "../models/doneNovel";
import { ListNovel } from "../models/listNovel";

const list = [
  "tien-hiep-hay",
  "kiem-hiep-hay",
  "truyen-teen-hay",
  "ngon-tinh-hay",
  "ngon-tinh-sac",
];

interface IHomeAPI {
  hot: () => Promise<HotNovel[]>;
  upComing: () => Promise<UpComingNovel[]>;
  done: () => Promise<DoneNovel[]>;
  list: (slug: string) => Promise<ListNovel[]>;
}

const HomeAPI: IHomeAPI = {
  hot: async () => {
    const result = await axiosClient.get("/home/hot");
    return result.data;
  },
  upComing: async () => {
    const result = await axiosClient.get("/home/moi-cap-nhat");
    return result.data;
  },
  done: async () => {
    const result = await axiosClient.get("/home/da-hoan-thanh");
    return result.data;
  },
  list: async (slug: string) => {
    const result = await axiosClient.get(`/home/danh-sach/${slug}`);
    return result.data;
  },
};

export default HomeAPI;
