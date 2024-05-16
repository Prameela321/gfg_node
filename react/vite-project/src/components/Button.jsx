import PropTypes from 'prop-types';

Button.propTypes  = {
    click: PropTypes.func,
    c : PropTypes.number
}
function Button (propers){

    return (
      <button type="button" onClick={propers.click}>Click  {propers.c} times</button>
    )
}

export default Button; 