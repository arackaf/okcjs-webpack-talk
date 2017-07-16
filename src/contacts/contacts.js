import SharedUtil from '../shared/sharedUtil';

import TSClass from './contactsHelper';

export default class ContactsModule {
    static doContactsThing(){
        SharedUtil.displayMessage("Hello from contacts module")
    }
    inc = x => x + 1;
}