# Motus Game - Debugging Exercise

A French word-guessing game (similar to Wordle) debugging and testing project.

## Project Overview

This exercise involved debugging a broken Motus game, implementing missing features, and writing unit tests.

## Steps Completed

### 1. Bug Analysis
- Integrated HTML/JS code
- Identified broken functionality

### 2. Bug Fixes

**Bug #1: Inconsistent return type**
- Issue: `tryWord()` returned `true` when word matched, but an object otherwise
- Fix: Always return an object with `wellPlaced`, `missplaced`, `notInWord` properties

**Bug #2: Loop off-by-one error**
- Issue: `for (let i = 0; i < arrayBase.length-1; i++)` skipped last letter
- Fix: Removed `-1` to iterate through all letters

**Bug #3: Letter classification conflict**
- Issue: Letters not in the word appeared in both "missplaced" AND "notInWord"
- Fix: Added check `arrayBase.includes(arrayWord[i])` before adding to missplaced

### 3. TODO Implementation
- Added case-insensitive comparison using `.toLowerCase()`
- Game now accepts "dictionnaire", "Dictionnaire", "DICTIONNAIRE"

### 4. Testing with Vitest

**Restructured code:**
- Created `motus.js` (business logic, exported)
- Modified `script.js` (DOM interface, imports from motus.js)
- Updated `index.html` (added `type="module"`)

**Wrote 6 unit tests:**
- ✓ Correct word returns all letters well-placed
- ✓ Case insensitivity works
- ✓ Well-placed letters identified correctly
- ✓ Missplaced letters identified correctly
- ✓ Absent letters identified correctly
- ✓ No letter appears in multiple categories

## Project Structure

```
10-motus/
├── index.html        # Game interface (type="module")
├── motus.js          # Game logic (exported)
├── script.js         # DOM interaction (imports motus.js)
├── motus.test.js     # Vitest unit tests
├── package.json      # npm config (type: "module")
├── .gitignore        # Ignore node_modules
└── README.md         # This file
```

## Installation

```bash
npm install
```

## Running the Game

Open `index.html` in a browser.

## Running Tests

```bash
npm test          # Watch mode
npm run test:run  # Single run
```

## Technologies

- Vanilla JavaScript (ES Modules)
- Vitest (testing framework)
- npm (package management)

## Key Learnings

- Debugging with `console.log()`
- ES6 modules (`import`/`export`)
- Separation of concerns (logic vs UI)
- Unit testing with Vitest
- npm configuration and scripts
