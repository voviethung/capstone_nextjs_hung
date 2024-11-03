import { getCongViecByKeywordAction } from '@/app/actions/service/productApi';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import CategoryMenu from '@/app/components/CategoryMenu';
const Search = async (props) => {
    const keyword = props.searchParams.keyword || '';
    const data = await getCongViecByKeywordAction(keyword);
    console.log('keyword', data)
    return (
        <div className='container'>
            <Navbar />
            <CategoryMenu />
            <h2>Results for {keyword}</h2>
            <div className="d-flex justify-content-between align-items-center">

                {/* Dropdown Filters */}
                <div className="d-flex flex-wrap gap-2">
                    <div className="dropdown">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="categoryDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Category
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                            <li><a className="dropdown-item" href="#">Category 1</a></li>
                            <li><a className="dropdown-item" href="#">Category 2</a></li>
                            <li><a className="dropdown-item" href="#">Category 3</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="serviceOptionsDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Service options
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="serviceOptionsDropdown">
                            <li><a className="dropdown-item" href="#">Option 1</a></li>
                            <li><a className="dropdown-item" href="#">Option 2</a></li>
                            <li><a className="dropdown-item" href="#">Option 3</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="freelancerDetailsDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Freelancer details
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="freelancerDetailsDropdown">
                            <li><a className="dropdown-item" href="#">Detail 1</a></li>
                            <li><a className="dropdown-item" href="#">Detail 2</a></li>
                            <li><a className="dropdown-item" href="#">Detail 3</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="budgetDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Budget
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="budgetDropdown">
                            <li><a className="dropdown-item" href="#">$100 - $500</a></li>
                            <li><a className="dropdown-item" href="#">$500 - $1000</a></li>
                            <li><a className="dropdown-item" href="#">$1000+</a></li>
                        </ul>
                    </div>

                    <div className="dropdown">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="deliveryTimeDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Delivery time
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="deliveryTimeDropdown">
                            <li><a className="dropdown-item" href="#">24 hours</a></li>
                            <li><a className="dropdown-item" href="#">3 days</a></li>
                            <li><a className="dropdown-item" href="#">1 week</a></li>
                        </ul>
                    </div>
                </div>

                {/* Pro Services Toggle */}
                <div className="d-flex justify-content-between align-items-center gap-2">
                    <div className="form-check form-switch mt-3 d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" id="proServicesSwitch"
                        />
                        <label className="form-check-label ms-2" htmlFor="proServicesSwitch">Pro services</label>
                    </div>
                    <div className="form-check form-switch mt-3 d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" id="proServicesSwitch"
                        />
                        <label className="form-check-label ms-2" htmlFor="proServicesSwitch">Local sellers</label>
                    </div>
                    <div className="form-check form-switch mt-3 d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" id="proServicesSwitch"
                        />
                        <label className="form-check-label ms-2" htmlFor="proServicesSwitch">Online sellers</label>
                    </div>

                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
                {/* Hiển thị số lượng kết quả */}
                <span className="text-muted">{data.length} results</span>

                {/* Sort by */}
                <div className="d-flex align-items-center">
                    <span className="text-muted me-1">Sort by:</span>
                    <div className="dropdown">
                        <button
                            type="button"
                            className="btn btn-link p-0 text-dark fw-bold dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ textDecoration: 'none' }}
                        >
                            Relevance
                        </button>
                        <ul className="dropdown-menu shadow-sm">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    <i className="bi bi-check-lg me-2"></i>Relevance
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Best selling</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Newest arrivals</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='row'>
                {data.map((cV) => {
                    return (
                        <div className='col-md-3 mt-2' key={cV.id}>
                            <div className='card'>
                                <Image
                                    src={cV.congViec.hinhAnh}
                                    alt={cV.congViec.tenCongViec}
                                    quality={100}
                                    crossOrigin='anonymous'
                                    width={500}
                                    height={500}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div className='card-body'>
                                    <h3>{cV.congViec.tenCongViec}</h3>
                                    <p>{cV.tenLoaiCongViec} - {cV.tenChiTietLoai}</p>
                                    <p><strong>Price:</strong> ${cV.congViec.giaTien}</p>
                                    <p><strong>Rating:</strong> {cV.congViec.danhGia} reviews</p>
                                    <p>{cV.congViec.moTaNgan}</p>
                                    <Link href={`/detail/${cV.congViec.id}`} className='btn btn-success'>
                                        Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>




        </div>
    )
}

export default Search