import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(
    ({ src, alt, className, fallback: customFallback = images.noAvatar, ...props }, ref) => {
        const [fallback, setFallback] = useState('');

        return (
            <img
                ref={ref}
                src={fallback || src}
                alt={alt}
                className={classNames(styles.wrapper, className)}
                {...props}
                onError={() => setFallback(customFallback)}
            />
        );
    },
);

Image.displayName = 'Image';

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
