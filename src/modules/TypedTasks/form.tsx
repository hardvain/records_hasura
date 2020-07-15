import { Form } from '../../components/forms/v2';
import {
  useInsertTasksMutation,
  useUpdateTasksMutation,
} from '../../generated/graphql';
import resource from './resource';
export default ({ model, smartEdit, children }) => {
  return (
    <Form
      resource={resource}
      insertResolver={useInsertTasksMutation}
      updateResolver={useUpdateTasksMutation}
      model={model}
      smartEdit={smartEdit}
    >
      {children}
    </Form>
  );
};
