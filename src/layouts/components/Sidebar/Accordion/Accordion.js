import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Accordion.module.scss';

const cx = classNames.bind(styles);

function Accordion({ title, children, open = false, ...props }) {
    return (
        <details className={cx('wrapper')} open={open} {...props}>
            <summary className={cx('title')}>
                <span className={cx('title-text')}>{title}</span>
            </summary>

            <div className={cx('content')}>{children}</div>
        </details>
    );
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
};

export default Accordion;
