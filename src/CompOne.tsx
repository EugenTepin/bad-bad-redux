// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounterTwo } from './store/twoClick.ts';

const CompOne = () => {
  // const [count, setCount] = useState(0);
  const one = useSelector((state: any) => {
    console.log('state.one selector', Date.now());
    return state.one;
  });
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button onClick={() => dispatch(increaseCounterTwo())}>
        count is {one.counter}
      </button>
    </div>
  );
};

export default CompOne;
