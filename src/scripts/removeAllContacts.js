import writeContacts from '../utils/writeContacts.js';
import readContacts from '../utils/readContacts.js';

const removeAllContacts = async () => {
  try {
    // Зчитуємо всі контакти з файлу
    const contacts = await readContacts();
    
    // Очищаємо масив контактів
    const updatedContacts = [];
    
    // Записуємо оновлений масив в файл
    await writeContacts(updatedContacts);
    console.log('All contacts have been removed');
  } catch (error) {
    console.error('Error removing all contacts:', error.message);
  }
};

removeAllContacts();

