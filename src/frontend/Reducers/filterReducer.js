export const initialFiltersState = {
  isBestseller: false,
  isTrending: false,
  sortBy: "",
  byRating: 0,
};
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sortBy: action.payload };
    case "CLEAR_ALL_FILTERS":
      return { initialFiltersState };
    default:
      return [state];
  }
};
