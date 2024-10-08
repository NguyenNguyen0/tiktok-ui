import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as services from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleResetInput = (e) => {
        e.preventDefault();
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChangeInput = (e) => {
        const inputValue = e.target.value;
        if (searchValue || inputValue.trimStart()) {
            setSearchValue(inputValue.trimStart());
        }
    };

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const apiResults = await services.search(debounceValue);
            // console.log(apiResults);
            setSearchResult(apiResults);
            setLoading(false);
        };

        fetchApi();
    }, [debounceValue]);

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <div className={cx('search-title')}>Tài khoản</div>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                        onChange={handleChangeInput}
                        onFocus={() => setShowResult(true)}
                    />

                    <span className={cx('input-inner-wrapper')}>
                        {loading && (
                            <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />
                        )}
                        {searchValue && !loading && (
                            <button className={cx('reset-input-btn')} onClick={handleResetInput}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                    </span>

                    <button className={cx('submit-btn')} onClick={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
