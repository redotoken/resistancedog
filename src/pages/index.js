import Head from 'next/head';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Home() {
  const router = useRouter();

  const videoRef = useRef(null);

  const playVideo = ()=>{
      const video = videoRef.current;
      video.autoplay = true;
      video.play();
      showHiddenBtn();
  }


  const showHiddenBtn = ()=>{
    const tempBtn = document.getElementById('tempBtn');
    const btnEffect = document.getElementById('btnEffect');
    setTimeout(()=>{
      tempBtn.classList.add('tempBtnShow');
    },6700);
    setTimeout(()=>{
      btnEffect.style.transition = "2s ease-out"
      btnEffect.style.visibility = "visible";
    },7500)
  }


  return (
    <>
      <Head>
        <title>Resistance Dog</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <div className='mainContainer' onClick={()=>{playVideo()}}>
        <div className='tempBtn' id='tempBtn'><div className='btnEffect' id='btnEffect'><button onClick={(e)=>{e.stopPropagation();router.push('/home')}}>Join the Resistance</button></div></div>
        <video ref={videoRef} controls={false}>
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='mainMobile'>
        <div className='tempBtnMobile'><div id='btnEffect'><button onClick={(e)=>{e.stopPropagation();router.push('/home')}}>Join the Resistance</button></div></div>
      </div>
      </Layout>

      <style jsx>{`
      
        .mainContainer{
          width: 100%;
          height: 100vh;
          background-color: black;
        }

        .mainContainer video{
          width: 100%;
          height: 100%;
        }

        .mainMobile{
          visibility: hidden;
        }

        .tempBtn{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 1;
          display: none;
        }

        .tempBtnMobile{
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 1;
          transition: 0.2s ease-out;
          display: block;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
        }

        .btnEffect{
          visibility: hidden;
        }

        .tempBtnShow{
          transition: 0.2s ease-out;
          display: block;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
        }

        .tempBtnShow button{
          cursor: pointer;
          font-family: var(--Row);
        }

        button,button::after {
          padding: 10px 50px;
          font-size: 20px;
          border: none;
          border-radius: 5px;
          color: white;
          background-color: transparent;
          position: relative;
        }

        button::after {
          --move1: inset(50% 50% 50% 50%);
          --move2: inset(31% 0 40% 0);
          --move3: inset(39% 0 15% 0);
          --move4: inset(45% 0 40% 0);
          --move5: inset(45% 0 6% 0);
          --move6: inset(14% 0 61% 0);
          clip-path: var(--move1);
          content: 'Resistance';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: block;
        }

        button:hover::after {
          animation: glitch_4011 1s;
          text-shadow: 10 10px 10px black;
          animation-timing-function: steps(2, end);
          text-shadow: -3px -3px 0px white, 3px 3px 0px #E94BE8;
          background-color: transparent;
          border: 3px solid white;
        }

        button:hover {
          text-shadow: -1px -1px 0px white, 1px 1px 0px #E94BE8;
        }

        button:hover {
          background-color: transparent;
          border: 1px solid white;
          box-shadow: 0px 10px 10px -10px white;
        }

    @keyframes glitch_4011 {
      0% {
        clip-path: var(--move1);
        transform: translate(0px,-10px);
      }

      10% {
        clip-path: var(--move2);
        transform: translate(-10px,10px);
      }

      20% {
        clip-path: var(--move3);
        transform: translate(10px,0px);
      }

      30% {
        clip-path: var(--move4);
        transform: translate(-10px,10px);
      }

      40% {
        clip-path: var(--move5);
        transform: translate(10px,-10px);
      }

      50% {
        clip-path: var(--move6);
        transform: translate(-10px,10px);
      }

      60% {
        clip-path: var(--move1);
        transform: translate(10px,-10px);
      }

      70% {
        clip-path: var(--move3);
        transform: translate(-10px,10px);
      }

      80% {
        clip-path: var(--move2);
        transform: translate(10px,-10px);
      }

      90% {
        clip-path: var(--move4);
        transform: translate(-10px,10px);
      }

      100% {
        clip-path: var(--move1);
        transform: translate(0);
      }
    }

    @media screen and (max-width: 600px){
      .mainContainer{
        display: none;
      }

      .mainMobile{
          visibility: visible;
          width: 100%;
          height: 100vh;
          background-color: black;
      }

    }


      `}</style>
    </>
  )
}
