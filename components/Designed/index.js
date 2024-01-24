export default function Designed({colorBg}){
    return(
        <>
        
        <div className='designedContainer'>
            <a rel='noreferer' target='_BLANK' href='https://t.me/+rCuh4wnvAeljMjI5'>Made by Smooth Web3</a>
        </div>

        <style jsx>{`
            .designedContainer{
                width: 100%;
                height: 25px;
                background-color: ${colorBg};
                font-family: Arial;
                font-size: 0.85rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgba(0,0,0,0.5);
                cursor: pointer;
            }

            .designedContainer a:hover{
                transition: 0.2s ease-out;
                color: rgba(0,0,0,1);
            }
        `}</style>
        </>
    )
}