// @flow
// @ts-check

/**
 * Type-check with:
 *   flow
 * Or:
 *   tsc --allowJs --noEmit --jsx react --target es6 --moduleResolution Node node_modules/@types/react/index.d.ts node_modules/csstype/index.d.ts js/reactapp.js
 */

/*::
import React from 'react';
import ReactDOM from 'react-dom';
 */

class Props {
  /**
   * @type {string}
   */
  name
}

/**
 */
class ShoppingList extends React.Component {
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

const t = React.createElement(ShoppingList, {name: 123});
ReactDOM.render(
  t,
  document.getElementById('root'),
);

console.log('there');
