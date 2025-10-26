import React, { useState, useRef } from 'react';
import { ScreenContainer, NYTLogo, GameIcon, NavigationArea } from './SharedComponents';

// Screen 10: Top Game Reveal
export const TopGameRevealScreen = ({ userData, onNext, onPrevious, currentScreen = 8 }) => (
  <ScreenContainer backgroundColor="#8B5CF6" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Background Image */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/images/topgamebg.png)',
      backgroundSize: '120% 120%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 1
    }} />
    
    {/* Main Text */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '30px',
      fontWeight: 600, // NYTKarnak Semibold
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.15',
      color: '#000',
      textAlign: 'center',
      width: '304px',
      marginTop: '-35px',
      zIndex: 5
    }}>
      <span style={{ fontWeight: 600 }}>Your top played game </span>
      <span style={{ fontWeight: 500 }}>of 2025 was...</span>
    </div>
  </ScreenContainer>
);

// Screen 11: Connections Perfect Puzzles
export const ConnectionsPerfectScreen = ({ userData, onNext, onPrevious, currentScreen = 9 }) => (
  <ScreenContainer backgroundColor="#b4a8ff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Main Text */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '30px',
      fontWeight: 600, // NYTKarnak Semibold
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.15',
      color: '#000',
      textAlign: 'center',
      width: '304px',
      marginTop: '-85px'
    }}>
      <span style={{ fontWeight: 600 }}>Your top played game </span>
      <span style={{ fontWeight: 500 }}>of 2025 was...</span>
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
      marginTop: '64px'
    }}>
      Connections was our second most played game.
    </div>
    
    {/* Large Connections Title */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '43.666px',
      fontWeight: 700, // NYTKarnak Bold
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '44.914px',
      color: '#000',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      marginTop: '0px'
    }}>
      Connections
    </div>
    
    {/* Dice Images */}
    {/* Dice 1 - Top Left */}
    <div style={{
      position: 'absolute',
      top: '14.65%',
      left: '7.2%',
      width: '63px',
      height: '63px',
      transform: 'rotate(335.613deg)',
      zIndex: 2
    }}>
      <img 
        src="/images/dice.png" 
        alt="Dice" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
    
    {/* Dice 2 - Top Center */}
    <div style={{
      position: 'absolute',
      top: '24.88%',
      left: '37.07%',
      width: '63px',
      height: '63px',
      transform: 'rotate(335.613deg)',
      zIndex: 2
    }}>
      <img 
        src="/images/dice.png" 
        alt="Dice" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
    
    {/* Dice 3 - Top Right */}
    <div style={{
      position: 'absolute',
      top: '21.3%',
      left: '75.47%',
      width: '63px',
      height: '63px',
      transform: 'rotate(11.355deg)',
      zIndex: 2
    }}>
      <img 
        src="/images/dice.png" 
        alt="Dice" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
    
    {/* Dice 4 - Bottom Left */}
    <div style={{
      position: 'absolute',
      top: '66.02%',
      left: '7.2%',
      width: '63px',
      height: '63px',
      transform: 'rotate(335.613deg)',
      zIndex: 2
    }}>
      <img 
        src="/images/dice.png" 
        alt="Dice" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
    
    {/* Dice 5 - Bottom Center */}
    <div style={{
      position: 'absolute',
      top: '75.74%',
      left: '78.12%',
      width: '63px',
      height: '63px',
      transform: 'rotate(335.613deg)',
      zIndex: 2
    }}>
      <img 
        src="/images/dice.png" 
        alt="Dice" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
    
    {/* Dice 6 - Bottom Right */}
    <div style={{
      position: 'absolute',
      top: '67.61%',
      left: '78.12%',
      width: '63px',
      height: '63px',
      transform: 'rotate(11.355deg)',
      zIndex: 2
    }}>
      <img 
        src="/images/dice.png" 
        alt="Dice" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  </ScreenContainer>
);

