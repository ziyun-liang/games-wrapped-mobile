# Games Wrapped 2025 - Mobile Interactive Report

A fully interactive mobile Games Wrapped report inspired by The New York Times Games, built with React and Framer Motion.

## Features

- **15 Interactive Screens**: Complete tap-through experience showcasing personalized gaming statistics
- **Smooth Animations**: Framer Motion powered transitions between screens
- **Mobile-First Design**: Optimized for mobile viewing experience
- **Intuitive Navigation**: Tap left side to go back, right side to go forward
- **Realistic Mock Data**: Personalized statistics for user "Jamie" including:
  - Wordle performance metrics
  - Spelling Bee achievements
  - Connections puzzle statistics
  - Time-of-day gaming patterns

## Screens Included

1. **Welcome Screen** - NYT Games Wrapped introduction
2. **Personal Greeting** - Personalized welcome message
3. **Time of Day Stats** - When you play most
4. **Year Summary** - Overall performance metrics
5. **Wordle Starter Word** - Most used starting word
6. **Wordle Performance** - Detailed Wordle statistics
7. **Wordle Best Solve** - Best performance highlight
8. **Spelling Bee Longest Word** - Longest word found
9. **Spelling Bee Genius** - Genius level achievements
10. **Top Game Reveal** - Most played game announcement
11. **Connections Perfect** - Perfect puzzle completions
12. **Connections Purple First** - Strategy statistics
13. **Personal Message** - Knock knock message
14. **Editor Message** - Message from Connections editor
15. **Summary Screen** - Complete highlights overview

## Technology Stack

- **React 18** - Component-based UI framework
- **Framer Motion** - Smooth animations and transitions
- **CSS-in-JS** - Styled components for responsive design
- **Mobile-First** - Optimized for mobile devices

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Navigation

- **Tap Right Side**: Go to next screen
- **Tap Left Side**: Go to previous screen
- **Screen Counter**: Shows current position (bottom center)

## Customization

The app uses mock data for user "Jamie" with realistic gaming statistics. To customize:

1. Edit `src/data/mockData.js` to modify user data
2. Update screen components in `src/components/` to change content
3. Modify animations in `src/components/SharedComponents.js`

## Design Features

- **Color Palette**: Matches NYT Games branding
- **Typography**: Mix of serif and sans-serif fonts
- **Geometric Shapes**: Decorative elements throughout
- **Progress Indicators**: Visual progress through screens
- **Game Icons**: Custom icons for Wordle, Spelling Bee, and Connections

## Browser Support

Optimized for mobile browsers and modern desktop browsers with touch support.
