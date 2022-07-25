import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';


import {
  addContact,
  removeContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operation';
import { toFilter } from '../../redux/filter/filter-slice';
import { getContacts } from '../../redux/contacts/contacts-selector';
import { getFilter } from '../../redux/filter/filter-selector';
import { getUser } from '../../redux/auth/auth-selectors';


const ContactsPage = () => {
  const filter = useSelector(getFilter);
  const { items, loading, error } = useSelector(getContacts);
  const dispatch = useDispatch();
  const {name} = useSelector(getUser)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function addContactFunc(obj) {
    dispatch(addContact(obj));
  }

  const removeContactFunc = useCallback(
    id => {
      dispatch(removeContact(id));
    },
    [dispatch]
  );

  const handleFilter = ({ target }) => dispatch(toFilter(target.value));

  function getFilteredContact() {
    if (!filter) {
      return items;
    }
    const normalizeInput = filter.toLowerCase();
    const renderArr = items.filter(el =>
      el.name.toLowerCase().includes(normalizeInput)
    );
    return renderArr;
  }
  const filteredContact = getFilteredContact();

  return (
    <main>
      <div className="container">
        <h1 className="titleOne">It's good to see you {name} !</h1>
        <ContactForm onSubmit={addContactFunc} />
        <Filter value={filter} onChange={handleFilter} />
        {loading && <p className="loading">...Loading</p>}
        {error && <p className="error">Error : {error.message}</p>}
        {error && <p className="error">No access : {error.responseURL}</p>}
        <ContactList
          contacts={filteredContact}
          removeContact={removeContactFunc}
        />
      </div>
    </main>
  );
};

export default ContactsPage;
