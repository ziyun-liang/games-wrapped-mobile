import React from 'react';
import { motion } from 'framer-motion';

// Reusable components for the Games Wrapped report

export const NYTLogo = ({ size = "small" }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center',
    fontSize: size === "large" ? '24px' : '18px',
    fontWeight: 'bold',
    fontFamily: 'serif'
  }}>
    <span style={{ 
      fontSize: size === "large" ? '28px' : '20px',
      marginRight: '8px'
    }}>T</span>
    <span style={{ fontFamily: 'sans-serif' }}>Games Wrapped</span>
  </div>
);

export const ProgressIndicator = ({ current, total = 14, adPosition = null }) => {
  // Calculate total elements: 14 bars + (1 G if ad is showing)
  const totalElements = adPosition !== null ? total + 1 : total;
  
  return (
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
      {Array.from({ length: totalElements }, (_, i) => {
        // Determine if this position should show G or bar
        const isGPosition = adPosition !== null && i === adPosition;
        const barIndex = adPosition !== null && i > adPosition ? i - 1 : i;
        
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', height: '16px' }}>
            {/* Show G at adPosition, otherwise show regular bar */}
            {isGPosition ? (
              <motion.img
                src="/images/g-logo.png"
                alt="Google"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.15, 
                  ease: "easeInOut" // Match screen transitions
                }}
                style={{
                  width: '16px',
                  height: '16px'
                }}
              />
            ) : (
              <div
                style={{
                  height: '2px',
                  backgroundColor: '#000',
                  borderRadius: '1px',
                  opacity: barIndex === current ? 1 : 0.4,
                  transition: 'opacity 0.15s ease',
                  // Variable widths based on the SVG
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
  );
};

export const GameIcon = ({ game, size = 40 }) => {
  const renderIcon = () => {
    switch (game) {
      case 'wordle':
        return (
          <div style={{
            width: size,
            height: size,
            backgroundColor: '#6AAA64',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: size * 0.4,
            fontWeight: 'bold'
          }}>
            W
          </div>
        );
      case 'spellingBee':
        return (
          <div style={{
            width: size,
            height: size,
            backgroundColor: '#FFD700',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontSize: size * 0.4,
            fontWeight: 'bold'
          }}>
            B
          </div>
        );
      case 'connections':
        return (
          <div style={{
            width: size,
            height: size,
            backgroundColor: '#8B5CF6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: size * 0.4,
            fontWeight: 'bold'
          }}>
            C
          </div>
        );
      default:
        return null;
    }
  };

  return renderIcon();
};

export const WordleGrid = ({ word }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '4px',
    margin: '0 auto',
    width: 'fit-content'
  }}>
    {word.split('').map((letter, i) => (
      <div
        key={i}
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#6AAA64',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          fontWeight: 'bold',
          borderRadius: '0px'
        }}
      >
        {letter}
      </div>
    ))}
  </div>
);

export const StatCard = ({ title, value }) => (
  <div style={{
    backgroundColor: '#f8f8f8',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center'
  }}>
    <div style={{
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '4px'
    }}>
      {value}
    </div>
    <div style={{
      fontSize: '12px',
      color: '#666',
      fontWeight: '500'
    }}>
      {title}
    </div>
  </div>
);

export const NavigationArea = ({ onNext, onPrevious }) => (
  <div>
    {/* Left side navigation */}
    <div
      onClick={onPrevious}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        height: '100%',
        cursor: 'pointer',
        zIndex: 10
      }}
    />
    {/* Right side navigation */}
    <div
      onClick={onNext}
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%',
        height: '100%',
        cursor: 'pointer',
        zIndex: 10
      }}
    />
  </div>
);

export const ScreenContainer = ({ children, backgroundColor = '#fff', onNext, onPrevious, currentScreen = 0, adPosition = null }) => (
  <div style={{
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative'
  }}>
    {/* Navigation areas */}
    <div
      onClick={onPrevious}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50%',
        height: '100%',
        cursor: 'pointer',
        zIndex: 10
      }}
    />
    <div
      onClick={onNext}
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50%',
        height: '100%',
        cursor: 'pointer',
        zIndex: 10
      }}
    />

    {/* Mobile phone frame - stationary */}
    <div style={{
      width: '375px',
      height: '812px',
      backgroundColor: '#fff',
      borderRadius: '0px',
      boxShadow: '0px 12px 24px 0px rgba(0,0,0,0.12)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Mobile navigation header - appears on all screens */}
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
        <img src="/images/gamewrapper-logo.svg" alt="Games Wrapped" style={{ height: '24px', width: 'auto' }} />
      </div>
      
      {/* Progress indicator - appears on all screens */}
      <ProgressIndicator current={currentScreen} total={14} adPosition={adPosition} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor,
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {children}
      </motion.div>
    </div>
  </div>
);