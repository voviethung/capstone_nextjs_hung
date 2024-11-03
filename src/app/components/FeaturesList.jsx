"use client";
import { useRef } from 'react';

const features = [
  {
    icon: '/images/icons/categories.svg',
    title: 'Over 700 categories',
    description: 'Get results from skilled freelancers from all over the world, for every task, at any price point.'
  },
  {
    icon: '/images/icons/handshake.svg',
    title: 'Clear, transparent pricing',
    description: 'Pay per project or by the hour (Pro). Payments only get released when you approve.'
  },
  {
    icon: '/images/icons/lightning.svg',
    title: 'Quality work done faster',
    description: 'Filter to find the right freelancers quickly and get great work delivered in no time, every time.'
  },
  {
    icon: '/images/icons/support.svg',
    title: '24/7 award-winning support',
    description: 'Chat with our team to get your questions answered or resolve any issues with your orders.'
  },
];

export default function FeaturesList() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">A whole world of freelance talent at your fingertips</h1>
      <div className="d-flex align-items-center">

        {/* Features List */}
        <div
          className="d-flex overflow-auto flex-nowrap"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }} // Custom scroll behavior
          ref={scrollRef}
        >
          {features.map((feature, index) => (
            <div key={index} className="card text-center me-3" style={{ minWidth: '250px' }}>
              <img
                src={feature.icon}
                alt={feature.title}
                className="card-img-top p-3"
                style={{ height: '80px', width: '80px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
