System.register(["./p-09b56430.system.js"],(function(t){"use strict";var e,r,i,o,n;return{setters:[function(t){e=t.r;r=t.c;i=t.h;o=t.H;n=t.g}],execute:function(){var s=t("lazy_image",function(){function t(t){var i=this;e(this,t);this.alt="";this.rootMargin="200px 50px 200px 50px";this.onLoad=function(){i.lazyImgDidLoad.emit()};this.onError=function(){i.lazyImgError.emit()};this.lazyImgWillLoad=r(this,"lazyImgWillLoad",7);this.lazyImgDidLoad=r(this,"lazyImgDidLoad",7);this.lazyImgError=r(this,"lazyImgError",7)}t.prototype.srcChanged=function(){this.addIO()};t.prototype.componentDidLoad=function(){this.addIO()};t.prototype.addIO=function(){var t=this;if(this.src===undefined){return}if("IntersectionObserver"in window){this.removeIO();this.io=new IntersectionObserver((function(e){return t.onIntersection(e)}),{rootMargin:this.rootMargin});this.io.observe(this.el)}else{setTimeout((function(){return t.load()}),200)}};t.prototype.onIntersection=function(t){if(t[0].isIntersecting){this.load();this.removeIO()}};t.prototype.load=function(){this.loadError=this.onError;this.loadSrc=this.src;this.lazyImgWillLoad.emit()};t.prototype.removeIO=function(){if(this.io){this.io.disconnect();this.io=undefined}};t.prototype.render=function(){return i(o,null,i("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:true,configurable:true});return t}())}}}));