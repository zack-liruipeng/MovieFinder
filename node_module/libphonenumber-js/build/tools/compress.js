"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = compress;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compress(input) {
	var countries = {};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(input.countries)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var country_code = _step.value;

			var country = input.countries[country_code];

			// When changing this array also change getters in `./metadata.js`
			var country_array = [country.phone_code, country.national_number_pattern, country.formats.map(function (format) {
				// When changing this array also change getters in `./metadata.js`
				var format_array = [format.pattern, format.format, format.leading_digits_patterns, format.national_prefix_formatting_rule, format.national_prefix_is_optional_when_formatting, format.international_format];

				return trim_array(format_array);
			}), country.national_prefix, country.national_prefix_formatting_rule, country.national_prefix_for_parsing, country.national_prefix_transform_rule, country.national_prefix_is_optional_when_formatting, country.leading_digits];

			if (country.types) {
				var types_array = [
				// These are common
				country.types.fixed_line, country.types.mobile, country.types.toll_free, country.types.premium_rate, country.types.personal_number,

				// These are less common
				country.types.voice_mail, country.types.uan, country.types.pager, country.types.voip, country.types.shared_cost];

				country_array.push(trim_array(types_array));
			}

			countries[country_code] = trim_array(country_array);
		}

		// const output =
		// [
		// 	input.country_phone_code_to_countries,
		// 	countries
		// ]
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var output = {
		country_phone_code_to_countries: input.country_phone_code_to_countries,
		countries: countries
	};

	return output;
}

function is_empty(value) {
	return value === undefined || value === null || value === false || Array.isArray(value) && value.length === 0;
}

// Removes trailing empty values from an `array`
function trim_array(array) {
	while (array.length > 0 && is_empty(array[array.length - 1])) {
		array.pop();
	}

	return array;
}
//# sourceMappingURL=compress.js.map