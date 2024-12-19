import { useDispatch, useSelector } from 'react-redux';
import { increment, RootState } from './store';
import { useQuery } from '@tanstack/react-query';

class Person {
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }
}

const person = new Person('John');

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Inner() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ['person'],
    queryFn: () => sleep(1000).then(() => person.name),
  });

  console.log(data);

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

        {isLoading && !error ? <p>Loading...</p> : <p>Person name: {data}</p>}
      </div>
    </div>
  );
}
