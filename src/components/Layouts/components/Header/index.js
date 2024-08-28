import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images/index';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    PaperPlaneIcon,
    MessageIcon,
    PlayHouseIcon,
    LanguageIcon,
    HelpIcon,
    MoonIcon,
    UserIcon,
    GearIcon,
    LogOutIcon,
    TiktokCoinIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <PlayHouseIcon />,
        title: 'Công cụ cho nhà sáng tạo',
    },
    {
        icon: <LanguageIcon />,
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
        icon: <HelpIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <MoonIcon />,
        title: 'Chế độ tối',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <UserIcon />,
        title: 'Xem hồ sơ',
    },
    {
        icon: <TiktokCoinIcon />,
        title: 'Nhận Xu',
    },
    {
        icon: <GearIcon />,
        title: 'Cài đặt',
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon />,
        title: 'Đăng xuất ',
        separate: true,
    },
];
function Header() {
    const currentUser = true;

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

                {/* search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                className={cx('upload-btn')}
                            >
                                Tải lên
                            </Button>
                            <Tippy content="Tin nhắn">
                                <button className={cx('message-btn')}>
                                    <PaperPlaneIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('message-box-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Log in</Button>
                    )}

                    <Menu
                        items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0227fb12e1a69b18b48152873ba4d59d~c5_720x720.jpeg?lk3s=a5d48078&nonce=52884&refresh_token=8160ad77e5c62e6944921ba89d975ef3&x-expires=1723960800&x-signature=FwvJKDBpyZ9P0nFZLXSblIdEZxc%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
