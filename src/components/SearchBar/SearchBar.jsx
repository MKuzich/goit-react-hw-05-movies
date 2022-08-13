import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Input, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.request.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="request" type="text" />
      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
