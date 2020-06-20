export const today = (date) => ({
  _and: [
    {
      due_date: { _gte: date.startOf('day').toISOString(true) },
    },
    { due_date: { _lte: date.endOf('day').toISOString(true) } },
  ],
});

export const backlog = () => ({
  _and: [{ due_date: { _is_null: true } }],
});
export const highPrioCompleted = (date) => ({
  _and: [
    {
      due_date: {
        _gte: date.startOf('day').toISOString(true),
      },
    },
    {
      due_date: {
        _lte: date.endOf('day').toISOString(true),
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
      due_date: { _gte: date.startOf('day').toISOString(true) },
    },
    { due_date: { _lte: date.endOf('day').toISOString(true) } },
    {
      _or: [{ priority: { _eq: 'very_high' } }, { priority: { _eq: 'high' } }],
    },
  ],
});
export const overDue = (date) => ({
  _and: [
    {
      due_date: { _lte: date.startOf('day').toISOString(true) },
    },
  ],
});
export const todayCompleted = (date) => ({
  _and: [
    {
      due_date: {
        _gte: date.startOf('day').toISOString(true),
      },
    },
    {
      due_date: {
        _lte: date.endOf('day').toISOString(true),
      },
    },
    { status: { _eq: 'completed' } },
  ],
});
