import React from 'react';
import { ScreenContainer, NYTLogo, NavigationArea } from './SharedComponents';

// Screen 1: Welcome/Intro Screen
export const WelcomeScreen = ({ onNext }) => (
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
      {/* Floating animated background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <img 
          src={process.env.PUBLIC_URL + "/images/floating-bg.gif"} 
          alt="Floating background animation" 
          style={{
            position: 'absolute',
            height: '118.6%',
            left: '-28.03%',
            top: '-8.62%',
            width: '200.07%',
            maxWidth: 'none'
          }}
        />
      </div>
      
      {/* Centered Games Wrapped logo - moved up slightly */}
      <div style={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '190px',
        height: '103px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* NYT Logo - positioned exactly like Figma */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '12.5%',
          right: '12.64%',
          height: '46.96%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={process.env.PUBLIC_URL + "/images/nyt-logo.svg"} alt="The New York Times" style={{ width: '100%', height: 'auto' }} />
        </div>
        
        {/* Games Wrapped text - positioned exactly like Figma */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: '60.14%',
          fontSize: '43px',
          fontWeight: 700,
          fontFamily: 'NYTKarnak, serif',
          lineHeight: '40.723px',
          color: '#000',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Games Wrapped
        </div>
      </div>
      
      {/* See your year button - positioned relative to centered group */}
      <div 
        onClick={onNext}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, calc(-50% + 80px))',
          width: '206px',
          height: '37px',
          backgroundColor: '#121212',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <span style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#f8f8f8',
          fontFamily: 'NYTFranklin, sans-serif'
        }}>
          See your year
        </span>
      </div>
      
      {/* Supported by Google */}
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{
          fontSize: '13px',
          color: '#727272',
          fontFamily: 'NYTFranklin, system-ui, sans-serif',
          fontWeight: 500
        }}>
          Supported by
        </div>
        
        {/* Google logo */}
        <img src={process.env.PUBLIC_URL + "/images/google-logo.svg"} alt="Google" style={{ width: '110px', height: '38px' }} />
      </div>
    </div>
  </div>
);

// Screen 2: Personal Greeting
export const GreetingScreen = ({ userName, onNext, onPrevious, currentScreen = 0 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    {/* Background pattern */}
    <div style={{
      position: 'absolute',
      top: '10px',
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      <img 
        src={process.env.PUBLIC_URL + "/images/hijamie_bg.svg"} 
        alt="Background pattern" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
    
    
    {/* Main content */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '318px',
      textAlign: 'center'
    }}>
      {/* Hi Jamie! */}
      <div style={{
        fontSize: '28px',
        fontWeight: 700,
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.2',
        color: '#000',
        marginBottom: '20px',
        transform: 'translateY(-100px)'
      }}>
        Hi {userName}!
      </div>
      
      {/* Thank you message */}
      <div style={{
        fontSize: '20px',
        fontWeight: 300,
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.15',
        color: '#000',
        transform: 'translateY(-74px)'
      }}>
        Thank you for playing<br />
        New York Times Games.<br />
        <br />
        Your 2025 was a year of grids, guesses, and great saves.
      </div>
    </div>
  </ScreenContainer>
);

// Screen 3: Time of Day Stats
export const TimeOfDayScreen = ({ userData, onNext, onPrevious, currentScreen = 1 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    {/* Background pattern */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      <img 
        src={process.env.PUBLIC_URL + "/images/you-solve-bg.svg"} 
        alt="Background pattern" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
    
    <div style={{ textAlign: 'center', maxWidth: '300px' }}>
      {/* Your year, solved! */}
      <div style={{
        fontSize: '28px',
        fontWeight: 700,
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.2',
        color: '#000',
        marginBottom: '40px'
      }}>
        Your year, solved!
      </div>
      
      {/* Days played */}
      <div style={{
        fontSize: '20px',
        fontWeight: 500,
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.15',
        color: '#000',
        marginBottom: '0px'
      }}>
        Days played<br />
        <span style={{
          fontSize: '128px',
          fontWeight: 300,
          fontFamily: 'NYTKarnak, serif',
          lineHeight: '1',
          color: '#000',
          display: 'block',
          marginTop: '10px'
        }}>
          {userData.stats.totalDaysPlayed}
        </span>
      </div>
      
      {/* Puzzle solving stats */}
      <div style={{
        fontSize: '20px',
        fontWeight: 500,
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.15',
        color: '#000',
        marginBottom: '40px'
      }}>
        You solved <span style={{ fontWeight: 600 }}>more puzzles per day than {userData.stats.percentile}%</span> of other players.
      </div>
    </div>
  </ScreenContainer>
);

// Screen 4: Year Summary
export const YearSummaryScreen = ({ userData, onNext, onPrevious, currentScreen = 2 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Yellow Circle Background */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '450px',
      height: '450px',
      backgroundColor: '#F7DA21',
      borderRadius: '50%',
      marginTop: '-61px',
      zIndex: 2
    }} />
    
    {/* Main Text */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '30px',
      fontWeight: 500, // NYTKarnak Medium
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.15',
      color: '#000',
      textAlign: 'center',
      width: '315px',
      marginTop: '-61px',
      zIndex: 5
    }}>
      <span style={{ fontWeight: 500 }}>You played our games most </span>
      <span style={{ fontWeight: 600 }}>in </span>
      <span style={{ fontWeight: 600 }}>the morning.</span>
    </div>
    
    {/* Subtitle */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '20px',
      fontWeight: 500, // NYTKarnak Medium
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.15',
      color: '#000',
      textAlign: 'center',
      width: '286px',
      marginTop: '245px',
      zIndex: 5
    }}>
      60% of our players were also most active in the morning.
    </div>
  </ScreenContainer>
);
