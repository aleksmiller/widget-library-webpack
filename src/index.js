import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './containers/Widget';

let NSconfig = null;

export default {
  config: function (config) {
    NSconfig = config;
    console.log('Configure with ', NSconfig);
  },
  widgets: {
    Widget: {
      new: (config) => {
        console.log('Create a widget instance on ', document.querySelector(config.selector));
        return {
          render: (args) => {
            ReactDOM.render(<Widget
              apiKey={args.apiKey || config.apiKey || NSconfig.apiKey}
              authId={args.authId || config.authId || NSconfig.authId}
              locale={args.locale || config.locale || NSconfig.locale}
              arg={args.arg || config.arg || NSconfig.arg}
              selector={config.selector || NSconfig.selector}/>, document.querySelector(config.selector)
            );
          }
        };
      }
    }
  }
};
