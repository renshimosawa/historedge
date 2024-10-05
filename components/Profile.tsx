import IconButton from "./IconButton";
import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import Tooltips from "./Tooltips";

export type Props = {
  className?: string;
};

const useFadeInOut = (durationSec: number) => {
  const [display, setDisplay] = useState(false);

  const handleClose = useCallback(() => {
    setDisplay(false);
  }, [setDisplay]);

  const handleOpen = useCallback(() => {
    setDisplay(true);
  }, [setDisplay]);

  const toggleDisplay = useCallback(() => {
    setDisplay(true);
    setTimeout(() => setDisplay(false), 2000);
  }, [setDisplay]);

  const boxStyle = useMemo((): CSSProperties => {
    if (display) {
      return {
        opacity: 1,
        visibility: "visible",
        transition: `opacity ${durationSec}s`,
      };
    }

    return {
      opacity: 0,
      visibility: "hidden",
      transition: `opacity ${durationSec}s, visibility 0s ${durationSec}s`,
    };
  }, [durationSec, display]);

  return { display, handleOpen, handleClose, toggleDisplay, boxStyle };
};

const Profile: React.FC<Props> = ({ className }) => {
  const { toggleDisplay, boxStyle } = useFadeInOut(0.2);

  return (
    <div className={`${className} w-screen mt-[60px]`}>
      <div className="flex text-center text-p1 flex-col justify-center">
        <h2 className="text-3xl font-bold font-josefin mb-3">Ren Shimosawa</h2>
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden m-auto">
          <img
            className="100%"
            src="face-icon.svg"
            alt="Ren Shimosawaのアイコン"
            width={200}
            height={200}
          />
        </div>
        <p className="my-7">フロントエンドエンジニア</p>
        <div className="flex justify-center my-10 m:px-[5vw]">
          <table className="text-left mt-7 mb-5 m:text-[14px]">
            <tbody>
              <tr>
                <td className="h-[70px] align-top pr-5">2020/02～</td>
                <td className="align-top">Youtube動画編集者</td>
              </tr>
              <tr>
                <td className="h-[70px] align-top pr-5">2020/10～</td>
                <td className="align-top">
                  <span className="font-bold">Quantum Box.Inc </span>
                  <br className="m:hidden" />
                  グラフィックデザイナー
                </td>
              </tr>
              <tr>
                <td className="h-[70px] align-top pr-5">2021/01～</td>
                <td className="align-top">
                  <span className="font-bold">Quantum Box.Inc </span>
                  <br className="m:hidden" />
                  フロントエンドエンジニア
                </td>
              </tr>
              <tr>
                <td className="h-[70px] align-top pr-5">2021/10～</td>
                <td className="align-top">
                  <span className="font-bold">freee株式会社 </span>
                  <br className="m:hidden" />
                  フロントエンドエンジニア
                </td>
              </tr>
              <tr>
                <td className="h-[70px] align-top pr-5">2024/1～</td>
                <td className="align-top">
                  <span className="font-bold">はちのへヒストリア </span>
                  <br className="m:hidden" />
                  エンジニア
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center w-[280px] m-auto relative">
          <a
            href="https://www.facebook.com/ren.shimosawa"
            data-tip="Facebookを開く"
            target="_blank"
            className=""
            aria-label="Facebookを開く"
          >
            <IconButton className="w-[28px]" type="facebook" />
          </a>

          <a
            href="https://twitter.com/ren_shimosawa"
            data-tip="Twitterを開く"
            target="_blank"
            className=""
            aria-label="Twitterを開く"
          >
            <IconButton className="w-[28px]" type="twitter" />
          </a>

          <a
            href="https://github.com/renshimosawa"
            data-tip="Githubを開く"
            target="_blank"
            className=""
            aria-label="Githubを開く"
          >
            <IconButton className="w-[28px]" type="github" />
          </a>

          <a
            href="https://zenn.dev/renshimosawa"
            data-tip="Zennを開く"
            target="_blank"
            className=""
            aria-label="Zennを開く"
          >
            <IconButton className="w-[28px]" type="zenn" />
          </a>
        </div>
        {/* <ReactTooltip border={true} arrowColor="none" place="bottom" effect="solid" type="info" /> */}
        <Tooltips
          label="メールアドレスをコピーしました"
          className="absolute left-[48%]"
          style={boxStyle}
        />
      </div>
    </div>
  );
};

export default Profile;
