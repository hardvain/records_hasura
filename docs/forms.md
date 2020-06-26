# Goals

- Ever field of every model should be updatable individually or in group
- Ability to start a form with some preloaded data

# Pseudo Code

```javascript
const { mutate } = useForm({
  name: 'water',
  context: { timestamp: '03-03-1989' },
});
const addWater = async (quantity) => {
  await mutate({ quantity });
};
return <Button onClick={() => addWater(100)}>100 ML</Button>;
```

```javascript
const {formContext, setFormContext} = useFormContext({name:"tasks",context:task})
return <Select value={formContext.status} onChange={(e) => setFormContext('status',e.target.value)}>
  <option value="todo">Todo</option>
  <option value="in_progress">In Progress</option>
  <option value="completed">Completed</option>
</Select>
```