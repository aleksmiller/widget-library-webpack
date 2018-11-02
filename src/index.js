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
            console.log('Render widget with args ', args);
            console.log(Widget);
          }
        };
      }
    }
  }
};
