import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import { categorySelectedSuccess } from '../../../actions/categoryAction';
import { loadProductsList } from '../../../actions/productAction';

const mapDispatchToProps = dispatch => ({
    onSelectCategory: (categoryId, name) => dispatch(categorySelectedSuccess(categoryId, name)),
    onLoadProductList: (categoryId) => dispatch(loadProductsList(categoryId)),
  });

const mapStateToProps = state => ({
    categoryList: state.categories.categoryList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
