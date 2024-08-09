import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="titok" width="118" height="42" />

                <Tippy
                    disabled
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <div className={cx('search-title')}>Tài khoản</div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button primary disabled onClick={() => alert('sss')}>
                        Log in
                    </Button>
                    {/* <i>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </i> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
