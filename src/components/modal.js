
export const renderModal = (state) => {
  const container = document.getElementById('modal-container');
  if (!container) return;

  if (state.isCreating) {
    container.innerHTML = `
      <div class="bg-black border border-white/10 p-12 rounded-[3rem] w-full max-w-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] relative">
        <button onclick="closeModal()" class="absolute top-8 right-8 p-3 text-gray-500 hover:text-white transition-all">
          <i data-lucide="x" class="w-8 h-8"></i>
        </button>
        <div class="mb-12 text-center">
           <h2 class="text-5xl font-black mb-3 uppercase tracking-tighter font-heading">Start a Discussion</h2>
           <p class="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Every great change begins with a question</p>
        </div>
        
        <form onsubmit="createVerse(event)" class="space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div>
                <label class="text-[10px] font-black text-gray-500 uppercase mb-4 block tracking-widest">Format</label>
                <select id="v-type" class="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-sm focus:border-brand outline-none transition-all appearance-none cursor-pointer font-bold">
                  <option value="poll">Standard Poll</option>
                  <option value="debate">Open Debate</option>
                  <option value="petition">Public Petition</option>
                  <option value="comparison">Option Match-up</option>
                </select>
             </div>
             <div>
                <label class="text-[10px] font-black text-gray-500 uppercase mb-4 block tracking-widest">Headline Topic</label>
                <input id="v-title" type="text" placeholder="e.g. Mandatory 3-day weekends" class="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-sm focus:border-brand outline-none transition-all placeholder:text-gray-700 font-bold" required />
             </div>
          </div>
          <div>
            <label class="text-[10px] font-black text-gray-500 uppercase mb-4 block tracking-widest">Tell the story</label>
            <textarea id="v-desc" placeholder="Provide context, evidence, or your personal take on the matter..." class="w-full bg-white/5 border border-white/5 rounded-3xl p-6 text-sm h-40 resize-none outline-none focus:border-brand transition-all placeholder:text-gray-700 font-medium leading-relaxed"></textarea>
          </div>
          <div>
            <label class="text-[10px] font-black text-gray-500 uppercase mb-4 block tracking-widest">The Choices</label>
            <input id="v-opts" type="text" placeholder="Choice A, Choice B, Choice C" class="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-sm outline-none focus:border-brand transition-all placeholder:text-gray-700 font-bold" required />
            <p class="text-[9px] text-gray-600 mt-4 italic font-black uppercase tracking-widest">*Separate your available voting options with commas.</p>
          </div>
          <button type="submit" class="w-full bg-brand text-white font-black py-6 rounded-3xl uppercase tracking-[0.3em] text-xl hover:opacity-90 hover:scale-[1.02] transition-all shadow-2xl shadow-brand/30 active:scale-95 flex items-center justify-center gap-4">
            <i data-lucide="send" class="w-6 h-6"></i> Share with the World
          </button>
        </form>
      </div>
    `;
    container.classList.remove('hidden');
  } 
  
  else if (state.selectedVerseId) {
    const verse = state.verses.find(v => v.id === state.selectedVerseId);
    if (!verse) return;
    
    container.innerHTML = `
      <div class="bg-black border border-white/5 rounded-[4rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        <div class="p-10 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
          <div class="flex items-center gap-6">
            <div class="w-12 h-12 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center text-brand">
              <i data-lucide="bar-chart-2" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="text-[10px] font-black text-brand uppercase tracking-[0.3em] mb-1 block">Discussion Stats</span>
              <h2 class="text-4xl font-black uppercase tracking-tighter font-heading">${verse.title}</h2>
            </div>
          </div>
          <button onclick="closeModal()" class="p-4 text-gray-500 hover:text-white transition-all"><i data-lucide="x" class="w-8 h-8"></i></button>
        </div>
        
        <div class="flex-1 overflow-y-auto p-12 scrollbar-hide grid lg:grid-cols-2 gap-20">
           <div>
              <div class="mb-12 bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
                <h4 class="text-[10px] font-black text-gray-500 mb-6 uppercase tracking-widest">Topic Overview</h4>
                <p class="text-gray-300 text-lg leading-relaxed font-medium italic">"${verse.description}"</p>
              </div>
              
              <h4 class="text-[10px] font-black text-gray-500 mb-8 uppercase tracking-widest leading-none">Participation Breakdown</h4>
              <div class="space-y-6">
                 ${verse.options.map(opt => {
                   const total = verse.options.reduce((a, b) => a + b.votes, 0);
                   const p = total > 0 ? (opt.votes / total * 100).toFixed(1) : 0;
                   const isVoted = state.votedVerses[verse.id] === opt.id;
                   
                   return `
                     <button onclick="window.dispatch('VOTE', {verseId: '${verse.id}', optionId: '${opt.id}'})" 
                        class="w-full p-8 bg-white/5 border ${isVoted ? 'border-brand ring-1 ring-brand/40' : 'border-white/5'} rounded-3xl group hover:border-brand/30 transition-all text-left relative overflow-hidden">
                        <div class="relative z-10">
                          <div class="flex justify-between text-base font-black mb-4 uppercase tracking-wider items-center">
                             <span class="flex items-center gap-3">
                               ${isVoted ? '<i data-lucide="check-circle-2" class="w-5 h-5 text-brand"></i>' : ''}
                               <span class="${isVoted ? 'text-white' : 'text-gray-300'}">${opt.text}</span>
                             </span> 
                             <div class="text-right">
                               <div class="text-brand font-black text-xl">${p}%</div>
                               <div class="text-[8px] text-gray-600 uppercase tracking-widest">${opt.votes.toLocaleString()} Votes</div>
                             </div>
                          </div>
                          <div class="h-1.5 bg-black rounded-full overflow-hidden shadow-inner mt-2">
                             <div class="h-full bg-brand transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(244,63,94,0.3)]" style="width: ${p}%"></div>
                          </div>
                        </div>
                        <div class="absolute inset-0 ${isVoted ? 'bg-brand/5' : 'bg-transparent'} transition-colors"></div>
                     </button>
                   `;
                 }).join('')}
              </div>
           </div>
           
           <div class="flex flex-col h-full bg-white/[0.01] p-10 rounded-[3rem] border border-white/5">
              <h4 class="text-[10px] font-black text-gray-500 mb-10 uppercase tracking-widest flex justify-between leading-none items-center">
                <span>The Community Voice</span>
                <span class="px-3 py-1 bg-white/5 rounded-lg text-brand">${verse.comments.length} Comments</span>
              </h4>
              
              <div class="flex-1 space-y-8 mb-10 overflow-y-auto pr-4 scrollbar-hide">
                 ${verse.comments.length === 0 ? `
                   <div class="flex flex-col items-center justify-center py-24 opacity-20">
                     <i data-lucide="message-square" class="w-16 h-16 mb-6"></i>
                     <div class="text-[10px] font-black uppercase tracking-widest">No comments yet. Be the first to speak.</div>
                   </div>
                 ` : verse.comments.map(c => `
                   <div class="p-6 bg-white/5 rounded-3xl border border-white/5 shadow-lg transform hover:scale-[1.02] transition-all">
                      <div class="flex justify-between items-center mb-4">
                        <div class="text-xs font-black text-brand uppercase italic font-heading tracking-widest">${c.userName}</div>
                        <div class="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Top Contributor</div>
                      </div>
                      <p class="text-base text-gray-400 leading-relaxed font-medium">${c.text}</p>
                   </div>
                 `).reverse().join('')}
              </div>
              
              <div class="flex gap-4">
                <input type="text" id="comment-input" placeholder="Share your perspective..." class="flex-1 bg-white/5 border border-white/5 rounded-2xl p-5 text-sm outline-none focus:border-brand transition-all font-bold placeholder:text-gray-800" autocomplete="off" />
                <button onclick="addComment()" class="p-5 bg-brand text-white rounded-2xl hover:opacity-90 hover:scale-110 transition-all shadow-xl shadow-brand/40">
                  <i data-lucide="send" class="w-6 h-6"></i>
                </button>
              </div>
           </div>
        </div>
      </div>
    `;
    container.classList.remove('hidden');
  } 
  
  else {
    container.classList.add('hidden');
  }
};

