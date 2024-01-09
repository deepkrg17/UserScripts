// ==UserScript==
// @name         Open Subreddit
// @author       deepkrg17
// @source       https://github.com/deepkrg17/UserScripts/raw/main/openSubreddit.js
// @description  Redirect to reddit if searching a subreddit name
// @match        https://www.google.com/search?*
// @match        https://duckduckgo.com/?*
// @version      1.1
// @run-at       document-start
// ==/UserScript==

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q")

const subredditPat = /^r\/[A-Za-z0-9]\w{2,20}$/
const userPat = /^(u|user)\/[\w-]{3,20}$/

if (subredditPat.test(query) || userPat.test(query) ) {
    window.location.replace("https://www.reddit.com/" + query)
}
