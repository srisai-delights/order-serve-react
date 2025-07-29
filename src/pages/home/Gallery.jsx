import React from 'react';
import './Gallery.css';

const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', alt: 'Delicious meal 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80', alt: 'Fresh ingredients' },
    { id: 3, src: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=800&q=80', alt: 'Kitchen chefs' },
    { id: 4, src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80', alt: 'Tasty dessert' },
    { id: 5, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80', alt: 'Happy customers' },
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <header className="gallery-header">
                <h1>Our Gallery</h1>
                <p>Explore delicious moments and behind-the-scenes at SriSai Delights.</p>
            </header>

            <section className="gallery-grid">
                {images.map(image => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Gallery;
