import Socials from "../../../../../components/Socials";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className='footerTitle'><span>RESISTANCE DOG</span></div>
        <Socials wTg={25} hTg={25} wDx={23} hDx={25} wTw={35} hTw={35} sizeLt={27} wBox={45} hBox={45}/>
        <div className='copy'><span>Copyright ® 2024 Resistance Dog. All Rights Reserved</span></div>
        <div className='gmails'><span>admin@redoton.com</span><div className='separator'></div><span>redoonton@gmai.com</span></div>
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
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          border-top: 1px solid rgba(255,255,255,0.1);
          background-color: black;
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

        .footerTitle{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 120px;
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
