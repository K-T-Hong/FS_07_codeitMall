import Container from "@/components/Container";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";
import Head from "next/head";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head className={notoSansKR.className}>
        <title>CodeitMall</title>
        {/* <link rel="icom" href="/favicon.png"/> */}
      </Head>
      <Header />
      <Container className={notoSansKR.className}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
