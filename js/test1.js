// @ts-check
// @flow strict

'use strict';

// flowlint unclear-type: off
/*flow-include
declare class Vue {
  constructor(Object): void
}
*/
// flowlint unclear-type: error

class MyApp extends Vue {
  /*:: seconds: number; */
  constructor(options) {
    super(options);
    this.seconds = 0;
  }
  init() {
    setInterval(() => {
      this.seconds++;
    }, 1000);
  }
}

let app = new MyApp({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    seconds: 0
  },
});
