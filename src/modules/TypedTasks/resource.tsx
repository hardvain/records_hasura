import { FormFieldType } from '../../components/forms/v2';
import { DatePickerType } from '../core/Resource';
import { useGetTasksSubscription } from '../../generated/graphql';

export default {
  name: 'tasks',
  schema: [
    {
      name: 'id',
      label: 'ID',
      kind: 'uuid',
      fieldType: FormFieldType.None,
    },
    {
      name: 'name',
      label: 'Name',
      kind: 'string',
      fieldType: FormFieldType.StringInput,
    },
    {
      name: 'due_date',
      label: 'Due Date',
      kind: 'timestamp',
      fieldType: FormFieldType.DatePicker,
      pickerType: DatePickerType.Button,
    },
    {
      name: 'description',
      label: 'Description',
      kind: 'text',
      fieldType: FormFieldType.TextArea,
    },
    {
      name: 'priority',
      label: 'Priority',
      kind: 'select',
      fieldType: FormFieldType.Select,
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
      fieldType: FormFieldType.Select,
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
      resource: 'projects',
      fieldType: FormFieldType.ResourceSelect,
    },
    {
      name: 'parent_id',
      label: 'Parent Task',
      kind: 'reference',
      resource: 'tasks',
      fieldType: FormFieldType.ResourceSelect,
      resolver: useGetTasksSubscription,
      isMulti: true,
    },
    {
      name: 'team_id',
      label: 'Team',
      kind: 'reference',
      resource: 'teams',
      fieldType: FormFieldType.ResourceSelect,
    },
    {
      name: 'people_id',
      label: 'People',
      kind: 'reference',
      resource: 'people',
      fieldType: FormFieldType.ResourceSelect,
    },
  ],
};