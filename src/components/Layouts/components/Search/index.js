import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([1]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleResetInput = (e) => {
        e.preventDefault();
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <span>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
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
                onClickOutside={() => setShowResult(false)}
            >
                <form className={cx('search-form')} action="/search">
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Tìm kiếm"
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    <span className={cx('input-inner-wrapper')}>
                        <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />
                        <button className={cx('reset-input-btn')} onClick={handleResetInput}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </span>

                    <button className={cx('submit-btn')}>
                        <SearchIcon />
                    </button>
                </form>
            </HeadlessTippy>
        </span>
    );
}

export default Search;
