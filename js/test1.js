// @ts-check

'use strict';

/**
 * Check with:
 *   tsc --noEmit --allowJs types/* js/test1.js
 * Or:
 *   flow
 */

/*flow-include
type ComponentOptions = {|
  el: string;
  data: {};
|}
declare class Vue {
  constructor(ComponentOptions): void
}
*/

const MyApp = Vue.extend({
  props: {
  },
  el: '#app',
  data: {
    message: 'Hello Vue!',
    seconds: 0
  },
  created() {
    this.econds = 'asd';
    setInterval(() => {
      this.seconds = 'asd';
    }, 1000);
  }
});
