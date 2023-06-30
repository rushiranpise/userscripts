// ==UserScript==
// @name        All Popups Blocker and reCAPTCHA Solver
// @namespace   Violentmonkey Scripts
// @include     /^(https?:\/\/)(.+)?(shortzon|coinadfly|fc-lc)(\.com)(\/.*)/
// @include     /^(https?:\/\/)(.+)?(downfile|promo-visits)(\.site)(\/.*)/
// @include     /^(https?:\/\/)(1dogecoin|faucet)(\.work)(\/.*)/
// @match       *://*.filesearch.link/*
// @match       *://*.trangchu.news/*
// @match       *://*.ccshort.click/*
// @match       *://*.bitcoinly.in/*
// @match       *://*.cryptosh.pro/*
// @match       *://*.vshort.link/*
// @match       *://*.cashurl.in/*
// @match       *://*.cuturl.in/*
// @match       *://*.mitly.us/*
// @match       *://*.aii.sh/*
// @match       *://*.iir.ai/*
// @match       *://*/recaptcha/*
// @version     4.7
// @author      Blogger Pemula
// @run-at      document-start
// @license     GPL-3.0-or-later
// @grant       GM_xmlhttpRequest
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @require     https://greasyfork.org/scripts/444872-7-recaptcha-solver-backup/code/7_Recaptcha%20Solver%20(BackUp).user.js#bypass=true
// @description This Script will Block All Popups Sites in the Lists , and Auto Solving Google reCAPTCHA
// ==/UserScript==
/*jslint evil: true */

var blockonclick = new Function("console.log('Blocked By BloggerPemula')");

function BlockPopup(e){return 1;}
parent.open=BlockPopup; this.open=BlockPopup; window.open=BlockPopup; onload=BlockPopup;
window.open = function(){ return;};
onload = function(){ return;};
this.open = function(){ return;};
parent.open = function(){ return;};
unsafeWindow.open = function(){};
