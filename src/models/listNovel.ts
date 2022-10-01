export interface CurrentChapter {
  name: string;
  slug: string;
}

export interface ListNovel {
  image: string;
  name: string;
  slug: string;
  author: string;
  currentChapter: CurrentChapter;
}
