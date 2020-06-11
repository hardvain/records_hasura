* Each record type can have several previews
* Each record type has one editable view
* Multiple record types can form a view
* Have a single global api file
    * Handle all failure cases in this file
    * Handle display notifications in this file
* Each component (preview, detail, list) has its own skeleton page
    * it uses the api object to get the necessary data and do necessary mutation