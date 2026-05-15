import './App.css'

const menuItems = {
  dosas: [
    { name: 'Plain Dosa', price: 40, desc: 'Crispy thin rice crepe' },
    { name: 'Masala Dosa', price: 60, desc: 'Stuffed with spiced potato filling' },
    { name: 'Onion Dosa', price: 55, desc: 'Topped with caramelized onions' },
    { name: 'Ghee Dosa', price: 65, desc: 'Drizzled with pure desi ghee' },
    { name: 'Rava Dosa', price: 70, desc: 'Crispy semolina crepe with pepper & curry leaves' },
    { name: 'Set Dosa', price: 55, desc: 'Soft fluffy dosa served in sets of three' },
    { name: 'Butter Dosa', price: 60, desc: 'Golden crispy with generous butter' },
    { name: 'Paper Dosa', price: 75, desc: 'Extra thin & crunchy giant dosa' },
  ],
  idlis: [
    { name: 'Idli (2 pcs)', price: 35, desc: 'Soft steamed rice cakes with sambar & chutney' },
    { name: 'Mini Idli', price: 50, desc: '8 bite-sized idlis in sambar' },
    { name: 'Ghee Idli', price: 50, desc: 'Steamed idli finished with pure ghee' },
    { name: 'Rava Idli', price: 55, desc: 'Semolina idli with cashew & mustard' },
    { name: 'Kanchipuram Idli', price: 60, desc: 'Spiced idli with cumin, pepper & ginger' },
  ],
  sides: [
    { name: 'Sambar', price: 20, desc: 'Homestyle lentil vegetable stew' },
    { name: 'Coconut Chutney', price: 15, desc: 'Fresh ground coconut with green chillies' },
    { name: 'Tomato Chutney', price: 15, desc: 'Tangy roasted tomato chutney' },
    { name: 'Filter Coffee', price: 25, desc: 'Traditional South Indian drip coffee' },
    { name: 'Masala Tea', price: 20, desc: 'Spiced ginger cardamom tea' },
  ],
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-icon">🌿</span>
        <span className="brand-name">Sreevedha</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400&q=80"
      >
        <source src="https://videos.pexels.com/video-files/3994842/3994842-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">100% Pure Vegetarian</div>
        <h1 className="hero-title">Sreevedha</h1>
        <p className="hero-subtitle">Authentic South Indian Flavours</p>
        <p className="hero-tagline">
          Taste the tradition — handcrafted dosas, fluffy idlis &amp; filter coffee
          served with love in the heart of Westhill, Calicut.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="#contact" className="btn btn-outline">Find Us</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">15+</span>
            <span className="stat-label">Dosa Varieties</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Vegetarian</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">Fresh</span>
            <span className="stat-label">Daily Batter</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <div className="menu-card-body">
        <div className="menu-card-top">
          <span className="menu-item-name">{item.name}</span>
          <span className="menu-item-price">&#8377;{item.price}</span>
        </div>
        <p className="menu-item-desc">{item.desc}</p>
      </div>
    </div>
  )
}

function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Menu</span>
          <h2>Fresh Every Morning</h2>
          <p>Batter ground fresh daily for the perfect texture and taste</p>
        </div>

        <div className="menu-category">
          <h3 className="category-title"><span>🥞</span> Dosas</h3>
          <div className="menu-grid">
            {menuItems.dosas.map(item => <MenuCard key={item.name} item={item} />)}
          </div>
        </div>

        <div className="menu-category">
          <h3 className="category-title"><span>🍚</span> Idlis</h3>
          <div className="menu-grid">
            {menuItems.idlis.map(item => <MenuCard key={item.name} item={item} />)}
          </div>
        </div>

        <div className="menu-category">
          <h3 className="category-title"><span>☕</span> Sides &amp; Beverages</h3>
          <div className="menu-grid">
            {menuItems.sides.map(item => <MenuCard key={item.name} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <span className="section-tag">Our Story</span>
          <h2>A Legacy of Pure Vegetarian Goodness</h2>
          <p>
            Nestled in the vibrant neighbourhood of Westhill, Calicut, Sreevedha has
            been serving authentic South Indian breakfast and meals for years. We
            believe in the purity of ingredients and the tradition of taste passed
            down through generations.
          </p>
          <p>
            Every dosa is made from batter fermented overnight, every idli is steamed
            to perfection, and every cup of filter coffee is brewed with care. We are
            proud to be a 100% vegetarian establishment — because wholesome food
            is our philosophy.
          </p>
          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🌿</span>
              <div>
                <strong>Pure Vegetarian</strong>
                <p>No eggs, no meat — ever.</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🤲</span>
              <div>
                <strong>Handcrafted Daily</strong>
                <p>Fresh batter ground every morning.</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">💚</span>
              <div>
                <strong>Hygienic Kitchen</strong>
                <p>Cleanliness is our cornerstone.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-img-grid">
            {/* Tall main image — left column */}
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80"
                alt="Crispy masala dosa"
              />
              <span className="img-label">Masala Dosa</span>
            </div>
            {/* 3 stacked images — right column */}
            <div className="about-img-side">
              <div className="about-img-sm">
                <img
                  src="https://images.unsplash.com/photo-1683533678036-46ec6a0163d9?w=400&q=80"
                  alt="Vada with coconut chutney"
                />
                <span className="img-label">Parippu Vada</span>
              </div>
              <div className="about-img-sm">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80"
                  alt="Soft steamed idli with sambar"
                />
                <span className="img-label">Idli Set</span>
              </div>
              <div className="about-img-sm">
                <img
                  src="https://images.unsplash.com/photo-1657196118354-f25f29fe636d?w=400&q=80"
                  alt="Uzhunnu vada medu vada"
                />
                <span className="img-label"> Vada Set </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visit Us</span>
          <h2>Find Sreevedha</h2>
          <p>Come hungry, leave happy</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>Westhill, Kozhikode (Calicut)<br />Kerala — 673005</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🕐</span>
              <div>
                <h4>Timings</h4>
                <p>Monday – Sunday<br />7:30 AM – 10:30 PM</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 9961487466</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🅿️</span>
              <div>
                <h4>Parking</h4>
                <p>Free parking available near the entrance</p>
              </div>
            </div>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <span className="map-pin">📍</span>
              <strong>Sreevedha</strong>
              <p>Near Thayattu ayyappa temple, Chungam, Westhill, Kozhikode, Kerala</p>
              <a
                href="https://maps.google.com/?q=Westhill+Kozhikode+Kerala"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-block', marginTop: '1rem' }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-icon">🌿</span>
          <span className="brand-name">Sreevedha</span>
        </div>
        <p className="footer-tagline">Pure Vegetarian • Chungam, Westhill, Calicut</p>
        <p className="footer-copy">© {new Date().getFullYear()} Sreevedha. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
