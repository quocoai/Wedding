import { useState } from 'react';
import './Hero.css';
import heroContentBanner from '../../assets/pictures/5.png';

const videoModules = import.meta.glob('../../assets/videos/*.{mp4,webm,mov,m4v}', {
  eager: true,
  import: 'default',
});

const VIDEO_SHOWCASE = Object.entries(videoModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? `video-${index + 1}`;

    return {
      id: index + 1,
      src,
      title: `DORA Studio - Chúc Mừng Hạnh Phúc`,
      tone: fileName,
    };
  });

const PETALS = [
  { left: '6%', delay: '0s', duration: '15s', size: '20px', opacity: 0.7 },
  { left: '16%', delay: '3s', duration: '18s', size: '14px', opacity: 0.48 },
  { left: '28%', delay: '1.5s', duration: '16s', size: '18px', opacity: 0.58 },
  { left: '44%', delay: '5s', duration: '20s', size: '22px', opacity: 0.42 },
  { left: '58%', delay: '2.2s', duration: '17s', size: '16px', opacity: 0.54 },
  { left: '72%', delay: '6s', duration: '19s', size: '24px', opacity: 0.38 },
  { left: '84%', delay: '4s', duration: '14s', size: '15px', opacity: 0.6 },
];

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(VIDEO_SHOWCASE[0] ?? null);
  const [zoomedVideo, setZoomedVideo] = useState(null);

  const featuredVideo = activeVideo ?? VIDEO_SHOWCASE[0];

  return (
    <>
      <section className="hero" id="home">
        {/* Background layers */}
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__petals" aria-hidden="true">
          {PETALS.map((petal, index) => (
            <span
              key={`${petal.left}-${index}`}
              className="hero__petal"
              style={{
                left: petal.left,
                animationDelay: petal.delay,
                animationDuration: petal.duration,
                width: petal.size,
                height: `calc(${petal.size} * 0.72)`,
                opacity: petal.opacity,
              }}
            />
          ))}
        </div>

        <div
          className="container hero__content"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(252, 247, 242, 0.86) 0%, rgba(252, 247, 242, 0.62) 38%, rgba(61, 38, 26, 0.34) 100%), url(${heroContentBanner})`,
          }}
        >
          <div className="hero__videos" aria-label="Danh sách video giới thiệu mẫu váy cưới">
            <div className="hero__video-featured">
              <div className="hero__video-screen">
                <span className="hero__video-badge">Dora-Studio</span>
                {featuredVideo ? (
                  <video
                    key={featuredVideo.src}
                    className="hero__video-player"
                    src={featuredVideo.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : null}
                <button
                  className="hero__video-zoom"
                  type="button"
                  onClick={() => setZoomedVideo(featuredVideo)}
                  aria-label="Phóng to video nổi bật"
                >
                  Phóng to
                </button>
                <div className="hero__video-meta">
                  <strong>{featuredVideo?.title ?? 'Bo suu tap bridal 2026'}</strong>
                  <span>{featuredVideo?.note ?? 'Teaser quay doc cho landing page va man hinh trinh chieu tai studio'}</span>
                </div>
              </div>
            </div>

            <div className="hero__video-list">
              {VIDEO_SHOWCASE.map((video) => (
                <article
                  className={`hero__video-card${featuredVideo?.id === video.id ? ' hero__video-card--active' : ''}`}
                  key={video.id}
                >
                  <button
                    type="button"
                    className="hero__video-card-button"
                    onClick={() => setActiveVideo(video)}
                    aria-label={`Chọn ${video.title}`}
                  >
                    <div className="hero__video-thumb">
                      <video
                        className="hero__video-thumb-player"
                        src={video.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      <span className="hero__video-length">Video {video.id}</span>
                      <span className="hero__video-tone">{video.tone}</span>
                    </div>
                    <div className="hero__video-info">
                      <h3>{video.title}</h3>
                      <p>{video.note}</p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="hero__copy">
            <span className="section-label hero__label">Video giới thiệu mẫu áo cưới</span>
            <p className="hero__subtitle">
             Bộ sưu tập váy cưới của DORA được tuyển chọn từ những thiết kế tinh tế và hiện đại, 
             tôn lên vẻ đẹp thanh lịch của mỗi cô dâu. Từ phong cách công chúa lộng lẫy,
             tối giản sang trọng đến quyến rũ hiện đại, mỗi chiếc váy đều được chăm chút
               trong từng đường may để giúp bạn tự tin tỏa sáng và lưu giữ những khoảnh khắc hạnh phúc nhất của cuộc đời.
            </p>
            <div className="hero__actions">
              <a href="#portfolio" className="btn btn--primary">Xem ảnh cưới đã chụp</a>
              <a href="#contact" className="btn btn--outline">Đặt lịch quay mẫu váy</a>
            </div>

            <div className="hero__stats">
              {[
                { value: String(VIDEO_SHOWCASE.length), label: 'Video trong thu muc' },
                { value: '4K', label: 'Chuẩn quay quảng cáo' },
                { value: '72h', label: 'Thời gian bàn giao nhanh' },
              ].map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a href="#portfolio" className="hero__scroll-hint" aria-label="Cuộn xuống khu ảnh cưới">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">Ảnh cưới</span>
        </a>
      </section>

      {zoomedVideo ? (
        <div
          className="hero__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={zoomedVideo.title}
          onClick={() => setZoomedVideo(null)}
        >
          <button
            type="button"
            className="hero__lightbox-close"
            onClick={() => setZoomedVideo(null)}
            aria-label="Đóng video phóng to"
          >
            ✕
          </button>
          <div className="hero__lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <video
              className="hero__lightbox-video"
              src={zoomedVideo.src}
              controls
              autoPlay
              playsInline
            />
            <div className="hero__lightbox-meta">
              <strong>{zoomedVideo.title}</strong>
              <span>{zoomedVideo.note}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
