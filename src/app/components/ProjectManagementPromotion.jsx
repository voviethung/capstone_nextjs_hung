
export default function ProjectManagementPromotion() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#013a12', color: '#ffffff' }}>
      <div className="row align-items-center">
        {/* Nội dung chính */}
        <div className="col-md-6 px-5">
          <p><span className="fw-bolder">Fiverr</span> Pro.</p>
          <h1 className="display-5 mb-3" style={{ lineHeight: '1.2' }}>
            New e-Commerce project management service <span className="fw-normal">made for your business</span>
          </h1>
          <p className="lead mb-4">
            An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they’ll handle everything from site building, design, and content to optimization, marketing strategies, and UGC videos.
          </p>
          <h5 className="mb-3 fw-normal">To get started, you should have:</h5>
          <ul className="list-unstyled mb-4">
            <li><i className="bi bi-check-circle-fill text-warning me-2"></i>An e-Commerce project requiring expertise in various fields</li>
            <li><i className="bi bi-check-circle-fill text-warning me-2"></i>A budget exceeding $1000</li>
            <li><i className="bi bi-check-circle-fill text-warning me-2"></i>A desire to get things done, without the hassle</li>
          </ul>
          <button className="btn btn-warning btn-lg text-white fw-normal">Get started</button>
        </div>

        {/* Hình ảnh */}
        <div className="col-md-6 text-center">
            <img
              src="/images/banners/X1.webp"
              alt="e-Commerce Project"
              className="img-fluid"
              style={{ borderRadius: '10px' }}
            />
          </div>
      </div>
    </div>
  );
}
