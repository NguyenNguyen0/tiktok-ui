import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

import { Menu, MenuItem } from './Menu';
import routes from '~/config/routes';
import Badge from '~/components/Badge';
import Image from '~/components/Image';
import Button from '~/components/Button';
import images from '~/assets/images';
import Accordion from './Accordion';
import {
    CompassIcon,
    GroupUserIcon,
    CameraLiveIcon,
    UserIcon,
    HomeIcon,
    HomeActiveIcon,
    CompassActiveIcon,
    GroupUserActiveIcon,
    CameraLiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const [openedAccordion, setOpenedAccordion] = useState(null);

    const handleAccordionToggle = (title) => {
        setOpenedAccordion(title === openedAccordion ? null : title);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title={
                        <>
                            Explore <Badge>New</Badge>
                        </>
                    }
                    to={routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={routes.live}
                    icon={<CameraLiveIcon />}
                    activeIcon={<CameraLiveActiveIcon />}
                />
                <MenuItem
                    title="Profile"
                    to={routes.profile}
                    icon={<UserIcon width="24px" height="24px" />}
                />
            </Menu>

            {/* <div className={cx('following')}>
                <h2 className={cx('following-title')}>Following accounts</h2>
                <p className={cx('following-desc')}>Accounts you follow will appear here</p>
            </div> */}

            <div className={cx('login')}>
                <p className={cx('login-desc')}>
                    Log in to follow creators, like videos, and view comments.
                </p>
                <Button className={cx('login-btn')} outline>
                    Log in
                </Button>
            </div>

            <div className={cx('suggest-accounts')}>
                <h2 className={cx('suggest-accounts-title')}>Suggested for you</h2>
                <ul className={cx('suggest-accounts-list')}>
                    <li className={cx('suggest-accounts-item')}></li>
                </ul>
            </div>

            <footer className={cx('footer-container')}>
                <div className={cx('footer-content')}>
                    <a
                        href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                        className={cx('tiktok-house-effect-link')}
                    >
                        <div className={cx('tiktok-house-effect-container')}>
                            <Image
                                src={images.tiktokHouseEffect}
                                alt="tiktok-house-effect"
                                className={cx('tiktok-house-effect-img')}
                            />
                            <h4 className={cx('tiktok-house-effect-desc')}>
                                Create TikTok effects, get a reward
                            </h4>
                        </div>
                    </a>

                    <Accordion
                        className={cx('accordion-link-list')}
                        title="Company"
                        open={openedAccordion === 'Company'}
                        onToggle={() => handleAccordionToggle('Company')}
                    >
                        <ul className={cx('link-list')}>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.about}>
                                    About
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Newsroom
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.contact}>
                                    Contact
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion
                        className={cx('accordion-link-list')}
                        title="Program"
                        open={openedAccordion === 'Program'}
                        onToggle={() => handleAccordionToggle('Program')}
                    >
                        <ul className={cx('link-list')}>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    TikTok for Good
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Advertise
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    TikTok LIVE Creator Networks
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Developers
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Transparency
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    TikTok Rewards
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    TikTok Embeds
                                </Link>
                            </li>
                        </ul>
                    </Accordion>

                    <Accordion
                        className={cx('accordion-link-list')}
                        title="Term & Policies"
                        open={openedAccordion === 'Term & Policies'}
                        onToggle={() => handleAccordionToggle('Term & Policies')}
                    >
                        <ul className={cx('link-list')}>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Help
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Safety
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Terms
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Accessibility
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Privacy Center
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Creator Academy
                                </Link>
                            </li>
                            <li className={cx('link-list-item')}>
                                <Link className={cx('link-list-link')} to={routes.home}>
                                    Community Guidelines
                                </Link>
                            </li>
                        </ul>
                    </Accordion>

                    <span className={cx('footer-copyright')}>© 2024 TikTok</span>
                </div>
            </footer>
        </aside>
    );
}

export default Sidebar;
