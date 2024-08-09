import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    disabled = false,
    primary = false,
    outline = false,
    rounded = false,
    small = false,
    large = false,
    leftIcon = null,
    rightIcon = null,
    classNames,
    children,
    ...passProps
}) {
    let Component = 'button';

    const props = {
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (href) {
        Component = 'a';
        props.href = href;
    } else if (to) {
        Component = Link;
        props.to = to;
    }

    const classes = cx('wrapper', {
        [classNames]: classNames,
        disabled,
        primary,
        outline,
        rounded,
        small,
        large,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
