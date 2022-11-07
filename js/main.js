

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
const showcase = document.getElementsByClassName('showcase');

for (const bbox of showcase) {
    bbox.style.display = 'none';
}

//Remove car dealer options
const covid = document.getElementsByClassName('covid-response');

for (const cbox of covid) {
    cbox.style.display = 'none';
}

//Remove top featured ads
const topfeature = document.getElementsByClassName('top-feature');

for (const dbox of topfeature) {
    dbox.style.display = 'none';
}