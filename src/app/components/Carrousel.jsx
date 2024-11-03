import Image from 'next/image';
import SearchBar from './SearchBar'; // Giả sử bạn đã tạo component SearchBar
// import styles from '../../app/styles/scss/_Carrousel.module.scss'; // Import SCSS

export default function Carrousel() {
  return (
    <div className="container-fluid text-white py-5" style={{ backgroundColor: '#013a12'}}>
  {/* Hero Section */}
  <div className="row justify-content-center text-center">
    <div className="col-lg-8">
      <h1 className="display-4 fw-bold">
        Find the right <span className="text-success">freelance</span> service, right away
      </h1>
      {/* Search Bar */}
      <SearchBar/>
      {/* <div className="input-group my-4 bg-white">
        <input
          type="text"
          className="form-control"
          placeholder="Search for any service..."
          aria-label="Search for any service"
        />
        <button className="btn btn-success m-2" type="button">
          <i className="fa fa-search"></i>
        </button>
      </div> */}
    </div>
  </div>

  {/* Background Images */}
  <div className="position-relative">
    {/* <img src="/images/jenny.png" alt="Jenny" className="position-absolute top-0 start-0 img-fluid" style={{ width: '150px' }} /> */}
    {/* <img src="/images/veronica.png" alt="Veronica" className="position-absolute top-0 end-0 img-fluid" style={{ width: '150px' }} /> */}
    {/* <img src="/images/jordan.png" alt="Jordan" className="position-absolute bottom-0 end-0 img-fluid" style={{ width: '150px' }} /> */}
    {/* <img src="/images/another-image.png" alt="Another person" className="position-absolute bottom-0 start-0 img-fluid" style={{ width: '150px' }} /> */}
  </div>

  {/* Trusted By Logos */}
  <div className="row mt-5 justify-content-center text-center">
    <div className="col-12">
      <span className="me-2">Trusted by:</span>
      <img src="/images/logos/meta.svg" alt="Meta" className="mx-2" width="70" />
      <img src="/images/logos/google.svg" alt="Google" className="mx-2" width="50" />
      <img src="/images/logos/netflix.svg" alt="Netflix" className="mx-2" width="50" />
      <img src="/images/logos/pg.svg" alt="P&G" className="mx-2" width="35" />
      <img src="/images/logos/paypal.svg" alt="Paypal" className="mx-2" width="50" />
      <img src="/images/logos/payoneer.svg" alt="Payoneer" className="mx-2" width="85" />
    </div>
  </div>
</div>
  );
}
