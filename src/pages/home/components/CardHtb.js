import Image from 'next/image';

export default function CardHtb({mid, imagePath, backTitle, frontTitle, infoDisplay}) {

  const TONADRESS = "EQBZ_cafPyDr5KUTs0aNxh0ZTDhkpEZONmLJA2SNGlLm4Cko"

  const copyToClipboard = () => {
    const element = document.createElement('textarea');
    element.value = TONADRESS;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    alert('Copied');
  };


  return (
    <>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="backContent">
              <Image src={imagePath} width='150' height='150' alt=""/>
              <strong>{frontTitle}</strong>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>

            <div className="frontContent">
              <div className='boxSteps'>
                {infoDisplay == '1' 
                ? <div className='cardBack'>
                    <div className='imgHtb'><Image src='/htb/1.png' width='140' height='140' alt=''/></div>
                    <div className='titleBack'><span>{backTitle}</span></div>
                    <div className='descBack'><span>To swap our token, first download the Tonkeeper wallet</span></div>
                    <a target='_BLANK' href='https://tonkeeper.com/' id='htb1A' rel='noreferrer'>Click here</a>
                  </div>
                : infoDisplay == '2'
                ? <div className='cardBack'>
                    <div className='imgHtb'><Image src='/htb/2new.png' width='140' height='130' alt=''/></div>
                    <div className='titleBack2'><span>{backTitle}</span></div>
                    <div className='descBack'><span>Bridge from any chain to TON Network. Use <a target='_BLANK' href='https://app.rocketx.exchange/swap' rel='noreferrer'>RocketX</a>, <a target='_BLANK' href='https://fixedfloat.com/' rel='noreferrer'>FixedFloat</a> or a CEX.</span></div>
                  </div> 
                : <div className='cardBack'>
                    <div className='imgHtb'><Image src='/htb/3.png' width='140' height='140' alt=''/></div>
                    <div className='titleBack3'><span>{backTitle}</span></div>
                    <div className='descBack'><span>Swap TON for $REDO on. Use <a target='_BLANK' href='https://app.ston.fi/swap' rel='noreferrer'>STON.fi</a> using our Contract Address.</span></div>
                    <a id='htb2A' onClick={()=>{copyToClipboard()}}>Copy CA</a>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          overflow: visible;
          width: 190px;
          height: 254px;
          margin-top: ${mid ? '-30px' : '0px'};
          font-family: Arial;
        }

        a{
          text-decoration: underline;
          cursor: pointer;
        }

        .content {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 300ms;
          box-shadow: 0px 0px 10px 1px #000000ee;
          border-radius: 5px;
        }

        .front,
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

        .backContent strong{
          border-radius: 100%;
          background-color: var(--mainCyan);
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .card:hover .content {
          transform: rotateY(180deg);
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

        .front .frontContent {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .title {
          font-size: 11px;
          max-width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .title p {
          width: 50%;
        }

        .cardFooter {
          color: #ffffff88;
          margin-top: 5px;
          font-size: 8px;
        }

        .front .img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: #2E4392;
          position: relative;
          filter: blur(15px);
          animation: floating 2600ms infinite linear;
        }

        #bottom {
          background-color: #2E4392;
          left: 50px;
          top: 0px;
          width: 150px;
          height: 150px;
          animation-delay: -800ms;
        }

        #right {
          background-color: #2E4392;
          left: 160px;
          top: -80px;
          width: 30px;
          height: 30px;
          animation-delay: -1800ms;
        }

        .boxSteps{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          position: relative;
        }

        .cardBack{
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
        }

        .cardBack .imgHtb{
          margin-top: -15px;
          margin-left: -10px;
        }

        .cardBack .imgHtb3{
          margin-top: -20px;
        }

        .cardBack .titleBack{
          margin-top: -20px;
          font-weight: bold;
          font-size: 1.1rem;
          font-family: var(--Row);
          padding: 5px;
        }

        .cardBack .descBack{
          margin-top: 5px;
          text-align: center;
          font-family: Arial;
          color: white;
          font-size: 0.85rem;
          font-weight: bold;
        }

        .cardBack .titleBack2{
          font-weight: bold;
          font-size: 1.1rem;
          font-family: var(--Row);
          margin-top: -7px;
        }

        .cardBack .titleBack3{
          font-weight: bold;
          font-size: 1.1rem;
          font-family: var(--Row);
          margin-top: -15px;
        }


        #htb1A{
          margin-top: 7px;
          text-decoration: underline;
          cursor: pointer;
        }

        #htb2A{
          margin-top: 10px;
          text-decoration: underline;
          cursor: pointer;
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
      `}</style>
    </>
  );
}
