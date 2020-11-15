// @flow

/*::
import React from 'react';
import ReactDOM from 'react-dom';
 */

type Props = {
  name: string
}

/**
 */
class ShoppingList extends React.Component<Props> {
  render() {
    console.log('render');
    return (
      <div className="shopping-list">
      <h1>Shopping List for {this.props.name}</h1>
      <ul>
      <li>Instagram</li>
      <li>WhatsApp</li>
      <li>Oculus</li>
      </ul>
      </div>
    );
  }
}

const t = React.createElement(ShoppingList, {name: 'Mark'});
ReactDOM.render(
  t,
  document.getElementById('root'),
);

console.log('there');
