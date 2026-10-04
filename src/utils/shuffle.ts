/**
 * Utility functions for randomizing and shuffling exercise options
 * Ensures the correct answer is never predictably at index 0
 */

// Deterministic or pseudo-random shuffle
export function shuffleArray<T>(array: T[], seed?: string | number): T[] {
  const arr = [...array];
  // Simple Knuth-Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate pseudo-random or random index
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles comprehension or test question options and returns:
 * - shuffledOptions
 * - newCorrectIndex
 */
export function shuffleQuestionOptions(options: string[], correctIndex: number): {
  shuffledOptions: string[];
  newCorrectIndex: number;
} {
  const correctText = options[correctIndex];
  const items = options.map((opt, idx) => ({ text: opt, isCorrect: idx === correctIndex }));
  
  // Shuffle
  const shuffled = shuffleArray(items);
  const newIndex = shuffled.findIndex(item => item.isCorrect);

  return {
    shuffledOptions: shuffled.map(s => s.text),
    newCorrectIndex: newIndex >= 0 ? newIndex : 0
  };
}
