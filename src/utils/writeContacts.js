import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

async function writeContacts(contacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Contacts successfully updated!');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
  }
}

export default writeContacts;
