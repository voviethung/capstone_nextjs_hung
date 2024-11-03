"use client";
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Caitlin Tormey',
    title: 'Chief Commercial Officer',
    company: 'NAADAM',
    quote: "We've used this service for web development, graphic design, and backend web development. It makes my job a little easier every day.",
    video: '/videos/testimonial1.mp4'
  },
  {
    name: 'Brighid Gannon (DNP, PMHNP-BC)',
    title: 'Co-Founder',
    company: 'Lavender',
    quote: "We used this service for SEO, logo, website, copy, animated videos—literally everything. It was like working with a human right next to you.",
    video: '/videos/testimonial2.mp4'
  },
  {
    name: 'Kay Kim',
    title: 'Co-Founder',
    company: 'rooted',
    quote: "It's extremely exciting that this service has freelancers from all over the world—it broadens the talent pool. One of the best things is that while we're sleeping, someone’s working.",
    video: '/videos/testimonial3.mp4'
  },
  {
    name: 'Tim and Dan Joo',
    title: 'Co-Founder',
    company: 'HAERFAST',
    quote: "It's extremely exciting that this service has freelancers from all over the world—it broadens the talent pool. One of the best things is that while we're sleeping, someone’s working.",
    video: '/videos/testimonial4.mp4'
  },
];

export default function TestimonialsCarousel() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">What they're saying about Fiverr</h1>
      
      <div id="testimonialCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="row align-items-center">
                
                {/* Video Section */}
                <div className="col-md-6 d-flex justify-content-center">
                  <video width="100%" height="auto" controls>
                    <source src={testimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Testimonial Text Section */}
                <div className="col-md-6">
                  <p className="mb-1">
                    <span>{testimonial.name}, {testimonial.title} </span>| <span className='fw-bold'>{testimonial.company}</span>
                  </p>
                  <blockquote className="blockquote">
                    <p className="mb-0 fst-italic text-success-emphasis fs-2 fw-normal">{testimonial.quote}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon position-absolute start-0" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon position-absolute end-0" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
