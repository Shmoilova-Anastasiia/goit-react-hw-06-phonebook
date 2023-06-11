import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPersonAdd } from 'react-icons/bs';
import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contact/contactSlice';
import { getContacts } from 'redux/contact/contactSelector';

const toastifyOptions = {
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

    .required(),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onAddContact = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (findName) {
      toast.error(`${name}: is already in contacts`, toastifyOptions);
      return;
    }
    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      toast.error(`This phone number is already in use.`, toastifyOptions);
      return;
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
          <FieldFormik type="text" name="name" placeholder="Name" required />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField htmlFor="number">
          <LabelWrapper>Number</LabelWrapper>
          <FieldFormik type="tel" name="number" required />
          <ErrorMessage
            name="number"
            component="span"
            placeholder="+38-050-123-45-67"
          />
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
