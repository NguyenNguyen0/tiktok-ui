import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noAvatar, ...props }, ref) {
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
}

export default forwardRef(Image);
