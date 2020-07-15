import { Tasks_Bool_Exp } from '../../generated/graphql';
export function backlog(): Tasks_Bool_Exp {
  return {
    due_date: { _is_null: true },
  };
}

export function overdue(date): Tasks_Bool_Exp {
  return {
    due_date: { _lt: date.startOf('day').toISOString(true) },
  };
}
