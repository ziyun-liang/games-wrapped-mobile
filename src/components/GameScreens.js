import React from 'react';
import { ScreenContainer, NYTLogo, GameIcon, WordleGrid, StatCard, NavigationArea } from './SharedComponents';

// Screen 5: Wordle Starter Word
export const WordleStarterScreen = ({ userData, onNext, onPrevious, currentScreen = 3 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Wordle Icon */}
    <div style={{
      position: 'absolute',
      top: '296px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '246px',
      height: '179px',
      zIndex: 5
    }}>
      <img 
        src="/images/wordle.svg" 
        alt="Wordle" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
    
    {/* Date Information */}
    <div style={{
      position: 'absolute',
      top: '519px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '18px',
      fontWeight: 500, // NYTFranklin Medium
      fontFamily: 'NYTFranklin, sans-serif',
      lineHeight: '1.2',
      color: '#000',
      textAlign: 'center',
      width: '292px',
      zIndex: 5
    }}>
      <p style={{ margin: '0 0 0 0' }}>May 14th, 2025</p>
      <p style={{ margin: '0' }}>No. 1425</p>
    </div>
  </ScreenContainer>
);

// Screen 6: Wordle Performance
export const WordlePerformanceScreen = ({ userData, onNext, onPrevious, currentScreen = 4 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Wordle icon below progress bar */}
    <div style={{
      position: 'absolute',
      top: '100px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 5
    }}>
      <img src="/images/wordle.svg" alt="Wordle" style={{ height: '80px', width: 'auto' }} />
    </div>
    
    <div style={{ textAlign: 'center', maxWidth: '300px' }}>
      <div style={{ margin: '30px 0', marginLeft: '-5px' }}>
        <WordleGrid word={userData.stats.wordle.bestSolve.word} />
        
        <div style={{
          fontSize: '25px',
          fontWeight: 700,
          fontFamily: 'NYTKarnak, serif',
          marginTop: '20px',
          lineHeight: '1.1'
        }}>
          Go ahead and brag,<br />
          you solved it in {userData.stats.wordle.bestSolve.guesses}.
        </div>
        
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          fontFamily: 'NYTKarnak, serif',
          marginTop: '18px',
          color: '#000',
          lineHeight: '1.15'
        }}>
          That was in the top <span style={{ fontWeight: 600 }}>{userData.stats.wordle.bestSolve.percentile}%</span> that day.
        </div>
      </div>
    </div>
  </ScreenContainer>
);

