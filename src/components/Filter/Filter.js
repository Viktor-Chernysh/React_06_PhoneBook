import { useDispatch } from 'react-redux';
import { addFilter } from './filterSlice';

export default function Filter({ value }) {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      value={value}
      onChange={e => dispatch(addFilter(e.target.value))}
    />
  );
}
