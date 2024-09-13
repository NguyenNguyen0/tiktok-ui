import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

function Badge({ children, className }) {
    return <span className={cx('badge', className)}>{children}</span>;
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Badge;
