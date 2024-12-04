import writeContacts from '../utils/writeContacts.js';


const removeAllContacts = async () => {
  try {

    
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

