import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BsPersonAdd } from 'react-icons/bs';
import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contactSelector';
import { addContact } from 'redux/contactSlice';

const notifyOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContact = ({ name, number }) => {
    if (getFilteredContacts({ name, number })) {
      return toast.error(`This contact is already in contacts`, notifyOptions);
    }
    dispatch(addContact({ name, number }));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });

        resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormField htmlFor="name">
          <LabelWrapper>Name</LabelWrapper>
          <FieldFormik
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField htmlFor="number">
          <LabelWrapper>Number</LabelWrapper>
          <FieldFormik
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <StyledButton type="submit">
          <span>
            <BsPersonAdd />
          </span>
          Add contact
        </StyledButton>
      </Form>
    </Formik>
  );
};

ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
