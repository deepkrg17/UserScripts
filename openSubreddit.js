// ==UserScript==
// @name         Open Subreddit
// @author       deepkrg17
// @source       https://github.com/deepkrg17/UserScripts
// @description  Redirect to reddit if searching a subreddit name
// @match        https://www.google.com/search?*
// @match        https://duckduckgo.com/?*
// @version      1.0
// @run-at       document-start
// ==/UserScript==

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q")
const subreddit_pattern = /^r\/[a-z_]+$/i

if (subreddit_pattern.test(query)) {
    window.location.replace("https://www.reddit.com/" + query)
}
