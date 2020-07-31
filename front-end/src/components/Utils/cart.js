export const changePage = (setOpen, history, route) => {
  setOpen(false);
  history.push(route);
};

export const getCart = () => {
  const item = localStorage.getItem('cart');
  if (!item) return {};
  return JSON.parse(item);
};