// Screen 12: Personal Message from Editor
export const PersonalMessageScreen = ({ userData, onNext, onPrevious, currentScreen = 10 }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent navigation
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = (e) => {
    e.stopPropagation(); // Prevent navigation
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

  return (
    <ScreenContainer backgroundColor="#b4a8ff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
      <NavigationArea onNext={onNext} onPrevious={onPrevious} />
      
      {/* Knock! Knock! Title */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '30px',
        fontWeight: 600, // NYTKarnak Semibold
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.2',
        color: '#000',
        textAlign: 'center',
        width: '302px',
        marginTop: '-44px'
      }}>
        Knock! Knock!
      </div>
      
      {/* Subtitle */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '22px',
        fontWeight: 500, // NYTKarnak Medium
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.2',
        color: '#000',
        textAlign: 'center',
        width: '302px',
        marginTop: '-8px'
      }}>
        You've got a message<br />
        from someone special.
      </div>
      
      {/* Editorial Video */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '259.2px',
          height: '460.8px',
          borderRadius: '20px',
          overflow: 'hidden',
          zIndex: 12 // Higher than NavigationArea zIndex: 10
        }}
        onClick={(e) => e.stopPropagation()} // Prevent navigation when clicking video area
      >
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          playsInline 
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px'
          }}
        >
          <source src="/videos/editornote.mp4" type="video/mp4" />
        </video>
        
        {/* Video Controls */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          gap: '8px',
          zIndex: 15 // Higher than NavigationArea zIndex: 10
        }}>
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <img 
              src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"} 
              alt={isPlaying ? "Pause" : "Play"}
              style={{ width: '32px', height: '32px' }}
            />
          </button>
          
          {/* Sound Button */}
          <button
            onClick={toggleMute}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <img 
              src={isMuted ? "/icons/audio-off.svg" : "/icons/audio-on.svg"} 
              alt={isMuted ? "Unmute" : "Mute"}
              style={{ width: '32px', height: '32px' }}
            />
          </button>
        </div>
      </div>
      
      {/* Editor Card Overlay */}
      <div style={{
        position: 'absolute',
        bottom: '130px',
        left: '25px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        width: '190px',
        height: '70px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 15,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          fontSize: '22px',
          fontWeight: 'bold', // NYTKarnak Bold
          fontFamily: 'NYTKarnak, serif',
          lineHeight: '1.3',
          color: '#000',
          marginBottom: '0px',
          marginLeft: '-4px'
        }}>
          Wyna Liu
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: 500, // NYTKarnak Medium
          fontFamily: 'NYTKarnak, serif',
          lineHeight: '1.3',
          color: '#000',
          whiteSpace: 'nowrap',
          marginLeft: '-4px'
        }}>
          Connections Editor
        </div>
      </div>
    </ScreenContainer>
  );
};

// Screen 12: Connections Purple First
export const ConnectionsPurpleFirstScreen = ({ userData, onNext, onPrevious, currentScreen = 11 }) => (
  <ScreenContainer backgroundColor="#b4a8ff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Knock! Knock! Title */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '30px',
      fontWeight: 600, // NYTKarnak Semibold
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.2',
      color: '#000',
      textAlign: 'center',
      width: '302px',
      marginTop: '-44px'
    }}>
      Knock! Knock!
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
      width: '302px',
      marginTop: '20px'
    }}>
      You've got a message<br />
      from someone special.
    </div>
  </ScreenContainer>
);

// Screen 13: Editor Message
export const EditorMessageScreen = ({ userData, onNext, onPrevious, currentScreen = 12 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Main message */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '30px',
      fontWeight: 500,
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.2',
      color: '#000',
      textAlign: 'center',
      width: '304px',
      marginTop: '-50px'
    }}>
      It's time to show off your personalized Wrapped highlights from 2025.
    </div>
    
    {/* Hashtag */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '22px',
      fontWeight: 600,
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.2',
      color: '#000',
      textAlign: 'center',
      width: '304px',
      marginTop: '76px'
    }}>
      #nytgameswrapped2025
    </div>
  </ScreenContainer>
);