
import { getTypeColors, calculatePercentage, formatRelativeTime } from '../utils/ui.js';

export const Card = (verse, state) => {
  const totalVotes = verse.options.reduce((sum, opt) => sum + opt.votes, 0);
  
  const renderOption = (opt) => {
    const perc = calculatePercentage(opt.votes, totalVotes);
    const isVoted = state.votedVerses[verse.id] === opt.id;
    
    return `
      <button onclick="window.dispatch('VOTE', {verseId: '${verse.id}', optionId: '${opt.id}'})" 
        class="relative w-full text-left p-5 rounded-2xl bg-surface-900 shadow-inner border ${isVoted ? 'border-brand ring-1 ring-brand/50' : 'border-surface-700/50'} hover:border-brand/40 transition-all overflow-hidden group">
        <div class="relative z-10 flex justify-between items-center">
          <div class="flex items-center gap-3">
            ${isVoted ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-brand"></i>' : ''}
            <span class="font-black uppercase tracking-wider text-[10px] ${isVoted ? 'text-white' : 'text-gray-300'} group-hover:text-white transition-colors">${opt.text}</span>
          </div>
          <span class="text-brand font-black text-xs font-heading">${perc}%</span>
        </div>
        <div class="absolute inset-y-0 left-0 ${isVoted ? 'bg-brand/10' : 'bg-brand/5'} transition-all duration-1000 ease-out" style="width: ${perc}%"></div>
      </button>
    `;
  };

  return `
    <div class="verse-card glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col h-full hover:border-brand/40">
      <div class="p-10 flex-1 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-brand/5 blur-3xl rounded-full"></div>
        
        <div class="flex justify-between items-start mb-8 relative z-10">
          <span class="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${getTypeColors(verse.type)}">
            ${verse.type}
          </span>
          <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest italic">${formatRelativeTime(verse.createdAt)}</span>
        </div>

        <h3 class="text-3xl font-black mb-4 leading-tight cursor-pointer hover:text-brand transition-colors font-heading relative z-10" onclick="window.dispatch('OPEN_DETAIL', '${verse.id}')">
          ${verse.title}
        </h3>
        <p class="text-gray-400 text-base mb-10 leading-relaxed font-medium line-clamp-2 relative z-10">${verse.description}</p>
        
        <div class="space-y-4 mb-8 relative z-10">
          ${verse.options.map(renderOption).join('')}
        </div>
      </div>

      <div class="px-10 py-6 border-t border-white/5 flex justify-between items-center bg-surface-900/40 relative z-10">
        <div class="flex gap-6 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
           <span class="flex items-center gap-2 hover:text-brand cursor-pointer transition-colors" title="Likes" onclick="window.dispatch('LIKE', '${verse.id}'); event.stopPropagation()"><i data-lucide="heart" class="w-4 h-4"></i> ${verse.likes}</span>
           <span class="flex items-center gap-2" title="Comments"><i data-lucide="message-circle" class="w-4 h-4"></i> ${verse.comments.length}</span>
        </div>
        <button onclick="window.dispatch('OPEN_DETAIL', '${verse.id}')" class="bg-brand/5 text-brand px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-brand hover:text-white transition-all">
          VIEW DATA <i data-lucide="arrow-right" class="w-3 h-3"></i>
        </button>
      </div>
    </div>
  `;
};

