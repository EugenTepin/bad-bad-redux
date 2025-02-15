// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounterOne } from './store/oneClick.ts';

const CompOne = () => {
  // const [count, setCount] = useState(0);
  const two = useSelector((state: any) => {
    console.log('state.two selector', Date.now());
    return state.two;
  });
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button onClick={() => dispatch(increaseCounterOne())}>
        count is {two.counter}
      </button>
    </div>
  );
};

export default CompOne;
