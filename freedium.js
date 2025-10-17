// ==UserScript==
// @name         Medium → Freedium Redirect
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Automatically redirect Medium articles to Freedium, allowing free access
// @author       deepkrg17
// @match        https://medium.com/*
// @match        https://*.medium.com/*
// @match        https://towardsdatascience.com/*
// @match        https://levelup.gitconnected.com/*
// @match        https://betterprogramming.pub/*
// @run-at       document-start
// @sandbox      DOM
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let currentURL = window.location.href;

    let btn = document.createElement("button");
    btn.innerHTML = "<span class='text'> Free </span>";
    let stl = btn.style;

    // CSS
    stl.alignItems = "center";
    stl.backgroundImage = "linear-gradient(135deg, #f34079 40%, #fc894d)";
    stl.borderRadius = "10px";
    stl.color = "#fff";
    stl.display = "flex";
    stl.fontSize = "16px";
    stl.fontWeight = 700;
    stl.height = "54px";
    stl.justifyContent = "center";
    stl.padding = "3px 20px 0 20px";
    stl.position = "fixed";
    stl.top = "40px";
    stl.right = 0;

    // Redirect to Freedium
    btn.onclick = function () {
        let newURL = "https://freedium.cfd/" + currentURL;
        window.location.replace(newURL);
    };

    document.body.appendChild(btn);
})();
