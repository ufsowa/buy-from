/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import { clsx } from 'clsx';
// import ProductBox from '../../common/ProductBox/ProductBox';
import PanelBar from '../../layout/PanelBar/PanelBar';
import PanelMenu from '../../layout/PanelMenu/PanelMenu';
// import { getItemsOnPage } from '../../../utils/viewMode';

class NewFurniture extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
      activeCategory: 'type1',
      isFading: false,
      fadeTime: parseInt(styles.timeAnimation),
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  static getDerivedStateFromProps(props, currentState) {
    const { products, itemsOnPage } = props;
    const { activeCategory, pagesCount, activePage } = currentState;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const updatedPagesCount = Math.ceil(categoryProducts.length / itemsOnPage);
    const updatedActivePage = pagesCount === updatedPagesCount ? activePage : 0;

    return {
      currentState,
      pagesCount: updatedPagesCount,
      activePage: updatedActivePage,
      categoryProducts,
    };
  }

  handlePageChange(newPage) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({
        activePage: newPage,
        isFading: false,
      });
    }, this.state.fadeTime);
  }
  handleCategoryChange(newCategory) {
    this.setState({ isFading: true });
    setTimeout(() => {
      this.setState({
        activeCategory: newCategory,
        isFading: false,
      });
    }, this.state.fadeTime);
  }

  render() {
    const { categories } = this.props;
    const itemsOnPage = 6;
    const {
      activeCategory,
      categoryProducts,
      isFading,
      activePage,
      pagesCount,
    } = this.state;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
        <div className={styles.root}>
          <div className='container'>
            <PanelBar title='New furniture'>
              <PanelMenu
                menuItems={categories}
                action={this.handleCategoryChange}
                activeItem={activeCategory}
              />
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </PanelBar>
            <div
              className={`row justify-content-center ${
                isFading ? styles.fadeOut : styles.fadeIn
              }`}
            >
              {categoryProducts
                .slice(activePage * itemsOnPage, (activePage + 1) * itemsOnPage)
                .map(item => (
                  <div
                    key={item.id}
                    className={clsx(
                      'col-sm-6 col-md-4 col-lg-3',
                      styles.colXSmall,
                      styles.colXXSmall
                    )}
                  >
                    ITEM
                    {/* <ProductBox {...item} /> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  itemsOnPage: PropTypes.number,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};


export default NewFurniture;
