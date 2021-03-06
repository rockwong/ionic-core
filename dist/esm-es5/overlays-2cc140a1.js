import { __awaiter, __generator, __spreadArrays } from "tslib";
import { b as getIonMode, c as config } from './ionic-global-23e7365a.js';
import { g as getElementRoot } from './helpers-5c745fbd.js';
import { OVERLAY_BACK_BUTTON_PRIORITY } from './hardware-back-button-7b6ede21.js';
var lastId = 0;
var activeAnimations = new WeakMap();
var createController = function (tagName) {
    return {
        create: function (options) {
            return createOverlay(tagName, options);
        },
        dismiss: function (data, role, id) {
            return dismissOverlay(document, data, role, tagName, id);
        },
        getTop: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, getOverlay(document, tagName)];
                });
            });
        }
    };
};
var alertController = /*@__PURE__*/ createController('ion-alert');
var actionSheetController = /*@__PURE__*/ createController('ion-action-sheet');
var loadingController = /*@__PURE__*/ createController('ion-loading');
var modalController = /*@__PURE__*/ createController('ion-modal');
var pickerController = /*@__PURE__*/ createController('ion-picker');
var popoverController = /*@__PURE__*/ createController('ion-popover');
var toastController = /*@__PURE__*/ createController('ion-toast');
var prepareOverlay = function (el) {
    /* tslint:disable-next-line */
    if (typeof document !== 'undefined') {
        connectListeners(document);
    }
    var overlayIndex = lastId++;
    el.overlayIndex = overlayIndex;
    if (!el.hasAttribute('id')) {
        el.id = "ion-overlay-" + overlayIndex;
    }
};
var createOverlay = function (tagName, opts) {
    /* tslint:disable-next-line */
    if (typeof customElements !== 'undefined') {
        return customElements.whenDefined(tagName).then(function () {
            var element = document.createElement(tagName);
            element.classList.add('overlay-hidden');
            // convert the passed in overlay options into props
            // that get passed down into the new overlay
            Object.assign(element, opts);
            // append the overlay element to the document body
            getAppRoot(document).appendChild(element);
            return element.componentOnReady();
        });
    }
    return Promise.resolve();
};
var focusableQueryString = '[tabindex]:not([tabindex^="-"]), input:not([type=hidden]), textarea, button, select, .ion-focusable';
var innerFocusableQueryString = 'input:not([type=hidden]), textarea, button, select';
var focusFirstDescendant = function (ref, overlay) {
    var firstInput = ref.querySelector(focusableQueryString);
    var shadowRoot = firstInput && firstInput.shadowRoot;
    if (shadowRoot) {
        // If there are no inner focusable elements, just focus the host element.
        firstInput = shadowRoot.querySelector(innerFocusableQueryString) || firstInput;
    }
    if (firstInput) {
        firstInput.focus();
    }
    else {
        // Focus overlay instead of letting focus escape
        overlay.focus();
    }
};
var focusLastDescendant = function (ref, overlay) {
    var inputs = Array.from(ref.querySelectorAll(focusableQueryString));
    var lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
    var shadowRoot = lastInput && lastInput.shadowRoot;
    if (shadowRoot) {
        // If there are no inner focusable elements, just focus the host element.
        lastInput = shadowRoot.querySelector(innerFocusableQueryString) || lastInput;
    }
    if (lastInput) {
        lastInput.focus();
    }
    else {
        // Focus overlay instead of letting focus escape
        overlay.focus();
    }
};
/**
 * Traps keyboard focus inside of overlay components.
 * Based on https://w3c.github.io/aria-practices/examples/dialog-modal/alertdialog.html
 * This includes the following components: Action Sheet, Alert, Loading, Modal,
 * Picker, and Popover.
 * Should NOT include: Toast
 */
