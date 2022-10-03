import { UpComingNovel } from "./../models/upComingNovel";
import axiosClient from "../axios/axiosClient";
import HotNovel from "../models/hotNovel";
import { DoneNovel } from "../models/doneNovel";
import { ListNovel, ReturnListNovel } from "../models/listNovel";

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
  list: ({ slug, pageParam }: any) => Promise<ReturnListNovel>;
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
  list: async ({ slug, pageParam = 1 }: any) => {
    const result = await axiosClient.get(
      `/home/danh-sach/${slug}?page=${pageParam}`
    );
    return result.data;
  },
};

export default HomeAPI;