// Screen 7: Wordle Best Solve
export const WordleBestSolveScreen = ({ userData, onNext, onPrevious, currentScreen = 5 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Wordle icon below progress bar */}
    <div style={{
      position: 'absolute',
      top: '100px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 5
    }}>
      <img src="/images/wordle.svg" alt="Wordle" style={{ height: '80px', width: 'auto' }} />
    </div>
    
    {/* Title positioned below Wordle icon */}
    <div style={{
      position: 'absolute',
      top: '250px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 5,
      fontSize: '25px',
      fontWeight: 700,
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.1',
      textAlign: 'center',
      width: '300px'
    }}>
      You really hit your stride this year.
    </div>
    
    <div style={{ textAlign: 'center', maxWidth: '300px' }}>
      {/* 4 Stats Grid */}
      <div style={{
        position: 'absolute',
        top: '343px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: '150px 150px',
        gap: '15px',
        zIndex: 5
      }}>
        {/* Puzzles Played */}
        <div style={{
          fontSize: '55px',
          fontWeight: 300,
          fontFamily: 'NYTKarnak, serif',
          color: '#424242',
          textAlign: 'center',
          lineHeight: '1',
          width: '150px',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {userData.stats.wordle.puzzlesPlayed}
        </div>
        
        {/* Win Rate */}
        <div style={{
          fontSize: '55px',
          fontWeight: 300,
          fontFamily: 'NYTKarnak, serif',
          color: '#424242',
          textAlign: 'center',
          lineHeight: '1',
          width: '150px',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {userData.stats.wordle.winRate}<span style={{ fontSize: '35px' }}>%</span>
        </div>
        
        {/* Avg. Guesses */}
        <div style={{
          width: '150px',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <div style={{
            fontSize: '55px',
            fontWeight: 300,
            fontFamily: 'NYTKarnak, serif',
            color: '#424242',
            textAlign: 'center',
            lineHeight: '1'
          }}>
            {userData.stats.wordle.avgGuesses}
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'NYTFranklin, sans-serif',
            color: '#000',
            textAlign: 'center',
            lineHeight: '1.15'
          }}>
            Avg. Guesses
          </div>
        </div>
        
        {/* Max Streak */}
        <div style={{
          width: '150px',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <div style={{
            fontSize: '55px',
            fontWeight: 300,
            fontFamily: 'NYTKarnak, serif',
            color: '#424242',
            textAlign: 'center',
            lineHeight: '1'
          }}>
            {userData.stats.wordle.maxStreak}
          </div>
          <div style={{
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'NYTFranklin, sans-serif',
            color: '#000',
            textAlign: 'center',
            lineHeight: '1.15'
          }}>
            Max Streak
          </div>
        </div>
      </div>
      
      {/* Stat Labels */}
      <div style={{
        position: 'absolute',
        top: '454px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: '150px 150px',
        gap: '15px',
        zIndex: 5
      }}>
        <div style={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          textAlign: 'center',
          lineHeight: '1.15'
        }}>
          Puzzles Played
        </div>
        <div style={{
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          textAlign: 'center',
          lineHeight: '1.15'
        }}>
          Win Rate
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          textAlign: 'center',
          lineHeight: '1.15'
        }}>
          {/* Empty space for Avg. Guesses - label is now within the stat */}
        </div>
        <div style={{
          fontSize: '20px',
          fontWeight: 500,
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          textAlign: 'center',
          lineHeight: '1.15'
        }}>
          {/* Empty space for Max Streak - label is now within the stat */}
        </div>
      </div>
    </div>
  </ScreenContainer>
);

// Screen 8: Spelling Bee Longest Word
export const SpellingBeeLongestScreen = ({ userData, onNext, onPrevious, currentScreen = 6 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Background Image */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/images/spellingbeebg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 1
    }} />
    
    {/* Spelling Bee Icon */}
    <div style={{
      position: 'absolute',
      top: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 5
    }}>
      <img 
        src="/images/spellingbeeicon.svg" 
        alt="Spelling Bee" 
        style={{
          height: '120px',
          width: 'auto'
        }}
      />
    </div>
    
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
      width: '292px',
      zIndex: 7
    }}>
      You reached <span style={{ fontWeight: 600 }}>Genius 13 times</span>.
    </div>
  </ScreenContainer>
);

// Screen 9: Spelling Bee Genius
export const SpellingBeeGeniusScreen = ({ userData, onNext, onPrevious, currentScreen = 7 }) => (
  <ScreenContainer backgroundColor="#fff" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    <NavigationArea onNext={onNext} onPrevious={onPrevious} />
    
    {/* Connections Logo */}
    <div style={{
      position: 'absolute',
      top: '90px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '120px',
      height: '95px',
      zIndex: 5
    }}>
      <img 
        src="/images/connections-logo.svg" 
        alt="Connections" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
    
    {/* Main Text */}
    <div style={{
      position: 'absolute',
      top: '364px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '30px',
      fontWeight: 500, // NYTKarnak Medium
      fontFamily: 'NYTKarnak, serif',
      lineHeight: '1.15',
      color: '#000',
      textAlign: 'center',
      width: '301px',
      zIndex: 7
    }}>
      You <span style={{ fontWeight: 600 }}>solved it perfectly</span> without making any mistakes <span style={{ fontWeight: 600 }}>29 times</span>.
    </div>
  </ScreenContainer>
);
