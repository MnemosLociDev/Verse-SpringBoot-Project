
export const renderLanding = (container) => {
  container.innerHTML = `
    <div class="min-h-screen flex flex-col">
      <nav class="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div class="flex items-center gap-2 cursor-pointer" onclick="navigate('landing')">
          <div class="w-8 h-8 bg-brand flex items-center justify-center rotate-45">
            <span class="text-white font-black text-xl -rotate-45 font-heading">V</span>
          </div>
          <span class="text-2xl font-black tracking-tighter uppercase font-heading">Verses</span>
        </div>
        <div class="flex gap-4">
          <button onclick="navigate('login')" class="px-6 py-2 text-sm font-bold hover:text-brand transition-colors uppercase tracking-widest">LOG_IN</button>
          <button onclick="navigate('signup')" class="px-6 py-2 text-sm font-black bg-brand hover:bg-opacity-90 text-white rounded-lg transition-all shadow-lg shadow-brand/20 uppercase tracking-widest">GET_STARTED</button>
        </div>
      </nav>

      <main class="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto py-24 md:py-32">
        <h1 class="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.85] mb-8 font-heading">
          Where the world <br /> <span class="text-brand">finds its voice.</span>
        </h1>
        <p class="text-xl text-gray-400 mb-12 max-w-2xl font-medium leading-relaxed">
          A decentralized platform for global petitions, debates, and polls. Join millions in shaping the future through collective action.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <button onclick="navigate('signup')" class="px-12 py-6 bg-brand text-white font-black rounded-2xl text-xl hover:scale-105 transition-all shadow-2xl shadow-brand/30 uppercase tracking-widest">
            Join the Discussion
          </button>
          <button onclick="navigate('login')" class="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl text-xl hover:bg-white/10 transition-all uppercase tracking-widest">
            Start Exploring
          </button>
        </div>
      </main>

      <footer class="p-12 border-t border-white/5 mt-24">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-600 font-bold tracking-[0.2em] uppercase">
          <a href="https://github.com" target="_blank" class="flex items-center gap-2 hover:text-brand transition-colors">
            <i data-lucide="github" class="w-4 h-4"></i> SOURCE_REPOSITORY
          </a>
          <div class="flex gap-8">
            <span class="hover:text-brand cursor-pointer transition-colors">Protocol</span>
            <span class="hover:text-brand cursor-pointer transition-colors">Privacy</span>
            <span class="hover:text-brand cursor-pointer transition-colors">Security</span>
          </div>
          <span class="text-brand">
            GROUP 17
          </span>
        </div>
      </footer>
    </div>
  `;
};
