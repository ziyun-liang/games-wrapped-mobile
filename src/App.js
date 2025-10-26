import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { userData } from './data/mockData';

// Import all screen components
import { WelcomeScreen, GreetingScreen, TimeOfDayScreen, YearSummaryScreen } from './components/Screens';
import { WordleStarterScreen, WordlePerformanceScreen, WordleBestSolveScreen, SpellingBeeLongestScreen, SpellingBeeGeniusScreen } from './components/GameScreens';
import { TopGameRevealScreen, ConnectionsPerfectScreen, ConnectionsPurpleFirstScreen, PersonalMessageScreen, EditorMessageScreen } from './components/FinalScreens';
import { ScreenContainer } from './components/SharedComponents';
import { AdScreen } from './components/AdScreen';

// Summary screen component
const SummaryScreen = ({ userData, onNext, onPrevious, currentScreen = 13 }) => (
  <ScreenContainer backgroundColor="#f5f5f5" onNext={onNext} onPrevious={onPrevious} currentScreen={currentScreen}>
    
    
    {/* Background card with colorful image */}
    <div style={{
      backgroundImage: 'url(/images/highlightgraphic.png)',
      backgroundSize: '120% 120%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '20px',
      padding: '30px',
      maxWidth: '350px',
      width: '100%',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1,
      minHeight: '550px'
    }}>
      {/* Highlight logo above white card */}
      <div style={{
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2
      }}>
        <img src="/images/highlightlogo.svg" alt="Highlights" style={{ height: '40px', width: 'auto' }} />
      </div>
      
      {/* #nytgameswrapped2025 on colorful card */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'NYTKarnak, serif',
        color: '#000',
        textAlign: 'center',
        zIndex: 6
      }}>
        #nytgameswrapped2025
      </div>
    </div>
    
    {/* Smaller white content card on top */}
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '20px',
      maxWidth: '280px',
      width: '100%',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'absolute',
      top: 'calc(50% - 20px)',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 5
    }}>
      {/* Title */}
      <div style={{
        fontSize: '18.773px',
        fontWeight: 600,
        fontFamily: 'NYTKarnak, serif',
        lineHeight: '1.2',
        color: '#000',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        {userData.name}'s 2025 Highlights
      </div>
      
      {/* Most Used Wordle Starting Word */}
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <div style={{ 
          fontSize: '9.387px', 
          fontWeight: 'bold', 
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          marginBottom: '12px',
          letterSpacing: '0.4693px',
          textTransform: 'uppercase'
        }}>
          most used wordle starting word
        </div>
        <div style={{
          display: 'flex',
          gap: '4px',
          justifyContent: 'center',
          marginBottom: '15px'
        }}>
          {userData.stats.wordle.mostUsedStarter.split('').map((letter, i) => (
            <div
              key={i}
              style={{
                width: '29.579px',
                height: '29.579px',
                backgroundColor: '#6AAA64',
                border: '0.829px solid #000',
                borderRadius: '0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15.36px',
                fontWeight: 'bold',
                fontFamily: 'NYTFranklin, sans-serif',
                color: '#fff',
                textTransform: 'uppercase'
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
      
      {/* Longest Spelling Bee Word */}
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <div style={{ 
          fontSize: '9.387px', 
          fontWeight: 'bold', 
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          marginBottom: '12px',
          letterSpacing: '0.4693px',
          textTransform: 'uppercase'
        }}>
          longest spelling bee word
        </div>
        <div style={{ 
          fontSize: '17.067px', 
          fontWeight: 600,
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          letterSpacing: '1.7067px',
          textAlign: 'center'
        }}>
          {userData.stats.spellingBee.longestWord}
        </div>
      </div>
      
      {/* Perfect Connections Puzzles */}
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <div style={{ 
          fontSize: '9.387px', 
          fontWeight: 'bold', 
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          marginBottom: '12px',
          letterSpacing: '0.4693px',
          textTransform: 'uppercase'
        }}>
          perfect connections puzzles
        </div>
        <div style={{ 
          fontSize: '17.067px', 
          fontWeight: 600,
          fontFamily: 'NYTKarnak, serif',
          color: '#000',
          textAlign: 'center'
        }}>
          {userData.stats.connections.perfectPuzzles} times
        </div>
      </div>
      
      {/* Most Played Time of the Day */}
      <div style={{ marginBottom: '15px', textAlign: 'center' }}>
        <div style={{ 
          fontSize: '9.387px', 
          fontWeight: 'bold', 
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          marginBottom: '12px',
          letterSpacing: '0.4693px',
          textTransform: 'uppercase'
        }}>
          most played time of the day
        </div>
        <div style={{ 
          fontSize: '17.067px', 
          fontWeight: 600,
          fontFamily: 'NYTKarnak, serif',
          color: '#000',
          textAlign: 'center'
        }}>
          {userData.stats.mostActiveTime.charAt(0).toUpperCase() + userData.stats.mostActiveTime.slice(1)}
        </div>
      </div>
      
      {/* Top Played Game */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <div style={{ 
          fontSize: '9.387px', 
          fontWeight: 'bold', 
          fontFamily: 'NYTFranklin, sans-serif',
          color: '#000',
          marginBottom: '12px',
          letterSpacing: '0.4693px',
          textTransform: 'uppercase'
        }}>
          top played game
        </div>
        <div style={{ 
          fontSize: '20.48px', 
          fontWeight: 'bold',
          fontFamily: 'NYTKarnak, serif',
          color: '#000',
          textAlign: 'center'
        }}>
          {userData.stats.topGame}
        </div>
      </div>
      
    </div>
    
    {/* Share button outside the card */}
    <button style={{
      width: '100%',
      maxWidth: '350px',
      padding: '16px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '20px',
      position: 'relative',
      zIndex: 5
    }}>
      Share your year
    </button>
  </ScreenContainer>
);

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const screens = [
    <WelcomeScreen key="welcome" onNext={() => setCurrentScreen(1)} />,
    <AdScreen key="ad1" onNext={() => setCurrentScreen(2)} onPrevious={() => setCurrentScreen(0)} adPosition={0} />,
    <GreetingScreen key="greeting" userName={userData.name} onNext={() => setCurrentScreen(3)} onPrevious={() => setCurrentScreen(1)} currentScreen={0} />,
    <TimeOfDayScreen key="timeOfDay" userData={userData} onNext={() => setCurrentScreen(4)} onPrevious={() => setCurrentScreen(2)} currentScreen={1} />,
    <YearSummaryScreen key="yearSummary" userData={userData} onNext={() => setCurrentScreen(5)} onPrevious={() => setCurrentScreen(3)} currentScreen={2} />,
    <WordleStarterScreen key="wordleStarter" userData={userData} onNext={() => setCurrentScreen(6)} onPrevious={() => setCurrentScreen(4)} currentScreen={3} />,
    <WordlePerformanceScreen key="wordlePerformance" userData={userData} onNext={() => setCurrentScreen(7)} onPrevious={() => setCurrentScreen(5)} currentScreen={4} />,
    <WordleBestSolveScreen key="wordleBestSolve" userData={userData} onNext={() => setCurrentScreen(8)} onPrevious={() => setCurrentScreen(6)} currentScreen={5} />,
    <AdScreen key="ad2" onNext={() => setCurrentScreen(9)} onPrevious={() => setCurrentScreen(7)} adPosition={6} />,
    <SpellingBeeLongestScreen key="spellingBeeLongest" userData={userData} onNext={() => setCurrentScreen(10)} onPrevious={() => setCurrentScreen(8)} currentScreen={6} />,
    <SpellingBeeGeniusScreen key="spellingBeeGenius" userData={userData} onNext={() => setCurrentScreen(11)} onPrevious={() => setCurrentScreen(9)} currentScreen={7} />,
    <TopGameRevealScreen key="topGameReveal" userData={userData} onNext={() => setCurrentScreen(12)} onPrevious={() => setCurrentScreen(10)} currentScreen={8} />,
    <ConnectionsPerfectScreen key="connectionsPerfect" userData={userData} onNext={() => setCurrentScreen(13)} onPrevious={() => setCurrentScreen(11)} currentScreen={9} />,
    <ConnectionsPurpleFirstScreen key="connectionsPurpleFirst" userData={userData} onNext={() => setCurrentScreen(14)} onPrevious={() => setCurrentScreen(12)} currentScreen={10} />,
    <PersonalMessageScreen key="personalMessage" userData={userData} onNext={() => setCurrentScreen(15)} onPrevious={() => setCurrentScreen(13)} currentScreen={11} />,
    <EditorMessageScreen key="editorMessage" userData={userData} onNext={() => setCurrentScreen(16)} onPrevious={() => setCurrentScreen(14)} currentScreen={12} />,
    <AdScreen key="ad3" onNext={() => setCurrentScreen(17)} onPrevious={() => setCurrentScreen(15)} adPosition={13} />,
    <SummaryScreen key="summary" userData={userData} onNext={() => setCurrentScreen(0)} onPrevious={() => setCurrentScreen(16)} currentScreen={13} />
  ];

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5'
    }}>
      <AnimatePresence mode="wait">
        {screens[currentScreen]}
      </AnimatePresence>
    </div>
  );
}

export default App;
