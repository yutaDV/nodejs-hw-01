import readContacts from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('All contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error.message);
  }
};

getAllContacts();


console.log(await getAllContacts());
