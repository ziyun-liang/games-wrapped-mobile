import React, { useState, useRef } from 'react';
import { ScreenContainer } from './SharedComponents';

// Ad Screen Component
export const AdScreen = ({ onNext, onPrevious, adPosition }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [dotAnimation, setDotAnimation] = useState(0);
  const [showReady, setShowReady] = useState(false);
  const [readyOpacity, setReadyOpacity] = useState(0);
  const [visibleBars, setVisibleBars] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  // Always show countdown for easier testing during development

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Countdown effect with progressive bar loading
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowReady(true);
          setReadyOpacity(1);
          
          // Enable navigation when "Ready!" appears
          setIsLoading(false);
          
          // Start fade out after 2 seconds
          setTimeout(() => {
            setReadyOpacity(0);
            // Hide completely after fade animation
            setTimeout(() => {
              setShowReady(false);
            }, 500);
          }, 2000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Progressive bar loading effect
  React.useEffect(() => {
    const barTimers = [];
    
    // Accelerating timing: slow start, faster end - 14 bars total
    const timings = [4500, 3500, 2500, 1800, 1200, 800, 600, 400, 300, 200, 150, 100, 80, 50]; // ms from start
    
    timings.forEach((delay, index) => {
      const timer = setTimeout(() => {
        setVisibleBars(prev => prev + 1);
      }, delay);
      barTimers.push(timer);
    });

    return () => {
      barTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // Dancing dots animation
  React.useEffect(() => {
    const dotTimer = setInterval(() => {
      setDotAnimation((prev) => (prev + 1) % 3);
    }, 150);

    return () => clearInterval(dotTimer);
  }, []);

  return (
    <ScreenContainer backgroundColor="#000" onNext={isLoading ? null : onNext} onPrevious={isLoading ? null : onPrevious} currentScreen={adPosition} adPosition={adPosition}>
      {/* Light-colored Games Wrapped logo for ad screen */}
      <div style={{
        position: 'absolute',
        top: '19.5px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
      }}>
        <img src={process.env.PUBLIC_URL + "/images/gamewrapper-logo.svg"} alt="Games Wrapped" style={{ height: '24px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
      </div>

          {/* Countdown message */}
          <div style={{
            position: 'absolute',
            top: '51px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            fontSize: '11px',
            fontFamily: 'NYTFranklin, sans-serif',
            fontWeight: 600,
            textAlign: 'center',
            zIndex: 5,
            opacity: showReady ? readyOpacity : 1,
            transition: 'opacity 0.5s ease'
          }}>
            {countdown > 0 ? (
              <>
                {adPosition === 0 ? 'Your highlights loading in' : adPosition === 6 ? 'Continuing in' : 'Drum roll please...'} {countdown}
                <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '2px', transform: 'translateY(-2px)' }}>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        width: '2px',
                        height: '2px',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        margin: '0 1px',
                        transform: `translateY(${i === dotAnimation ? '-1px' : '0px'})`,
                        transition: 'transform 0.1s ease'
                      }}
                    />
                  ))}
                </span>
              </>
            ) : showReady ? 'Go!' : ''}
          </div>

      {/* Light-colored progress bar for ad screen */}
      <div style={{
        position: 'absolute',
        top: '66px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '2px',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        width: '339px',
        height: '16px'
      }}>
        {Array.from({ length: adPosition !== null ? 15 : 14 }, (_, i) => {
          const isGPosition = adPosition !== null && i === adPosition;
          const barIndex = adPosition !== null && i > adPosition ? i - 1 : i;
          const isVisible = isGPosition ? (visibleBars >= adPosition) : (barIndex < visibleBars);
          
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', height: '16px' }}>
              {isGPosition ? (
                <img
                  src={process.env.PUBLIC_URL + "/images/g-logo.png"}
                  alt="Google"
                  style={{
                    width: '16px',
                    height: '16px',
                    opacity: isVisible ? (showReady ? 1 : 0.4) : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                />
              ) : (
                <div
                  style={{
                    height: '2px',
                    backgroundColor: '#fff',
                    borderRadius: '1px',
                    opacity: isVisible ? 0.4 : 0,
                    transition: 'opacity 0.3s ease',
                    width: barIndex === 0 ? '17px' : 
                           barIndex === 1 ? '18px' :
                           barIndex === 2 ? '19px' :
                           barIndex === 3 ? '19px' :
                           barIndex === 4 ? '18px' :
                           barIndex === 5 ? '20px' :
                           barIndex === 6 ? '18px' :
                           barIndex === 7 ? '18px' :
                           barIndex === 8 ? '17px' :
                           barIndex === 9 ? '18px' :
                           barIndex === 10 ? '18px' :
                           barIndex === 11 ? '18px' :
                           barIndex === 12 ? '17px' :
                           barIndex === 13 ? '17px' : '18px'
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      {/* Fullscreen video ad */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      >
        <source src={adPosition === 0 ? process.env.PUBLIC_URL + "/videos/ad1.mp4" : adPosition === 6 ? process.env.PUBLIC_URL + "/videos/ad2.mp4" : process.env.PUBLIC_URL + "/videos/ad3.mp4"} type="video/mp4" />
      </video>

      {/* Gradient overlay for readability - top 1/5 and bottom 1/4 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '20%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '25%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      {/* Ad content container */}
      <div style={{
        position: 'absolute',
        left: '20px',
        bottom: '20px',
        width: '279px',
        height: '147px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        zIndex: 10
      }}>
        {/* AD label and Google name */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(17px)',
            color: '#fff',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            AD
          </div>
          <div style={{
            color: '#fff',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'Product Sans, sans-serif'
          }}>
            Google
          </div>
        </div>

        {/* Ad message */}
        <div style={{
          color: '#fff',
          fontSize: '14px',
          lineHeight: '1.4',
          fontFamily: 'Product Sans, sans-serif',
          fontWeight: 400,
          marginTop: '-2px'
        }}>
          Search smarter. Play smarter.<br />Year wrapped.
        </div>

        {/* CTA button */}
        <div style={{
          marginTop: 'auto'
        }}>
          <button style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '50px',
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'Product Sans, sans-serif'
          }}>
            Explore more
          </button>
        </div>
      </div>

      {/* Video controls */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        zIndex: 10
      }}>
        {/* Play/Pause control button */}
        <button
          onClick={togglePlayPause}
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = '0.8';
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = '1';
          }}
        >
          <img 
            src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'} 
            alt={isPlaying ? 'Pause' : 'Play'}
            style={{
              width: '32px',
              height: '32px'
            }}
          />
        </button>

        {/* Sound control button */}
        <button
          onClick={toggleMute}
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = '0.8';
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = '1';
          }}
        >
          <img 
            src={isMuted ? '/icons/audio-off.svg' : '/icons/audio-on.svg'} 
            alt={isMuted ? 'Unmute' : 'Mute'}
            style={{
              width: '32px',
              height: '32px'
            }}
          />
        </button>
      </div>
    </ScreenContainer>
  );
};
