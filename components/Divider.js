export default function Divider(){
    return(
        <>
        
        <div className='dividerContainer'>
            <div></div>
            <div><span>$REDO</span></div>
            <div></div>
        </div>

        <style jsx>{`
            .dividerContainer{
                width: 100%;
                height: min-content;
                background-color: var(--mainBlack);
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index: 1;
            }

            .dividerContainer div:first-child{
                width: 48%;
                height: 2px;
                background-color: #FAFAFA10;
            }

            .dividerContainer div:nth-child(2) span{
                color: #FAFAFA10;
                font-weight: bold;
                font-family: var(--Row);
            }

            .dividerContainer div:last-child{
                width: 48%;
                height: 2px;
                background-color: #FAFAFA10;
            }


        `}</style>
        </>
    )
}