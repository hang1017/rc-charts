import React from 'react';
import classNames from 'classnames';
import './title.less';

export type TPosition = 'left' | 'center' | 'right';

export interface ITitleProps {
  className?: string;
  text?: string;
  position?: TPosition;
}

const Title: React.FC<ITitleProps> = (props) => {
  const prefixCls: string = 'rc-chart-title';
  const { className, text, position } = props;

  if (text) {
    return (
      <div
        className={classNames(className, {
          [`${prefixCls}`]: true,
          [`is-left`]: position === 'left',
          [`is-right`]: position === 'right',
          [`is-center`]: position === 'center'
        })}
      >
        <h4>{text}</h4>
      </div>
    )
  } else {
    return null;
  }
};

Title.defaultProps = {
  position: 'left'
};

export default Title;
