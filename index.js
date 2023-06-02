const SH = $("#SH");
const intro = $("#intro");
const study = $("#study");
const hobby = $("#interest");

const introcover = $(".introduction")
const introduction = $(".introduction");
const studyContent = $('.study');
const hobbyContent = $(".interest");

const none = "none";
const show = "";

function displayHandler(SH, intro, study, hobby) {
    introcover.css("display", SH);
    introduction.css("display", intro);
    studyContent.css("display", study);
    hobbyContent.css("display", hobby);
}
SH.on("click", function() {
    displayHandler(show, show, none, none);
});

intro.on("click", function() {
    displayHandler(show, show, none, none);
});

study.on("click", function() {
    displayHandler(none, none, show, none);
});

hobby.on("click", function() {
    displayHandler(none, none, none, show);
});
