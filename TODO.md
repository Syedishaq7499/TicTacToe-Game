# Fix TicTacToe Issues

## Issues Identified:
1. `won` function receives `data` array but compares it to string "X" - always falls to else showing "Player 2 wins"
2. `data` is 2D array but treated as 1D - incorrect cell updates
3. Win checking logic compares wrong array indices

## Plan:
- [x] Fix data array to be 1D for simpler cell indexing
- [x] Fix toggle function to update correct cell
- [x] Fix checkWin function to check correct indices
- [x] Fix won function to receive and display correct winner
