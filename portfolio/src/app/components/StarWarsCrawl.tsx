'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const StarWarsCrawl = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showCrawl, setShowCrawl] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Set mounted to true on client
    setIsMounted(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
    }

    // Start showing the crawl after the intro text fades out
    const introTimeout = setTimeout(() => {
      setShowIntro(false);
      setShowCrawl(true);
    }, 6000);

    // Show button after crawl has been visible for a while (reduced time for mobile)
    const buttonTimeout = setTimeout(() => {
      setShowButton(true);
    }, isMobile ? 18000 : 25000);

    return () => {
      clearTimeout(introTimeout);
      clearTimeout(buttonTimeout);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile);
      }
    };
  }, []);

  // Update button timeout when isMobile changes
  useEffect(() => {
    if (isMounted && showCrawl && !showButton) {
      const buttonTimeout = setTimeout(() => {
        setShowButton(true);
      }, isMobile ? 18000 : 25000);

      return () => clearTimeout(buttonTimeout);
    }
  }, [isMobile, isMounted, showCrawl, showButton]);

  const handleContinue = () => {
    router.push('/home');
  };

  // Allow users to skip intro on mobile with tap
  const handleSkip = () => {
    if (isMobile) {
      setShowIntro(false);
      setShowCrawl(false);
      setShowButton(true);
    }
  };

  return (
    <div 
      className="relative h-screen w-screen flex justify-center items-center overflow-hidden"
      onClick={handleSkip}
    >
      {showIntro && (
        <div className="intro-text text-xl md:text-2xl lg:text-3xl px-4 text-center">
          A long time ago in a galaxy far, far away...
        </div>
      )}

      {showCrawl && (
        <div className="crawl-container">
          <div className={`crawl ${isMobile ? 'crawl-mobile' : ''}`}>
            <div className="crawl-content max-w-4xl mx-auto px-4">
              <h1 className="crawl-title text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-8">BERNARD GINN JR.</h1>
              <p className="text-xl md:text-2xl lg:text-3xl">
                EPISODE I<br />
                THE PORTFOLIO AWAKENS
              </p>
              <br /><br />
              <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
                It is a period of creative exploration.
                Bernard Ginn Jr., having mastered the ways
                of programming and design, has embarked on
                a journey to showcase his talents to the universe.
              </p>
              <br /><br />
              <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
                His portfolio, containing projects of immense
                power and creativity, demonstrates his ability
                to create elegant and functional solutions to
                complex problems.
              </p>
              <br /><br />
              <p className="text-base md:text-xl lg:text-2xl leading-relaxed">
                As you journey through this collection of work,
                witness the power of innovation and the force
                of technological expertise combined with artistic
                vision...
              </p>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={handleContinue} 
        className={`continue-button ${showButton ? 'opacity-100' : 'opacity-0'} text-base md:text-lg lg:text-xl px-6 py-3 md:px-8 md:py-4`}
        style={{ animation: showButton ? 'fadeIn 1s ease-in-out forwards' : 'none' }}
      >
        ENTER PORTFOLIO
      </button>
    </div>
  );
};

export default StarWarsCrawl; 