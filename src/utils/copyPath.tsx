import toast from "react-hot-toast";

export const copyToClipboard = (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      return toast.success("Copy liên kết thành công");
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res: any, rej: any) => {
        document.execCommand("copy") ? res() : rej();
        textArea.remove();
        toast.success("Copy liên kết thành công");
      });
    }
  } catch (error) {
    console.error(error);
    return toast.error("Copy liên kết thất bại");
  }
};

export default copyToClipboard;
