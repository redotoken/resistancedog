import Image from "next/image";
import { Bounce } from 'react-awesome-reveal';

import Socials from "../../../../../components/Socials";

export default function MainScreen() {
  return (
    <>
      <div className="mainScreen">
      <Bounce duration='600'>
        <div className="logoContainer">
          <Image
            src={"/tokenImages/logo.png"}
            width="450"
            height="300"
            alt=""
          />
        </div>
        <div className="nameMain">
          <span>RESISTANCE DOG</span>
        </div>
        <Socials wTg={35} hTg={35} wDx={33} hDx={35} wTw={45} hTw={45} sizeLt={34} wBox={55} hBox={55}/>
        </Bounce>
        <div className="customShapeDividerTopFirstSection">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shapeFill"
            ></path>
          </svg>
        </div>

      </div>

      <style jsx>{`
        .mainScreen {
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
          margin-top: 50px;
        }

        .nameMain {
          color: white;
          margin-top: 10px;
        }

        .nameMain span {
          font-family: var(--Row);
          font-size: 3rem;
        }

        .logoContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 300px;
          border-radius: 100%;
          background-color: var(--mainBlack);
          outline: solid 2px black;
        }

        .mainScreen .customShapeDividerTopFirstSection {
          position: absolute;
          bottom: -180px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .customShapeDividerTopFirstSection svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 100px;
        }

        .customShapeDividerTopFirstSection .shapeFill {
          fill: var(--mainBlack);
        }

        @media screen and (max-width: 500px) {
          .nameMain span {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
