
import { initialVerses } from './mock.js';

export const state = {
  currentPage: 'landing', 
  isAuthenticated: false,
  
  user: {
    id: 'u1',
    name: 'Guest User',
    role: 'creator', 
  },
  
  activeFilter: 'all',
  searchQuery: '',
  
  verses: initialVerses,
  votedVerses: {}, 
  
  selectedVerseId: null,
  isCreating: false
};


