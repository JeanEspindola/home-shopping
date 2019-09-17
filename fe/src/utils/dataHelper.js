export const removeObjectFromArray = (list, objectId) => {
  return list.filter(item => item.id !== objectId);
}

export const updateCategoryItem = (categoryList, category, id) => {
  const index = categoryList.findIndex(item => item.id === id);

  return [
    ...categoryList.slice(0, index),
    {
      ...categoryList[index],
      id: category.id,
      name: category.name,
      newEntry: false,
    },
    ...categoryList.slice(index + 1),
  ];
};

export const addNewCategoryObjectToList = (list) => {
  const obj = {
    id: list.length + Math.random(),
    name: '',
    newEntry: true,
  }
 
  return [...list, obj];
};

export const enhanceListObjects = list => list.map((item) => {
  return { ...item, newEntry: false };
});

export const addNewProductObjectToList = (list) => {
  const obj = {
    id: list.length + Math.random(),
    name: '',
    price: 0,
    currency: 'Euro',
    newEntry: true,
  }
 
  return [...list, obj];
};

export const updateProductItem = (productList, product, id) => {
  const index = productList.findIndex(item => item.id === id);

  return [
    ...productList.slice(0, index),
    {
      ...productList[index],
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      newEntry: false,
    },
    ...productList.slice(index + 1),
  ];
};
