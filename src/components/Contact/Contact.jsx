import PropTypes from 'prop-types';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Text, Button } from './Contact.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    toast.success('Contact was deleted!');
  };

  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
      <Toaster />
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
