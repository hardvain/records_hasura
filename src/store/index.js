import create from 'zustand';
import moment from 'moment';
const [useStore] = create((set) => ({
  uiState: {
    activeDay: moment.now(),
    selectedRecord: undefined,
  },
  actions: {
    setActiveDay: (day) =>
      set((state) => ({
        ...state,
        uiState: { ...state.uiState, activeDay: day },
      })),
    setSelectedRecord: (record) =>
      set((state) => ({
        ...state,
        uiState: { ...state.uiState, selectedRecord: record },
      })),
  },
}));
