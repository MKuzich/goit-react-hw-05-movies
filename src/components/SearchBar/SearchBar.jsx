import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.request.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="request" type="text" />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
