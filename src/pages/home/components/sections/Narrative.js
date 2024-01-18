import Image from "next/image";
import { Slide } from "react-awesome-reveal";

export default function Narrative() {
  return (
    <>
      <div className="narrativeSection">
        <Slide direction="up" duration="300">
          <div className="title" data-aos="zoom-in">
            OUR VISION
          </div>
        </Slide>
        <div className="narrativeContent">
          <Slide direction="left" duration="300">
            <div>
              <Image width="300" height="300" src="/stickers/animated1.gif" alt="" />
            </div>
          </Slide>
          <div className="descContainer">
            <Slide direction="left" duration="300">
              <span>{`A homage to the creation of Pavel Durov, founder of Ton - The Open Network and Telegram, Resistance Dog ($REDO), is a symbolic represtentation of our fight against censorship and freedom through digital resistance. Created in 2018 by Durov, our logo is the (un)official mascot of Telegram, and is at the forefront of Telegram’s consistent efforts to battle censorship by governments and multinational companies trying to restrict the ability of people to express themselves freely in digital media.
          `}</span>
            </Slide>
          </div>
        </div>
        <div className="growContent">
          <div className="descContainer desc2">
            <Slide direction="right" duration="300">
              <span>{`
              $REDO intends to create, and has begun creating a robust decentralised community that is at the forefront of the battle for digital resistance, with Ton - The Open Network, Telegram and the millions of individuals fighting for the same cause. 
          `}</span>
              <span>
                {`
            $REDO is determined to maximise growth and adoption of TON - THE OPEN NETWORK, by integrating, through its community and memes, masses of like-minded individuals, aligned in their beliefs, while creating opportunities to build on TON - THE OPEN NETWORK.
            `}
              </span>
            </Slide>
          </div>
          <Slide direction="right" duration="300">
            <div>
              <Image width="300" height="300" src="/stickers/animated2.gif" alt="" />
            </div>
          </Slide>
        </div>
      </div>

      <style jsx>{`
        .narrativeSection {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: var(--mainBlack);
          padding-bottom: 50px;
        }
        
        .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--mainCyan);
          margin-top: 55px;
          margin-bottom: -50px;
          font-family: var(--Row);
        }

        .narrativeContent,
        .growContent {
          width: 50%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 70px;
          gap: 30px;
          position: relative;
        }

        .narrativeContent div:last-child,
        .growContent div:first-child {
          width: 50%;
          text-align: center;
        }

        .narrativeContent div:last-child span,
        .growContent div:first-child span {
          color: #ddd;
          letter-spacing: 1px;
          font-family: var(--Row);
          font-size: 1.08rem;
        }

        .desc2{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-direction: column;
        }

        @media sscreen and (max-width: 1500px){
          .narrativeSection{
            gap: 50px;
          }
        }

        @media screen and (max-width: 1200px) {
          .narrativeContent {
            flex-direction: column;
            gap: 20px;
          }

          .growContent {
            flex-direction: column-reverse;
            gap: 20px;
          }
        }

        @media screen and (max-width: 800px) {
          .narrativeContent div:last-child,
          .growContent div:first-child {
            width: 80%;
          }

          .narrativeContent,
          .growContent {
            width: 80%;
          }
        }

        @media screen and (max-width: 500px) {
          .narrativeContent div:last-child,
          .growContent div:first-child {
            width: 100%;
          }

          .title{
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
