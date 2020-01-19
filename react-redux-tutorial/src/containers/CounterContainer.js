import React from 'react';
import { connechttps://github.com/ICOM3010-ITC2020/icom3010_self_wo.gitt } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter'

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);