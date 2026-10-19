// ==UserScript==
// @name         Yahoo Test Script
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Says hello or goodbye on Yahoo
// @match        https://*.yahoo.com/*
// @match        https://yahoo.com/*
// @run-at       document-end
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/SilvanPierce/Alro/main/yahoo-test.user.js
// @updateURL    https://raw.githubusercontent.com/SilvanPierce/Alro/main/yahoo-test.user.js
// ==/UserScript==

(function() {
    'use strict';
    
    // Create a big floating banner at the top center
    const banner = document.createElement('div');
    banner.innerHTML = "👋 Hello World!!!!!!!!!!!!! (Version 1.0.0)";
    banner.style.position = 'fixed';
    banner.style.top = '20px';
    banner.style.left = '50%';
    banner.style.transform = 'translateX(-50%)';
    banner.style.zIndex = '999999';
    banner.style.backgroundColor = '#ff4757'; // Bright red
    banner.style.color = 'white';
    banner.style.padding = '15px 30px';
    banner.style.fontSize = '20px';
    banner.style.fontWeight = 'bold';
    banner.style.borderRadius = '8px';
    banner.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    banner.style.fontFamily = 'Arial, sans-serif';
    
    document.body.appendChild(banner);
})();
