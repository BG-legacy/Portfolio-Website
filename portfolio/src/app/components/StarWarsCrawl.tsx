'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const StarWarsCrawl = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showCrawl, setShowCrawl] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Start showing the crawl after the intro text fades out
    const introTimeout = setTimeout(() => {
      setShowIntro(false);
      setShowCrawl(true);
    }, 6000);

    // Show button after crawl has been visible for a while (reduced from 45s to 22s)
    const buttonTimeout = setTimeout(() => {
      setShowButton(true);
    }, 25000);

    return () => {
      clearTimeout(introTimeout);
      clearTimeout(buttonTimeout);
    };
  }, []);

  const handleContinue = () => {
    router.push('/home');
  };

  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      {showIntro && (
        <div className="intro-text">
          A long time ago in a galaxy far, far away...
        </div>
      )}

      {showCrawl && (
        <div className="crawl-container">
          <div className="crawl">
            <div className="crawl-content max-w-4xl mx-auto">
              <h1 className="crawl-title">BERNARD GINN JR.</h1>
              <p>
                EPISODE I<br />
                THE PORTFOLIO AWAKENS
              </p>
              <br /><br />
              <p>
                It is a period of creative exploration.
                Bernard Ginn Jr., having mastered the ways
                of programming and design, has embarked on
                a journey to showcase his talents to the universe.
              </p>
              <br /><br />
              <p>
                His portfolio, containing projects of immense
                power and creativity, demonstrates his ability
                to create elegant and functional solutions to
                complex problems.
              </p>
              <br /><br />
              <p>
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
        className={`continue-button ${showButton ? 'opacity-100' : ''}`}
        style={{ animation: showButton ? 'fadeIn 1s ease-in-out forwards' : 'none' }}
      >
        ENTER PORTFOLIO
      </button>
    </div>
  );
};

export default StarWarsCrawl; 