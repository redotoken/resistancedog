import {
  FaBalanceScale,
  FaFire,
  FaHandshake,
  FaPercentage,
} from "react-icons/fa";
import { Slide, Bounce } from "react-awesome-reveal";

export default function Tokenomics() {
  return (
    <>
      <div className="tknContainer">
        <Slide direction="up" duration="300">
          <div className="title" data-aos="zoom-in">
            TOKENOMICS
          </div>
        </Slide>

        <div className="boxsContainer">
          <div className="boxContainer">
            <Bounce duration="600">
              <div className="card">
                <div className="content">
                  <div className="back">
                    <div className="backContent">
                      <FaBalanceScale size="60" color="white" />
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Bounce>
            <div className="titleBox">Total Supply</div>
            <div className="desc">100,000,000</div>
          </div>
          <div className="boxContainer">
            <Bounce duration="600">
              <div className="card">
                <div className="content">
                  <div className="back">
                    <div className="backContent">
                      <FaFire size="60" color="white" />
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Bounce>
            <div className="titleBox">LP Burned</div>
            <div className="desc">{`Community is capable of adding liquidity`}</div>
          </div>
          <div className="boxContainer">
            <Bounce duration="600">
              <div className="card">
                <div className="content">
                  <div className="back">
                    <div className="backContent">
                      <FaPercentage size="60" color="white" />
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Bounce>
            <div className="titleBox">Taxes</div>
            <div className="desc">0/0</div>
          </div>
          <div className="boxContainer">
            <Bounce duration="600">
              <div className="card">
                <div className="content">
                  <div className="back">
                    <div className="backContent">
                      <FaHandshake size="60" color="white" />
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Bounce>
            <div className="titleBox">Contract</div>
            <div className="desc">Renounced</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tknContainer {
          width: 100%;
          height: min-content;
          background-color: var(--mainBlack);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          font-family: var(--Row);
          padding-bottom: 80px;
        }

        .tknContainer .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--mainCyan);
          margin-top: 55px;
        }

        .boxsContainer {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: 70px;
          gap: 80px;
        }

        .boxsContainer .boxContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
        }

        .card {
          overflow: visible;
          width: 130px;
          height: 130px;
          font-family: Arial;
        }

        .content {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 300ms;
          box-shadow: 0px 0px 10px 1px #000000ee;
          border-radius: 10px;
        }

        .back {
          background-color: #151515;
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 5px;
          overflow: hidden;
        }

        .back {
          width: 100%;
          height: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .back::before {
          position: absolute;
          content: " ";
          display: block;
          width: 160px;
          height: 160%;
          background: linear-gradient(
            90deg,
            transparent,
            var(--mainCyan),
            var(--mainCyan),
            var(--mainCyan),
            var(--mainCyan),
            transparent
          );
          animation: rotation_481 5000ms infinite linear;
        }

        .backContent {
          position: absolute;
          width: 99%;
          height: 99%;
          background-color: #151515;
          border-radius: 5px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
        }

        .backContent strong {
          border-radius: 100%;
          background-color: var(--mainCyan);
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        @keyframes rotation_481 {
          0% {
            transform: rotateZ(0deg);
          }

          0% {
            transform: rotateZ(360deg);
          }
        }

        .front {
          transform: rotateY(180deg);
          color: white;
        }

        .boxContainer .titleBox {
          color: var(--mainCyan);
          margin-top: 8px;
        }

        .boxContainer .desc {
          font-size: 0.7rem;
          color: white;
          width: 120px;
          height: min-content;
          text-align: center;
          margin-top: -7px;
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(10px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(-10vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @media screen and (max-width: 850px) {
          .boxsContainer {
            flex-wrap: wrap;
            align-content: flex-start;
            gap: 50px;
          }
        }

        @media screen and (max-width: 500px){
          .tknContainer .title{
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
