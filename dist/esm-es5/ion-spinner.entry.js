import { r as registerInstance, h, H as Host } from './index-92848855.js';
import { c as config, b as getIonMode } from './ionic-global-23e7365a.js';
import { c as createColorClasses } from './theme-5641d27f.js';
import { S as SPINNERS } from './spinner-configs-c78e170e.js';
var spinnerCss = ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */
        this.paused = false;
    }
    Spinner.prototype.getName = function () {
        var spinnerName = this.name || config.get('spinner');
        var mode = getIonMode(this);
        if (spinnerName) {
            return spinnerName;
        }
        return (mode === 'ios') ? 'lines' : 'circular';
    };
    Spinner.prototype.render = function () {
        var _a;
        var self = this;
        var mode = getIonMode(self);
        var spinnerName = self.getName();
        var spinner = SPINNERS[spinnerName] || SPINNERS['lines'];
        var duration = (typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur);
        var svgs = [];
        if (spinner.circles !== undefined) {
            for (var i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines !== undefined) {
            for (var i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return (h(Host, { class: createColorClasses(self.color, (_a = {},
                _a[mode] = true,
                _a["spinner-" + spinnerName] = true,
                _a['spinner-paused'] = !!self.paused || config.getBoolean('_testing'),
                _a)), role: "progressbar", style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} }, svgs));
    };
    return Spinner;
}());
var buildCircle = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return (h("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, h("circle", { transform: data.transform || 'translate(32,32)', cx: data.cx, cy: data.cy, r: data.r, style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} })));
};
var buildLine = function (spinner, duration, index, total) {
    var data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return (h("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
};
Spinner.style = spinnerCss;
export { Spinner as ion_spinner };
