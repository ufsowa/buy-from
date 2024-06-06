import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

// import { getAll } from '../../../redux/categoriesRedux.js';
// import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: [{ id: 'key1', name: 'type1' }, { id: 'kay2', name: 'type2' } ],  // getAll(state),
  products: [{
    id: 'key1',
    name: 'prod1',
    category: 'type1',
    price: 100,
    stars: 5,
    promo: 'yes',
    newFurniture: true,
    }, 
    {
      id: 'key3',
      name: 'prod3',
      category: 'type1',
      price: 100,
      stars: 5,
      promo: 'yes',
      newFurniture: true,
      }, 
    {
      id: 'key2',
      name: 'prod2',
      category: 'type2',
      price: 50,
      stars: 3,
      promo: 'no',
      newFurniture: true,
  
    }],  // getNew(state),
});

export default connect(mapStateToProps)(NewFurniture);