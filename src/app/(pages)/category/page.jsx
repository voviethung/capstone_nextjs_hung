import { getChiTietLoaiCongViecAction } from '@/app/actions/service/productApi';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import CategoryMenu from '@/app/components/CategoryMenu';
import ScrollButton from '@/app/components/ScrollButton';
import InterestTags from '@/app/components/InterestTags';
const CategoryDetail = async (props) => {
    const id = props.searchParams.id || '';
    const data = await getChiTietLoaiCongViecAction(id);
    // const item = data.find((item) => item.id == id); // tìm đối tượng dựa trên id

    console.log('id', data);
    const popularServices = [
        { icon: '🌱', title: 'Minimalist Logo Design' },
        { icon: '🎨', title: 'Illustration' },
        { icon: '🌐', title: 'Website Design' },
        { icon: '🏛️', title: 'Architecture & Interior Design' },
        { icon: '🤖', title: 'AI Artists' },
        { icon: '✂️', title: 'Image Editing' },
        { icon: '👕', title: 'T-Shirts & Merchandise' },
        { icon: '🏭', title: 'Industrial & Product Design' },
        { icon: '📱', title: 'Social Media Design' }
        // Thêm các dịch vụ khác nếu cần
    ];
    const moTaNganGonLoaiCongViec = [
        { id: 1, shortDescribe: 'Designs to make you stand out.' },
        { id: 2, shortDescribe: 'Build your brand. Grow your business.' },
        { id: 3, shortDescribe: 'Get your words across—in any language.' },
        { id: 4, shortDescribe: 'Bring your story to life with creative videos.' },
        { id: 5, shortDescribe: "Don't miss a beat. Bring your sound to life." },
    ]

    return (
        <div className='container'>
            <Navbar />
            <CategoryMenu />
            {data.map((loaiCongViec) => (
                <div key={loaiCongViec.id}>
                    <div className="container bg-success text-white text-center mb-5 py-5 rounded"
                        style={{
                            backgroundImage: 'url("/images/banners/Graphic-design.webp")', // Đường dẫn tới hình ảnh
                            backgroundSize: 'cover',                           // Để hình ảnh bao phủ toàn bộ
                            backgroundPosition: 'center',                      // Căn giữa hình ảnh
                            backgroundRepeat: 'no-repeat',                     // Không lặp lại hình ảnh
                            width: '100%',                                     // Đặt chiều rộng 100%
                            height: 'auto'
                        }}>
                        {loaiCongViec.tenLoaiCongViec ? (
                            <h1 className="fw-bold">{loaiCongViec.tenLoaiCongViec}</h1>
                        ) : (
                            <p>Không tìm thấy dữ liệu</p>
                        )}
                        {/* {moTaNganGonLoaiCongViec.find((item) => item.id === loaiCongViec.id) ? (
                            <p className='fs-4'>
                                {moTaNganGonLoaiCongViec.find((item) => item.id === loaiCongViec.id).shortDiscribe}
                            </p>
                        ) : (
                            <p>Không tìm thấy dữ liệu</p>
                        )}; */}
                        {moTaNganGonLoaiCongViec.find((item) => item.id === loaiCongViec.id)?.shortDescribe && (
                            <p className='fs-4'>{moTaNganGonLoaiCongViec.find((item) => item.id === loaiCongViec.id).shortDescribe}</p>
                        )}
                        <Link href={"/register"}>
                            <button className="btn btn-outline-light fs-5">
                                Join Fiverr
                            </button>
                        </Link>

                    </div>
                    {/* Phần Dịch vụ Phổ biến */}

                    <h2 className='fw-semibold'>Most Popular in {loaiCongViec.tenLoaiCongViec}</h2>
                    {/* Lặp qua dsNhomChiTietLoai */}
                    {loaiCongViec.dsNhomChiTietLoai.map((nhomChiTietLoai) => (
                        <div key={nhomChiTietLoai.id} className="d-flex align-items-center position-relative">
                            <ScrollButton direction="left" targetId="scrollContainer" />
                            <div
                                id="scrollContainer"
                                className="d-flex flex-nowrap overflow-auto px-5"
                                style={{ scrollBehavior: 'smooth', gap: '1rem', scrollbarWidth: 'none' }}
                            >
                                <div className="d-inline-block bg-danger card border-0 shadow-sm px-3 py-2 flex-shrink-0" style={{ minWidth: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                    <div className="d-flex align-items-center ">
                                        {/* <span className="me-2" style={{ fontSize: '1.5rem' }}>{nhomChiTietLoai.icon}</span> */}
                                        <h6 className="mb-0">{nhomChiTietLoai.tenNhom} <span>→</span></h6>
                                    </div>
                                </div>

                            </div>
                            <ScrollButton direction="right" targetId="scrollContainer" />
                        </div>
                    ))}

                    <h2 className='fw-semibold'>Explore {loaiCongViec.tenLoaiCongViec}</h2>
                    <div className='row'>
                        {loaiCongViec.dsNhomChiTietLoai.map((nhomChiTietLoai) => (
                            <div key={nhomChiTietLoai.id} className="col-md-3 mt-2">
                                <div className='card'>
                                    <Image alt={nhomChiTietLoai.tenNhom} quality={100} crossOrigin={'anonymous'} width={500} height={500} style={{ width: '100%', height: 'auto' }} />
                                    <div className='card-body'>
                                        <h4>{nhomChiTietLoai.tenNhom}</h4>
                                        {/* Lặp qua dsChiTietLoai của mỗi nhóm */}
                                        <ul class="list-unstyled">
                                            {nhomChiTietLoai.dsChiTietLoai.map((chiTietLoai) => (
                                                <li key={chiTietLoai.id} className='muted'>
                                                    {/* Render tên chi tiết */}
                                                    {chiTietLoai.tenChiTiet}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* <Link href={`/detail/${prod.id}`} className='btn btn-success'>Detail</Link> */}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className='row'>
                {data.map((prod) => {
                    return <div className='col-md-3 mt-2' key={prod.id}>
                        <div className='card'>
                            <Image src={prod.image} alt={prod.alias} quality={100} crossOrigin={'anonymous'} width={500} height={500} style={{ width: '100%', height: 'auto' }} />
                            <div className='card-body'>
                                <h3>{prod.name}</h3>
                                <p>{prod.price}</p>
                                <Link href={`/detail/${prod.id}`} className='btn btn-success'>Detail</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div> */}
                    < InterestTags />
                </div>
            ))}
        </div>
    )

}

export default CategoryDetail