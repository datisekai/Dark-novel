import { UpComingNovel } from "./../models/upComingNovel";
import axiosClient from "../axios/axiosClient";
import HotNovel from "../models/hotNovel";
import { DoneNovel } from "../models/doneNovel";

interface IHomeAPI {
  hot: () => Promise<HotNovel[]>;
  upComing: () => Promise<UpComingNovel[]>;
  done: () => Promise<DoneNovel[]>;
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
};

export default HomeAPI;
