import { state } from "./state.js";

const subscribers = [];

export const subscribe = (callback) => {
  subscribers.push(callback);
};

export const notify = () => {
  subscribers.forEach((cb) => cb(state));
};

export const dispatch = (action, payload) => {
  switch (action) {
    case "NAVIGATE":
      state.currentPage = payload;
      state.selectedVerseId = null;
      break;

    case "SET_SEARCH":
      state.searchQuery = payload.toLowerCase();
      break;

    case "VOTE":
      const vId = payload.verseId;
      const oId = payload.optionId;
      const verse = state.verses.find((v) => v.id === vId);

      if (verse) {
        if (state.votedVerses[vId] === oId) return;

        if (state.votedVerses[vId]) {
          const prevOption = verse.options.find(
            (o) => o.id === state.votedVerses[vId],
          );
          if (prevOption) prevOption.votes = Math.max(0, prevOption.votes - 1);
        }

        const newOption = verse.options.find((o) => o.id === oId);
        if (newOption) {
          newOption.votes++;
          state.votedVerses[vId] = oId;
        }
      }
      break;

    case "LIKE":
      const vToLike = state.verses.find((v) => v.id === payload);
      if (vToLike) vToLike.likes++;
      break;

    case "RENDER":
      break;
  }

  notify();
};
