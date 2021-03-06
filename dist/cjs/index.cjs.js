'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./index-991ae3c0.js');
const ionicGlobal = require('./ionic-global-ee3a8739.js');
require('./helpers-9038d758.js');
const animation = require('./animation-ab3a647a.js');
const index$1 = require('./index-2ddec4ee.js');
const ios_transition = require('./ios.transition-4b6bdaff.js');
const md_transition = require('./md.transition-7ae262d2.js');
const cubicBezier = require('./cubic-bezier-7fd071cd.js');
require('./gesture-controller-6fecaf63.js');
const index$2 = require('./index-fdd5743d.js');
const index$3 = require('./index-28ba2a42.js');
require('./hardware-back-button-2b00490e.js');
const index$4 = require('./index-ecf195a5.js');
const overlays = require('./overlays-9fa3d237.js');

const setupConfig = (config) => {
    const win = window;
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
const getMode = () => {
    const win = window;
    const config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};

exports.getPlatforms = ionicGlobal.getPlatforms;
exports.isPlatform = ionicGlobal.isPlatform;
exports.createAnimation = animation.createAnimation;
exports.LIFECYCLE_DID_ENTER = index$1.LIFECYCLE_DID_ENTER;
exports.LIFECYCLE_DID_LEAVE = index$1.LIFECYCLE_DID_LEAVE;
exports.LIFECYCLE_WILL_ENTER = index$1.LIFECYCLE_WILL_ENTER;
exports.LIFECYCLE_WILL_LEAVE = index$1.LIFECYCLE_WILL_LEAVE;
exports.LIFECYCLE_WILL_UNLOAD = index$1.LIFECYCLE_WILL_UNLOAD;
exports.iosTransitionAnimation = ios_transition.iosTransitionAnimation;
exports.mdTransitionAnimation = md_transition.mdTransitionAnimation;
exports.getTimeGivenProgression = cubicBezier.getTimeGivenProgression;
exports.createGesture = index$2.createGesture;
exports.IonicSafeString = index$3.IonicSafeString;
exports.menuController = index$4.menuController;
exports.actionSheetController = overlays.actionSheetController;
exports.alertController = overlays.alertController;
exports.loadingController = overlays.loadingController;
exports.modalController = overlays.modalController;
exports.pickerController = overlays.pickerController;
exports.popoverController = overlays.popoverController;
exports.toastController = overlays.toastController;
exports.getMode = getMode;
exports.setupConfig = setupConfig;
