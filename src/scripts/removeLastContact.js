import writeContacts from '../utils/writeContacts.js';
import readContacts from '../utils/readContacts.js';

const removeLastContact = async () => {
  try {
    // Зчитуємо всі контакти з файлу
    const contacts = await readContacts();
    
    if (contacts.length > 0) {
      // Видаляємо останній контакт
      contacts.pop();
      
      // Записуємо оновлений масив в файл
      await writeContacts(contacts);
      console.log('Last contact has been removed');
    } else {
      console.log('No contacts to remove');
    }
  } catch (error) {
    console.error('Error removing last contact:', error.message);
  }
};

removeLastContact();
