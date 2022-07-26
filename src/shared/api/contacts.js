import { instance } from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data: result } = await instance.post('/contacts', contact);
  return result;
};

export const removeContact = async id => {
 await instance.delete(`/contacts/${id}`);
  return id;
};
