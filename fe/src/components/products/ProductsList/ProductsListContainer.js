import { connect } from 'react-redux';
import ProductList from './ProductsList';
import { productAddNewSuccess } from '../../../actions/productAction';

const mapDispatchToProps = dispatch => ({
  onAddNewProduct: () => dispatch(productAddNewSuccess()),
});

const mapStateToProps = state => ({
  productList: state.products.productList,
  categoryTitle: state.categories.categoryTitle,
  categoryId: state.categories.categoryIdSelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
