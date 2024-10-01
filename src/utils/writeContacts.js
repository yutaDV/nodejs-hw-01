
import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js'; 

export const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2)); // Записуємо дані у форматі JSON
    console.log('Контакти успішно записані у файл.');
  } catch (error) {
    console.error(`Помилка при записі файлу: ${error.message}`);
  }
};
