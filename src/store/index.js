import create from 'zustand';
import moment from 'moment';
export const [useStore] = create((set, get) => ({
  ui: {
    date: moment(),
    showSidebar:true,
    currentTeam:'all',
    showFormPopup: false,
    refreshedAt: moment().toISOString(),
    colors: {
      primary: 'deeppurple',
      secondary: 'deeporange',
    },
  },
  toggleFormPopup: () => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, showFormPopup: !get().ui.showFormPopup },
    }));
  },
  toggleSidebar: () => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, showSidebar: !get().ui.showSidebar },
    }));
  },
  setCurrentTeam: (value) => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, currentTeam: value },
    }));
  },
  setDate: (value) => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, date: value },
    }));
  },
  setColors: (colors) => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, colors },
    }));
  },
  prevDate: () => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, date: moment(get().ui.date).subtract(1, 'days') },
    }));
  },
  nextDate: () => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, date: moment(get().ui.date).add(1, 'days') },
    }));
  },
  getRecords: async (filters) => {
    let qs = '';
    Object.keys(filters).forEach((key) => {
      qs = qs + `${key}=${filters[key]}&`;
    });
    const response = await fetch(`/api/records?${qs}`, {
      method: 'GET',
    });
    return await response.json();
  },
  getTeams: async (filters) => {
    const response = await fetch(`/api/teams`, {
      method: 'GET',
    });
    return await response.json();
  },
  getRecord: () => {},
  createRecord: async (record, toast) => {
    const response = await fetch(`/api/records`, {
      method: 'POST',
      body: JSON.stringify(record),
    });
    if (response.status === 200) {
      toast({
        title: 'Record created successfully',
        status: 'success',
        duration: 3000,
        position: 'top',
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error during record creation',
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true,
      });
    }
    set((state) => ({
      ...state,
      ui: { ...state.ui, refreshedAt: moment().toISOString() },
    }));
  },
  deleteRecord: async (id, toast) => {
    const response = await fetch(`/api/records/${id}`, { method: 'DELETE' });
    if (response.status === 200) {
      toast({
        title: 'Record deleted successfully',
        status: 'success',
        duration: 3000,
        position: 'top',
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error during record deletion',
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true,
      });
    }
    set((state) => ({
      ...state,
      ui: { ...state.ui, refreshedAt: moment().toISOString() },
    }));
  },
  updateRecord: async (record, toast) => {
    const response = await fetch(`/api/records/${record.id}`, {
      method: 'PUT',
      body: JSON.stringify(record),
    });
    if (response.status === 200) {
      toast({
        title: 'Record updated successfully',
        status: 'success',
        duration: 3000,
        position: 'top',
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error during record updation',
        status: 'error',
        duration: 3000,
        position: 'top',
        isClosable: true,
      });
    }
    set((state) => ({
      ...state,
      ui: { ...state.ui, refreshedAt: moment().toISOString() },
    }));
  },
}));
