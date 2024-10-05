import { useRouter } from "next/router";
import CommonHead from "@/components/CommonHead";
import AppbarWhite from "@/components/AppbarWhite";
import Top from "@/components/Top";
import Profile from "@/components/Profile";
import ImgCard from "../components/ImgItem";
import Footer from "@/components/Footer";

// OGP
const OgpImage =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/OGP-100.jpg?alt=media&token=607b69df-42b7-47fd-b5fe-11b042b6f16f";

export default function Home() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="min-h-screen min-w-screen">
      <CommonHead ogImage={OgpImage} pathname={""} />
      <main className="">
        <AppbarWhite
          className="absolute top-0 left-0 z-1"
          onClick={() => router.push("/")}
        />
        <Top className="relative" title="History and Knowledge" />

        <Profile className="" />
        <div>
          <div className="w-full mt-15 text-center">
            <h2 className="text-2xl my-[5%] text-p1 m:mt-[10%] font-bold font-josefin">
              Portfolio
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-7 w-[75vw] m-auto">
            <a href="https://historia8.org/" target="_blank">
              <ImgCard
                labelStyle={{ color: "#575757" }}
                label="【Web制作】はちのへヒストリア"
                imgUrl="/hachinohe-historia.png"
                alt="はちのへヒストリアのロゴ"
              />
            </a>
            <a href="https://it-feels-it.com/" target="_blank">
              <ImgCard
                labelStyle={{ color: "#575757" }}
                label="【Web制作】it feels it HP"
                imgUrl="/it-feels-it.png"
                alt="it feels itホームページの画像"
              />
            </a>
            <a href="https://quantum-box.com/" target="_blank">
              <ImgCard
                labelStyle={{ color: "#575757" }}
                label="【Web制作】Quantum Box HP"
                imgUrl="/QBox-image.png"
                alt="Quantum Boxホームページの画像"
              />
            </a>
            <a
              href="https://prtimes.jp/main/html/rd/p/000000001.000069392.html"
              target="_blank"
            >
              <ImgCard
                labelStyle={{ color: "#575757" }}
                label="【PRtimes】アレルギーカード"
                imgUrl="/allergy-card-image.png"
                alt="スマホアプリ アレルギーカードのPR"
              />
            </a>
            {/* <VideoCard
              labelStyle={{ color: "#575757" }}
              label="【動画】アレルギーカードとは"
              url="https://www.youtube.com/embed/XFMC9j25pXg"
            /> */}
          </div>
        </div>
        <div>
          <div className="w-full mt-15 text-center">
            <h2 className="text-2xl my-[5%] text-p1 m:mt-[10%] font-bold">
              古地図
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-7 w-[75vw] m-auto">
            <a href="/maps/hachinohe/">
              <ImgCard
                labelStyle={{ color: "#575757" }}
                label="八戸市"
                imgUrl="/ol-hachinohe.png"
                alt="八戸城オーバーレイのサムネイル"
              />
            </a>
            <a href="/maps/kyoto/">
              <ImgCard
                labelStyle={{ color: "#575757" }}
                label="京都"
                imgUrl="/ol-kyoto.png"
                alt="平安京オーバーレイのサムネイル"
              />
            </a>
            <a href="/maps/morioka/">
              <ImgCard
                labelStyle={{ color: "#575757" }}
                label="盛岡"
                imgUrl="/moriokajou.png"
                alt="盛岡城オーバーレイのサムネイル"
              />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
