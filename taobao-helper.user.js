// ==UserScript==
// @name                淘寶助手
// @name:en-US          Taobao Helper
// @namespace           http://tbhtk.ru
// @version             0.1
// @license             MIT
// @description         【淘寶搜尋頁】1. 雙11顯示「店鋪紅包」圖示 2. 顯示所有雙11圖示
// @icon                https://www.tbhtk.ru/static/favicon.png
// @icon64              https://www.tbhtk.ru/static/favicon.png
// @author              熊之淘寶谷
// @homepage            http://tbhtk.ru

// @match               https://s.taobao.com/search?*
// @match               http://s.taobao.com/search?*

// @run-at              document-start
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_addStyle
// ==/UserScript==

/*=================
 * Settings
 *=================*/
var is_show_shop_pocket = true; // 顯示「店鋪紅包」圖示
var is_show_all_1111_labels = true; // 顯示所有雙11圖示

/*=================
 * Main
 *=================*/
(function() {
  "use strict";

  if (is_show_shop_pocket) {
    GM_addStyle(
      ".icon-fest-2017taobaodianpuhong { background: url(https://img.alicdn.com/tfs/TB1D5hoab_I8KJjy1XaXXbsxpXa-407-396.png);   background-repeat: no-repeat; display: inline-block; background-position: -147px -304px;  width: 75px;  height: 16px; }"
    );
  }
  
  if (is_show_all_1111_labels) {
    // .item-ctx-hover
    GM_addStyle(".m-itemlist .grid .item { height: 374px !important }");
    GM_addStyle(
      ".response-narrow  .m-itemlist .grid .item { height: 334px !important}"
    );
    GM_addStyle(
      ".m-itemlist .grid .row-4 { margin-top: 1px !important; margin-bottom: 20px;}"
    );
    // GM_addStyle('.m-itemlist .grid .row-4, .m-itemlist .icon-has-more { overflow: visible !important}');
    GM_addStyle(".m-itemlist .grid .icon { margin-top: 0px !important; }");
  }
})();