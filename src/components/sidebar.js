
export const renderSidebar = (state) => {
  const sidebar = document.getElementById('sidebar-container');
  if (!sidebar) return;
  

  if (state.currentPage === 'landing' || state.currentPage === 'login' || state.currentPage === 'signup') {
    sidebar.innerHTML = '';
    return;
  }
  
  sidebar.innerHTML = `
    <div class="liquid-sidebar glass-morphism flex flex-col gap-6 items-center">
      <div class="sidebar-toggle-hint">
        <i data-lucide="chevron-right" class="w-4 h-4 text-white"></i>
      </div>
      
      <div class="w-8 h-px bg-surface-700"></div>

      <button onclick="navigate('app')" class="p-3 rounded-xl hover:bg-brand/10 transition-all ${state.currentPage === 'app' ? 'text-brand bg-brand/5' : 'text-gray-500 hover:text-brand'}" title="Discover">
        <i data-lucide="layout-grid" class="w-6 h-6"></i>
      </button>

      <button onclick="openCreator()" class="p-4 bg-brand text-white rounded-2xl shadow-lg shadow-brand/20 hover:scale-110 transition-all mt-2" title="New Topic">
        <i data-lucide="plus" class="w-6 h-6"></i>
      </button>

      <div class="flex-1"></div>

      <button onclick="logout()" class="mb-4 p-3 rounded-xl text-gray-500 hover:text-brand hover:bg-brand/10 transition-all" title="Logout">
        <i data-lucide="log-out" class="w-6 h-6"></i>
      </button>
    </div>
  `;
};