var trapKeyboardFocus = function (ev, doc) {
    var lastOverlay = getOverlay(doc);
    var target = ev.target;
    // If no active overlay, ignore this event
    if (!lastOverlay || !target) {
        return;
    }
    /**
     * If we are focusing the overlay, clear
     * the last focused element so that hitting
     * tab activates the first focusable element
     * in the overlay wrapper.
     */
    if (lastOverlay === target) {
        lastOverlay.lastFocus = undefined;
        /**
         * Otherwise, we must be focusing an element
         * inside of the overlay. The two possible options
         * here are an input/button/etc or the ion-focus-trap
         * element. The focus trap element is used to prevent
         * the keyboard focus from leaving the overlay when
         * using Tab or screen assistants.
         */
    }
    else {
        /**
         * We do not want to focus the traps, so get the overlay
         * wrapper element as the traps live outside of the wrapper.
         */
        var overlayRoot = getElementRoot(lastOverlay);
        if (!overlayRoot.contains(target)) {
            return;
        }
        var overlayWrapper = overlayRoot.querySelector('.ion-overlay-wrapper');
        if (!overlayWrapper) {
            return;
        }
        /**
         * If the target is inside the wrapper, let the browser
         * focus as normal and keep a log of the last focused element.
         */
        if (overlayWrapper.contains(target)) {
            lastOverlay.lastFocus = target;
        }
        else {
            /**
             * Otherwise, we must have focused one of the focus traps.
             * We need to wrap the focus to either the first element
             * or the last element.
             */
            /**
             * Once we call `focusFirstDescendant` and focus the first
             * descendant, another focus event will fire which will
             * cause `lastOverlay.lastFocus` to be updated before
             * we can run the code after that. We will cache the value
             * here to avoid that.
             */
            var lastFocus = lastOverlay.lastFocus;
            // Focus the first element in the overlay wrapper
            focusFirstDescendant(overlayWrapper, lastOverlay);
            /**
             * If the cached last focused element is the
             * same as the active element, then we need
             * to wrap focus to the last descendant. This happens
             * when the first descendant is focused, and the user
             * presses Shift + Tab. The previous line will focus
             * the same descendant again (the first one), causing
             * last focus to equal the active element.
             */
            if (lastFocus === doc.activeElement) {
                focusLastDescendant(overlayWrapper, lastOverlay);
            }
            lastOverlay.lastFocus = doc.activeElement;
        }
    }
};
var connectListeners = function (doc) {
    if (lastId === 0) {
        lastId = 1;
        doc.addEventListener('focus', function (ev) { return trapKeyboardFocus(ev, doc); }, true);
        // handle back-button click
        doc.addEventListener('ionBackButton', function (ev) {
            var lastOverlay = getOverlay(doc);
            if (lastOverlay && lastOverlay.backdropDismiss) {
                ev.detail.register(OVERLAY_BACK_BUTTON_PRIORITY, function () {
                    return lastOverlay.dismiss(undefined, BACKDROP);
                });
            }
        });
        // handle ESC to close overlay
        doc.addEventListener('keyup', function (ev) {
            if (ev.key === 'Escape') {
                var lastOverlay = getOverlay(doc);
                if (lastOverlay && lastOverlay.backdropDismiss) {
                    lastOverlay.dismiss(undefined, BACKDROP);
                }
            }
        });
    }
};
var dismissOverlay = function (doc, data, role, overlayTag, id) {
    var overlay = getOverlay(doc, overlayTag, id);
    if (!overlay) {
        return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
};
var getOverlays = function (doc, selector) {
    if (selector === undefined) {
        selector = 'ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast';
    }
    return Array.from(doc.querySelectorAll(selector))
        .filter(function (c) { return c.overlayIndex > 0; });
};
var getOverlay = function (doc, overlayTag, id) {
    var overlays = getOverlays(doc, overlayTag);
    return (id === undefined)
        ? overlays[overlays.length - 1]
        : overlays.find(function (o) { return o.id === id; });
};
var present = function (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) { return __awaiter(void 0, void 0, void 0, function () {
    var mode, animationBuilder, completed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (overlay.presented) {
                    return [2 /*return*/];
                }
                overlay.presented = true;
                overlay.willPresent.emit();
                mode = getIonMode(overlay);
                animationBuilder = (overlay.enterAnimation)
                    ? overlay.enterAnimation
                    : config.get(name, mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
                return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
            case 1:
                completed = _a.sent();
                if (completed) {
                    overlay.didPresent.emit();
                }
                if (overlay.keyboardClose) {
                    overlay.el.focus();
                }
                return [2 /*return*/];
        }
    });
}); };
var dismiss = function (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) { return __awaiter(void 0, void 0, void 0, function () {
    var mode, animationBuilder, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!overlay.presented) {
                    return [2 /*return*/, false];
                }
                overlay.presented = false;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                // Overlay contents should not be clickable during dismiss
                overlay.el.style.setProperty('pointer-events', 'none');
                overlay.willDismiss.emit({ data: data, role: role });
                mode = getIonMode(overlay);
                animationBuilder = (overlay.leaveAnimation)
                    ? overlay.leaveAnimation
                    : config.get(name, mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
                if (!(role !== 'gesture')) return [3 /*break*/, 3];
                return [4 /*yield*/, overlayAnimation(overlay, animationBuilder, overlay.el, opts)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                overlay.didDismiss.emit({ data: data, role: role });
                activeAnimations.delete(overlay);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 5];
            case 5:
                overlay.el.remove();
                return [2 /*return*/, true];
        }
    });
}); };
var getAppRoot = function (doc) {
    return doc.querySelector('ion-app') || doc.body;
};
var overlayAnimation = function (overlay, animationBuilder, baseEl, opts) { return __awaiter(void 0, void 0, void 0, function () {
    var aniRoot, animation, activeAni;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Make overlay visible in case it's hidden
                baseEl.classList.remove('overlay-hidden');
                aniRoot = baseEl.shadowRoot || overlay.el;
                animation = animationBuilder(aniRoot, opts);
                if (!overlay.animated || !config.getBoolean('animated', true)) {
                    animation.duration(0);
                }
                if (overlay.keyboardClose) {
                    animation.beforeAddWrite(function () {
                        var activeElement = baseEl.ownerDocument.activeElement;
                        if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
                            activeElement.blur();
                        }
                    });
                }
                activeAni = activeAnimations.get(overlay) || [];
                activeAnimations.set(overlay, __spreadArrays(activeAni, [animation]));
                return [4 /*yield*/, animation.play()];
            case 1:
                _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };
var eventMethod = function (element, eventName) {
    var resolve;
    var promise = new Promise(function (r) { return resolve = r; });
    onceEvent(element, eventName, function (event) {
        resolve(event.detail);
    });
    return promise;
};
var onceEvent = function (element, eventName, callback) {
    var handler = function (ev) {
        element.removeEventListener(eventName, handler);
        callback(ev);
    };
    element.addEventListener(eventName, handler);
};
var isCancel = function (role) {
    return role === 'cancel' || role === BACKDROP;
};
var defaultGate = function (h) { return h(); };
var safeCall = function (handler, arg) {
    if (typeof handler === 'function') {
        var jmp = config.get('_zoneGate', defaultGate);
        return jmp(function () {
            try {
                return handler(arg);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    return undefined;
};
var BACKDROP = 'backdrop';
export { BACKDROP as B, alertController as a, actionSheetController as b, popoverController as c, present as d, prepareOverlay as e, dismiss as f, eventMethod as g, activeAnimations as h, isCancel as i, loadingController as l, modalController as m, pickerController as p, safeCall as s, toastController as t };
