import { Rowdies, Nunito } from 'next/font/google';

const row = Nunito({
    weight: '800',
    subsets: ['latin'],
    variable: '--Row'
  });


export default function Layout({children}){
    

    return(
        <>
        
        <main className={row.variable}>
            {children}
        </main>
        
        <style jsx>{`
        
        main{
            width: 100%;
            height: min-content;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
        }
        
        `}</style>
        </>
    )
}