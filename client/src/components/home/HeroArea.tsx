import { motion } from 'framer-motion';
import './HeroArea.css';

export default function HeroArea() {
  return (
    <section className="hero-section">
      <div className="stars-background"></div>
      <div className="hero-container">
        {/* Left Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="title-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img 
              src="/assets/images/logo.png" 
              alt="Logo" 
              className="hero-logo"
            />
            <h1 className="magic-title">
              <span>Secure</span> <span className="magicText">Sight</span> <span>2.0</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Empowering Safety Through Every Frame: Real-Time AI Security Solutions
          </motion.p>
          
          <motion.div 
            className="cta-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="cta-text">Ready to collaborate?</p>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="email-input"
              />
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="hero-video"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/QXfusN_adIE?autoplay=1&mute=1&loop=1&playlist=QXfusN_adIE"
              title="SecureSight Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
