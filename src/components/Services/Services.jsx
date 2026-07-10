import './Services.css';

const SERVICES = [
  {
    icon: '👤',
    title: 'Chụp chân dung',
    description:
      'Ảnh chân dung chuyên nghiệp, xây dựng thương hiệu cá nhân và bộ ảnh nghệ thuật được thiết kế để làm nổi bật phong cách riêng của bạn.',
  },
  {
    icon: '💍',
    title: 'Chụp ảnh cưới',
    description:
      'Đồng hành trọn ngày để ghi lại mọi cung bậc cảm xúc, từ ánh nhìn đầu tiên đến điệu nhảy cuối cùng trong ngày trọng đại của bạn.',
  },
  {
    icon: '👶',
    title: 'Em bé sơ sinh & gia đình',
    description:
      'Buổi chụp nhẹ nhàng, an toàn cho trẻ sơ sinh cùng những khung hình gia đình ấm áp để lưu giữ qua nhiều thế hệ.',
  },
  {
    icon: '🏢',
    title: 'Thương mại & sản phẩm',
    description:
      'Hình ảnh chất lượng cao cho thương hiệu, thương mại điện tử, quảng cáo và truyền thông doanh nghiệp.',
  },
  {
    icon: '🎓',
    title: 'Sự kiện & tốt nghiệp',
    description:
      'Ghi lại các cột mốc, sự kiện doanh nghiệp, tiệc trang trọng và lễ tốt nghiệp với góc nhìn sắc nét và tự nhiên.',
  },
  {
    icon: '✈️',
    title: 'Du lịch & tạp chí',
    description:
      'Chụp ngoại cảnh trong và ngoài nước cho bộ ảnh thời trang, chiến dịch du lịch và chân dung tại điểm đến.',
    price: 'Báo giá theo yêu cầu',
  },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Dịch vụ của chúng tôi</span>
          <h2 className="section-title">Gói chụp ảnh</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Dù là một bộ ảnh chân dung nhẹ nhàng hay một buổi lễ lớn, chúng tôi vẫn giữ
            nguyên sự tận tâm và chính xác trong từng khung hình.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <span className="service-card__price">{service.price}</span>
              <a href="#contact" className="service-card__cta">
                Đặt dịch vụ này →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
