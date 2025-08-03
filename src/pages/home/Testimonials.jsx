import './Testimonials.css';
import Vishant from '../../assets/vishant.jpg';
import Viji from '../../assets/viji.jpg';
import Sree from '../../assets/sree.jpeg';


const testimonials = [
    {
        id: 1,
        name: 'Vishant.',
        role: 'Food Lover',
        photo: Vishant,
        text: 'SriSai Delights delivers the best food fast! The taste and quality are unmatched.',
    },
    {
        id: 2,
        name: 'Viji.',
        role: 'Home Chef',
        photo: Viji,
        text: 'Ordering is so easy, and the takeaway option saves me so much time!',
    },
    {
        id: 3,
        name: 'Sree.',
        role: 'Busy Professional',
        photo: Sree,
        text: 'I love their fresh ingredients and how reliable the delivery is every time.',
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <header className="testimonials-header">
                <h1>What Our Customers Say</h1>
                <p>Real feedback from our valued SriSai Delights community.</p>
            </header>

            <section className="testimonials-list">
                {testimonials.map(({ id, name, role, photo, text }) => (
                    <div key={id} className="testimonial-card">
                        <img src={photo} alt={name} className="testimonial-photo" />
                        <div className="testimonial-content">
                            <p className="testimonial-text">"{text}"</p>
                            <p className="testimonial-name">{name}</p>
                            <p className="testimonial-role">{role}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Testimonials;
