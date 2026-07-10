import { useState } from 'react';
import './Contact.css';

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
};

const SERVICES = [
  'Chụp chân dung',
  'Chụp ảnh cưới',
  'Em bé sơ sinh & gia đình',
  'Thương mại & sản phẩm',
  'Sự kiện & tốt nghiệp',
  'Du lịch & tạp chí',
  'Dịch vụ khác',
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, POST to your backend / email service here
    setSubmitted(true);
    setForm(INITIAL);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="contact section-pad" id="contact">
      <div className="container">
        <div className="contact__layout">
          {/* Info panel */}
          <div className="contact__info">
            <span className="section-label">Liên hệ với chúng tôi</span>
            <h2 className="section-title">Cùng nhau tạo nên khoảnh khắc đẹp</h2>
            <div className="divider" />

            <div className="contact__details">
              {[
                { icon: '📍', label: 'Studio', value: '290 - Lê Lợi - Xã Hương Sơn - Hà Tĩnh' },
                { icon: '📞', label: 'Điện thoại', value: '0868674992' },
                { icon: '✉️', label: 'Email', value: 'Hungfphoto@gmail.com' },
                { icon: '🕐', label: 'Giờ làm việc', value: 'Thứ Hai - Thứ Bảy: 7:00 - 21:00' },
              ].map((item) => (
                <div className="contact__detail" key={item.label}>
                  <span className="contact__detail-icon">{item.icon}</span>
                  <div>
                    <span className="contact__detail-label">{item.label}</span>
                    <p className="contact__detail-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__social">
              {['Instagram', 'Facebook', 'Pinterest'].map((s) => (
                <a key={s} href="#contact" className="contact__social-link">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>Gửi tin nhắn thành công!</h3>
                <p>Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Họ và tên *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nguyễn Quốc Oai"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Địa chỉ email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="quocoai24@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+84 90 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="service">Dịch vụ *</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Chọn một dịch vụ...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="date">Ngày mong muốn</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Nội dung *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Hãy chia sẻ ý tưởng, yêu cầu đặc biệt hoặc câu hỏi của bạn..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn--primary contact__submit">
                  Gửi yêu cầu →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
