import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import { categorySelectedSuccess, categoryAddNewSuccess } from '../../../actions/categoryAction';
import { loadProductsList } from '../../../actions/productAction';

const mapDispatchToProps = dispatch => ({
    onSelectCategory: (categoryId, name) => dispatch(categorySelectedSuccess(categoryId, name)),
    onLoadProductList: (categoryId) => dispatch(loadProductsList(categoryId)),
    onAddNewCategory: () => dispatch(categoryAddNewSuccess()),
  });

const mapStateToProps = state => ({
    categoryList: state.categories.categoryList,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
