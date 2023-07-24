import ContactForm from 'components/contactForm/ContactForm';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Filter from 'components/filter/Filter';
import ContactList from 'components/contactList/ContactList';
import Loader from 'components/loader/Loader';


const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css['phonebook__container']}>
      
      <h1 className={css['phonebook__title']}>Phonebook</h1>
      <ContactForm />
      {isLoading && !error ? <Loader /> : null}  
      <h2 className={css['contacts__title']}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
