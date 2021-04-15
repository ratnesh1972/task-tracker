import PropTypes from 'prop-types';

function Button({ color, text, onClick }) {
    return (
        <button className={color} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color : 'btn btn-primary',
    text : 'Add'
}

Button.propTypes = {
    color : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func
}
export default Button
