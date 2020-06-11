import moment from 'moment';

export const fetchRecords = async (key,params) => {
  return fetch(`/api/records?date=${params.filters.date}`).then((r) => r.json());
};

export const updateRecord = async (id, record) => {
  return await fetch(`/api/records/${id}`, {
    method: 'PUT',
    body: JSON.stringify(record),
  });
};

export const addRecord = async (record) => {
  return await fetch(`/api/records`, {
    method: 'POST',
    body: JSON.stringify(record),
  });
};

export const deleteRecord = async (id) => {
  return await fetch(`/api/records/${id}`, {
    method: 'DELETE',
  });
};
