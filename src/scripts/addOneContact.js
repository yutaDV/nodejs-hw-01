
import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    // Зчитуємо поточний масив контактів
    const contacts = await readContacts();

    // Створюємо новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до масиву
    contacts.push(newContact);

    // Записуємо оновлений список контактів у файл
    await writeContacts(contacts);

    console.log('Successfully added one contact.');
  } catch (error) {
    console.error('Error adding contact:', error.message);
  }
};

addOneContact();
