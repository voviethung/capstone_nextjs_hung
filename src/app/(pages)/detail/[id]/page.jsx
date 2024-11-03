import { getProductByIdAction } from '@/app/actions/service/productApi';
import React from 'react'
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import CategoryMenu from '@/app/components/CategoryMenu';
export async function generateMetadata({ params }) {
  const prodDetail = await getProductByIdAction(params.id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${params.id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}
const Detail = async (props) => {
  //props param của server component
  const { params } = props;
  const prodDetail = await getProductByIdAction(params.id);
  console.log('data', prodDetail);
  return (
    <div className='container'>
      <Navbar />
      <CategoryMenu />

      <div className="container my-5">
        {/* Title and Seller Information */}
        <div className="row">
          <div className="col-lg-8">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Programming & Tech</a></li>
                <li className="breadcrumb-item"><a href="#">Website Builders & CMS</a></li>
                <li className="breadcrumb-item active" aria-current="page">Full Website Creation</li>
              </ol>
            </nav>
            <h2 className="fw-bold">I will do custom css, html, javascript, PHP coding</h2>
            <div className="d-flex align-items-center mt-2">
              <img src="https://via.placeholder.com/50" className="rounded-circle me-2" alt="Seller Profile" />
              <div className="d-flex align-items-center">
                <strong className="me-2">nofilrazzaq</strong>
                <span className="text-muted me-2">Top Rated Seller</span>
                <span className="text-warning me-1">
                  {/* Biểu tượng sao */}
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </span>
                <span className="text-warning me-2">5</span>
                <span className="text-muted me-2">(335)</span>
                <span className="text-muted me-2">| 4 Orders in Queue</span>
                <span className="badge bg-success text-white">
                  Fiverr's Choice
                </span>
              </div>
            </div>
            <div className="">
              {/* Badge and Text */}
              <p><span className="fw-bold text-success">Buyers keep returning!</span> nofilrazzaq has an exceptional number of repeat buyers.</p>
              {/* Banner Image/Video */}
              <div className="mb-3">
                <img src="https://via.placeholder.com/600x300" className="img-fluid rounded" alt="Service Image" />
                <h5 className="mb-2">“Quality of UI/UX exceeded my expectations”</h5>

                {/* Testimonial Section */}
                <div className="d-flex mt-3" style={{ gap: '0.5rem' }}>
                  {Array(8).fill().map((_, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: '80px', height: '60px' }}>
                      <img
                        src={`/images/img${index + 1}.jpg`}
                        alt={`Customer Review ${index + 1}`}
                        className="img-fluid rounded"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className="">
              <div className="card border-0">
                <h3 className="fw-bold">About this gig</h3>
                <hr />

                <p><strong>Hi Fiverr Community,</strong></p>

                <p>
                  Are you looking for an experienced Webflow expert who can design and develop a stunning Webflow website for you that reflects your brand’s personality and captivates your visitors?
                  <br />
                  Look no further! Here I am.
                </p>

                <p>
                  As a Webflow developer with 5+ years of experience, I have the skills and expertise to create beautiful, responsive, and user-friendly sites that exceed your expectations.
                  I will do custom design or convert your Figma to Webflow design websites that are optimized for conversion and built to scale.
                </p>

                <p>
                  I specialize in designing websites for businesses, startups, and individuals who want to showcase their brands in a unique and professional way.
                </p>

                <h5 className="fw-bold mt-4">What I Offer:</h5>
                <ul className="list-unstyled ms-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Responsive Webflow Site</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Pixel Perfect Design</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Figma to Webflow Conversion</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Attractive Landing Pages Design</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Fully Responsive on Mobile, Tab & Desktop</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced Animations</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Visually Attractive Color Combination</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>SEO Optimization</li>
                </ul>

                <h5 className="fw-bold mt-4">Why Me?</h5>
                <ul className="list-unstyled ms-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Quick and Professional</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>24/7 Available</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Unlimited Revisions</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>30 Days of Ongoing Support</li>
                </ul>

                <p className="mt-4">
                  Take a smart decision! Just place an order to get premium services. Let's work together to take your site to the next level.
                </p>
              </div>
            </div>

            <div className="border-top pt-4">
              <div className="row">
                <div className="col-md-4">
                  <h6 className="text-muted">Website type</h6>
                  <p>Business</p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-muted">Website features</h6>
                  <p>Marketing, Payment, Social media, Video, Form, Events, Chat, FAQ, Gallery, Booking</p>
                </div>
                <div className="col-md-4">
                  <h6 className="text-muted">Plugins</h6>
                  <p>Comparison Tables, Before & After Slider, Charts & Graphs, Pricing Tables, Audio Player, Image Hotspot, Notification Bar</p>
                </div>
              </div>
            </div>

            <div className="">
              <h5>Get to know Akibur Rahman</h5>
              <div className="d-flex align-items-center mt-3">
                {/* Profile Image */}
                <div className="position-relative">
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Profile"
                    className="rounded-circle"
                    style={{ border: '5px solid #dfffe7' }}
                  />
                  <span
                    className="position-absolute bottom-0 start-0 bg-primary text-white rounded-circle"
                    style={{
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid white',
                    }}
                  >
                    <i className="bi bi-check-circle-fill"></i>
                  </span>
                </div>

                {/* Profile Information */}
                <div className="ms-3">
                  <h6 className="fw-bold mb-0">Akibur Rahman <span className="badge bg-primary ms-1">Pro</span></h6>
                  <p className="text-muted mb-1">Professional Wix, WordPress, Webflow Website Designer and Developer</p>
                  <div className="d-flex align-items-center">
                    {/* Rating and Reviews */}
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i> 4.9
                    </span>
                    <a href="#" className="text-muted">(463)</a>

                    {/* Level Info */}
                    <span className="mx-2">|</span>
                    <span className="text-muted">Level 2 <i className="bi bi-gem"></i><i className="bi bi-gem"></i></span>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-3">
                <button className="btn btn-outline-dark">Contact me</button>
              </div>
            </div>

            <div className="">
              <h5 className="fw-bold my-4">FAQ</h5>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header" id="faq1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      Can you fix a bug in my Webflow website?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, I can help fix any bugs or issues on your Webflow website.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header" id="faq2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      Will the website be responsive across all devices?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, I ensure that the website will be responsive and work seamlessly on all devices.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header" id="faq3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      Can you convert Figma, XD and Sketch designs into Webflow?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, I can convert designs from Figma, Adobe XD, and Sketch into Webflow.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header" id="faq4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Do you offer help after project completion?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, I offer support and help after project completion for a smooth transition.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phần review */}
            <div>
              <div className="container my-5">
                <h5 className="fw-bold mb-3">Reviews</h5>
                <div className="d-flex justify-content-between align-items-start">
                  {/* Left Side - Reviews Breakdown */}
                  <div className="me-5">
                    <p className="mb-2">134 reviews for this Gig</p>
                    <div className="d-flex align-items-center mb-2">
                      <span>5 Stars</span>
                      <div className="progress flex-grow-1 mx-2" style={{ height: '8px' }}>
                        <div className="progress-bar bg-dark" style={{ width: '93%' }}></div>
                      </div>
                      <span>(125)</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span>4 Stars</span>
                      <div className="progress flex-grow-1 mx-2" style={{ height: '8px' }}>
                        <div className="progress-bar bg-secondary" style={{ width: '4%' }}></div>
                      </div>
                      <span>(6)</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span>3 Stars</span>
                      <div className="progress flex-grow-1 mx-2" style={{ height: '8px' }}>
                        <div className="progress-bar bg-secondary" style={{ width: '1%' }}></div>
                      </div>
                      <span>(1)</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span>2 Stars</span>
                      <div className="progress flex-grow-1 mx-2" style={{ height: '8px' }}>
                        <div className="progress-bar bg-secondary" style={{ width: '1%' }}></div>
                      </div>
                      <span>(2)</span>
                    </div>
                    <div className="d-flex align-items-center mb-2 text-muted">
                      <span>1 Star</span>
                      <div className="progress flex-grow-1 mx-2" style={{ height: '8px' }}>
                        <div className="progress-bar bg-light" style={{ width: '0%' }}></div>
                      </div>
                      <span>(0)</span>
                    </div>
                  </div>

                  {/* Right Side - Rating Breakdown */}
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2">⭐ 4.9</span>
                      <strong>Rating Breakdown</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Seller communication level</span>
                      <span>⭐ 4.9</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Recommend to a friend</span>
                      <span>⭐ 4.9</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Service as described</span>
                      <span>⭐ 4.9</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="container my-3">
                {/* Search Input */}
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search reviews"
                    aria-label="Search reviews"
                  />
                  <button className="btn btn-dark" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>

                {/* Sort By Dropdown */}
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">Sort By</span>
                  <div className="dropdown">
                    <button
                      className="btn btn-link text-dark dropdown-toggle"
                      type="button"
                      id="sortDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Most relevant
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                      <li><a className="dropdown-item" href="#">Most relevant</a></li>
                      <li><a className="dropdown-item" href="#">Most recent</a></li>
                      <li><a className="dropdown-item" href="#">Highest rating</a></li>
                      <li><a className="dropdown-item" href="#">Lowest rating</a></li>
                    </ul>
                  </div>
                </div>

                {/* Checkbox Filter */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="filterWithFiles"
                  />
                  <label className="form-check-label" htmlFor="filterWithFiles">
                    Only show reviews with files (96)
                  </label>
                </div>
              </div>
              <div>
                <div className="card border rounded p-3 mb-4">
                  {/* Header */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="User Avatar"
                      className="rounded-circle me-2"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <strong>mltchs_username</strong> <span className="text-muted">• Repeat Client</span>
                      <div className="text-muted">🇦🇺 Australia</div>
                    </div>
                  </div>

                  {/* Rating and Date */}
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <strong>5</strong>
                    <span className="text-muted ms-2">• 2 months ago</span>
                  </div>

                  {/* Review Content */}
                  <p>
                    Blown away, exceeded expectations is an understatement. Even finished the job ahead of time as I informed them
                    I'm on a bit of a deadline. Extremely pleased with the result, it turned out better than I could have hoped!
                    Thanks so much again mate, you were a pleasure to work with!! Will be recommending and will be back A++++++
                    THANK YOU!!
                  </p>

                  {/* Price and Duration */}
                  <div className="d-flex justify-content-start mb-3">
                    <div className="me-4">
                      <strong>US$1,000–US$1,500</strong>
                      <div className="text-muted">Price</div>
                    </div>
                    <div>
                      <strong>7 days</strong>
                      <div className="text-muted">Duration</div>
                    </div>
                  </div>

                  {/* Seller's Response */}
                  <div className="border-top pt-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle text-muted me-2" style={{ fontSize: '1.5rem' }}></i>
                      <span className="text-muted">Seller's Response</span>
                      <i className="bi bi-chevron-down ms-auto"></i>
                    </div>
                  </div>

                  {/* Helpful Section */}
                  <div className="d-flex justify-content-start align-items-center mt-3">
                    <span className="text-muted me-3">Helpful?</span>
                    <button className="btn btn-link text-decoration-none">Yes</button>
                    <button className="btn btn-link text-decoration-none">No</button>
                  </div>
                </div>
                <div className="card border rounded p-3 mb-4">
                  {/* Header */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="User Avatar"
                      className="rounded-circle me-2"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <strong>mltchs_username</strong> <span className="text-muted">• Repeat Client</span>
                      <div className="text-muted">🇦🇺 Australia</div>
                    </div>
                  </div>

                  {/* Rating and Date */}
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-warning me-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <strong>5</strong>
                    <span className="text-muted ms-2">• 2 months ago</span>
                  </div>

                  {/* Review Content */}
                  <p>
                    Blown away, exceeded expectations is an understatement. Even finished the job ahead of time as I informed them
                    I'm on a bit of a deadline. Extremely pleased with the result, it turned out better than I could have hoped!
                    Thanks so much again mate, you were a pleasure to work with!! Will be recommending and will be back A++++++
                    THANK YOU!!
                  </p>

                  {/* Price and Duration */}
                  <div className="d-flex justify-content-start mb-3">
                    <div className="me-4">
                      <strong>US$1,000–US$1,500</strong>
                      <div className="text-muted">Price</div>
                    </div>
                    <div>
                      <strong>7 days</strong>
                      <div className="text-muted">Duration</div>
                    </div>
                  </div>

                  {/* Seller's Response */}
                  <div className="border-top pt-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person-circle text-muted me-2" style={{ fontSize: '1.5rem' }}></i>
                      <span className="text-muted">Seller's Response</span>
                      <i className="bi bi-chevron-down ms-auto"></i>
                    </div>
                  </div>

                  {/* Helpful Section */}
                  <div className="d-flex justify-content-start align-items-center mt-3">
                    <span className="text-muted me-3">Helpful?</span>
                    <button className="btn btn-link text-decoration-none">Yes</button>
                    <button className="btn btn-link text-decoration-none">No</button>
                  </div>
                </div>
                {/* Nút Show More Reviews */}
                <div className="mt-4">
                  <button className="btn btn-outline-success fw-bold">Show More Reviews</button>
                </div>
              </div>

              {/* Phần comment */}
              <div className="my-3">
                <div className="d-flex align-items-start">
                  {/* Avatar Image */}
                  <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-circle me-3" style={{ width: 40, height: 40 }} />
                  {/* Comment Text Area */}
                  <div className="flex-grow-1">
                    <textarea className="form-control" rows={3} placeholder="Write a comment..." defaultValue={""} />
                  </div>
                </div>
                {/* Add Comment Button */}
                <div className="mt-2">
                  <button className="btn btn-success">Add Comment</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Package Options */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-header d-flex justify-content-around">
                <button className="btn btn-outline-secondary">Basic</button>
                <button className="btn btn-outline-success fw-bold">Standard</button>
                <button className="btn btn-outline-secondary">Premium</button>
              </div>
              <div className="card-body">
                <h5 className="fw-bold">Standard</h5>
                <h2 className="text-success fw-bold">$1,000</h2>
                <p>Create a simple web application for your business.</p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check-circle text-success"></i> 2 concepts included
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success"></i> 2 concepts included
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success"></i> 2 concepts included
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success"></i> 2 concepts included
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success"></i> 2 concepts included
                  </li>
                </ul>
                <a href="#" className="btn btn-success btn-lg w-100">Continue ($1,000)</a>
                <a href="#" className="text-center d-block mt-3 text-primary">Compare Packages</a>
              </div>
            </div>

            {/* Quote Button */}
            <div className='mt-4 py-4 text-center shadow-sm bg-light'>
              <p>Do you have any special requirements?</p>
              <button className="btn btn-outline-secondary w-20">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3'>
          <Image width={500} height={500} style={{ width: '100%', height: 'auto' }} crossOrigin="anonymous" quality={100} src={prodDetail.image} alt={prodDetail.alias} className='w-100' />
        </div>
        <div className='col-md-8'>
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail;