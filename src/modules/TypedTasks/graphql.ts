import gql from 'graphql-tag';
const GET_TASKS = gql`
  subscription getTasks(
    $where: tasks_bool_exp
    $orderBy: [tasks_order_by!]
    $offset: Int
    $limit: Int
  ) {
    tasks(where: $where, order_by: $orderBy, offset: $offset, limit: $limit) {
      id
      name
      status
      description
      due_date
      ref_sub_tasks {
        id
        name
        status
      }
    }
  }
`;

const UPDATE_TASKS = gql`
  mutation updateTasks($where: tasks_bool_exp!, $set: tasks_set_input) {
    update_tasks(where: $where, _set: $set) {
      returning {
        id
      }
    }
  }
`;

const INSERT_TASKS = gql`
  mutation insertTasks($objects: [tasks_insert_input!]!) {
    insert_tasks(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

const DELETE_TASKS = gql`
  mutation deleteTasks($where: tasks_bool_exp!) {
    delete_tasks(where: $where) {
      returning {
        id
      }
    }
  }
`;
