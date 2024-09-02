import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AcountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon className={cx('verify-icon')} icon={faCheckCircle} />
                    )}
                </h4>

                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
