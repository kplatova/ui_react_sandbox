import React from 'react';
import IconPresenter from './IconPresenter';
import iconTypes from '../../components/Icon/iconTypes';
import Board from '../../../sj/components/Board';

class IconList extends React.Component {

  render() {
    const iconsColors = {
      close: 'red',
      visibility_off: 'red',
      mood_bad: 'red',
      cancel: 'red',
      delete: 'red',
      block: 'red',
      info: 'yellow',
    };

    return (
      <div>
        <h2>Иконки</h2>
        <div>
          <h3>Черные</h3>
          {iconTypes.map(icon => <IconPresenter icon={icon} color="black" />)}
        </div>

        <h3>Белые на сером</h3>
        <Board color="gray">
          {iconTypes.map(icon => <IconPresenter icon={icon} color="white" />)}
        </Board>

        <div>
          <h3>Разноцветные на белом</h3>
          {iconTypes.map((icon, index) => <IconPresenter icon={icon} color={iconsColors[icon] || 'green'} key={index} />)}
        </div>
      </div>
    );
  }
}

export default IconList;
