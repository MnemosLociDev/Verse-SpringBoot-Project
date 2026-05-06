// Every Major functionality happens here, some will be handled by the sringboot backend
import "./styles/index.css";
import { createIcons, icons } from "lucide";
import { state } from "./state.js";
import { subscribe, dispatch } from "./store.js";
import { renderSidebar } from "./components/sidebar.js";
import { renderLanding } from "./pages/landing.js";
import { renderAuth } from "./pages/auth.js";
import { renderApp } from "./pages/app.js";
import { renderModal } from "./components/modal.js";

const render = () => {
  renderSidebar(state);

  const container = document.getElementById("main-container");
  if (!container) return;
  container.innerHTML = "";

  switch (state.currentPage) {
    case "landing":
      renderLanding(container);
      break;
    case "login":
      renderAuth(container, "login");
      break;
    case "signup":
      renderAuth(container, "signup");
      break;
    case "app":
      renderApp(container, state);
      break;
  }

  renderModal(state);

  createIcons({ icons });
};

subscribe(render);

window.dispatch = dispatch;

const enhancedDispatch = (action, payload) => {
  if (action === "OPEN_DETAIL") {
    state.selectedVerseId = payload;
    dispatch("RENDER");
    return;
  }

  if (action === "CLOSE_MODAL") {
    state.isCreating = false;
    state.selectedVerseId = null;
    dispatch("RENDER");
    return;
  }

  dispatch(action, payload);
};

window.dispatch = enhancedDispatch;

window.state = state;
window.navigate = (page) => enhancedDispatch("NAVIGATE", page);
window.setRole = (role) => {
  state.user.role = role;
  render();
};
window.setFilter = (filter) => {
  state.activeFilter = filter;
  render();
};

window.handleSearch = (query) => {
  state.searchQuery = query.toLowerCase();
  render();

  const input = document.getElementById("search-input");
  if (input) {
    input.focus();
    input.setSelectionRange(state.searchQuery.length, state.searchQuery.length);
  }
};

window.openCreator = () => {
  state.isCreating = true;
  render();
};
window.logout = () => {
  state.isAuthenticated = false;
  state.currentPage = "landing";
  render();
};
window.openDetail = (id) => enhancedDispatch("OPEN_DETAIL", id);
window.closeModal = () => enhancedDispatch("CLOSE_MODAL");
window.vote = (vId, oId) =>
  enhancedDispatch("VOTE", { verseId: vId, optionId: oId });

window.handleAuthSubmit = (e, mode) => {
  e.preventDefault();
  state.isAuthenticated = true;
  state.currentPage = "app";
  render();
};

window.createVerse = (e) => {
  e.preventDefault();
  const type = document.getElementById("v-type").value;
  const title = document.getElementById("v-title").value;
  const desc = document.getElementById("v-desc").value;
  const opts = document
    .getElementById("v-opts")
    .value.split(",")
    .map((o) => ({
      id: "o" + Math.random().toString(36).substr(2, 5),
      text: o.trim(),
      votes: 0,
    }));

  state.verses.unshift({
    id: "v" + Date.now(),
    title,
    type,
    creatorName: state.user.name,
    description: desc,
    options: opts,
    likes: 0,
    createdAt: Date.now(),
    comments: [],
    isTakenDown: false,
  });

  state.isCreating = false;
  render();
};

window.addComment = () => {
  const input = document.getElementById("comment-input");
  if (!input || !input.value.trim() || !state.selectedVerseId) return;

  const verse = state.verses.find((v) => v.id === state.selectedVerseId);
  if (verse) {
    verse.comments.push({
      id: "c" + Date.now(),
      userName: state.user.name,
      text: input.value.trim(),
      likes: 0,
    });
    input.value = "";
    render();
  }
};

window.handleTakeDown = (id) => {
  const verse = state.verses.find((v) => v.id === id);
  if (verse) {
    verse.isTakenDown = true;
    render();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
