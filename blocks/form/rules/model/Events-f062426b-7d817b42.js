/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.

* Adobe permits you to use and modify this file solely in accordance with
* the terms of the Adobe license agreement accompanying it.
*************************************************************************/

const e=Object.freeze({PATTERN_MISMATCH:"patternMismatch",TOO_SHORT:"tooShort",TOO_LONG:"tooLong",RANGE_OVERFLOW:"rangeOverflow",RANGE_UNDERFLOW:"rangeUnderflow",TYPE_MISMATCH:"typeMismatch",VALUE_MISSING:"valueMissing",STEP_MISMATCH:"stepMismatch",FORMAT_MISMATCH:"formatMismatch",ACCEPT_MISMATCH:"acceptMismatch",FILE_SIZE_MISMATCH:"fileSizeMismatch",UNIQUE_ITEMS_MISMATCH:"uniqueItemsMismatch",MIN_ITEMS_MISMATCH:"minItemsMismatch",MAX_ITEMS_MISMATCH:"maxItemsMismatch",EXPRESSION_MISMATCH:"expressionMismatch",EXCLUSIVE_MAXIMUM_MISMATCH:"exclusiveMaximumMismatch",EXCLUSIVE_MINIMUM_MISMATCH:"exclusiveMinimumMismatch"}),s=Object.freeze({pattern:e.PATTERN_MISMATCH,minLength:e.TOO_SHORT,maxLength:e.TOO_LONG,maximum:e.RANGE_OVERFLOW,minimum:e.RANGE_UNDERFLOW,type:e.TYPE_MISMATCH,required:e.VALUE_MISSING,step:e.STEP_MISMATCH,format:e.FORMAT_MISMATCH,accept:e.ACCEPT_MISMATCH,maxFileSize:e.FILE_SIZE_MISMATCH,uniqueItems:e.UNIQUE_ITEMS_MISMATCH,minItems:e.MIN_ITEMS_MISMATCH,maxItems:e.MAX_ITEMS_MISMATCH,validationExpression:e.EXPRESSION_MISMATCH,exclusiveMinimum:e.EXCLUSIVE_MINIMUM_MISMATCH,exclusiveMaximum:e.EXCLUSIVE_MAXIMUM_MISMATCH}),t=Object.freeze({[e.PATTERN_MISMATCH]:"Please match the format requested.",[e.TOO_SHORT]:"Please lengthen this text to ${0} characters or more.",[e.TOO_LONG]:"Please shorten this text to ${0} characters or less.",[e.RANGE_OVERFLOW]:"Value must be less than or equal to ${0}.",[e.RANGE_UNDERFLOW]:"Value must be greater than or equal to ${0}.",[e.TYPE_MISMATCH]:"Please enter a valid value.",[e.VALUE_MISSING]:"Please fill in this field.",[e.STEP_MISMATCH]:"Please enter a valid value.",[e.FORMAT_MISMATCH]:"Specify the value in allowed format : ${0}.",[e.ACCEPT_MISMATCH]:"The specified file type not supported.",[e.FILE_SIZE_MISMATCH]:"File too large. Reduce size and try again.",[e.UNIQUE_ITEMS_MISMATCH]:"All the items must be unique.",[e.MIN_ITEMS_MISMATCH]:"Specify a number of items equal to or greater than ${0}.",[e.MAX_ITEMS_MISMATCH]:"Specify a number of items equal to or less than ${0}.",[e.EXPRESSION_MISMATCH]:"Please enter a valid value.",[e.EXCLUSIVE_MINIMUM_MISMATCH]:"Value must be greater than ${0}.",[e.EXCLUSIVE_MAXIMUM_MISMATCH]:"Value must be less than ${0}."});let a={};const r=()=>({...t,...a});var c,n,i;!function(e){e.CODE="code",e.UI="ui"}(c||(c={}));class o{fieldName;errorMessages;constructor(e="",s=[]){this.errorMessages=s,this.fieldName=e}}!function(e){e.NEXT_ITEM="nextItem",e.PREVIOUS_ITEM="previousItem"}(n||(n={})),function(e){e.INVISIBLE="invisible",e.VISIBLE="visible"}(i||(i={}));class M{_metadata;_type;_payload;_target;_currentTarget;constructor(e,s,t){this._metadata=t,this._payload=e,this._type=s}get type(){return this._type}get payload(){return this._payload}get metadata(){return this._metadata}get target(){return this._target}get currentTarget(){return this._currentTarget}get isCustomEvent(){return!1}payloadToJson(){return this.payload}toJson(){return{payload:this.payloadToJson(),type:this.type,isCustomEvent:this.isCustomEvent}}toString(){return JSON.stringify(this.toJson())}}class u extends M{constructor(e,s=!1){super(e,"change",{dispatch:s})}withAdditionalChange(e){return new u(this.payload.changes.concat(e.payload.changes),this.metadata)}}class l extends M{constructor(e,s=!1){super(e,"uiChange",{dispatch:s})}}class I extends M{constructor(e={}){super(e,"invalid",{})}}class S extends M{constructor(e={}){super(e,"valid",{})}}class d extends M{constructor(e={},s=!1){super(e,"executeRule",{dispatch:s})}}const _=(e,s,t)=>new u({changes:[{propertyName:e,currentValue:s,prevValue:t}]});class T extends M{constructor(e,s=!1){super(e,"initialize",{dispatch:s})}}class m extends M{constructor(){super({},"load",{dispatch:!1})}}class p extends M{constructor(e,s=!1){super(e,"click",{dispatch:s})}}class E extends M{constructor(e,s=!1){super(e,"blur",{dispatch:s})}}class h extends M{constructor(e,s=!1){super(e,"validationComplete",{dispatch:s})}}class A extends M{constructor(){super({},"focus",{dispatch:!1})}}class C extends M{constructor(e,s=!1){super(e,"submit",{dispatch:s})}}class x extends M{constructor(e,s=!1){super(e,"save",{dispatch:s})}}class O extends M{constructor(e,s=!1){super(e,"submitSuccess",{dispatch:s})}}class H extends M{constructor(e,s=!1){super(e,"submitFailure",{dispatch:s})}}class g extends M{constructor(e,s=!1){super(e,"submitError",{dispatch:s})}}class N extends M{constructor(e,s=!1){super(e,"reset",{dispatch:s})}}class v extends M{constructor(e,s,t=c.CODE){super({field:s,changes:e,eventSource:t},"fieldChanged")}}class f extends M{constructor(e,s={},t=!1){super(s,e,{dispatch:t})}get isCustomEvent(){return!0}}class R extends M{constructor(e){super(e,"addItem")}}class U extends M{constructor(e){super(e,"removeItem")}}class L extends M{constructor(e){super(e,"addInstance")}}class y extends M{constructor(e){super(e,"removeInstance")}}export{L as A,E as B,u as C,c as E,m as F,T as I,U as R,O as S,l as U,h as V,d as a,n as b,v as c,s as d,S as e,I as f,r as g,o as h,f as i,g as j,H as k,i as l,C as m,x as n,N as o,_ as p,y as q,R as r,p as s,A as t};
