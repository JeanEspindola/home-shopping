import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { deleteProduct, updateProduct, createProduct } from '../../../actions/productAction';

const mapDispatchToProps = dispatch => ({
  onDeleteProduct: productId => dispatch(deleteProduct(productId)),
  onUpdateProduct: (productId, object) => dispatch(updateProduct(productId, object)),
  onCreateProduct: (productId, object)  => dispatch(createProduct(productId, object)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
