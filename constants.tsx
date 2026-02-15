
import { CodeLine } from './types';

export const C_CODE_SNIPPET: CodeLine[] = [
  { id: 1, text: '#include <stdio.h>', isBuggy: false, indent: 0 },
  { id: 2, text: '', isBuggy: false, indent: 0 },
  { id: 3, text: 'int main() {', isBuggy: false, indent: 0 },
  { id: 4, text: 'int count = 0;', isBuggy: false, indent: 1 },
  { id: 5, text: 'printf("Initializing system...\\n");', isBuggy: false, indent: 1 },
  { id: 6, text: '', isBuggy: false, indent: 0 },
  { id: 7, text: '// Execute background sync', isBuggy: false, indent: 1 },
  { id: 8, text: 'while (count < 10);', isBuggy: true, indent: 1 },
  { id: 9, text: '{', isBuggy: false, indent: 1 },
  { id: 10, text: 'printf("Syncing packet %d...\\n", count);', isBuggy: false, indent: 2 },
  { id: 11, text: 'count++;', isBuggy: false, indent: 2 },
  { id: 12, text: '}', isBuggy: false, indent: 1 },
  { id: 13, text: '', isBuggy: false, indent: 0 },
  { id: 14, text: 'printf("System Ready.\\n");', isBuggy: false, indent: 1 },
  { id: 15, text: 'return 0;', isBuggy: false, indent: 1 },
  { id: 16, text: '}', isBuggy: false, indent: 0 },
];

export const SUPPORTED_UNITS = [
  "ICT158", "ICT159", "ICT167", "ICT169", "ICT170", 
  "ICT201", "ICT202", "ICT283", "ICT285", "MAS162", "MAS164"
];
