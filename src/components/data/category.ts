export interface ICategoryData {
  title: string;
  href: string;
}
const CategoryData: ICategoryData[] = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Theo dõi",
    href: "/theo-doi",
  },
  {
    title: "Lịch sử",
    href: "/lich-su",
  },
];

export default CategoryData;
