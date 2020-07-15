import React, {
  createContext,
  useContext,
  useState,
  createElement,
  useEffect,
} from 'react';
import * as Checkbox from './Checkbox';
import * as DatePicker from './DatePicker';
import * as Input from './Input';
import * as TextArea from './TextArea';
import * as Select from './Select';
import * as ResourceSelector from './ResourceSelector';
import { IconButton } from '@chakra-ui/core';

export enum FormFieldType {
  StringInput,
  NumberInput,
  DatePicker,
  DateTimePicker,
  TimePicker,
  DateRangePicker,
  TimeRangePicker,
  Select,
  ResourceSelect,
  Checkbox,
  Switch,
  RadioButton,
  TextArea,
  None,
}

type FormProps<A> = {
  smartEdit: boolean;
  insertResolver?: any;
  updateResolver?: any;
  children: any;
  model?: any;
  resource: any;
};

export const FormContext = createContext<any>({
  values: {},
  setValues: () => {},
});
type FieldProps = {
  name: string;
  componentProps?: any;
};
const FieldTypeComponent = {
  [FormFieldType.StringInput]: Input,
  [FormFieldType.NumberInput]: Input,
  [FormFieldType.DatePicker]: DatePicker,
  [FormFieldType.DateTimePicker]: DatePicker,
  [FormFieldType.DateRangePicker]: DatePicker,
  [FormFieldType.TimePicker]: DatePicker,
  [FormFieldType.TimeRangePicker]: DatePicker,
  [FormFieldType.Checkbox]: Checkbox,
  [FormFieldType.Select]: Select,
  [FormFieldType.ResourceSelect]: ResourceSelector,
  [FormFieldType.Switch]: Checkbox,
  [FormFieldType.RadioButton]: Checkbox,
  [FormFieldType.TextArea]: TextArea,
};

export const Form = ({
  children,
  smartEdit = false,
  insertResolver,
  updateResolver,
  model,
  resource,
}: FormProps<_>) => {
  delete model['__typename'];
  const [id] = useState(model?.id);
  delete model.id;
  const [insertMutation] = insertResolver();
  const [updateMutation] = updateResolver();
  Object.keys(model).forEach((key) => {
    if (key.startsWith('ref')) {
      delete model[key];
    }
  });
  const [values, setValues] = useState(model || {});
  useEffect(() => {
    setValues(model);
  }, [model]);
  const submit = () => {
    if (model && id) {
      updateMutation({
        variables: { set: values, where: { id: { _eq: id } } },
      });
    } else {
      insertMutation({ variables: { objects: [values] } });
    }
  };
  const update = () => {
    if (smartEdit && model && id) {
      updateMutation({
        variables: { set: values, where: { id: { _eq: id } } },
      });
    }
  };
  return (
    <FormContext.Provider value={{ values, setValues, update, resource }}>
      {children(submit)}
    </FormContext.Provider>
  );
};

export const Field = ({ name, componentProps }: FieldProps) => {
  const { values, setValues, update, resource } = useContext(FormContext);
  const fieldSchema = resource.schema.filter((s) => s.name === name)[0];
  const { fieldType, ...rest } = fieldSchema;
  const component = FieldTypeComponent[fieldType].Default;

  return createElement<any>(component, {
    value: values[name],
    onChange: (value) => setValues({ ...values, [name]: value }),
    updateCallback: update,
    ...componentProps,
    ...rest,
  });
};

export const Delete = ({ id, deleteResolver, ...rest }) => {
  const [mutate] = deleteResolver();
  return (
    <IconButton
      aria-label={'delete-resource'}
      ml={2}
      size={'sm'}
      icon={'delete'}
      variant={'ghost'}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        mutate({ variables: { where: { id: { _eq: id } } } });
      }}
      {...rest}
    />
  );
};
