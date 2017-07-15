//import Contacts from ;
//import Tasks from './tasks/tasks';

let contactsBtn = document.getElementById('contacts-btn'),
    tasksBtn = document.getElementById('tasks-btn');

contactsBtn.addEventListener('click', () => {
    import('./contacts/contacts' /* webpackChunkName: 'contacts-module'*/ ).then(({default: Contacts}) => Contacts.doContactsThing())    
});

tasksBtn.addEventListener('click', () => {
    import('./tasks/tasks' /* webpackChunkName: 'tasks-module'*/).then(({default: Tasks}) => Tasks.doTasksThing())    
});