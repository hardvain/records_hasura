# Goals
[*] Easily create new record
    [*] With all fields
    [*] With subset of fields
    [*] With subset of fields with the rest of the fields having default values
[*] Easily edit existing record
    [*] With all fields
    [*] With subset of fields
    [*] With subset of fields with the rest of the fields having default values
[] Easily delete existing record
[] Ability to do crud operations before and after mutation of a record
[] Ability to configure autosave on change
[] Ability to have different layouts for forms
    [] Specify forms for individual fields
        [] With auto updation
        [] With context collection
[] Ability to do inline editing


# Fields
* Input
    * String
    * Number
* Date / Time Picker
* Text Area
* Checkbox
* Switch
* RadioButton
* Select
    * Supports multi select
* ResourceSelector
    * Supports multi select
    * Ability to create values on the fly
    
<TaskForm schema={}>
    <Field name="description"></Field>
    <Field name="status"></Field>
</TaskForm>