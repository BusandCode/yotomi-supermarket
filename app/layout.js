// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}

// 
    

//     export const metadata = {
//       title: 'Page Title',
//       description: 'Page Description',
//     }
    
//     export default function RootLayout({ children }) {
//       return (
//   {/*use classNam not variable*/}
//         <html >
//           <body>{children}</body>
//         </html>
//       )
//     }