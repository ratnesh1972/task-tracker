import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {

    return (
        <header className="header d-flex flex-row justify-content-between align-items-center">
            <h3 className="m-0">{title}</h3>
            <Button color={showAdd ? 'btn btn-danger btn-sm' : 'btn btn-primary btn-sm'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
