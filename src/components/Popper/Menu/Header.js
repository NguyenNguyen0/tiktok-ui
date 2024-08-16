import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')} onClick={onBack}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>

            <span className={cx('title')}>{title}</span>
        </header>
    );
}

export default Header;
