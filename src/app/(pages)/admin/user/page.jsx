"use client"
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminPage() {
  return (
    <div className="container">
      <div className="row">
        {/* Thanh điều hướng bên trái */}
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="position-sticky">
            <h5 className="pt-3">Dashboard</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Quản lý người dùng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quản lý công việc
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quản lý loại công việc
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quản lý dịch vụ
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Nội dung chính */}
        <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Quản lý người dùng</h1>
            <button className="btn btn-outline-secondary">Đăng xuất</button>
          </div>

          {/* Tìm kiếm và Thêm người dùng */}
          <div className="mb-4 d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
            />
            <button className="btn btn-primary">Tìm</button>
          </div>

          {/* Bảng người dùng */}
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên Phim</th>
                  <th>Hình Ảnh</th>
                  <th>Mô Tả</th>
                  <th>Vai Trò</th>
                  <th>Nhóm</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>user1</td>
                  <td><img src="https://via.placeholder.com/50" alt="user" /></td>
                  <td>Thông tin mô tả...</td>
                  <td>User</td>
                  <td>GP02</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2">Xem chi tiết</button>
                    <button className="btn btn-warning btn-sm me-2">Sửa</button>
                    <button className="btn btn-danger btn-sm">Xóa</button>
                  </td>
                </tr>
                {/* Thêm các dòng khác */}
              </tbody>
            </table>
          </div>

          {/* Phân trang */}
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"><a className="page-link" href="#">6</a></li>
              <li className="page-item"><a className="page-link" href="#">7</a></li>
              <li className="page-item"><a className="page-link" href="#">8</a></li>
              <li className="page-item"><a className="page-link" href="#">9</a></li>
              <li className="page-item"><a className="page-link" href="#">10</a></li>
            </ul>
          </nav>
        </main>
      </div>
    </div>
  );
}
