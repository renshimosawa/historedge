import React from "react";
import { useRouter } from "next/router";
import CommonHead from "@/components/CommonHead";
import AppbarGray from "@/components/AppbarGray";
import OverlayMap from "@/components/map/OverlayMap";
import LogoFooter from "@/components/LogoFooter";

// OGP
const Title = "文久改正八戸御城下略図 on Google Map";
const Description =
  "幕末(1862年くらい)の八戸城の古地図「文久改正八戸御城下略図」を現代の八戸市街にオーバーレイしました。";
const OgpImage =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/Overlay.png?alt=media&token=47dd02ee-efb8-438a-9d9c-ccd8d5a9eb9c";

const index = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div>
      <CommonHead
        pageTitle={Title}
        pageDescription={Description}
        pathname={path}
        ogImage="ol-hachinohe.png"
      />
      <AppbarGray onClick={() => router.push("/")} />
      <h2 className="p-5 text-center text-2xl font-bold">
        文久改正八戸御城下略図 on Google Map
      </h2>
      <OverlayMap />
      <LogoFooter />
    </div>
  );
};

export default index;
