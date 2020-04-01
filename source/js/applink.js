const appLink = document.querySelectorAll(".application");

function getAppLink(type) {
    for (i = 0; i < appLink.length; i++) {
        if (type == "apple") {
            appLink[i].href = "https://www.apple.com/ios/app-store/";
        }
        if (type == "android") {
            appLink[i].href = "https://play.google.com";
        }
    }
}