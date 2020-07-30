const getCart = () => {
  const item = localStorage.getItem('cart');
  if (!item) return {};
  return JSON.parse(item);
};
export default getCart;
