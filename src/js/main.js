/* kifixer - Chrome extension to make using Kijiji less painful
https://github.com/snacsnoc/kifixer

*/

if (document.getElementsByClassName('top-feature-top-bar')[0] != undefined) {
    document.getElementsByClassName('top-feature-top-bar')[0].
    style.display = 'none';

}

//Remove purchase top ad ad
if (document.getElementsByClassName('utility-row')[0] != undefined) {
    document.getElementsByClassName('utility-row')[0].
    style.display = 'none';

}

//Remove third party (ebay, wayfair) ads
const third_party = document.getElementsByClassName('third-party');

for (const abox of third_party) {
    abox.style.display = 'none';
}

//Remove showcase ads
const showcase = Array.from(document.getElementsByClassName('showcase'));

for (const bbox of showcase) {
    bbox.style.display = 'none';
}

//Remove car dealer options
const covid = Array.from(document.getElementsByClassName('covid-response'));

for (const cbox of covid) {
    cbox.style.display = 'none';
}

//Remove top featured ads
const topfeature = Array.from(document.getElementsByClassName('top-feature'));

for (const dbox of topfeature) {
    dbox.style.display = 'none';
}

//Remove top sticky Google ads banner
const sticky = Array.from(document.getElementsByClassName('sticky'));

for (const dbox of sticky) {
    dbox.style.display = 'none';
}

//Remove below search query Google ads banner
const stickyleaderboard = document.getElementById("StickyLeaderboard");
if (stickyleaderboard != null) {
  stickyleaderboard.style.display = 'none';
}

//Remove above search results Google ads banner
const adblock = document.getElementById("AFSTop");
if (adblock != null) {
  adblock.style.display = 'none';
}

//Remove below search results Google ads banner
const adblock_b = document.getElementById("AFSBottom");
if (adblock_b != null) {
  adblock_b.style.display = 'none';
}

//Remove below search results Google ads banner
const skyscraper = document.getElementById("SkyscraperSRP");
if (skyscraper != null) {
  skyscraper.style.display = 'none';
}

//Remove Featured ad banner, displayed between posts
const admarktTopSpot = document.querySelector('[data-fes-id="admarktTopSpot"]');
if (admarktTopSpot != null) {
  admarktTopSpot.style.display = 'none';
}

//Remove bottom Google ads banner
const myswrapper = document.querySelector('#BaseLeaderboard');
if (myswrapper != null) {
  myswrapper.style.display = 'none';
}
