System.register(["./p-14808d2e.system.js","./p-90f9da43.system.js","./p-75439a7f.system.js","./p-ae1df1f3.system.js"],(function(e){"use strict";var n,t;return{setters:[function(){},function(){},function(e){n=e.c},function(e){t=e.g}],execute:function(){var i=e("mdTransitionAnimation",(function(e,i){var a="40px";var r="0px";var o=i.direction==="back";var s=i.enteringEl;var f=i.leavingEl;var c=t(s);var d=c.querySelector("ion-toolbar");var l=n();l.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible");if(o){l.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{l.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+a+")","translateY("+r+")").fromTo("opacity",.01,1)}if(d){var u=n();u.addElement(d);l.addAnimation(u)}if(f&&o){l.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var m=n();m.addElement(t(f)).onFinish((function(e){if(e===1&&m.elements.length>0){m.elements[0].style.setProperty("display","none")}})).fromTo("transform","translateY("+r+")","translateY("+a+")").fromTo("opacity",1,0);l.addAnimation(m)}return l}))}}}));