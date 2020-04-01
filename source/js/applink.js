const appLink = document.querySelectorAll(".application");

function getAppLink(type) {
    for (i = 0; i < appLink.length; i++) {
        if (type == "apple") {
            appLink[i].href = "https://apps.apple.com/app/id1505493471";
        }
        if (type == "android") {
            appLink[i].href = "https://play.google.com";
        }
    }
}