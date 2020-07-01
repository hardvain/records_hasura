* Base factory has helpers to create queries and mutations
* Each module should have a factories to construct various queries and mutations
* All the methods in the factories are side effect free
* They return json representing the mutation

```javascript
const mutate = useMutation()
mutate(TaskFactory.addSubTask(task, subTask))
```