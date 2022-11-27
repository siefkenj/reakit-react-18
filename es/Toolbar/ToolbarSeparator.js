import { _ as _objectWithoutPropertiesLoose, a as _objectSpread2 } from '../_rollupPluginBabelHelpers-1f0bf8c2.js';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import 'reakit-utils/shallowEqual';
import '../Role/Role.js';
import { useSeparator } from '../Separator/Separator.js';
import { b as TOOLBAR_SEPARATOR_KEYS } from '../__keys-ae468c11.js';

var useToolbarSeparator = createHook({
  name: "ToolbarSeparator",
  compose: useSeparator,
  keys: TOOLBAR_SEPARATOR_KEYS,
  useOptions: function useOptions(_ref) {
    var _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === void 0 ? "vertical" : _ref$orientation,
        options = _objectWithoutPropertiesLoose(_ref, ["orientation"]);

    return _objectSpread2({
      orientation: orientation === "vertical" ? "horizontal" : "vertical"
    }, options);
  }
});
var ToolbarSeparator = createComponent({
  as: "hr",
  memo: true,
  useHook: useToolbarSeparator
});

export { ToolbarSeparator, useToolbarSeparator };
