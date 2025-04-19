import { useState, useEffect } from 'react';

// Base styles
import './App.css';

// Section styles
import './styles/section-styles/Hero.css';
import './styles/section-styles/Features.css';
import './styles/section-styles/HowItWorks.css';
import './styles/section-styles/Header.css';
import './styles/section-styles/Footer.css';
import './styles/section-styles/WhatIsRill.css';
import './styles/section-styles/WebChallenges.css';
import './styles/section-styles/Architecture.css';

// Component styles
import './styles/component-styles/Button.css';
import './styles/component-styles/CTA.css';

// Lucide icons for challenges section
import { Puzzle, Sparkles, Clock, Zap, Plug, Repeat, Twitter, Mail } from 'lucide-react';

// Toast components
import { ToastProvider, useToast } from './components/Toast';

// Supabase
import Waitlist from './utils/waitList';

// Define the possible tab names as a type for better type safety
type FeatureTab = 'customerExperience' | 'dedicatedInfrastructure' | 'operatingProcedure';

// Create a wrapped App component to use hooks inside the toast provider
function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistClosed, setWaitlistClosed] = useState(false);
  // State to manage the active feature tab
  const [activeFeatureTab, setActiveFeatureTab] = useState<FeatureTab>('customerExperience');
  const rillURL = "https://rill.pages.dev/"; 
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      setShowWaitlist(scrollPosition > window.innerHeight * 0.5 && !waitlistClosed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [waitlistClosed]);

  // Function to show waitlist when "Get Started" is clicked
  const handleGetStarted = () => {
    setShowWaitlist(true);
    setWaitlistClosed(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await Waitlist(email);
      
      if (result.success) {
        showToast(`Thank you! ${email} has been added to our waitlist.`, {
          title: 'Success',
          type: 'success',
          duration: 5000
        });
        setEmail('');
      } else {
        showToast('Sorry, there was an error adding your email to the waitlist. Please try again.', {
          title: 'Error',
          type: 'error',
          duration: 5000
        });
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      showToast('An unexpected error occurred. Please try again later.', {
        title: 'Error',
        type: 'error',
        duration: 5000
      });
    }
  };
  
  const closeWaitlist = () => {
    // Instantly hide the waitlist
    setShowWaitlist(false);
    // Set the waitlistClosed state after hiding
    setWaitlistClosed(true);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="logo-container">
          <img src="/logo.svg" alt="Rill Logo" className="logo-image" />
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
          <button className="btn btn-primary" onClick={handleGetStarted}>
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
          
          {/* Rill Text and Lottie Animation - Positioned behind mockup */}
          {/* <div className="rill-lottie-container">
            <h1 className="rill-background-text" style={{ fontFamily: 'Unbounded' }}>Rill</h1>
            <div className="lottie-animation">
              <DotLottieReact
                src="/Hero.json"
                loop
                autoplay
              />
            </div>
          </div> */}

          {/* Content */}
          <div className="hero-content">
            <span className="hero-greeting">Gm from Rill</span>
            <h1 className="hero-title" style={{ fontFamily: 'Unbounded' }}>
              Go from Idea to <span className="highlight"> On-Chain in Minutes.</span>
            </h1>
            
            {/* Mockup Image */}
            <div className="mockup-container">
              <img src="/Mockup.svg" alt="Rill Platform Mockup" className="mockup-image" />
            </div>
          </div>

          {/* Floating Waitlist Form - Only visible after scroll */}
          <div className={`floating-waitlist ${showWaitlist ? 'visible' : ''}`}>
            <div className="waitlist-form">
              <button 
                className="waitlist-close-btn" 
                onClick={closeWaitlist}
                aria-label="Close waitlist"
              >
                ×
              </button>
              <form onSubmit={handleWaitlistSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="waitlist-input"
                />
                <button type="submit" className="btn btn-primary">
                  Get Early Access
                </button>
              </form>
              <p className="waitlist-microcopy">Join the waitlist for the future of Web3 building.</p>
            </div>
          </div>
        </section>

        {/* What is Rill Section */}
        <section className="what-is-rill-section">
          <div className="what-is-rill-container">
            <h3 className="what-is-rill-header">What is Rill.</h3>
            <h2 className="what-is-rill-title" style={{ fontFamily: 'Unbounded' }}>
              Cursor for Web3
            </h2>
            <p className="what-is-rill-description">
              Rill is your web3 copilot that writes itself. Point, click, deploy. 
              Seamlessly integrate with any blockchain, wallet, or protocol without 
              the complexity. Your ideas, instantly on-chain.
            </p>
            <div className="pricing-text">
              All for just $0.0 during beta.
            </div>
            <div className="what-is-rill-cta">
              <button className="btn btn-primary btn-dark" onClick={handleGetStarted}>
                Start Building
              </button>
            </div>
          </div>
        </section>

        {/* Web3 Challenges Section */}
        <section className="web3-challenges">
          {/* Background Flow Element */}
          <div className="challenges-background-flow"></div>

          <div className="challenges-container">
            {/* Header */}
            <div className="challenges-header">
              <p className="challenges-small-title">Web3 made simple.</p>
              <h2 className="challenges-title">Breaking Down Barriers</h2>
            </div>

            {/* Problem-Solution Pairs */}
            <div className="floating-items-wrapper">
              {/* Pair 1: Complexity / Simple Interface */}
              <div className="challenge-pair">
                <div className="floating-item problem-card">
                  <div className="floating-label problem-label">Challenge</div>
                  <div className="icon-container problem-icon">
                    <Puzzle size={24} />
                  </div>
                  <h3 className="floating-title">Complexity</h3>
                  <p className="floating-text">
                    Web3 development requires specialized knowledge and skills most developers don't have.
                  </p>
                </div>
                
                <div className="challenge-connector">
                  <div className="connector-arrow"></div>
                </div>
                
                <div className="floating-item solution-card">
                  <div className="floating-label solution-label">Solution</div>
                  <div className="icon-container solution-icon">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="floating-title">Simple Interface</h3>
                  <p className="floating-text">
                    Point-and-click development with no blockchain expertise required.
                  </p>
                </div>
              </div>

              {/* Pair 2: Time-Consuming / Instant Development */}
              <div className="challenge-pair">
                <div className="floating-item problem-card">
                  <div className="floating-label problem-label">Challenge</div>
                  <div className="icon-container problem-icon">
                    <Clock size={24} />
                  </div>
                  <h3 className="floating-title">Time-Consuming</h3>
                  <p className="floating-text">
                    Building dApps takes weeks to months, slowing innovation and time-to-market.
                  </p>
                </div>
                
                <div className="challenge-connector">
                  <div className="connector-arrow"></div>
                </div>
                
                <div className="floating-item solution-card">
                  <div className="floating-label solution-label">Solution</div>
                  <div className="icon-container solution-icon">
                    <Zap size={24} />
                  </div>
                  <h3 className="floating-title">Instant Development</h3>
                  <p className="floating-text">
                    From idea to deployment in minutes with AI-powered code generation.
                  </p>
                </div>
              </div>

              {/* Pair 3: Integration Hurdles / Seamless Connection */}
              <div className="challenge-pair">
                <div className="floating-item problem-card">
                  <div className="floating-label problem-label">Challenge</div>
                  <div className="icon-container problem-icon">
                    <Plug size={24} />
                  </div>
                  <h3 className="floating-title">Integration Hurdles</h3>
                  <p className="floating-text">
                    Connecting wallets and blockchains creates friction and user drop-off.
                  </p>
                </div>
                
                <div className="challenge-connector">
                  <div className="connector-arrow"></div>
                </div>
                
                <div className="floating-item solution-card">
                  <div className="floating-label solution-label">Solution</div>
                  <div className="icon-container solution-icon">
                    <Repeat size={24} />
                  </div>
                  <h3 className="floating-title">Seamless Connection</h3>
                  <p className="floating-text">
                    One-click integration with any wallet or blockchain protocol.
                  </p>
                </div>
              </div>
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
                    <p className="how-it-works-subtitle">The user journey.</p>
                    <h2 className="how-it-works-main-title">
                        Rill in Action
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

        {/* === Architecture Section === */}
        <section className="architecture-section">
          <div className="architecture-container">
            <div className="architecture-header">
              <p className="architecture-subtitle">How Rill is built.</p>
              <h2 className="architecture-title">Our Architecture</h2>
              <p className="architecture-description">
                Rill combines cutting-edge technology to deliver a seamless Web3 development experience, 
                connecting you with the blockchain infrastructure you need.
              </p>
            </div>
            
            <div className="architecture-diagram-container">
              <img 
                src="/arch.svg" 
                alt="Rill Architecture Diagram" 
                className="architecture-diagram" 
              />
            </div>
          </div>
        </section>
        {/* === End of Architecture Section === */}

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
            <button className="btn btn-primary btn-dark" onClick={handleGetStarted}>
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
                <a href="https://x.com/fullrill" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Twitter size={24} />
                </a>
                <a href="mailto:rill.0111labs@gmail.com" className="social-link">
                  <Mail size={24} />
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

// Create a wrapper App component that provides the toast context
function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;