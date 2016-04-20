/*! 
* DevExpress Exporter (part of ChartJS)
* Version: 13.2.6
* Build date: Dec 26, 2013
*
* Copyright (c) 2012 - 2013 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: http://chartjs.devexpress.com/EULA
*/
"use strict";DevExpress.MOD_TMP_WIDGETS_FOR_EXPORTER||(function(n,t){var u=t.ui,b=t.utils,r=u.events,s="<div />",h="<ul />",c=50,l=r.addNamespace("dxclick","dxMenu"),a=r.addNamespace("mouseenter","dxMenu"),v=r.addNamespace("mouseleave","dxMenu"),k=r.addNamespace("dxpointerdown","dxMenu"),f=r.addNamespace("mousemove","dxMenu"),y="dx-menu-item-items-over",e="dx-menu-item-hovered",o="dx-menu-item-highlight",p="dx-menu-item-disabled",w=t.Class.inherit({_addItems:function(t){var i=this;n.each(t.items,function(n,t){var r=new w(t,i);i._items.push(r)})},_createOverlay:function(n,i,r,u){var f=this;return n.dxOverlay({targetContainer:i,closeOnOutsideClick:!0,position:{offset:u?f._verticalExpandDirection==="bottom"?"0 -1":"0 1":"1 -2",my:t.inverseAlign(f._horizontalExpandDirection)+" "+t.inverseAlign(f._verticalExpandDirection),at:u?t.inverseAlign(f._horizontalExpandDirection)+" "+f._verticalExpandDirection:f._horizontalExpandDirection+" "+t.inverseAlign(f._verticalExpandDirection),of:r,collision:"flip"},showTitle:!1,width:"auto",height:"auto",shading:!1,deferRendering:!1,animation:{show:{type:"fade",from:0,to:1,duration:c},hide:{type:"fade",from:1,to:0,delay:0,duration:0}},positionedAction:function(n){var i=f._parent._horizontalExpandDirection||f._horizontalExpandDirection;f._horizontalExpandDirection=n.position.h.flip?t.inverseAlign(i):i},showingAction:function(){u&&f._overlay.content().css("min-width",f._$item.outerWidth()),f._$item.addClass(e)},shownAction:function(n){var t=n.component.content().children();f._$item.offset().top>f._overlay.content().offset().top&&f._$item.addClass(y)},hiddenAction:function(){f._$item.removeClass(e).removeClass(y)}}).dxOverlay("instance")},_drawItem:function(){var i=this,f="<span />",r=n(s).addClass("dx-menu-item"),u,e,o;return(i.options.imageUrl||i.options.imageCSS)&&(u=n(f).addClass("dx-menu-image"),i.options.imageUrl&&u.append('<img src="'+i.options.imageUrl+'" />'),i.options.imageCSS&&u.addClass(i.options.imageCSS),r.append(u)),i.options.disabled&&r.addClass(p),e=n(f).addClass("dx-menu-caption").text(i.options.caption),r.append(e),i._items.length&&(o=n(f).addClass("dx-menu-chouser-down"),r.append(o)),r},_draw:function(t,i){var r=this,f,e=n(s),o=n(h),u=n("<li />");e.append(o),f=r._drawItem(i),r._$item=f,r._$rootItem=u,u.append(f),u.data("dxMenuItem",r),t.append(u),r._items.length&&(u.append(e),r._overlay=r._createOverlay(e,u,f,i)),n.each(r._items,function(n,t){t._draw(r._overlay.content().children(),!1)})},_hideAllChildren:function(){n.each(this._items,function(){this._togglePopup(!1),this._hideAllChildren()})},_togglePopup:function(n){var i=this,r,u;!i.options.disabled&&i._overlay&&(i._visible||(i._hideAllChildren(),i._parent._visible&&(r=i._parent._horizontalExpandDirection==="right"?1:-1,u=i._parent._verticalExpandDirection==="bottom"?-2:2,i._overlay.option("position",{offset:r+" "+u,my:t.inverseAlign(i._parent._horizontalExpandDirection)+" "+t.inverseAlign(i._verticalExpandDirection),at:i._parent._horizontalExpandDirection+" "+t.inverseAlign(i._verticalExpandDirection)}))),i._overlay.toggle(n),i._visible=i._$item.hasClass(e))},_showPopupOnHoverStay:function(){function t(){Math.abs(n._pX-n._X)+Math.abs(n._pY-n._Y)<3?(n._togglePopup(!0),n._$rootItem.off(f)):n.compareTimer=setTimeout(function(){t()},c),n._pX=n._X,n._pY=n._Y}var n=this;n._$rootItem.on(f,function(t){n._X=t.pageX,n._Y=t.pageY});n.compareTimer=setTimeout(function(){t()})},toggleItemEnabledState:function(n){this.options.disabled=b.isDefined(n)?n:!this.options.disabled,this._$item.toggleClass(p,n)},ctor:function(n,t){var i=this;i.options=n||{},i.options.disabled=n.disabled||!1,i._items=[],i._parent=t,i._horizontalExpandDirection=n.horizontalExpandDirection||t._horizontalExpandDirection,i._verticalExpandDirection=n.verticalExpandDirection||t._verticalExpandDirection,n.items&&n.items.length&&i._addItems(n)}});u.registerComponent("dxMenu",u.Widget.inherit({_init:function(){var n=this.option(["items","name","verticalExpandDirection","horizontalExpandDirection"]);this._mainMenuItem=new w(n)},_defaultOptions:function(){return{verticalExpandDirection:"bottom",horizontalExpandDirection:"right",highlightActiveItem:!1,showPopupMode:"onhover",orientation:"horizontal"}},addItems:function(n){this._mainMenuItem._addItems(n),this._render()},_render:function(){var t=this,r=t.option("orientation")!=="vertical",i=n(h);r?i.addClass("dx-menu-horizontal"):i.addClass("dx-menu-vertical"),t._$element.addClass("dx-menu"),t._highlightActiveItem=t.option("highlightActiveItem"),t._clickAction=t._createActionByOption("itemClickAction");t._$element.off(".dxMenu").on(t._eventsPopup(),"li").on(t._eventsItem(),".dx-menu-item");t._$element.append(i),n.each(t._mainMenuItem._items,function(n,t){t._draw(i,r)}),t._highlightActiveItem&&(t._$highlightedElement=t._mainMenuItem._items[0]._items[0]._$item,t._$highlightedElement.addClass(o))},_eventsPopup:function(){var i=this.option("showPopupMode")||"",t={};switch(i.toLowerCase()){case"onclick":break;case"onhoverstay":t[a]=function(){var i=n(this).data("dxMenuItem");i._showPopupOnHoverStay()},t[v]=function(){var i=n(this).data("dxMenuItem");clearTimeout(i.compareTimer),i._$rootItem.off(f),i._togglePopup(!1)};break;default:t[a]=function(){var i=n(this).data("dxMenuItem");i._togglePopup(!0)},t[v]=function(){var i=n(this).data("dxMenuItem");i._togglePopup(!1)}}return t[k]=function(n){n.stopPropagation()},t[l]=function(t){var i=n(this).data("dxMenuItem");i._$item[0].contains(t.target)&&(i._overlay&&!i._overlay.option("visible")&&i._parent._hideAllChildren(),i._togglePopup())},t},_eventsItem:function(){var i={},t=this;return i[l]=function(){var r=n(this.parentElement).data("dxMenuItem");!r||r.options.disabled||r._items.length||(t._highlightActiveItem&&(t._$highlightedElement.removeClass(o),t._$highlightedElement=r._$item,t._$highlightedElement.addClass(o)),t._clickAction({item:r,itemElement:r._$item}),t._mainMenuItem._hideAllChildren())},i}}))}(jQuery,DevExpress),function(n,t,i){var f=t.ui,o=t.utils,u=f.events,r="dx-overlay",h=r+"-wrapper",c=r+"-content",e=r+"-shader",l=r+"-modal",a=500,s=["showingAction","shownAction","hidingAction","hiddenAction","positioningAction","positionedAction"],v=1e3;f.registerComponent("dxOverlay",f.ContainerWidget.inherit({_defaultOptions:function(){return n.extend(this.callBase(),{activeStateEnabled:!1,visible:!1,shading:!0,closeOnOutsideClick:!1,closeOnTargetScroll:!1,position:{my:"center",at:"center",of:window},animation:{show:{type:"pop",duration:400},hide:{type:"pop",duration:400,to:{opacity:0,scale:0},from:{opacity:1,scale:1}}},showingAction:null,shownAction:null,hidingAction:null,hiddenAction:null,width:function(){return n(window).width()*.8},height:function(){return n(window).height()*.8},deferRendering:!0,disabled:!1,targetContainer:i,positioningAction:null,positionedAction:null})},_wrapper:function(){return this._$wrapper},_clickEventContainer:function(){return this._$wrapper},_init:function(){this.callBase(),this._actions={},this._deferredAnimate=i,this._attachCloseOnOutsideClickHandler(),this._windowResizeCallback=n.proxy(this._refresh,this),o.windowResizeCallbacks.add(this._windowResizeCallback),this._$wrapper=n("<div>").addClass(h)},_initOptions:function(n){this._setTargetContainer(n.targetContainer),this._setPositionOf(this._$targetContainer),this._backButtonHandler=n.backButtonHandler===i?this._defaultBackButtonHandler:this.backButtonHandler,this.callBase(n)},_setTargetContainer:function(r){r=r===i?t.overlayTargetContainer():r;var f=this._element(),u=f.closest(r);u.length||(u=n(r).first()),this._$targetContainer=u.length?u:f.parent()},_setPositionOf:function(n){this.option("position.of",n)},_closeOnOutsideClickHandler:function(t){var i=this.option("closeOnOutsideClick"),u=this.option("visible");if(n.isFunction(i)&&(i=i(t)),i&&u){var r=this._$container,f=!r.is(t.target)&&!n.contains(r.get(0),t.target),e=Math.abs(t.timeStamp-this._showTimestamp)<a;f&&!e&&this.hide()}},_attachCloseOnOutsideClickHandler:function(){var t=this,i=u.addNamespace("dxpointerdown",t.NAME);this._myCloseOnOutsideClickHandler=function(){return t._closeOnOutsideClickHandler.apply(t,arguments)};n(document).on(i,this._myCloseOnOutsideClickHandler)},_detachCloseOnOutsideClickHandler:function(){var t=u.addNamespace("dxpointerdown",this.NAME);n(document).off(t,this._myCloseOnOutsideClickHandler)},_render:function(){var t=this.option("deferRendering");this._$container=n("<div>").addClass(c),this._needRenderOnShow=this.option("visible")||!t,this.callBase(),this._renderActions(),this._renderStyles(),this._needRenderOnShow=t,this._element().addClass(r)},_renderStyles:function(){this._renderShader(),this._renderModalState(),this._renderDimensions(),this._renderVisibility()},_renderShader:function(){this._$wrapper.toggleClass(e,this.option("shading"))},_renderModalState:function(){this._$wrapper.toggleClass(l,this.option("shading")&&!this.option("targetContainer"))},_renderDimensions:function(){this._$container.width(this.option("width")).height(this.option("height"))},_renderVisibility:function(){var n=this.option("visible");t.fx.stop(this._$container,!0),n&&(this._renderContent(),this._renderPosition()),this._toggleVisibility(n)},_renderActions:function(){var t=this;n.each(s,function(n,i){t._actions[i]=t._createActionByOption(i)})},_renderContent:function(){this._needRenderOnShow&&(this._moveFromTargetContainer(),this.callBase())},_moveFromTargetContainer:function(){this._$container.appendTo(this._element())},_renderContentImpl:function(n){this._renderInnerContent(n),this._moveToTargetContainer(),this._needRenderOnShow=!1},_renderInnerContent:function(n){var t=this._element();this._$container.append(t.contents()).appendTo(t),(n||this._templates.template).render(this.content())},_moveToTargetContainer:function(){var n=this._element();!this._$targetContainer||this._$targetContainer[0]===n.parent()[0]?this._$wrapper.appendTo(n):this._$wrapper.appendTo(this._$targetContainer),this._$container.appendTo(this._$wrapper)},_renderPosition:function(){var i=this._$wrapper.show(),n;this.option("shading")&&(t.position(i,{my:"top left",at:"top left",of:this._$targetContainer}),i.css({width:this._$targetContainer.outerWidth(),height:this._$targetContainer.outerHeight()})),this._$container.css("transform","none"),n=t.calculatePosition(this._$container,this.option("position")),this._actions.positioningAction({position:n}),this._actions.positionedAction({position:t.position(this._$container,n)})},_subscribeParentScroll:function(){if(this.option("position")){var n=this,t=n.option("closeOnTargetScroll"),i=n.option("position").of;if(t)i.parents().on(u.addNamespace("scroll",n.NAME),function(t){t.overlayProcessed||(t.overlayProcessed=!0,n.hide())})}},_unsubscribeParentScroll:function(){if(this.option("position")){var n=this,t=n.option("closeOnTargetScroll"),i=n.option("position").of;t&&i.parents().off(u.addNamespace("scroll",n.NAME))}},_refresh:function(){this._renderStyles()},_dispose:function(){t.fx.stop(this._$container),o.windowResizeCallbacks.remove(this._windowResizeCallback),this.closeCallback&&t.backButtonCallback.remove(this.closeCallback),this._detachCloseOnOutsideClickHandler(),this._actions=null,this.callBase(),this._$wrapper.remove()},_renderVisibilityAnimate:function(){var i=this.option("visible");i&&(this._showTimestamp=n.now()),t.fx.stop(this._$container,!0),i?this._makeVisible():this._makeHidden()},_makeVisible:function(){var t=this,i=t.option("animation")||{},r;this._$wrapper.css("z-index",++v),this._actions.showingAction(),this._toggleVisibility(!0),this._renderContent(),this._renderPosition(),t._subscribeParentScroll(),i.show?(r=i.show.complete||n.noop,t._animate(n.extend({},i.show,{complete:function(){r(),t._notifyShowComplete()}}))):t._notifyShowComplete()},_notifyShowComplete:function(){this._actions.shownAction(),this._deferredAnimate&&this._deferredAnimate.resolveWith(this)},_makeHidden:function(){var t=this,i=this.option("animation")||{},r;t._actions.hidingAction(),this._$wrapper.toggleClass(e,!1),t._unsubscribeParentScroll(),i.hide?(r=i.hide.complete||n.noop,t._animate(n.extend({},i.hide,{complete:function(){t._toggleVisibility(!1),r(),t._notifyHideComplete()}}))):(t._toggleVisibility(!1),t._notifyHideComplete())},_notifyHideComplete:function(){this._actions.hiddenAction(),this._deferredAnimate&&this._deferredAnimate.resolveWith(this)},_animate:function(i){n.isPlainObject(i)&&t.fx.animate(this._$container,i)},_toggleVisibility:function(n){this._$wrapper.toggle(n),this._$wrapper.toggleClass(e,this.option("shading")&&n)},_defaultBackButtonHandler:function(){this.hide()},_toggleBackButtonCallback:function(){this._backButtonHandler&&(this.option("visible")?(this.closeCallback=n.proxy(this._backButtonHandler,this),t.backButtonCallback.add(this.closeCallback)):this.closeCallback&&t.backButtonCallback.remove(this.closeCallback))},_optionChanged:function(t,i){if(n.inArray(t,s)>-1){this._renderActions();return}switch(t){case"position":this.option("visible")&&this._renderPosition();break;case"visible":this._toggleBackButtonCallback(),this._renderVisibilityAnimate();break;case"targetContainer":this._setTargetContainer(i),this._moveToTargetContainer(),this._refresh();break;case"closeOnOutsideClick":break;default:this.callBase.apply(this,arguments)}},toggle:function(t){return(t=t===i?!this.option("visible"):t,t===this.option("visible"))?n.Deferred().resolve().promise():(this._deferredAnimate=n.Deferred(),this.option("visible",t),this._deferredAnimate.promise())},show:function(){return this.toggle(!0)},hide:function(){return this.toggle(!1)},content:function(){return this._$container},repaint:function(){this._renderDimensions(),this._renderPosition()}}))}(jQuery,DevExpress),DevExpress.MOD_TMP_WIDGETS_FOR_EXPORTER=!0);DevExpress.MOD_TMP_EXPORTER||(function(n,t){var i=n.ui,s=n.utils,r="file",h="body",e="dx-exporter-icon-to",o="dx-exporter-icon-print",c="dx-non-printable",l="dx-printable",u=["PDF","PNG","SVG"],f=i.Component.inherit({_updateSvGForIE:function(n){var i=/xmlns="[\s\S]*?"/gi,t=!0;return n=n.replace(i,function(n){var i="";return t&&(i=n,t=!1),i}),n.replace(/xmlns:NS1="[\s\S]*?"/gi,"").replace(/NS1:xmlns:xlink="([\s\S]*?)"/gi,'xmlns:xlink="$1"')},_getSvgElements:function(){var n=this,i=[];return t(t(n.option("sourceContainerId"))).find("svg").each(function(r){i[r]=n._updateSvGForIE(t(this).clone().wrap("<div><\/div>").parent().html())}),JSON.stringify(i)},_appendTextArea:function(n,i,r){t("<textarea/>",{id:n,name:n,val:i}).appendTo(r)},_formSubmit:function(n){n.submit(),n.remove()},_defaultOptions:function(){return{menuAlign:"right",exportFormat:u,printingEnabled:!0,fileName:r}},_createWindow:function(){return window.open("","printDiv","")},_createExportItems:function(n){var i=this;return t.map(n,function(n){return(n=n.toUpperCase(),t(t(i.option("sourceContainerId"))).find("svg").length>1&&n==="SVG")?null:t.inArray(n.toUpperCase(),u)===-1?null:{name:n,caption:n+" "+r}})},_render:function(){var n=this,u=n.option("fileName"),f=n._createExportItems(n.option("exportFormat")),i=t("<div />"),r=[{name:"export",imageCSS:e,items:f}],s={align:n.option("menuAlign"),items:r,itemClickAction:function(t){switch(t.item.options.name){case"print":n.print();break;default:n.exportTo(u,t.item.options.name)}}};n.option("printingEnabled")&&r.push({imageCSS:o,name:"print",click:function(){n.print()}}),i.dxMenu(s),n._$element.append(i)},print:function(){var i=t(this.option("sourceContainerId")).html(),n=this._createWindow();t(n.document.body).html(i),n.document.close(),n.focus(),n.print(),n.close()},exportTo:function(n,i){var r=this,f=t(r.option("sourceContainerId")),u=t("<form/>",{method:"POST",action:r.option("serverUrl"),enctype:"application/x-www-form-urlencoded",target:"_self",css:{display:"none",visibility:"hidden"}});r._appendTextArea("exportContent",f.clone().wrap("<div><\/div>").parent().html(),u),r._appendTextArea("svgElements",r._getSvgElements(),u),r._appendTextArea("fileName",n,u),r._appendTextArea("format",i.toLowerCase(),u),r._appendTextArea("width",f.width(),u),r._appendTextArea("height",f.height(),u),r._appendTextArea("url",window.location.host,u),t(document.body).append(u),r._formSubmit(u)}});t.extend(!0,n,{exporter:{Exporter:f}}),i.registerComponent("dxExporter",f)}(DevExpress,jQuery),DevExpress.MOD_TMP_EXPORTER=!0);