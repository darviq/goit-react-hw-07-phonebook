const getContacts = state => state.contacts.items;

const getLoadingStatus = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = state => {
    const filter = getFilter(state).toLowerCase();
    const contacts = getContacts(state);
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
};

export default {getContacts, getLoadingStatus, getFilter, getFilteredContacts};
