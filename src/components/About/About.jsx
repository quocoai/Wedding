import './About.css';
import staff1 from '../../assets/pictures/Staffs/1.jpg';
import staff2 from '../../assets/pictures/Staffs/2.jpg';
import staff3 from '../../assets/pictures/Staffs/3.jpg';

const TEAM = [
  {
    name: 'Ly Hung',
    role: 'Nhiếp ảnh gia chính',
    bio: '15 kinh nghiệm với nghề, chuyên ghi lại những câu chuyện tình yêu, gia đình và thương hiệu với phong cách ấm áp, tự nhiên.',
    emoji: '👩‍🎨',
    color: '#2d1f0e',
    avatar: staff1,
  },
  {
    name: 'Thanh Phương',
    role: 'Chuyên gia trang điểm',
    bio: 'Được đào tạo chuyên nghiệp, Thanh Phương mang đến chất điện ảnh cho từng nghi lễ và tiệc cưới, bạn sẽ là cô dâu dễ thương nhất trong ngày trọng đại.',
    emoji: '🤵',
    color: '#1a2030',
    avatar: staff2,
  },
  {
    name: 'Gấu',
    role: 'Cổ vũ bố mẹ',
    bio: 'Đợi lớn lên chưa biết làm gì, nhưng bây giờ thì Gấu là người cổ vũ bố mẹ nhiệt tình nhất, luôn mang đến niềm vui và tiếng cười cho mọi người.',
    emoji: '💡',
    color: '#0e2d1a',
    avatar: staff3,
  },
];

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container">
        {/* Team */}
        <div className="about__team-header">
          <span className="section-label">Gặp gỡ đội ngũ</span>
          <h2 className="section-title">Những nghệ sĩ đứng sau ống kính</h2>
          <div className="divider" />
        </div>

        <div className="about__team-grid">
          {TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-card__avatar" style={{ background: member.color }}>
                <img src={member.avatar} alt={member.name} />
              </div>
              <div className="team-card__info">
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
