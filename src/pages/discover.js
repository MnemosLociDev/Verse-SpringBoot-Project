
export const renderDiscover = (state) => {
  const filters = ['all', 'poll', 'debate', 'petition', 'comparison'];
  
  return `
    <header class="mb-12">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div>
          <h1 class="text-5xl font-black uppercase tracking-tighter mb-4 font-heading">
            Discover <span class="text-brand">Verses</span>
          </h1>
          <p class="text-gray-500 font-medium">Explore the most engaging debates and petitions across the platform.</p>
        </div>
        
        <div class="flex bg-white/5 p-1.5 rounded-2xl border border-white/5 shadow-inner">
          ${filters.map(filter => `
            <button onclick="setFilter('${filter}')" 
              class="px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${state.activeFilter === filter ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'text-gray-500 hover:text-gray-300'}">
              ${filter}
            </button>
          `).join('')}
        </div>
      </div>
    </header>

    ${state.activeFilter === 'all' ? renderFeaturedSpotlight(state) : ''}

    <div id="verse-grid" class="flex flex-col w-full"></div>
    
    <div id="empty-state" class="hidden flex flex-col items-center justify-center py-32 text-gray-600 border-2 border-dashed border-white/5 rounded-[3rem]">
      <i data-lucide="frown" class="w-12 h-12 mb-4 opacity-20"></i>
      <p class="font-bold text-sm uppercase tracking-widest">No signal detected in this frequency</p>
    </div>
  `;
};

const renderFeaturedSpotlight = (state) => {
  const featured = state.verses.find(v => v.isFeatured);
  if (!featured) return '';
  
  const totalVotes = featured.options.reduce((acc, opt) => acc + opt.votes, 0);

  return `
    <section class="mb-12">
      <div class="relative bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden p-10 group hover:border-brand/40 transition-all shadow-2xl">
        <div class="absolute top-0 right-0 p-8">
           <span class="px-4 py-1.5 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-brand/20 rotate-3 inline-block">Featured Topic</span>
        </div>
        
        <div class="max-w-none relative z-10">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20">
              <i data-lucide="star" class="w-5 h-5 fill-current"></i>
            </div>
            <span class="text-[10px] text-gray-500 font-black uppercase tracking-widest">Global spotlight • Trending globally</span>
          </div>

          <h2 class="text-4xl md:text-5xl font-black mb-6 leading-tight font-heading">${featured.title}</h2>
          <p class="text-lg text-gray-400 mb-10 leading-relaxed font-medium">${featured.description}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${featured.options.map(opt => {
              const perc = totalVotes > 0 ? (opt.votes / totalVotes * 100).toFixed(1) : 0;
              return `
                <div onclick="window.dispatch('VOTE', {verseId: '${featured.id}', optionId: '${opt.id}'})" 
                  class="bg-surface-900 border border-white/5 p-6 rounded-3xl cursor-pointer hover:border-brand/50 transition-all relative overflow-hidden group/opt group-active:scale-[0.98]">
                  <div class="flex justify-between items-center mb-3 relative z-10">
                    <span class="font-black uppercase tracking-wide text-xs">${opt.text}</span>
                    <span class="text-brand font-black">${perc}%</span>
                  </div>
                  <div class="h-1.5 w-full bg-surface-800 rounded-full overflow-hidden relative z-10">
                    <div class="h-full bg-brand transition-all duration-1000" style="width: ${perc}%"></div>
                  </div>
                  <div class="absolute inset-0 bg-brand/5 opacity-0 group-hover/opt:opacity-100 transition-opacity"></div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-brand/10 blur-[100px] rounded-full"></div>
      </div>
    </section>
  `;
};
