const compare = (a, b) => {
  if (a.rating > b.rating) {
    return 1;
  } else if (a.rating < b.rating) {
    return -1;
  } else {
    return 0;
  }
};

export default compare;
