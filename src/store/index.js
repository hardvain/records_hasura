import create from 'zustand';
import moment from 'moment';
export const [useStore] = create((set, get) => ({
  ui: {
    date: moment(),
  },
  setDate: (value) => {
    set((state) => ({
      ...state,
      ui: { ...state.ui, date: value },
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
    const response = await fetch(`/api/records?date=${filters.date}`, {
      method: 'GET',
    });
    return await response.json();
  },
  getRecord: () => {},
  createRecord: async (record, toast) => {
    const response = await fetch(`/api/records`, { method: 'POST', body: JSON.stringify(record) });
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
  },
  updateRecord: async (record, toast) => {
    const response = await fetch(`/api/records/${record.id}`, { method: 'PUT', body: JSON.stringify(record) });
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
  },
}));
