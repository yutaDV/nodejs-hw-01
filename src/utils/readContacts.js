import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js'; 

export const readContacts = async () => {
  try {
    // Зчитуємо файл з контактами
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // Повертаємо масив контактів після парсингу JSON
    return JSON.parse(data);
  } catch (error) {
    console.error(`Помилка при читанні файлу: ${error.message}`);
    return []; // Повертаємо порожній масив у разі помилки
  }
};
