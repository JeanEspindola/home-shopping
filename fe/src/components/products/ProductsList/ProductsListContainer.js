import { connect } from 'react-redux';
import ProductList from './ProductsList';

const mapStateToProps = state => ({
  productList: state.products.productList,
  categoryTitle: state.categories.categoryTitle,
});

export default connect(mapStateToProps, null)(ProductList);
