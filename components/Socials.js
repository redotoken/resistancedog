import Image from "next/image";
import { FaRegNewspaper } from "react-icons/fa6";

export default function Socials({ wTg, hTg, wDx, hDx, wTw, hTw, sizeLt, wBox, hBox }) {
  return (
    <>
      <div className="socialsContainer">
        <a href='https://t.me/redotoken' rel='noreferrer' target="_BLANK">
        <div className="box">
          <Image src="/tg.png" width={wTg} height={hTg} alt="" />
        </div>
        </a>
        <a href='https://www.geckoterminal.com/ton/pools/EQBCwe_IObXA4Mt3RbcHil2s4-v4YQS3wUDt1-DvZOceeMGO' rel='noreferrer' target="_BLANK">
        <div className="box">
          <Image src="/gecko.png" width={wDx} height={hDx} alt="" />
        </div>
        </a>
        <a href='https://x.com/redotoken' rel='noreferrer' target="_BLANK">
        <div className="box">
          <Image src="/x.png" width={wTw} height={hTw} alt="" />
        </div>
        </a>
        <a href='https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:eb50136e-81f2-40ba-b6cd-76db7f0dcd2c' rel='noreferrer' target="_BLANK">
        <div className="box">
          <FaRegNewspaper size={sizeLt} color="black" />
        </div>
        </a>
      </div>

      <style jsx>{`
        .socialsContainer {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
          transition: 0.5s ease-out;
        }

        .socialsContainer .box {
          width: ${wBox}px;
          height: ${hBox}px;
          background-color: #ccc;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .socialsContainer .box:hover {
          margin-top: -10px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
