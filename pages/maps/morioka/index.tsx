import React from "react";
import router, { useRouter } from "next/router";
import CommonHead from "@/components/CommonHead";
import AppbarGray from "@/components/AppbarGray";
import OverlayMapMorioka from "@/components/map/OverlayMapMorioka";
import LogoFooter from "@/components/LogoFooter";

// OGP
const Title = "南部領盛岡平城絵図 on Google Map";
const Description =
  "正保元年(1644年)の盛岡城の古地図「南部領盛岡平城絵図」を現代の盛岡市街にオーバーレイしました。";
const OgpImage =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/Overlay.png?alt=media&token=47dd02ee-efb8-438a-9d9c-ccd8d5a9eb9c";

const testLab: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div>
      <CommonHead
        pageTitle={Title}
        pageDescription={Description}
        pathname={path}
        ogImage="moriokajou.png"
      />
      <AppbarGray onClick={() => router.push("/")} />
      <h2
        style={{ padding: "0 20px", textAlign: "center" }}
        className="text-2xl font-bold mb-5"
      >
        南部領盛岡平城絵図 on Google Map
      </h2>
      <OverlayMapMorioka />
      <LogoFooter />
    </div>
  );
};
export default testLab;
