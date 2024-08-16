import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faEllipsisVertical,
    faHouseUser,
    faLanguage,
    faCircleQuestion,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHouseUser} />,
        title: 'Công cụ cho nhà sáng tạo',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
                break;
        }
    };

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
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
