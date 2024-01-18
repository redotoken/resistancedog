import CardHtb from "../CardHtb";
import { Slide } from "react-awesome-reveal";

export default function HtbSection() {
  return (
    <>
      <div className="htbSection">
      <Slide direction="up" duration="300">  
        <div className="title_htb">
          <span>HOW TO BUY</span>
        </div>
      </Slide>
        <div className="cardsContainer">

          <CardHtb
            imagePath={"/stickers/1.webp"}
            frontTitle={"1"}
            infoDisplay={'1'}
            backTitle={"Tonkeeper"}
          />
          <CardHtb
            imagePath={"/stickers/2.webp"}
            frontTitle={"2"}
            infoDisplay={'2'}
            backTitle={"Bridge"}
          />
          <CardHtb
            imagePath={"/stickers/3.png"}
            frontTitle={"3"}
            infoDisplay={'3'}
            backTitle={"Buy on DEX"}
          />
        </div>
      </div>

      <style jsx>{`
        .htbSection {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          background-color: var(--mainBlack);
          margin-top: 180px;
        }

        .title_htb {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: -40px;
          z-index: 1;
        }

        .title_htb span {
          font-weight: bold;
          font-size: 3rem;
          color: #0088cc;
          font-family: var(--Row);
          color: var(--mainCyan);
        }

        .cardsContainer {
          width: 100%;
          min-height: 400px;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;
        }

        @media screen and (max-width: 750px) {
          .cardsContainer{
            margin-top: 30px;
            margin-bottom: 30px;
            flex-direction: column;
          }
        }

        @media screen and (max-width: 500px) {
          .title_htb span {
            font-size: 2rem;
          }

          .title_htb{
            margin-top: -20px;
          }
        }
      `}</style>
    </>
  );
}
