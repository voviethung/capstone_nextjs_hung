"use client";
import { useRef } from 'react';

const services = [
  { name: 'Website Development', image: '/images/services/website-development.png', color: '#006400' },
  { name: 'Logo Design', image: '/images/services/logo-design.png', color: '#FF4500' },
  { name: 'SEO', image: '/images/services/seo.webp', color: '#228B22' },
  { name: 'Architecture & Interior Design', image: '/images/services/architecture-design.webp', color: '#8B0000' },
  { name: 'Social Media Marketing', image: '/images/services/social-media-marketing.webp', color: '#9ACD32' },
  { name: 'Voice Over', image: '/images/services/voice-over.webp', color: '#FF8C00' },
  { name: 'UGC Videos', image: '/images/services/UGC-Video.webp', color: '#C71585' },
  { name: 'Software Development', image: '/images/services/software-development.webp', color: '#32CD32' },
  { name: 'Data Science & ML', image: '/images/services/data-science.webp', color: '#A52A2A' },
  { name: 'Product Photography', image: '/images/services/product-photography.webp', color: '#808000' },
  { name: 'E-Commerce Marketing', image: '/images/services/e-commerce.webp', color: '#006400' },
  { name: 'Video Editing', image: '/images/services/video-editing.webp', color: '#FF69B4' },
];

export default function PopularServices() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="container-fluid py-4">
      <h1 className=" mb-4">Popular Services</h1>
      <div className="d-flex align-items-center">
        {/* Scroll Left Button */}
        <button className="btn btn-outline-success me-3" onClick={scrollLeft}>
          &#60;
        </button>

        {/* Services Container */}
        <div
          className="d-flex overflow-auto flex-nowrap"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }} // Ẩn thanh cuộn ngang
          ref={scrollRef}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="card me-3"
              style={{ minWidth: '200px', backgroundColor: service.color }}
            >
              <div className="card-body">
                <span className="card-text text-white">{service.name}</span>
              </div>
              <img
                src={service.image}
                alt={service.name}
                className="card-img-top p-2"
                style={{ height: '200px' }}
              />
            </div>
          ))}
        </div>

        {/* Scroll Right Button */}
        <button className="btn btn-outline-success ms-3" onClick={scrollRight}>
          &#62;
        </button>
      </div>
    </div>
  );
}
