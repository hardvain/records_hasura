import { DatePickerType, Resource } from './Resource';

const tasksResource: Resource = {
  name: 'tasks',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
    },
    {
      name: 'due_date',
      label: 'Due Date',
      kind: 'timestamp',
      pickerType: DatePickerType.Button,
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
    {
      name: 'priority',
      label: 'Priority',
      kind: 'select',
      options: [
        { value: 'very_high', label: 'Very High' },
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium' },
        { value: 'low', label: 'Low' },
        { value: 'very_low', label: 'Very Low' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      kind: 'select',
      options: [
        { value: 'todo', label: 'Todo' },
        { value: 'in_progress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
      ],
    },
    {
      name: 'project_id',
      label: 'Project',
      kind: 'reference',
    },
    {
      name: 'team_id',
      label: 'Team',
      kind: 'reference',
    },
    {
      name: 'people_id',
      label: 'People',
      kind: 'reference',
    },
  ],
};

const categoriesResource: Resource = {
  name: 'categories',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
  ],
};

const dishesResource: Resource = {
  name: 'dishes',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
    {
      name: 'carbs',
      label: 'Carbs',
      kind: 'number',
    },
    {
      name: 'fat',
      label: 'Fat',
      kind: 'number',
    },
    {
      name: 'protein',
      label: 'Protein',
      kind: 'number',
    },
    {
      name: 'quantity',
      label: 'Quantity',
      kind: 'number',
    },
    {
      name: 'unit',
      label: 'Unit',
      kind: 'select',
      options: [
        { value: 'plate', label: 'Plate' },
        { value: '100g', label: '100 Grams' },
      ],
    },
  ],
};

const foodResource: Resource = {
  name: 'food',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'timestamp',
      label: 'Timestamp',
      kind: 'timestamp',
      pickerType: DatePickerType.Input,
    },
    {
      name: 'dish_id',
      label: 'Dish',
      kind: 'reference',
    },
  ],
};

const glucoseResource: Resource = {
  name: 'glucose',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'value',
      label: 'Value',
      kind: 'number',
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
    {
      name: 'timestamp',
      label: 'Timestamp',
      kind: 'timestamp',
      pickerType: DatePickerType.Input,
    },
  ],
};

const inboxResource: Resource = {
  name: 'inbox',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
  ],
};

const keyResultsResource: Resource = {
  name: 'key_results',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
    {
      name: 'progress',
      label: 'Progress',
      kind: 'number',
    },
    {
      name: 'objective_id',
      label: 'Objective',
      kind: 'reference',
    },
  ],
};

const notesResource: Resource = {
  name: 'notes',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
    {
      name: 'ref_snippets',
      label: 'Snippets',
      kind: 'reference',
    },
  ],
};

const objectivesResource: Resource = {
  name: 'objectives',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
    },
    {
      name: 'start_date',
      label: 'Start Date',
      kind: 'timestamp',
      pickerType: DatePickerType.Input,
    },
    {
      name: 'end_date',
      label: 'End Date',
      kind: 'timestamp',
      pickerType: DatePickerType.Input,
    },
    {
      name: 'ref_objective_teams',
      label: 'Teams',
      kind: 'reference',
    },
    {
      name: 'ref_key_results',
      label: 'Key Results',
      kind: 'reference',
    },
  ],
};
