import axiosClient from "../axios/axiosClient";
import { ListNovel } from "../models/listNovel";

interface ISearchAPI {
  keyword: (text: string) => Promise<ListNovel[]>;
}

const SearchAPI: ISearchAPI = {
  keyword: async (text: string) => {
    const result = await axiosClient.get(`/search?keyword=${text}`);
    return result.data.data;
  },
};

export default SearchAPI;
