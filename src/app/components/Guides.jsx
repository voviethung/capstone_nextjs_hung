"use client"
import { useRef } from 'react';
const guides = [
  { title: 'Start a side business', image: '/images/guides/side-hustle.webp' },
  { title: 'Ecommerce business Ideas', image: '/images/guides/e-commerce.webp' },
  { title: 'Start an online business and work from home', image: '/images/guides/online-business.webp' },
  { title: 'Start a side business', image: '/images/guides/side-hustle.webp' },
  { title: 'Start a side business', image: '/images/guides/side-hustle.webp' },
  { title: 'Start a side business', image: '/images/guides/side-hustle.webp' },
  { title: 'Start a side business', image: '/images/guides/side-hustle.webp' },
  { title: 'Start a side business', image: '/images/guides/side-hustle.webp' },
];

export default function Guides() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="container-fluid py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Guides to help you grow</h1>
        <a href="#" className="text-muted">See more</a>
      </div>

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
          {guides.map((guide, index) => (
            <div
              key={index}
              className="card me-3 col-md-4"
              style={{ minWidth: '200px' }}
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="card-img-top "
                style={{ height: '300px' }}
              />
              <div className="card-body">
                <span className="card-text text-dark fw-bold fs-5">{guide.title}</span>
              </div>
              
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
