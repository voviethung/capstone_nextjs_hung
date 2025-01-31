import localFont from "next/font/local";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from "next/head";
import { Roboto, Inter } from 'next/font/google';
import Footer from "./components/Footer";
// import './styles/scss/main.scss';
// import HeaderHome from "./components/HeaderHome";
// import Footer from "./components/Footer";

//Tạo ra đối tượng font từ thư viện google font được tích hợp sẵn trong nextjs
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700'] });
// const inter = Inter({subsets:['latin'],weight:['300','400','700']});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
        <link rel="canonical" href="https://shoesshopbc70.vercel.app" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
       
      </head>
      <body className={`${roboto.className}`}>
        {/* <HeaderHome /> */}
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
