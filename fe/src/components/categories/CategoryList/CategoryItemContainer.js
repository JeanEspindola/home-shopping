import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
import { deleteCategory, updateCategory, createCategory } from '../../../actions/categoryAction';

const mapDispatchToProps = dispatch => ({
  onDeleteCategory: categoryId => dispatch(deleteCategory(categoryId)),
  onUpdateCategory: (categoryId, object) => dispatch(updateCategory(categoryId, object)),
  onCreateCategory: (categoryId, object)  => dispatch(createCategory(categoryId, object)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);
