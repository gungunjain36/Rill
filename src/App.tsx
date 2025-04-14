import { useState, useEffect } from 'react';
import './App.css';

// Define the possible tab names as a type for better type safety
type FeatureTab = 'customerExperience' | 'dedicatedInfrastructure' | 'operatingProcedure';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage the active feature tab
  const [activeFeatureTab, setActiveFeatureTab] = useState<FeatureTab>('customerExperience');
  const rillURL = "https://rill.pages.dev/"; // Replace with your actual Get Started URL if different

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
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    alert(`Thank you! ${email} has been added to our waitlist.`);
    setEmail('');
  };
  

  return (
    <div className="app-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="logo-container">
          <span className="logo-text" style={{ fontFamily: 'Unbounded' }}>Rill</span>
        </div>

        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
          <button className="btn btn-primary" onClick={() => window.open(rillURL, '_blank')}>
            Get Started
          </button>
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
            <div className="waitlist-form">
              <form onSubmit={handleWaitlistSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="waitlist-input"
                />
                <button type="submit" className="btn btn-primary btn-large">
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* === Features Section - Updated === */}
        <section id="features" className="features-section new-features-section">
          <div className="section-container">
             {/* Introductory Text */}
            <div className="feature-intro-text">
              <p className="feature-intro-subtitle">Rill works with everyone.</p>
              <h2 className="feature-intro-title">Build Faster with Powerful Features</h2>
              
            </div>

             {/* Tab Container */}
            <div className="feature-tab-container">
               {/* Tab Navigation */}
              <div className="feature-tabs">
                <button
                  className={`feature-tab-button ${activeFeatureTab === 'customerExperience' ? 'active' : ''}`}
                  onClick={() => setActiveFeatureTab('customerExperience')}
                >
                  AI-Powered Code Generation
                </button>
                <button
                  className={`feature-tab-button ${activeFeatureTab === 'dedicatedInfrastructure' ? 'active' : ''}`}
                  onClick={() => setActiveFeatureTab('dedicatedInfrastructure')}
                >
                  One-Click Deployment
                </button>
                <button
                  className={`feature-tab-button ${activeFeatureTab === 'operatingProcedure' ? 'active' : ''}`}
                  onClick={() => setActiveFeatureTab('operatingProcedure')}
                >
                  Decentralized Collaboration
                </button>
              </div>

               {/* Tab Content Area */}
              <div className="feature-tab-content-wrapper">
                {/* Customer Experience Content */}
                {activeFeatureTab === 'customerExperience' && (
                  <div className="feature-tab-content">
                    <div className="feature-tab-text">
                      <h3 className="feature-tab-title">Say & Rill will do it.</h3>
                      <p className="feature-tab-description">
                      Simply describe what you want to build, and our AI will generate production-ready code for your Web3 applications. Skip the boilerplate and focus on what makes your dApp unique.
                      </p>
                    </div>
                    <div className="feature-tab-graphic">
                      {/* Placeholder for the pixel graphic */}
                      <img src="/rill_pr1.webp" alt="Customer Experience Graphic" className="feature-graphic-img"/>
                    </div>
                  </div>
                )}

                {/* Dedicated Infrastructure Content */}
                {activeFeatureTab === 'dedicatedInfrastructure' && (
                  <div className="feature-tab-content">
                     <div className="feature-tab-text">
                       <h3 className="feature-tab-title">Deploy in seconds.</h3>
                       <p className="feature-tab-description">
                       Deploy your applications to multiple blockchain networks with a single click. We handle the complex deployment process so you don't have to worry about gas, transaction signing, or network configurations.
                       </p>
                       
                    </div>
                    <div className="feature-tab-graphic">
                      {/* Placeholder for the hash graphic */}
                       <img src="/rill_pr3.webp" alt="Infrastructure Graphic" className="feature-graphic-img"/>
                    </div>
                  </div>
                )}

                {/* Operating Procedure Content (Placeholder) */}
                {activeFeatureTab === 'operatingProcedure' && (
                   <div className="feature-tab-content">
                    <div className="feature-tab-text">
                       <h3 className="feature-tab-title">Take it in your own hands.</h3>
                       <p className="feature-tab-description">
                        Share your projects using IPFS for truly decentralized collaboration. Work with team members anywhere in the world while maintaining full ownership of your code and data.
                       </p>
                    </div>
                    <div className="feature-tab-graphic">
                      {/* Placeholder for the operating procedure graphic */}
                      <img src="/rill_pr2.webp" alt="Operating Procedure Graphic" className="feature-graphic-img"/>
                    </div>
                  </div>
                )}
              </div>

               {/* Start for Free Button Container */}
               <div className="start-free-button-container">
               </div>

            </div>
          </div>
        </section>
        {/* === End of Updated Features Section === */}


        {/* === How It Works Section - Updated === */}
        <section id="how-it-works" className="how-it-works-section-new">
            <div className="how-it-works-container-new">
                {/* Left Side */}
                <div className="how-it-works-left">
                    <p className="how-it-works-subtitle">How Rill is built.</p>
                    <h2 className="how-it-works-main-title">
                        How it works?
                    </h2>
                    <p className="how-it-works-description">
                    Rill is an AI-powered platform that transforms Web3 development from concept to functional dApp in seconds.
                    </p>

                </div>

                {/* Right Side - Feature Grid */}
                <div className="how-it-works-right">
                    <div className="feature-grid">
                        {/* Feature Box 1 */}
                        <div className="feature-box">
                            <h4 className="feature-box-title" style={{fontFamily: 'Unbounded'}}>
                                <span className="feature-icon-square icon-yellow" ></span>
                                Connect your wallet
                            </h4>
                            <p className="feature-box-description">
                            Connect your Web3 wallet to get started and authenticate securely.
                            </p>
                        </div>
                        {/* Feature Box 2 */}
                        <div className="feature-box">
                             <h4 className="feature-box-title" style={{fontFamily: 'Unbounded'}}>
                                <span className="feature-icon-square icon-pink"></span>
                                Describe Your dApp
                            </h4>
                            <p className="feature-box-description">
                            Tell Rill what you want to build using natural language prompts.
                            </p>
                        </div>
                        {/* Feature Box 3 */}
                        <div className="feature-box">
                             <h4 className="feature-box-title" style={{fontFamily: 'Unbounded'}}>
                                <span className="feature-icon-square icon-purple"></span>
                                Store in vault
                            </h4>
                            <p className="feature-box-description">
                                Store your project files in our secure vault for easy access and collaboration.
                            </p>
                        </div>
                        {/* Feature Box 4 */}
                        <div className="feature-box">
                            <h4 className="feature-box-title" style={{fontFamily: 'Unbounded'}}>
                                <span className="feature-icon-square icon-orange"></span>
                                Deploy & Share
                            </h4>
                            <p className="feature-box-description">
                            Deploy to your chosen blockchain and share with collaborators via IPFS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* === End of Updated How It Works Section === */}

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