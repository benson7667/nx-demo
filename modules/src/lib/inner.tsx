import { useDispatch, useSelector } from 'react-redux';
import { increment, RootState } from './store';

export default function Inner() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col">
        <p className="text-4xl font-bold mb-4">Count: {count}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
}