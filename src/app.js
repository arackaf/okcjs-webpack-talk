let contactsBtn = document.getElementById('contacts-btn'),
    tasksBtn = document.getElementById('tasks-btn');

contactsBtn.addEventListener('click', () => {
    import('./contacts/contacts').then(({default: Contacts}) => Contacts.doContactsThing())    
});

tasksBtn.addEventListener('click', () => {
    import('./tasks/tasks').then(({default: Tasks}) => Tasks.doTasksThing())    
});