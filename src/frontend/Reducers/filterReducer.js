export const initialFiltersState = {
  isRealme: false,
  isApple: false,
  isVivo: false,
  isOppo: false,
  isSamsung: false,
  sortBy: "",
  byRating: 0,
};
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sortBy: action.payload };
    case "CLEAR_ALL_FILTERS":
      // returning initial state will clear the filters
      return initialFiltersState;
    case "REALME":
      return { ...state, isRealme: !state.isRealme };
    case "OPPO":
      return { ...state, isOppo: !state.isOppo };
    case "VIVO":
      return { ...state, isVivo: !state.isVivo };
    case "SAMSUNG":
      return { ...state, isSamsung: !state.isSamsung };
    case "APPLE":
      return { ...state, isApple: !state.isApple };
    case "RATING":
      return { ...state, byRating: action.payload };
    default:
      return { ...state };
  }
};
