import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const rillURL = "https://rill.pages.dev/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="logo-container">
          <span className="logo-text" style={{ fontFamily: 'Unbounded' }}>Rill</span>
        </div>
        
        <nav className="nav-links">
          <button className="nav-link" onClick={() => scrollToSection('hero')}>
            Home
          </button>
          <button className="nav-link" onClick={() => scrollToSection('features')}>
            Features
          </button>
          <button className="nav-link" onClick={() => scrollToSection('how-it-works')}>
            How It Works
          </button>
          <button className="nav-link" onClick={() => scrollToSection('footer')}>
            Contact Us
          </button>
          {/* <button className="btn btn-primary" onClick={() => window.open(rillURL, '_blank')}>
            Get Started
          </button> */}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          {/* Background image */}
          <div 
            className="background-image"
            style={{ backgroundImage: 'url(/rill.webp)' }}
          ></div>
          
          {/* Gradient overlay */}
          <div className="gradient-overlay"></div>
          
          {/* Content */}
          <div className="hero-content">
            <h1 className="hero-title" style={{ fontFamily: 'Unbounded' }}>
            Turn Your Web3 <span className="highlight">Vibe</span> into Reality.
            </h1>
            <p className="hero-subtitle">
            Describe your vision in plain language. Rill generates the smart contracts and frontend, ready to launch on multiple blockchains in seconds.
            </p>
            <div className="button-group">
              <button className="btn btn-primary btn-large" onClick={() => window.open(rillURL, '_blank')}>
                Get Started
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="features-section">
          <div className="section-container">
            <h2 className="section-title" style={{ fontFamily: 'Unbounded' }}>
              Build Faster with Powerful Features
            </h2>
            
            {/* Feature 1 - Image right */}
            <div className="feature-row">
              <div className="feature-content">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="feature-title" style={{ fontFamily: 'Unbounded' }}>
                  AI-Powered Code Generation
                </h3>
                <p className="feature-description">
                  Simply describe what you want to build, and our AI will generate 
                  production-ready code for your Web3 applications. Skip the boilerplate
                  and focus on what makes your dApp unique.
                </p>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Smart contract generation</span>
                  </li>
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Frontend scaffolding</span>
                  </li>
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Web3 integrations</span>
                  </li>
                </ul>
              </div>
              <div className="feature-image">
                <img 
                  src="/rill_pr1.webp" 
                  alt="AI-Powered Code Generation" 
                  className="feature-img"
                />
              </div>
            </div>
            
            {/* Feature 2 - Image left */}
            <div className="feature-row feature-row-reverse">
              <div className="feature-content">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="feature-title" style={{ fontFamily: 'Unbounded' }}>
                  One-Click Deployment
                </h3>
                <p className="feature-description">
                  Deploy your applications to multiple blockchain networks with a single click.
                  We handle the complex deployment process so you don't have to worry about gas,
                  transaction signing, or network configurations.
                </p>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Support for multiple chains</span>
                  </li>
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Automatic gas optimization</span>
                  </li>
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Contract verification</span>
                  </li>
                </ul>
              </div>
              <div className="feature-image">
                <img 
                  src="/rill_pr2.webp" 
                  alt="One-Click Deployment" 
                  className="feature-img"
                />
              </div>
            </div>
            
            {/* Feature 3 - Image right */}
            <div className="feature-row">
              <div className="feature-content">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="feature-title" style={{ fontFamily: 'Unbounded' }}>
                  Decentralized Collaboration
                </h3>
                <p className="feature-description">
                  Share your projects using IPFS for truly decentralized collaboration.
                  Work with team members anywhere in the world while maintaining full
                  ownership of your code and data.
                </p>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>IPFS integration</span>
                  </li>
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Permissionless sharing</span>
                  </li>
                  <li className="feature-list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Real-time updates</span>
                  </li>
                </ul>
              </div>
              <div className="feature-image">
                <img 
                  src="/rill_pr3.webp" 
                  alt="Decentralized Collaboration" 
                  className="feature-img"
                />
              </div>
            </div>
          </div>
        </section>
        
         {/* How It Works Section */}
         <section id="how-it-works" className="how-it-works-section" >
          <div className="how-it-works-container">
            <h2 className="how-it-works-title" style={{fontFamily: 'Unbounded', color: 'black'}}>How It Works</h2>
            
            <div className="steps-container">
              {/* Connecting line */}
              <div className="connecting-line"></div>
              
              <div className="step" style={{backgroundColor: 'black', color: 'white'}}>
                <div className="step-number" style={{fontFamily: 'Unbounded'}}>1</div>
                <h3 className="step-title" style={{fontFamily: 'Unbounded', color: 'white'}}>Connect Wallet</h3>
                <p className="step-description" style={{color: 'rgba(219, 197, 197, 0.719)'}}>Connect your Web3 wallet to get started and authenticate securely.</p>
              </div>
              
              <div className="step" style={{backgroundColor: 'black', color: 'white'}}>
                <div className="step-number" style={{fontFamily: 'Unbounded'}}>2</div>
                <h3 className="step-title" style={{fontFamily: 'Unbounded', color: 'white'}}>Describe Your dApp</h3>
                <p className="step-description" style={{color: 'rgba(219, 197, 197, 0.719)'}}>Tell Rill what you want to build using natural language prompts.</p>
              </div>
              
              <div className="step" style={{backgroundColor: 'black', color: 'white'}}>
                <div className="step-number" style={{fontFamily: 'Unbounded'}}>3</div>
                <h3 className="step-title" style={{fontFamily: 'Unbounded', color: 'white'}}>Deploy & Share</h3>
                <p className="step-description" style={{color: 'rgba(219, 197, 197, 0.719)'}}>Deploy to your chosen blockchain and share with collaborators via IPFS.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Combined CTA and Footer section with shared background */}
      <div className="cta-section">
        {/* Shared background image */}
        <div 
          className="footer-bg"
          style={{ backgroundImage: 'url(/rill_footer.webp)' }}
        ></div>
        
        {/* CTA Section */}
        <section className="cta-container">
          <div className="cta-card">
            <h2 className="cta-title" style={{ fontFamily: 'Unbounded' }}>
              Ready to build your Web3 dApp?
            </h2>
            <p className="cta-description">
              Connect your wallet and start building in minutes.
            </p>
            <button className="cta-button" onClick={() => window.open(rillURL, '_blank')}>
              Get Started
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="footer-container">
            {/* Footer top section */}
            <div className="footer-top">
              <div className="footer-logo">
                <span className="footer-logo-text">
                  Rill
                </span>
              </div>
              
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6.75V15m6-6v8.25M15 15l3-3-3-3M9 15l-3-3 3-3"></path>
                    <rect width="18" height="18" x="3" y="3" rx="5" ry="5"></rect>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Footer bottom section */}
            <div className="footer-bottom">
              <p className="copyright">
                © {new Date().getFullYear()} Rill. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
