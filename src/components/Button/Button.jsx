import PropTypes from 'prop-types';
// import { ButtonStyled } from './Styled';

export const Button = ({onClick}) => {
    return (
      <>
        <button type="button" className="Button" onClick={onClick}>
          Load more
        </button>
      </>
    );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};
