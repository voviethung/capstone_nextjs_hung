
export default function VideoPlayer() {
  return (
    <div className="container my-4">
      <div className="ratio ratio-16x9">
        <video controls poster="/images/video-poster.png" style={{ width: '100%', height: 'auto' }}>
          <source src="/videos/How-Fiverr-Works-EN-Subs-16x9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
