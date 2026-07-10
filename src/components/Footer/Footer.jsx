import './Footer.css';

const LINKS = {
  'Dịch vụ': ['Chụp chân dung', 'Chụp ảnh cưới', 'Em bé sơ sinh & gia đình', 'Thương mại', 'Sự kiện'],
  'Khám phá': ['Bộ sưu tập', 'Giới thiệu', 'Đội ngũ', 'Cảm nhận khách hàng', 'Tin tức'],
  'Hỗ trợ': ['Đặt lịch chụp', 'Bảng giá', 'Câu hỏi thường gặp', 'Phiếu quà tặng', 'Liên hệ'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span>✦</span>
            <span>DORA<strong>Studio</strong></span>
          </a>
          <p className="footer__tagline">
            Kiến tạo những câu chuyện hình ảnh vượt thời gian từ năm 2026.
          </p>
          <div className="footer__social">
            {['IG', 'FB', 'PT', 'YT'].map((s) => (
              <a key={s} href="#home" className="footer__social-btn" aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([col, items]) => (
          <div className="footer__col" key={col}>
            <h4 className="footer__col-title">{col}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href="#home" className="footer__col-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} DoraStudio. Đã đăng ký mọi quyền.</p>
          <div className="footer__bottom-links">
            <a href="#home">Chính sách bảo mật</a>
            <a href="#home">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
