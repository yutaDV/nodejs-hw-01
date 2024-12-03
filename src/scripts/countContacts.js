import readContacts from '../utils/readContacts.js';

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Number of contacts:', contacts.length);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
  }
};

countContacts();

console.log(await countContacts());
