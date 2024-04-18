import Image from 'next/image';
import Socials from "../../../../../components/Socials";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className='footerImg'><Image src='/cimg.png' alt='' fill='responsive'/></div>
        <div className='alignContent'>
          <div className='footerTitle'><span>RESISTANCE DOG</span></div>
          <Socials wTg={25} hTg={25} wDx={23} hDx={25} wTw={35} hTw={35} sizeLt={27} wBox={45} hBox={45}/>
          <div className='copy'><span>Copyright ® 2024 Resistance Dog. All Rights Reserved</span></div>
          <div className='gmails'><span>admin@redoton.com</span></div>
        </div>
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
        .footerContainer {
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          background-color: rgba(0,0,0,0.1);
          position: relative;
          text-align: center;
        }

        .customShapeDividerTopFirstSection {
          position: absolute;
          top: 0;
          left: -10px;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(0deg);
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

        .alignContent{
          display: flex;
          flex-direction: column;
          z-index: 1;
        }
        
        .footerTitle{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 170px;
        }

        .footerTitle span{
            font-family: var(--Row);
            font-size: 3rem;
            color: white;
        }

        .copy{
            font-family: Arial;
            color: white;
            margin-top: 20px;
            font-size: 0.85rem;
        }

        .gmails{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
            font-family: Arial;
            font-size: 0.85rem;
            color: var(--mainCyan);
        }

        .gmails .separator{
            width: 1px;
            height: 10px;
            background-color: var(--mainCyan);
        }

        .footerImg{
          width: 600px;
          height: 350px;
          position: absolute;
          opacity: 0.3;
          top: -7px;
          margin: auto;
          margin-right: 15px;
        }

        @media screen and (max-width: 500px){
            .footerTitle{
                margin-top: 130px;
            }
            .footerTitle span{
                font-size: 2rem;
            }
        }
      `}</style>
    </>
  );
}
