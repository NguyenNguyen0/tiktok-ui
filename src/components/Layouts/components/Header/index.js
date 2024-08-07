import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="titok" width="118" height="42" />

                <form className={cx('search-form')} action="/search">
                    <input className={cx('search-input')} placeholder="Tìm kiếm" />

                    <span className={cx('input-inner-wrapper')}>
                        <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />
                        <button className={cx('reset-input-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </span>

                    <button className={cx('submit-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>

                <div className={cx('actions')}>
                    <button className={cx('login-btn')}>Đăng nhập</button>
                    <button className={cx('menu')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
