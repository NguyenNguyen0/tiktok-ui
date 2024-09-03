import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')} onClick={onBack}>
            <span className={cx('back-icon')}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </span>

            <span className={cx('title')}>{title}</span>
        </header>
    );
}

export default Header;
