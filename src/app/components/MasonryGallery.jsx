
const images = [
    '/images/masonry/masonry1.webp',
    '/images/masonry/masonry2.webp',
    '/images/masonry/masonry3.webp',
    '/images/masonry/masonry4.webp',
    '/images/masonry/masonry5.webp',
    '/images/masonry/masonry6.webp',
    '/images/masonry/masonry7.webp',
    '/images/masonry/masonry8.webp',
    '/images/masonry/masonry1.webp',
    '/images/masonry/masonry2.webp',
    '/images/masonry/masonry3.webp',
    '/images/masonry/masonry4.webp',
];

export default function MasonryGallery() {
    return (
        <div className="container py-5">
            <h1 className="mb-4">Made on Fiverr</h1>
            <div className="row g-4">
                {images.map((src, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div className="card border-0">
                            <img src={src} alt={`Made on Fiverr ${index + 1}`} className="img-fluid rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
