import readContacts from '../utils/readContacts.js'; // Функція для зчитування контактів
import writeContacts from '../utils/writeContacts.js'; // Функція для запису контактів
import createFakeContact from '../utils/createFakeContact.js'; // Функція для генерації фейкових контактів

async function generateContacts(count) {
  try {
    // Зчитуємо існуючі контакти
    const contacts = await readContacts();

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: count }, () => createFakeContact());

    // Оновлюємо масив контактів
    const updatedContacts = [...contacts, ...newContacts];

    // Записуємо оновлені контакти у файл
    await writeContacts(updatedContacts);

    console.log(`Successfully added ${count} contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
}


const count = 10; 

if (Number.isInteger(count) && count > 0) {
  generateContacts(count);
} else {
  console.error('Please provide a valid number of contacts to generate.');
}
