import { useDispatch, useSelector } from 'react-redux';

export const useSearch = (
  sliceName: string, 
  setSearchAction: (payload: { type: string; value: any }) => any
) => {
  const dispatch = useDispatch();
  const searchItems = useSelector((state: any) => state[sliceName]?.searchItems || { type: "", value: "" });
  const handleSearch = (value: any, type: string) => {
    dispatch(setSearchAction({ type, value }));
  };

  return {
    searchItems,
    handleSearch,
  };
};
