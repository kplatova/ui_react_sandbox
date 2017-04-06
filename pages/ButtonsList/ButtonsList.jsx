import React from 'react';
import Button from '../../../sj/components/Button';
import Board from '../../../sj/components/Board';

export default class ButtonList extends React.Component {

  render() {
    return (
      <div>
        <h1>Кнопки</h1>
        <div>
          <h4>Raised</h4>
          <Button text="primary" />
          <Button type="secondary" text="secondary" />
          <Button type="secondary" danger text="secondary danger" />
          <Button disabled text="primary" />
          <Button disabled type="secondary" text="secondary" />
          <Button disabled type="secondary" danger text="secondary danger" />
        </div>
        <div>
          <h4>Raised with icon</h4>
          <Button text="primary" icon="delete" />
          <Button type="secondary" text="secondary" icon="delete" />
          <Button type="secondary" danger text="secondary danger" icon="delete" />
          <Button disabled text="primary" icon="delete" />
          <Button disabled type="secondary" text="secondary" icon="delete" />
          <Button disabled type="secondary" danger text="secondary danger" icon="delete" />
        </div>
        <div>
          <h4>Flat Minimal</h4>
          <Button type="minimal" text="minimal" />
          <Button type="minimal" danger text="minimal danger" />
          <Button type="minimal" disabled text="minimal disabled" />
          <Button type="minimal" danger disabled text="minimal disabled danger" />
        </div>
        <div>
          <h4>Flat Minimal Light</h4>
          <Board color="green">
            <Button type="minimallight" text="minimal light" />
            <Button type="minimallight" disabled text="minimal light disabled" />
          </Board>
        </div>
        <div>
          <h4>Flat Minimal Icon Only</h4>
          <Button type="minimal" icon="info" />
          <Button type="minimal" danger icon="close" />
          <Button type="minimal" disabled icon="delete" />
          <Button type="minimal" danger disabled icon="phone" />
        </div>
        <div>
          <h4>Flat Minimal Light Icon Only</h4>
          <Board color="green">
            <Button type="minimallight" icon="people" />
            <Button type="minimallight" disabled icon="content_copy" />
          </Board>
        </div>
        <div>
          <h4>Flat Standart</h4>
          <Button type="flat" text="flat" />
          <Button type="flat" danger text="flat danger" />
          <Button type="flat" disabled text="flat disabled" />
          <Button type="flat" danger disabled text="flat disabled danger" />
        </div>
        <div>
          <h4>Flat Standart with icon</h4>
          <Button type="flat" text="flat with icon" icon="share" />
          <Button type="flat" danger text="flat with icon danger" icon="email" />
          <Button type="flat" disabled text="flat with icon disabled" icon="settings" />
          <Button type="flat" danger disabled text="flat with icon disabled danger" icon="edit" />
        </div>
        <div>
          <h4>Flat Standart Light</h4>
          <Board color="green">
            <Button type="flatlight" text="flatlight" />
            <Button type="flatlight" disabled text="flatlight disabled" />
          </Board>
        </div>
        <div>
          <h4>All fullwidth buttons</h4>
          <Board color="white">
            <Button fullWidth text="primary" icon="delete" />
            <Button fullWidth type="secondary" text="secondary" />
            <Button fullWidth type="secondary" danger text="secondary danger" />
            <Button fullWidth disabled text="primary" />
            <Button fullWidth disabled type="secondary" text="secondary" />
            <Button fullWidth disabled type="secondary" danger text="secondary danger" />
          </Board>
          <Board color="white">
            <Button fullWidth type="minimal" text="minimal" />
            <Button fullWidth type="minimal" danger text="minimal danger" />
            <Button fullWidth type="minimal" disabled text="minimal disabled" />
            <Button fullWidth type="minimal" danger disabled text="minimal disabled danger" />
          </Board>
          <Board color="green">
            <Button fullWidth type="minimallight" text="minimal light" />
            <Button fullWidth type="minimallight" disabled text="minimal light disabled" />
          </Board>
          <Board color="white">
            <Button fullWidth type="flat" text="flat" />
            <Button fullWidth type="flat" danger text="flat danger" />
            <Button fullWidth type="flat" disabled text="flat disabled" />
            <Button fullWidth type="flat" danger disabled text="flat disabled danger" />
            <Button fullWidth type="flat" text="flat with icon" icon="help_outline" />
            <Button fullWidth type="flat" danger text="flat with icon danger" icon="history" />
            <Button fullWidth type="flat" disabled text="flat with icon disabled" icon="content_copy" />
            <Button fullWidth type="flat" danger disabled text="flat with icon disabled danger" icon="gps_fixed" />
          </Board>
          <Board color="green">
            <Button fullWidth type="flatlight" text="flatlight" />
            <Button fullWidth type="flatlight" disabled text="flatlight disabled" />
          </Board>
        </div>
      </div>
    );
  }
}
