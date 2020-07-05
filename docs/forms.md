- Each form component has 3 variatons

1. Default component that exposes value & onChange prop
2. Controlled component that is aware of the surrounding RHF context
3. Smart component that is also aware of the field that is being modified and mutates the values

## Default Input

```javascript
export default ({ value, onChange, ...rest }) => {
  return (
    <Input value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
  );
};
```

## Controlled Input

```javascript
export default ({ name, ...rest }) => {
  const { control } = useFormContext(); 

  return (
    <Controller
      control={control}
      name={name}
      as={({ onChange, value }) => (
        <DefaultInput value={value} onChange={onChange} {...rest} />
      )}
    />
  );
};
```

## Smart Input

```javascript
export default (props) => {
  const { resource, id } = useFormContext();
  const mutate = useMutation({ resource, operation: 'update', silent: true });
  const update = (value) => {
    if (id) {
      mutate({
        variables: {
          object: { [name]: value },
          where: { id: { _eq: id } },
        },
      });
    }
  };
  return <ControlledInput {...props} />;
};
```
