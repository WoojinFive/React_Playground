import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/CSSModule.module.scss';

const cx = classNames.bind(styles)

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      Hello, I'm <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;