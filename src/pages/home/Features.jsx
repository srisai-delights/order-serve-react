import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <header className="features-header">
        <h1>Features</h1>
        <p>
          Discover what makes SriSai Delights your best choice for food delivery
          and takeaway.
        </p>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Get your meals delivered hot and fresh in record time.</p>
        </div>
        <div className="feature-card">
          <h3>Easy Ordering</h3>
          <p>Simple and convenient online ordering system available 24/7.</p>
        </div>
        <div className="feature-card">
          <h3>Takeaway Options</h3>
          <p>Order ahead and pick up your food with no waiting time.</p>
        </div>
        <div className="feature-card">
          <h3>Fresh Ingredients</h3>
          <p>We use only the highest quality, locally sourced ingredients.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Payments</h3>
          <p>Safe and multiple payment options including swish and cash.</p>
        </div>
        <div className="feature-card">
          <h3>Customer Support</h3>
          <p>
            Our friendly support team is here to help you during working hours.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Features;
