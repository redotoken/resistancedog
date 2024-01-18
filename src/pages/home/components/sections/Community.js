import { Slide } from "react-awesome-reveal"
import Image from 'next/image';

export default function Community(){
    return(
        <>
        
        <div className='communityContainer'>
            <Slide direction="up" duration="300">
            <div className="title" data-aos="zoom-in">
                JOIN THE RESISTANCE
            </div>
            <div className='cimg'><Image src='/resistanceDog.png' fill='responsive' alt=''/></div>
            <div className='descCommunity'><span>{`By aligning itself with the fundamentals of a balanced society brought together by a common objective, $REDO has created a holistic community - one that unapologetically voices its opinions while borrowing from Pavel Durov’s vision to overthrow regime, with the help of memes. $REDO is intent to prove that decentralisation, memes and decensorship can propel a community on TON - THE OPEN NETWORK to reach new heights, similar to flagship tokens on other blockchains.`}</span></div>
            </Slide>
        </div>

        <style jsx>{`

        .communityContainer {
          width: 100%;
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          background-color: var(--mainBlack);
          padding-bottom: 70px;
        }
        
        .title {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--mainCyan);
          font-family: var(--Row);
          margin-top: 50px;
          margin-bottom: 40px;
        }

        .cimg{
            width: 550px;
            height: 300px;
        }

        .descCommunity{
            height: min-content;
            margin-top: 15px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .descCommunity span{
            color: white;
            font-family: var(--Row);
            width: 30%;
            letter-spacing: 1px;
            font-size: 1.08rem;
        }

        @media screen and (max-width: 1600px){
            .descCommunity span{
                width: 50%;
            }
        }

        @media screen and (max-width: 800px){
            .descCommunity span{
                width: 70%;
            }
        }

        @media screen and (max-width: 500px){
            .title{
                font-size: 2rem;
                text-align: center;
            }

            .descCommunity span{
                width: 90%;
            }

            .cimg{
                width: 300px;
                height: 150px;
            }
        }
        
        `}</style>
        </>
    )
}