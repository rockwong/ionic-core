import './index-92848855.js';
import './helpers-5c745fbd.js';
import { c as createAnimation } from './animation-a635a2fc.js';
import { g as getIonPageElement } from './index-9b2fc761.js';
var mdTransitionAnimation = function (_, opts) {
    var OFF_BOTTOM = '40px';
    var CENTER = '0px';
    var backDirection = (opts.direction === 'back');
    var enteringEl = opts.enteringEl;
    var leavingEl = opts.leavingEl;
    var ionPageElement = getIonPageElement(enteringEl);
    var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    var rootTransition = createAnimation();
    rootTransition
        .addElement(ionPageElement)
        .fill('both')
        .beforeRemoveClass('ion-page-invisible');
    // animate the component itself
    if (backDirection) {
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition
            .duration(opts.duration || 280)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .fromTo('transform', "translateY(" + OFF_BOTTOM + ")", "translateY(" + CENTER + ")")
            .fromTo('opacity', 0.01, 1);
    }
    // Animate toolbar if it's there
    if (enteringToolbarEle) {
        var enteringToolBar = createAnimation();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.addAnimation(enteringToolBar);
    }
    // setup leaving view
    if (leavingEl && backDirection) {
        // leaving content
        rootTransition
            .duration(opts.duration || 200)
            .easing('cubic-bezier(0.47,0,0.745,0.715)');
        var leavingPage_1 = createAnimation();
        leavingPage_1
            .addElement(getIonPageElement(leavingEl))
            .onFinish(function (currentStep) {
            if (currentStep === 1 && leavingPage_1.elements.length > 0) {
                leavingPage_1.elements[0].style.setProperty('display', 'none');
            }
        })
            .fromTo('transform', "translateY(" + CENTER + ")", "translateY(" + OFF_BOTTOM + ")")
            .fromTo('opacity', 1, 0);
        rootTransition.addAnimation(leavingPage_1);
    }
    return rootTransition;
};
export { mdTransitionAnimation };
