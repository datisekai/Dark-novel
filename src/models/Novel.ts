export interface Category {
  href: string;
  name: string;
}

export interface Chapter {
  href: string;
  name: string;
}

export interface NewChapter {
  href: string;
  name: string;
}

export interface Novel {
  image: string;
  name: string;
  description: string;
  categories: Category[];
  author: string;
  source: string;
  status: string;
  chapters: Chapter[];
  totalPage: string;
  newChapters: NewChapter[] | [];
}
