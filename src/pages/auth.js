// User Authentication, will also be handled by the spring boot backend
export const renderAuth = (container, mode) => {
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-6 bg-black">
      <div class="w-full max-w-md bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
        <div class="flex flex-col items-center mb-10 text-center">
          <div class="w-16 h-16 bg-brand flex items-center justify-center rotate-45 mb-8 group hover:rotate-0 transition-transform duration-500">
            <span class="text-white font-black text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500 font-heading">V</span>
          </div>
          <h2 class="text-4xl font-black uppercase tracking-tighter font-heading mb-2">
            ${mode === "login" ? "Welcome Back" : "Join Verses"}
          </h2>
          <p class="text-gray-500 text-sm font-medium">
            ${mode === "login" ? "Sign in to participate in the discussion" : "Create an account to start your own verse"}
          </p>
        </div>

        <form onsubmit="handleAuthSubmit(event, '${mode}')" class="space-y-6">
          ${
            mode === "signup"
              ? `
            <div>
              <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block">Display Name</label>
              <input type="text" id="auth-name" placeholder="E.g. Who you are" class="w-full bg-surface-900 border border-surface-700 rounded-2xl p-5 text-sm focus:border-brand outline-none transition-all" required />
            </div>
          `
              : ""
          }
          <div>
            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block">Email Address</label>
            <input type="email" id="auth-email" placeholder="you@example.com" class="w-full bg-surface-900 border border-surface-700 rounded-2xl p-5 text-sm focus:border-brand outline-none transition-all" required />
          </div>
          <div>
            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 block">Password</label>
            <input type="password" id="auth-pass" placeholder="••••••••" class="w-full bg-surface-900 border border-surface-700 rounded-2xl p-5 text-sm focus:border-brand outline-none transition-all" required />
          </div>

          <button type="submit" class="w-full bg-brand text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-xl shadow-brand/20 active:scale-95 text-lg">
            ${mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div class="mt-10 pt-10 border-t border-surface-700 text-center">
          <p class="text-xs text-gray-500 font-medium">
            ${mode === "login" ? "New vector in the network?" : "Already a member ?"}
            <button onclick="navigate('${mode === "login" ? "signup" : "login"}')" class="text-brand font-black hover:opacity-80 ml-2 uppercase tracking-widest">
              ${mode === "login" ? "Join Now" : "Sign In"}
            </button>
          </p>
        </div>

        <button onclick="navigate('landing')" class="mt-8 w-full text-[10px] font-bold text-gray-600 hover:text-gray-400 uppercase tracking-widest transition-all">
          ← Return
        </button>
      </div>
    </div>
  `;
};
