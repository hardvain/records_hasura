import moment from 'moment';

export const today = (date) => ({
  _and: [
    {
      due_date: { _gte: moment(date).startOf('day').toISOString(true) },
    },
    { due_date: { _lte: moment(date).endOf('day').toISOString(true) } },
  ],
});
export const activeToday = (date) => ({
  _and: [
    {
      due_date: {
        _gte: moment(date).startOf('day').toISOString(true),
      },
    },
    {
      due_date: {
        _lte: moment(date).endOf('day').toISOString(true),
      },
    },
    { status: { _neq: 'completed' } },
  ],
});
export const backlog = () => ({
  _and: [{ due_date: { _is_null: true } }, { status: { _neq: 'completed' } }],
});
export const highPrioCompleted = (date) => ({
  _and: [
    {
      due_date: {
        _gte: moment(date).startOf('day').toISOString(true),
      },
    },
    {
      due_date: {
        _lte: moment(date).endOf('day').toISOString(true),
      },
    },
    {
      _or: [{ priority: { _eq: 'very_high' } }, { priority: { _eq: 'high' } }],
    },
    { status: { _eq: 'completed' } },
  ],
});

export const highPrio = (date) => ({
  _and: [
    {
      due_date: { _gte: moment(date).startOf('day').toISOString(true) },
    },
    { due_date: { _lte: moment(date).endOf('day').toISOString(true) } },
    {
      _or: [{ priority: { _eq: 'very_high' } }, { priority: { _eq: 'high' } }],
    },
  ],
});
export const overDue = (date) => ({
  _and: [
    {
      due_date: { _lt: moment(date).startOf('day').toISOString(true) },
    },
    { status: { _neq: 'completed' } },
  ],
});
export const activeNext7Days = (date) => ({
  _and: [
    {
      due_date: {
        _gte: moment(date).endOf('day').toISOString(true),
      },
    },
    {
      due_date: {
        _lte: moment(date).add(1, 'week').endOf('day').toISOString(true),
      },
    },
    { status: { _neq: 'completed' } },
  ],
});
export const todayCompleted = (date) => ({
  _and: [
    {
      due_date: {
        _gte: moment(date).startOf('day').toISOString(true),
      },
    },
    {
      due_date: {
        _lte: moment(date).endOf('day').toISOString(true),
      },
    },
    { status: { _eq: 'completed' } },
  ],
});
