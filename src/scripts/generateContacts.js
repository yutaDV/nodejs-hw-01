
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    // Зчитуємо існуючі контакти
    const contacts = await readContacts();

    // Генеруємо нові контакти
    const newContacts = Array.from({ length: count }, createFakeContact);

    // Додаємо нові контакти до існуючих
    const updatedContacts = [...contacts, ...newContacts];

    // Записуємо оновлений масив контактів у файл
    await writeContacts(updatedContacts);

    console.log(`Успішно додано ${count} контактів.`);
  } catch (error) {
    console.error(`Помилка при генерації контактів: ${error.message}`);
  }
};

// Викликаємо функцію для генерації контактів
const count = 5; // Задай потрібну кількість контактів
generateContacts(count);
