import React from "react";
import CommonHead from "@/components/CommonHead";
import { useRouter } from "next/router";
import LogoFooter from "@/components/LogoFooter";
import OverlayMapKyoto from "@/components/map/OverlayMapKyoto";
import AppbarGray from "@/components/AppbarGray";

// OGP
const Title = "京都古地図";
const Description = "";
const OgpImage =
  "https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/kyoto.png?alt=media&token=b688df04-fee8-4cae-a631-8f1ed478a329";

const testLabKyoto: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div>
      <CommonHead
        pageTitle={Title}
        pageDescription={Description}
        pathname={path}
        ogImage="ol-kyoto.png"
      />
      <AppbarGray onClick={() => router.push("/")} />
      <OverlayMapKyoto />
      <LogoFooter />
    </div>
  );
};
export default testLabKyoto;
