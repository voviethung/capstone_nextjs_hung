import Image from "next/image";
import styles from "./page.module.css";
import { getAllProductAction } from "./actions/service/productApi";
import Link from "next/link";
import CategoryMenu from "./components/CategoryMenu";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoriesList from "./components/CategoriesList";
import PopularServices from "./components/PopularServices";
import FeaturesList from "./components/FeaturesList";
import VideoPlayer from "./components/VideoPlayer";
import ProjectManagementPromotion from "./components/ProjectManagementPromotion";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ServicePromotions from "./components/ServicePromotions";
import MasonryGallery from "./components/MasonryGallery";
import Carrousel from "./components/Carrousel";
import Guides from "./components/Guides";



// export const metadata = {
//   title: "Shoes App - Home",
//   description: "Explore our wide range of shoes with the best prices and quality.",
//   openGraph: {
//     title: "Shoes App - Home",
//     description: "Explore our wide range of shoes with the best prices and quality.",
//     url: "https://shoesshopbc70.vercel.app",
//     images: [
//       {
//         url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
//         width: 800,
//         height: 600,
//         alt: "Shoes App",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Shoes App - Home",
//     description: "Explore our wide range of shoes with the best prices and quality.",
//     images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
//   },
//   jsonLd:{
//     "@context": "https://schema.org",
//     "@type": "Store",
//     "name": "Shoes App",
//     "url": "https://yourwebsite.com",
//     "description": "Explore our wide range of shoes with the best prices and quality.",
//     "image": "https://yourwebsite.com/images/og-image.jpg",
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": "https://yourwebsite.com/search?q={search_term_string}",
//       "query-input": "required name=search_term_string"
//     }
//   }
// }



//server component 
const Home = async () => {
  const data = await getAllProductAction();
  return (
    <div className={styles.homepage}>
      <Navbar />
      <CategoryMenu />
      <Carrousel />
      <CategoriesList />
      <PopularServices />
      <FeaturesList />
      <VideoPlayer />
      <ProjectManagementPromotion />
      <TestimonialsCarousel />
      <ServicePromotions />
      <MasonryGallery />
      <Guides />

      <div className="container text-white text-center mb-5 py-5" style={{ backgroundColor: '#4d1727', borderRadius: '0.5rem' }}>
        <h1 className="display-4">
          Freelance services at your <span className="text-warning">fingertips!</span>
        </h1>
        <button className="btn btn-light mt-4 fs-5">
          Join Fiverr
        </button>
      </div>

    </div>






  )
}
export default Home
