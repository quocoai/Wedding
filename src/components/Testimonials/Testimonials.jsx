import { useState } from 'react';
import './Testimonials.css';

const REVIEWS = [
  {
    id: 1,
    name: 'Anh & Khoa',
    category: 'Cưới',
    rating: 5,
    text: 'DORAStudio đã biến ngày cưới của chúng tôi thành một cuốn phim đầy cảm xúc. Mỗi khung hình đều tuyệt đẹp, và chúng tôi đã rơi nước mắt hạnh phúc khi xem lại album. Hoàn toàn xứng đáng!',
    avatar: '💑',
    color: '#2d1f0e',
  },
  {
    id: 2,
    name: 'Thu Hương',
    category: 'Chân dung',
    rating: 5,
    text: 'Tôi từng rất hồi hộp trước ống kính, nhưng DORA đã giúp tôi cảm thấy thật sự thoải mái. Bộ ảnh chân dung cô ấy chụp là những bức ảnh đẹp nhất tôi từng có về chính mình.',
    avatar: '👩',
    color: '#1a2030',
  },
  {
    id: 3,
    name: 'Phong & Linh',
    category: 'Gia đình',
    rating: 5,
    text: 'Buổi chụp cho em bé sơ sinh của chúng tôi rất nhẹ nhàng, chuyên nghiệp và ấm áp. Những bức ảnh đẹp như tác phẩm nghệ thuật, đến mức chúng tôi đã phóng lớn treo trong phòng khách.',
    avatar: '👨‍👩‍👧',
    color: '#0e2d1a',
  },
  {
    id: 4,
    name: 'Café Lumière',
    category: 'Thương mại',
    rating: 5,
    text: 'Chúng tôi hợp tác với DORAStudio cho chiến dịch ra mắt thương hiệu. Kết quả vượt xa mong đợi, lượng tương tác tăng gấp ba sau khi đăng bộ ảnh này.',
    avatar: '☕',
    color: '#2d2010',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Câu chuyện khách hàng</span>
          <h2 className="section-title section-title--light">Khách hàng nói gì về chúng tôi</h2>
          <div className="divider divider--center" />
        </div>

        <div className="testimonials__card">
          <div className="testimonials__avatar" style={{ background: review.color }}>
            <span>{review.avatar}</span>
          </div>
          <div className="testimonials__stars">
            {'★'.repeat(review.rating)}
          </div>
          <blockquote className="testimonials__quote">&ldquo;{review.text}&rdquo;</blockquote>
          <div className="testimonials__client">
            <strong>{review.name}</strong>
            <span>Buổi chụp {review.category.toLowerCase()}</span>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="testimonials__dots" role="tablist">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`Đánh giá của ${r.name}`}
              className={`testimonials__dot${i === active ? ' testimonials__dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Mini previews */}
        <div className="testimonials__thumbs">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              className={`testimonials__thumb${i === active ? ' testimonials__thumb--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={r.name}
            >
              <span
                className="testimonials__thumb-avatar"
                style={{ background: r.color }}
              >
                {r.avatar}
              </span>
              <span className="testimonials__thumb-name">{r.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
