import { faker } from '@faker-js/faker';

function createFakeContact() {
  return {
    id: faker.string.uuid(), // Унікальний ідентифікатор
    name: faker.person.fullName(), // Повне ім'я
    phone: faker.phone.number(), // Номер телефону
    email: faker.internet.email(), // Email
    job: faker.person.jobTitle(), // Професія
  };
}

export default createFakeContact; // Експортуємо функцію як default
