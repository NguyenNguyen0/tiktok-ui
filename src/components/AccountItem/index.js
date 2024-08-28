import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AcountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d07db2a7b2c3d0a86c3b2642e3660f56~c5_300x300.webp?lk3s=a5d48078&nonce=41953&refresh_token=009f152fd10e32670105c514c09e1e3d&x-expires=1723194000&x-signature=U%2B0dL5JJNYnX4t6LR46ex%2FWipWI%3D&shp=a5d48078&shcp=c1333099"
                alt="avatar"
            />

            <div className={cx('info')}>
                <h4>
                    <span>nguyenvana</span>
                    <FontAwesomeIcon className={cx('verify-icon')} icon={faCheckCircle} />
                </h4>

                <p className={cx('username')}>vana</p>
            </div>
        </div>
    );
}

export default AccountItem;
