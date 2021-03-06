'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _email_pane = require('../../field/email/email_pane');

var _email_pane2 = _interopRequireDefault(_email_pane);

var _index = require('../../core/index');

var l = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResetPasswordPane = function (_React$Component) {
  _inherits(ResetPasswordPane, _React$Component);

  function ResetPasswordPane() {
    _classCallCheck(this, ResetPasswordPane);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ResetPasswordPane.prototype.render = function render() {
    var _props = this.props,
        emailInputPlaceholder = _props.emailInputPlaceholder,
        header = _props.header,
        i18n = _props.i18n,
        lock = _props.lock;


    return _react2.default.createElement(
      'div',
      null,
      header,
      _react2.default.createElement(_email_pane2.default, {
        i18n: i18n,
        lock: lock,
        placeholder: emailInputPlaceholder
      })
    );
  };

  return ResetPasswordPane;
}(_react2.default.Component);

ResetPasswordPane.propTypes = {
  emailInputPlaceholder: _react2.default.PropTypes.string.isRequired,
  lock: _react2.default.PropTypes.object.isRequired
};
exports.default = ResetPasswordPane;
