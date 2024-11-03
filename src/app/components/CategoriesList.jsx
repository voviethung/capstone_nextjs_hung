"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, {useRef} from 'react'

const categories = [
  { name: 'Graphics & Design', icon: 'images/icons/graphics-design.svg', id: 1 },
  { name: 'Digital Marketing', icon: 'images/icons/digital-marketing.svg', id: 2 },
  { name: 'Writing & Translation', icon: 'images/icons/writing-translation.svg', id: 3 },
  { name: 'Video & Animation', icon: 'images/icons/video-animation.svg', id: 4 },
  { name: 'Music & Audio', icon: 'images/icons/music-audio.svg', id: 5 },
  { name: 'Programming & Tech', icon: '/images/icons/programming-tech.svg', id: 6 },
  { name: 'AI Services', icon: 'images/icons/ai-services.svg', id: 7 },
  { name: 'Business', icon: 'images/icons/business.svg', id: 8 },
  { name: 'Consulting', icon: 'images/icons/consulting.svg', id: 9 }
];

// const [keyword, setKeyword] = useState('');

export default function CategoriesList() {
  const router = useRouter();

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="d-flex align-items-center my-4">
      {/* Left Scroll Button */}
      <button className="btn btn-outline-success me-2" onClick={scrollLeft}>
        &#60; {/* Left Arrow */}
      </button>

      {/* Categories List */}
      <div
        className="d-flex overflow-auto flex-nowrap"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }} // Ẩn thanh cuộn ngang 
        ref={scrollRef}
      >
        {categories.map((category, index) => (
          <div key={index} className="card text-center me-3" style={{ minWidth: '150px' }}>
            <Link href={`/category?id=${category.id}`} className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <img src={category.icon} alt={category.name} className="card-img-top p-2" style={{ height: '50px' }} />
            <div className="card-body">
              <span className="card-text fw-bold">{category.name}</span>
            </div>
            </Link>

            {/* <img src={category.icon} alt={category.name} className="card-img-top p-2" style={{ height: '50px' }} />
            <div className="card-body">
              <span className="card-text fw-bold">{category.name}</span>
            </div> */}
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button className="btn btn-outline-success ms-2" onClick={scrollRight}>
        &#62; {/* Right Arrow */}
      </button>
    </div>
  );
}
