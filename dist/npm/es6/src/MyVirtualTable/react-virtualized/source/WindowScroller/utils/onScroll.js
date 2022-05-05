import { requestAnimationTimeout, cancelAnimationTimeout } from '../../utils/requestAnimationTimeout';
var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    cancelAnimationTimeout(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });
  disablePointerEventsTimeoutId = requestAnimationTimeout(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;
    document.body.style.pointerEvents = 'none';
  }

  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}

export function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }

  mountedInstances.push(component);
}
export function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });

  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);

    if (disablePointerEventsTimeoutId) {
      cancelAnimationTimeout(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mountedInstances, "mountedInstances", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(originalBodyPointerEvents, "originalBodyPointerEvents", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(disablePointerEventsTimeoutId, "disablePointerEventsTimeoutId", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(enablePointerEventsIfDisabled, "enablePointerEventsIfDisabled", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(enablePointerEventsAfterDelayCallback, "enablePointerEventsAfterDelayCallback", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(enablePointerEventsAfterDelay, "enablePointerEventsAfterDelay", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(onScrollWindow, "onScrollWindow", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(registerScrollListener, "registerScrollListener", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");

  __REACT_HOT_LOADER__.register(unregisterScrollListener, "unregisterScrollListener", "/Users/qiu/biosan/BiosanUi/src/MyVirtualTable/react-virtualized/source/WindowScroller/utils/onScroll.js");
}();

;