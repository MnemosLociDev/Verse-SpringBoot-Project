
import { renderGrid } from '../components/verses.js';
import { renderDiscover } from './discover.js';

export const renderApp = (container, state) => {
  container.innerHTML = `
    <div class="min-h-screen relative bg-black flex flex-col w-full">
      <nav class="border-b border-white/5 bg-black/80 backdrop-blur-md sticky top-0 z-50 w-full">
        <div class="w-full px-10 h-20 flex items-center justify-between">
          <div class="flex items-center gap-2 cursor-pointer group" onclick="navigate('landing')">
            <div class="w-9 h-9 bg-brand flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500">
              <span class="text-white font-black text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500 font-heading">V</span>
            </div>
            <span class="text-2xl font-black tracking-tighter uppercase font-heading">Verses</span>
          </div>

          <div class="hidden md:flex items-center bg-white/5 border border-white/5 rounded-2xl px-5 py-2.5 w-full max-w-[200px] lg:max-w-[400px] group focus-within:border-brand/40 transition-colors mx-4">
            <i data-lucide="search" class="w-4 h-4 text-gray-500 group-focus-within:text-brand"></i>
            <input type="text" id="search-input" value="${state.searchQuery}" oninput="handleSearch(this.value)" placeholder="Search..." class="bg-transparent border-none focus:outline-none text-xs ml-3 w-full text-gray-200 placeholder-gray-600 font-medium" />
          </div>

          <div class="flex items-center gap-6">
            <div class="hidden sm:block text-right">
              <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Session</span>
            </div>
          </div>
        </div>
      </nav>

      <div class="flex flex-1 overflow-hidden">
        <main class="flex-1 overflow-y-auto p-10 scrollbar-hide">
          ${renderDiscover(state)}
        </main>
      </div>
    </div>
  `;
  renderGrid(state);
};

