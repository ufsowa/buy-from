import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSearch.module.scss';
// import { getAll } from '../../../redux/categoriesRedux';
// import { useSelector } from 'react-redux';

const ProductSearch = () => {
  // const allCategories = useSelector(getAll);
  const allCategories = [{ name: 'type1', id: 'key1' }, { name: 'type2', id: 'key2' }];

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul className={styles.list}>
          <li className={styles.mainItem}>
            Select category
            <ul className={styles.childList}>
              {allCategories.map(category => (
                <li key={category.id} className={styles.childItem}>
                  {category.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
