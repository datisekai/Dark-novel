import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface IShareData {
  Icon: any;
  link: (url: string, title: string) => string;
  name: string;
}

const shareData: IShareData[] = [
  {
    Icon: FacebookIcon,
    link: (url: string, title: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}&t=${title}`,
    name: "Facebook",
  },
  {
    Icon: InstagramIcon,
    link: (url: string, title: string) =>
      `https://www.instagram.com/?url=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    name: "Instagram",
  },
  {
    Icon: LinkedInIcon,
    link: (url: string, title: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
    name: "Linkedin",
  },
  {
    Icon: EmailIcon,
    link: (url: string, title: string) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${url}`,
    name: "Mail",
  },
];

export default shareData;
