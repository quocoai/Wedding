import { useState } from 'react';
import './Portfolio.css';

const CATEGORIES = ['Tất cả', 'Ngoại cảnh', 'Lễ cưới', 'Trang điểm', 'Gia Đình', 'Kỷ Yếu'];

const outsiteModules = import.meta.glob('../../assets/pictures/Outsite/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const weddingModules = import.meta.glob('../../assets/pictures/Wedding/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const familyModules = import.meta.glob('../../assets/pictures/Family/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const makeupModules = import.meta.glob('../../assets/pictures/Makeup/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const memoryStudentModules = import.meta.glob('../../assets/pictures/MemoryStudent/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const buildCategoryPhotos = (modules, category, prefix, largeFirst = false) => Object.entries(modules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => {
    const fileName = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? `${prefix}-${index + 1}`;

    return {
      id: `${prefix}-${index + 1}`,
      category,
      title: ``,
      cols: largeFirst && index === 0 ? 2 : 1,
      rows: largeFirst && index === 0 ? 2 : 1,
      src,
      tone: fileName,
    };
  });

const OUTSITE_PHOTOS = buildCategoryPhotos(outsiteModules, 'Ngoại cảnh', 'outsite', true);
const WEDDING_PHOTOS = buildCategoryPhotos(weddingModules, 'Lễ cưới', 'wedding', true);
const FAMILY_PHOTOS = buildCategoryPhotos(familyModules, 'Gia Đình', 'family');
const MAKEUP_PHOTOS = buildCategoryPhotos(makeupModules, 'Trang điểm', 'makeup');
const MEMORY_STUDENT_PHOTOS = buildCategoryPhotos(memoryStudentModules, 'Kỷ Yếu', 'memory-student');

const PHOTOS = [
  { id: 8, category: 'Studio', title: 'Khung hình đôi uyên ương', cols: 1, rows: 1, color: '#6e5b54' },
  ...OUTSITE_PHOTOS,
  ...WEDDING_PHOTOS,
  ...FAMILY_PHOTOS,
  ...MAKEUP_PHOTOS,
  ...MEMORY_STUDENT_PHOTOS,
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'Tất cả'
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section className="portfolio section-pad" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cùng chiêm ngưỡng những mẫu ảnh cưới từ Dora Studio</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Mỗi cô dâu đều xứng đáng với chiếc váy đẹp nhất trong ngày hạnh phúc của mình. Bộ sưu tập váy cưới của chúng tôi là sự kết hợp giữa vẻ đẹp tinh tế, chất liệu cao cấp và những thiết kế thời thượng,
            giúp bạn kể nên câu chuyện tình yêu theo cách riêng đầy cảm xúc.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio__filters" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`portfolio__filter-btn${activeCategory === cat ? ' portfolio__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio__grid">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="portfolio__item"
              style={{
                gridColumn: `span ${photo.cols}`,
                gridRow: `span ${photo.rows}`,
              }}
              onClick={() => setLightbox(photo)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(photo)}
              aria-label={`Xem ${photo.title}`}
            >
              <div
                className="portfolio__img-placeholder"
                style={photo.src
                  ? {
                    backgroundImage: `linear-gradient(180deg, rgba(37, 23, 17, 0.16) 0%, rgba(37, 23, 17, 0.44) 100%), url(${photo.src})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }
                  : { background: photo.color }}
              >
                <div className="portfolio__placeholder-inner">
                  <span className="portfolio__placeholder-icon">📷</span>
                  <span className="portfolio__placeholder-title">{photo.title}</span>
                  <span className="portfolio__placeholder-cat">{photo.category}</span>
                </div>
              </div>
              <div className="portfolio__item-overlay">
                <span className="portfolio__item-cat">{photo.category}</span>
                <h3 className="portfolio__item-title">{photo.title}</h3>
                <span className="portfolio__item-zoom">⤢</span>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__footer">
          <a href="#contact" className="btn btn--dark">
            Đặt lịch chụp bộ ảnh cưới tương tự
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Đóng lightbox"
          >
            ✕
          </button>
          <div
            className="lightbox__img"
            style={lightbox.src
              ? {
                backgroundImage: `linear-gradient(180deg, rgba(20, 12, 8, 0.08) 0%, rgba(20, 12, 8, 0.34) 100%), url(${lightbox.src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }
              : { background: lightbox.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="lightbox__icon">📷</span>
            <p className="lightbox__title">{lightbox.title}</p>
            <p className="lightbox__cat">{lightbox.category}</p>
          </div>
        </div>
      )}
    </section>
  );
}
