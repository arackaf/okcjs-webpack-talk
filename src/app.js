import Contacts from './contacts/contacts';
import Tasks from './tasks/tasks';

let contactsBtn = document.getElementById('contacts-btn'),
    tasksBtn = document.getElementById('tasks-btn');

contactsBtn.addEventListener('click', () => Contacts.doContactsThing());

tasksBtn.addEventListener('click', () => Tasks.doTasksThing());