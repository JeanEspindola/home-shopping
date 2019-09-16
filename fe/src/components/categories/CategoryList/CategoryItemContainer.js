import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
import { deleteCategory } from '../../../actions/categoryAction';

const mapDispatchToProps = dispatch => ({
  onDeleteCategory: categoryId => dispatch(deleteCategory(categoryId)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
