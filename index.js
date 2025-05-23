function hideAudioControls() {
    $("#audioControls").hide();
}

function showAudioControls() {
    $("#audioControls").show();
}

function showprojects(){
    const el = $("#projects_container");
    el.removeClass("animated slideInDown slideOutUp").css("display", "block");
    void el[0].offsetWidth;
    el.addClass("animated slideInDown");
    hideAudioControls();
    setTimeout(() => {
        el.removeClass("animated slideInDown");
    }, 800);
}

function closeprojects(){
    const el = $("#projects_container");
    el.removeClass("animated slideInDown slideOutUp");
    el.addClass("animated slideOutUp");
    setTimeout(() => {
        el.removeClass("animated slideOutUp");
        el.css("display", "none");
        showAudioControls();
    }, 800);
}

function showabout(){
    const el = $("#about_container");
    el.removeClass("animated slideInLeft slideOutLeft").css("display", "block");
    void el[0].offsetWidth;
    el.addClass("animated slideInLeft");
    hideAudioControls();
    setTimeout(() => {
        el.removeClass("animated slideInLeft");
    }, 800);
}

function closeabout(){
    const el = $("#about_container");
    el.removeClass("animated slideInLeft slideOutLeft");
    el.addClass("animated slideOutLeft");
    setTimeout(() => {
        el.removeClass("animated slideOutLeft");
        el.css("display", "none");
        showAudioControls();
    }, 800);
}

function showwork(){
    const el = $("#work_container");
    el.removeClass("animated slideInRight slideOutRight").css("display", "block");
    void el[0].offsetWidth;
    el.addClass("animated slideInRight");
    hideAudioControls();
    setTimeout(() => {
        el.removeClass("animated slideInRight");
    }, 800);
}

function closework(){
    const el = $("#work_container");
    el.removeClass("animated slideInRight slideOutRight");
    el.addClass("animated slideOutRight");
    setTimeout(() => {
        el.removeClass("animated slideOutRight");
        el.css("display", "none");
        showAudioControls();
    }, 800);
}

function showcontact(){
    const el = $("#contact_container");
    el.removeClass("animated slideInUp slideOutDown").css("display", "block");
    void el[0].offsetWidth;
    el.addClass("animated slideInUp");
    hideAudioControls();
    setTimeout(() => {
        el.removeClass("animated slideInUp");
    }, 800);
}

function closecontact(){
    const el = $("#contact_container");
    el.removeClass("animated slideInUp slideOutDown");
    el.addClass("animated slideOutDown");
    setTimeout(() => {
        el.removeClass("animated slideOutDown");
        el.css("display", "none");
        showAudioControls();
    }, 800);
}

setTimeout(() => {
    const loading = $("#loading");
    loading.addClass("animated fadeOut");
    setTimeout(() => {
        loading.removeClass("animated fadeOut");
        loading.css("display", "none");
        $("#box").css("display", "none");
        $("#projects").removeClass("animated fadeIn");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);
