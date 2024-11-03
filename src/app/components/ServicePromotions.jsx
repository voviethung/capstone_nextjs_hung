"use client";

export default function LogoMakerPromotion() {
  return (
    <div className="container py-5">
      <div className="row align-items-center p-4 rounded" style={{ backgroundColor: '#fff6f2'}}>
        {/* Text Content */}
        <div className="col-md-6">
          <p className="fs-3"><span className="fw-bold">Fiverr </span>logo marker.</p>
          <h1 className="display-5 fw-normal">
            Make an incredible logo <span className="text-warning">in seconds</span>
          </h1>
          <p className="lead text-muted fw-normal mb-4">
            Pre-designed by top talent. Just add your touch.
          </p>
          <button className="btn btn-dark btn-lg">Try Fiverr Logo Maker</button>
        </div>
        {/* Image Content */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-between">
            {/* Main Images */}
            <img
              src="/images/banners/logo-maker-lohp.webp"
              alt="Logo can"
              className="img-fluid rounded me-2"
              // style={{ width: '120px', height: '180px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
