import { Card } from './card.js';
import { getTypeColors } from '../utils/ui.js';

export const renderGrid = (state) => {
  const container = document.getElementById('verse-grid');
  if (!container) return;
  container.innerHTML = '';

  const isMainDiscovery = state.currentPage === 'app' && state.activeFilter === 'all';

  if (isMainDiscovery && !state.searchQuery) {
    const categories = ['poll', 'debate', 'petition', 'comparison'];
    
    categories.forEach(type => {
      const verses = state.verses.filter(v => v.type === type && !v.isTakenDown);
      if (verses.length === 0) return;

      const section = document.createElement('div');
      section.className = 'mb-16';
      section.innerHTML = `
        <div class="flex items-center justify-between mb-8 px-4">
          <h3 class="text-2xl font-black uppercase tracking-tighter font-heading flex items-center gap-3">
            <span class="w-2 h-8 bg-brand rounded-full"></span> ${type}s
          </h3>
          <button onclick="setFilter('${type}')" class="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-brand transition-all flex items-center gap-2">
            View All <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </button>
        </div>
        <div class="horizontal-scroll pb-6">
          ${verses.slice(0, 5).map(v => Card(v, state)).join('')}
        </div>
      `;
      container.appendChild(section);
    });
    container.className = 'flex flex-col w-full';
  } else {
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8';
    
    let filtered = state.verses.filter(v => {
      if (v.isTakenDown) return false;
      const matchesFilter = state.activeFilter === 'all' || v.type === state.activeFilter;
      const matchesSearch = !state.searchQuery || 
        v.title.toLowerCase().includes(state.searchQuery) ||
        v.description.toLowerCase().includes(state.searchQuery);

      return matchesFilter && matchesSearch;
    });

    const emptyState = document.getElementById('empty-state');
    if (filtered.length === 0) emptyState?.classList.remove('hidden');
    else emptyState?.classList.add('hidden');

    filtered.forEach(verse => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = Card(verse, state);
      container.appendChild(wrapper.firstElementChild);
    });
  }
};
