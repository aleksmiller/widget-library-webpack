import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Widget extends Component {
  render() {
    return (
      <div>{this.props.apiKey}</div>
    );
  }
}

Widget.propTypes = {
  apiKey: PropTypes.string,
  authId: PropTypes.string,
  locale: PropTypes.string,
  selector: PropTypes.string,
  arg: PropTypes.string
};

export default Widget;
