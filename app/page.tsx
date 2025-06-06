'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');

  useEffect(() => {
    // Initialize Bootstrap components
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const destinations = [
    {
      id: 1,
      title: "Bali Paradise",
      description: "Experience the perfect blend of culture, beaches, and luxury in Indonesia's most famous island.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=60",
      price: "From $899",
      rating: 4.8
    },
    {
      id: 2,
      title: "Paris ",
      description: "Discover the city of love, art, and fashion in the heart of France.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=60",
      price: "From $1,299",
      rating: 4.9
    },
    {
      id: 3,
      title: "Tokyo Adventure",
      description: "Immerse yourself in the unique blend of traditional and modern Japanese culture.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60",
      price: "From $1,499",
      rating: 4.7
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Travel Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60",
      text: "The best travel experience I've ever had! The team made everything seamless and unforgettable."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Adventure Seeker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
      text: "Amazing destinations and professional service. Can't wait to book my next adventure!"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Photography Lover",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60",
      text: "Perfect for capturing stunning moments. The guides knew all the best photo spots!"
    }
  ];

  const features = [
    { icon: "✈️", title: "Best Flight Deals", description: "Exclusive discounts on flights worldwide" },
    { icon: "🏨", title: "Luxury Stays", description: "Handpicked hotels for the perfect stay" },
    { icon: "🎯", title: "Local Guides", description: "Expert guides for authentic experiences" },
    { icon: "🛡️", title: "Travel Insurance", description: "Comprehensive coverage for peace of mind" }
  ];

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ 
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(to right, #000000, #1a1a1a)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#" style={{ color: '#fff' }}>🌍 Tourist Guide</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#" style={{ color: '#fff' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#destinations" style={{ color: '#fff' }}>Destinations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" style={{ color: '#fff' }}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" style={{ color: '#fff' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <div className="container-fluid p-0">
        <div className="position-relative">
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&auto=format&fit=crop&q=60")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '600px'
          }}>
            <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div className="container h-100 d-flex align-items-center">
                <div className="row">
                  <div className="col-md-6 text-white">
                    <h1 className="display-4 fw-bold mb-4">Your Journey Begins Here</h1>
                    <p className="lead mb-4">Discover the world's most breathtaking destinations and create memories that last a lifetime.</p>
                    <div className="d-flex gap-3">
                      <button className="btn btn-primary btn-lg px-5 py-3" style={{ backgroundColor: '#e74c3c', border: 'none' }}>
                        Start Your Adventure
                      </button>
                      <button className="btn btn-outline-light btn-lg px-5 py-3">
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-3">
                <div className="text-center p-4 bg-white rounded shadow-sm h-100">
                  <span className="display-4 mb-3 d-block">{feature.icon}</span>
                  <h5 style={{ color: '#2c3e50' }}>{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations with Enhanced Cards */}
      <section id="destinations" className="py-5">
        <div className="container">
          <h2 className="text-center mb-2" style={{ color: '#2c3e50' }}>Popular Destinations</h2>
          <p className="text-center text-muted mb-5">Explore our handpicked selection of amazing places</p>
          <div className="row g-4">
            {destinations.map((destination) => (
              <div key={destination.id} className="col-md-4">
                <div className="card h-100 shadow-sm hover-shadow">
                  <div style={{ height: '200px', position: 'relative' }}>
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="card-img-top"
                    />
                    <div className="position-absolute top-0 end-0 p-3">
                      <span className="badge bg-warning text-dark">
                        ⭐ {destination.rating}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: '#2c3e50' }}>{destination.title}</h5>
                    <p className="card-text text-muted">{destination.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-primary fw-bold">{destination.price}</span>
                      <a href="#" className="btn btn-outline-primary" style={{ borderColor: '#e74c3c', color: '#e74c3c' }}>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-2" style={{ color: '#2c3e50' }}>What Our Travelers Say</h2>
          <p className="text-center text-muted mb-5">Real experiences from our happy customers</p>
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3" style={{ height: '80px', width: '80px', position: 'relative', margin: '0 auto' }}>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                    <h5 className="card-title mb-1" style={{ color: '#2c3e50' }}>{testimonial.name}</h5>
                    <p className="text-muted small mb-3">{testimonial.role}</p>
                    <p className="card-text">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-3" style={{ color: '#2c3e50' }}>Stay Updated</h2>
              <p className="text-muted mb-4">Subscribe to our newsletter for exclusive travel deals and tips</p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary" style={{ backgroundColor: '#e74c3c', border: 'none' }}>
                  Subscribe
                </button>
              </div>
              <p className="text-muted small">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Enhanced Form */}
      <section id="contact" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-2" style={{ color: '#2c3e50' }}>Get in Touch</h2>
          <p className="text-center text-muted mb-5">We'd love to hear from you and help plan your next adventure</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="bg-white p-4 rounded shadow-sm">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="col-12">
                    <select 
                      className="form-select"
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                    >
                      <option value="">Select Destination</option>
                      <option value="bali">Bali</option>
                      <option value="paris">Paris</option>
                      <option value="tokyo">Tokyo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows={4} placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 py-3" style={{ backgroundColor: '#e74c3c', border: 'none' }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4" style={{ 
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(to right, #000000, #1a1a1a)',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.2)'
      }}>
        <div className="container">
          <div className="row text-white">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-3" style={{ color: '#fff' }}>Tourist Guide</h5>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Making your travel dreams come true since 2024.</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-3" style={{ color: '#fff' }}>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About Us</a></li>
                <li><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Destinations</a></li>
                <li><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="mb-3" style={{ color: '#fff' }}>Connect With Us</h5>
              <div className="d-flex gap-3">
                <a href="#" style={{ color: 'rgba(255,255,255,0.8)' }}><span className="fs-4">📱</span></a>
                <a href="#" style={{ color: 'rgba(255,255,255,0.8)' }}><span className="fs-4">📸</span></a>
                <a href="#" style={{ color: 'rgba(255,255,255,0.8)' }}><span className="fs-4">🐦</span></a>
              </div>
            </div>
          </div>
          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <p className="text-center mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>&copy; 2024 Tourist Guide. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
