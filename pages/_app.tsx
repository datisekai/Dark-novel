import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextNProgress from "nextjs-progressbar";
import { primary } from "../src/theme/color";
import ThemeLayout from "../src/components/Layouts/ThemeLayout";
import { Provider } from "react-redux";
import { store } from "../src/redux";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "tippy.js/dist/tippy.css";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        showOnShallow={true}
        color={primary.main}
        options={{
          showSpinner: false,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeLayout>
            <Component {...pageProps} />
            <Toaster />
          </ThemeLayout>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
