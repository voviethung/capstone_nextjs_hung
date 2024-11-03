"use client"
import { useState } from 'react';
import useToggleDropdown from '../../hooks/useToggleDropdown';
import SearchBar from './SearchBar';
// import styles from '../../app/styles/scss/_Navbar.module.scss'; // Import SCSS
// import SearchBar from "./SearchBar"

export default function Navbar() {
  const { isDropdownOpen: isProMenuOpen, toggleDropdown: toggleProMenu } = useToggleDropdown();
  const { isDropdownOpen: isExploreMenuOpen, toggleDropdown: toggleExploreMenu } = useToggleDropdown();
  const { isDropdownOpen: isLanguageMenuOpen, toggleDropdown: toggleLanguageMenu } = useToggleDropdown();

  return (

    <nav className="navbar navbar-light bg-white border-bottom px-4 py-2">
      {/* Logo và thanh tìm kiếm */}
      <div className="d-flex align-items-center">
        {/* Logo */}
        <img src="/images/logos/fiverr-logo-png.png" alt="Logo" className="me-3" style={{ height: "40px" }} />
        {/* Thanh tìm kiếm */}
        <SearchBar/>
        {/* <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="What service are you looking for today?"
          />
          <button className="btn btn-dark">
            <i className="fa fa-search text-white"></i>
          </button>
        </div> */}
      </div>

      {/* Menu điều hướng */}
      <div className="d-flex align-items-center">
        <div className="nav-item dropdown me-3">
          <a
            className="nav-link dropdown-toggle fw-bold"
            href="#"
            id="fiverrProDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onClick={toggleProMenu} // Toggle menu Pro
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5"; // Nền xám nhạt khi hover
              e.currentTarget.style.padding = "0.5rem"; // Tăng padding khi hover
              e.currentTarget.style.margin = "0"; // Thêm margin khi hover
              e.currentTarget.style.borderRadius = "10%"

            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"; // Trở lại nền trong suốt khi không hover nữa
              e.currentTarget.style.padding = "0.5rem"; // Trở lại padding ban đầu
              e.currentTarget.style.margin = "0"; // Trở lại margin ban đầu
              e.currentTarget.style.borderRadius = "10%"
            }}
          >
            Fiverr Pro
          </a>
          {/* {isProMenuOpen && ( */}
          <ul className="dropdown-menu m-0 p-0" aria-labelledby="navbarDropdownPro">

            <li className="dropdown-item border rounded m-2 w-auto">
              <div className="d-flex align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-binoculars fa-2x me-3"></i>
                </div>
                <div>
                  <h6 className="fw-bold">I'm looking to hire</h6>
                  <small>My team needs vetted freelance talent <br /> and a premium business solution.</small>
                </div>
              </div>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <div className="d-flex align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-handshake fa-2x me-3"></i>
                </div>
                <div>
                  <h6 className="fw-bold">I want to offer Pro services</h6>
                  <small>I'd like to work on business projects as a <br />Pro freelancer or agency.</small>
                </div>
              </div>
            </li>
          </ul>
          {/* )} */}
        </div>
        <div className="nav-item dropdown me-3">
          <a
            className="nav-link dropdown-toggle fw-bold"
            href="#"
            id="fiverrProDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5"; // Nền xám nhạt khi hover
              e.currentTarget.style.padding = "0.5rem"; // Tăng padding khi hover
              e.currentTarget.style.margin = "0"; // Thêm margin khi hover
              e.currentTarget.style.borderRadius = "10%"

            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"; // Trở lại nền trong suốt khi không hover nữa
              e.currentTarget.style.padding = "0.5rem"; // Trở lại padding ban đầu
              e.currentTarget.style.margin = "0"; // Trở lại margin ban đầu
              e.currentTarget.style.borderRadius = "10%"
            }}
          >
            Explore
          </a>

          <ul className="dropdown-menu m-0 p-0" aria-labelledby="navbarDropdownPro">
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Answers</h6>
              <small>Powered by AI, answered by Fiverr freelancers</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Community</h6>
              <small>Connect with Fiverr’s team and community</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Guides</h6>
              <small>In-depth guides covering business topics</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Podcast</h6>
              <small>Inside tips from top business minds</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Learn</h6>
              <small>Professional online courses, led by experts</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Blog</h6>
              <small>News, information and community stories</small>
            </li>
            <li className="dropdown-item border rounded m-2 w-auto">
              <h6 className="fw-bold">Logo Maker</h6>
              <small>Create your logo instantly</small>
            </li>
          </ul>
        </div>

        <div className="nav-item dropdown me-3">
          <button
            type="button"
            className="btn fw-bold"
            data-bs-toggle="modal"
            data-bs-target="#languageModal"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
            }}
          >
            <i className="fas fa-globe me-1"></i> English
          </button>

          {/* Modal */}
          <div
            className="modal fade"
            id="languageModal"
            tabIndex="-1"
            aria-labelledby="languageModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold" id="languageModalLabel">Select your preferences</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-secondary-emphasis">
                  <ul className="nav nav-tabs mb-3" id="languageTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="language-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#language"
                        type="button"
                        role="tab"
                        aria-controls="language"
                        aria-selected="true"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
                        }}
                        onClick={(e) => {
                          e.currentTarget.style.color = '#1dbf85';
                        }}
                      >
                        Language
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="language-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#language"
                        type="button"
                        role="tab"
                        aria-controls="language"
                        aria-selected="true"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
                        }}
                        onClick={(e) => {
                          e.currentTarget.style.color = '#1dbf85';
                        }}
                      >
                        Currency
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    {/* Tab Language */}
                    <div
                      className="tab-pane fade show active"
                      id="language"
                      role="tabpanel"
                      aria-labelledby="language-tab"
                    >
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#">English</a></li>
                        <li><a className="dropdown-item" href="#">Deutsch</a></li>
                        <li><a className="dropdown-item" href="#">Español</a></li>
                        <li><a className="dropdown-item" href="#">Français</a></li>
                        <li><a className="dropdown-item" href="#">Português</a></li>
                      </ul>
                    </div>
                    {/* Tab Currency */}
                    <div
                      className="tab-pane fade"
                      id="currency"
                      role="tabpanel"
                      aria-labelledby="currency-tab"
                    >
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item" href="#">USD - US$</a></li>
                        <li><a className="dropdown-item" href="#">EUR - €</a></li>
                        <li><a className="dropdown-item" href="#">GBP - £</a></li>
                        <li><a className="dropdown-item" href="#">AUD - A$</a></li>
                        <li><a className="dropdown-item" href="#">CAD - CA$</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-item dropdown me-3">
          <a href="/become-a-seller" className="nav-link fw-bold"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
            }}
          >Become a Seller</a>
        </div>

              {/* Nút Sign In và Join */}
        <a href="/login" className="nav-link me-3 fw-bold"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1dbf85'; // Màu xanh khi hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#212529'; // Trở lại màu mặc định khi không hover nữa
          }}

        >Sign In</a>
        <a href="/register">
        <button className="btn btn-outline-success fw-bold"
          style={{
            borderRadius: "10%",
            padding: "0.5rem 1rem"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.classList.remove('btn-outline-success');
            e.currentTarget.classList.add('btn-success', 'text-white');
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove('btn-success', 'text-white');
            e.currentTarget.classList.add('btn-outline-success');
          }}
        >Join</button>
        </a>
      </div>
    </nav >


    // <nav className="navbar navbar-light bg-white border-bottom px-4 py-2">
    //   {/* Logo và thanh tìm kiếm */}
    //   <div className={styles.left}>
    //     <img src="/logo.png" alt="Logo" className={styles.logo} />
    //     <SearchBar/>
    //   </div>

    //   {/* Menu điều hướng */}
    //   <div className={styles.center}>
    //     <div className={styles.navItem} onClick={() => setProMenuOpen(!isProMenuOpen)}>
    //       Fiverr Pro <i className="fas fa-chevron-down"></i>
    //       {isProMenuOpen && (
    //         <div className={styles.dropdownMenu}>
    //           <div>I'm looking to hire</div>
    //           <div>I want to offer Pro services</div>
    //         </div>
    //       )}
    //     </div>

    //     <div className={styles.navItem} onClick={() => setExploreMenuOpen(!isExploreMenuOpen)}>
    //       Explore <i className="fas fa-chevron-down"></i>
    //       {isExploreMenuOpen && (
    //         <div className={styles.dropdownMenu}>
    //           <div>Answers</div>
    //           <div>Community</div>
    //           <div>Guides</div>
    //           <div>Podcast</div>
    //           <div>Learn</div>
    //           <div>Blog</div>
    //           <div>Logo Maker</div>
    //         </div>
    //       )}
    //     </div>

    //     <div className={styles.navItem} onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}>
    //       <i className="fas fa-globe"></i> English
    //       {isLanguageMenuOpen && (
    //         <div className={styles.dropdownMenu}>
    //           <div>English</div>
    //           <div>Deutsch</div>
    //           <div>Español</div>
    //           <div>Français</div>
    //           <div>Português</div>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   {/* Nút Sign In và Join */}
    //   <div className={styles.right}>
    //     <a href="/become-a-seller">Become a Seller</a>
    //     <a href="/sign-in">Sign In</a>
    //     <button className={styles.joinButton}>Join</button>
    //   </div>
    // </nav>
  );
}
