import { getProductByKeywordAction } from '@/app/actions/service/productApi';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import CategoryMenu from '@/app/components/CategoryMenu';
import ScrollButton from '@/app/components/ScrollButton';
import InterestTags from '@/app/components/InterestTags';
const About = async (props) => {
  const keyword = props.searchParams.keyword || '';
  const data = await getProductByKeywordAction(keyword);
  console.log('keyword', data);


  return (
    <div className='container-fluid'>
      <Navbar />
      <CategoryMenu />

      <div className="row">
        {/* Sidebar Thông tin cá nhân */}
        <div className="col-lg-3 col-md-4">
          <div className="card p-3 mb-4">
            {/* Ảnh đại diện và trạng thái */}
            <div className="text-center">
              <div className="position-relative">
                <img
                  src="https://via.placeholder.com/100"
                  alt="User Avatar"
                  className="rounded-circle mb-2"
                  style={{ width: '100px', height: '100px' }}
                />
                <span className="badge bg-success position-absolute bottom-0 start-75 translate-middle p-2 rounded-circle">
                  <i className="bi bi-check-circle text-white"></i>
                </span>
              </div>
              <h5 className="mt-2">khaidui3</h5>
            </div>

            {/* Thông tin cơ bản */}
            <hr />
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between text-muted">
                <div className="d-flex align-items-center">
                  <i className="fa fa-map-marker-alt me-3" />
                  <span>From</span>
                </div>
                <span className="fw-semibold text-dark">Vietnam</span>
              </div>
              <div className="d-flex justify-content-between text-muted">
                <div className="d-flex align-items-center">
                  <i className="fa fa-user me-3" />
                  <span>Member since</span>
                </div>
                <span className="fw-semibold text-dark">May 2021</span>
              </div>
            </div>
          </div>

          <div className="card p-3 my-4">

            <div className="d-flex justify-content-between mb-3">
              <h6 className='text-dark fw-bold'>Description</h6>
              <span className=" text-success">Edit Description</span>
            </div>
            <hr />
            {/* Mô tả và thông tin thêm */}
            <div className="d-flex justify-content-between my-3">
              <div className="">
                <h6 className='text-dark fw-bold'>Languages</h6>
                <p className='text-dark'>English - <span className='text-muted'>Basic</span></p>
              </div>
              <span className="text-success">Add New</span>
            </div>
            <hr />

            <div className=" my-3">
              <h6 className='text-dark fw-bold'>Linked Accounts</h6>
              <p className='text-dark'> <i class="fa fa-plus"></i> Facebook</p>
              <p className='text-dark'> <i class="fab fa-google-plus-square"></i> Google</p>
              <p className='text-dark'> <i class="fa fa-plus"></i> Dribbble</p>
              <p className='text-dark'> <i class="fa fa-plus"></i> Stack Overflow</p>
              <p className='text-dark'> <i class="fa fa-plus"></i> GitHub</p>
              <p className='text-dark'> <i class="fa fa-plus"></i> Vimeo</p>
              <p className='text-dark'> <i class="fa fa-plus"></i> Twitter</p>
            </div>
            <hr />

            <div className="d-flex justify-content-between my-3">
              <div className="">
                <h6 className='text-dark fw-bold'>Skills</h6>
                <p className='text-muted'>Add Your Skills</p>
              </div>
              <span className="text-success">Add New</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between my-3">
              <div className="">
                <h6 className='text-dark fw-bold'>Education</h6>
                <p className='text-muted'>Add Your Education</p>
              </div>
              <span className="text-success">Add New</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <div className="">
                <h6 className='text-dark fw-bold'>Certification</h6>
                <p className='text-muted'>Add Your Certification</p>
              </div>
              <span className="text-success">Add New</span>
            </div>
          </div>

        </div>

        {/* Nội dung chính */}
        <div className="col-lg-9 col-md-8">
          {/* Phần thông báo */}

          <div className="d-flex align-items-center alert alert-light border rounded mb-4">
            <div>
              <i class="fa fa-city fs-1 p-2"></i>
            </div>
            <div>
              <strong>Buying services for work?</strong> Help us tailor your experience to fit your needs.
              <a href="#" className="d-block text-decoration-none text-success fw-bold">Tell us more about your business</a>
            </div>
          </div>
          {/* Thông báo không có dịch vụ */}
          <div className="alert alert-secondary text-center mb-4">
            It seems that you don’t have any active Gigs. Get selling!
            <button className="btn btn-success ms-3">Create a New Gig</button>
          </div>

          {/* Danh sách dịch vụ */}
          <div className="card mb-3 p-3 shadow-sm">
            <div className="row g-3 align-items-center">
              <div className="col-md-2">
                <img src="https://via.placeholder.com/100x60" alt="Gig Thumbnail" className="img-fluid rounded" />
              </div>
              <div className="col-md-8">
                <h5 className="mb-1">Lập trình front end với react js</h5>
                <p className="mb-1 text-muted">Các dịch vụ lập trình front end bao gồm các kỹ năng nổi bật về HTML, CSS, JavaScript...</p>
                <span className="text-warning"><i className="bi bi-star-fill"></i> 4.5</span>
              </div>
              <div className="col-md-2 text-end">
                <button className="btn btn-outline-dark btn-sm mb-2 w-100 fw-bold">View detail</button>
                <button className="btn btn-outline-dark btn-sm mb-2 w-100 fw-bold">Edit</button>
                <button className="btn btn-outline-dark btn-sm w-100">Delete</button>
              </div>
            </div>
          </div>

          {/* Thêm một dịch vụ mẫu */}
          <div className="card mb-3 p-3 shadow-sm">
            <div className="row g-3 align-items-center">
              <div className="col-md-2">
                <img src="https://via.placeholder.com/100x60" alt="Gig Thumbnail" className="img-fluid rounded" />
              </div>
              <div className="col-md-8">
                <h5 className="mb-1">Lập trình front end với react js</h5>
                <p className="mb-1 text-muted">Các dịch vụ lập trình front end bao gồm các kỹ năng nổi bật về HTML, CSS, JavaScript...</p>
                <span className="text-warning"><i className="bi bi-star-fill"></i> 4.5</span>
              </div>
              <div className="col-md-2 text-end">
                <button className="btn btn-outline-dark btn-sm mb-2 w-100 fw-bold">View detail</button>
                <button className="btn btn-outline-dark btn-sm mb-2 w-100 fw-bold">Edit</button>
                <button className="btn btn-outline-dark btn-sm w-100">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default About