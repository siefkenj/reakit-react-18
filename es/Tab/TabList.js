import { a as _objectSpread2 } from '../_rollupPluginBabelHelpers-1f0bf8c2.js';
import { createComponent } from 'reakit-system/createComponent';
import { createHook } from 'reakit-system/createHook';
import 'reakit-utils/shallowEqual';
import 'react';
import 'reakit-utils/useForkRef';
import 'reakit-utils/isButton';
import { useWarning } from 'reakit-warning';
import 'reakit-utils/useLiveRef';
import 'reakit-utils/isSelfTarget';
import 'reakit-utils/useIsomorphicEffect';
import 'reakit-utils/hasFocusWithin';
import 'reakit-utils/isPortalEvent';
import 'reakit-utils/dom';
import 'reakit-utils/tabbable';
import '../Role/Role.js';
import '../Tabbable/Tabbable.js';
import { useCreateElement } from 'reakit-system/useCreateElement';
import 'reakit-utils/getDocument';
import 'reakit-utils/fireBlurEvent';
import 'reakit-utils/fireKeyboardEvent';
import 'reakit-utils/canUseDOM';
import 'reakit-utils/getNextActiveElementOnBlur';
import '../reverse-30eaa122.js';
import '../getCurrentId-5aa9849e.js';
import '../findEnabledItemById-8ddca752.js';
import '../__keys-6742f591.js';
import '../userFocus-e16425e3.js';
import { useComposite } from '../Composite/Composite.js';
import { a as TAB_LIST_KEYS } from '../__keys-3c0b2243.js';

var useTabList = createHook({
  name: "TabList",
  compose: useComposite,
  keys: TAB_LIST_KEYS,
  useProps: function useProps(options, htmlProps) {
    return _objectSpread2({
      role: "tablist",
      "aria-orientation": options.orientation
    }, htmlProps);
  }
});
var TabList = createComponent({
  as: "div",
  useHook: useTabList,
  useCreateElement: function useCreateElement$1(type, props, children) {
    process.env.NODE_ENV !== "production" ? useWarning(!props["aria-label"] && !props["aria-labelledby"], "You should provide either `aria-label` or `aria-labelledby` props.", "See https://reakit.io/docs/tab") : void 0;
    return useCreateElement(type, props, children);
  }
});

export { TabList, useTabList };
