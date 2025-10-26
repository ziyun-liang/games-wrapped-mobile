// Mock user data for Jamie
export const userData = {
  name: "Jamie",
  year: 2025,
  stats: {
    totalDaysPlayed: 32,
    puzzlesPerDay: 2.4,
    percentile: 84,
    mostActiveTime: "morning",
    morningPlayersPercent: 60,
    topGame: "Connections",
    topGameRank: 2, // Connections was 2nd most played game overall
    
    // Wordle stats
    wordle: {
      mostUsedStarter: "BREAD",
      puzzlesPlayed: 128,
      winRate: 74,
      avgGuesses: 3.2,
      maxStreak: 12,
      bestSolve: {
        word: "BREAD",
        guesses: 2,
        percentile: 3,
        date: "May 14th, 2025",
        puzzleNumber: 1425
      }
    },
    
    // Spelling Bee stats
    spellingBee: {
      longestWord: "INITIALIZATION",
      geniusReached: 13,
      perfectPuzzles: 29
    },
    
    // Connections stats
    connections: {
      perfectPuzzles: 29,
      purpleFirst: 32,
      topPlayedGame: true
    }
  }
};

export const gamesData = {
  wordle: {
    name: "Wordle",
    icon: "wordle-icon",
    color: "#6AAA64"
  },
  spellingBee: {
    name: "Spelling Bee", 
    icon: "bee-icon",
    color: "#FFD700"
  },
  connections: {
    name: "Connections",
    icon: "connections-icon", 
    color: "#8B5CF6"
  }
};
