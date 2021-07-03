import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFavorites } from '../store/slices/ui-slice';

export function useFavorites(id, status) {
  const dispatch = useDispatch();
  const [isFavorites, setIsFavorites] = useState(status);

  return [
    isFavorites,
    () => {
      dispatch(setFavorites({ id, status: isFavorites ? 0 : 1 }));
      setIsFavorites((state) => !state);
    },
  ];
}
