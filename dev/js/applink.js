const appLink = document.querySelectorAll('.application');

function getAppLink(type) {
    for (i = 0; i < appLink.length; i++) {
        console.log(type);
        switch (type) {
            case 'apple':
                appLink[i].href = 'https://apps.apple.com/app/id1505493471';
                break;
            case 'android':
                appLink[i].href = 'https://play.google.com/store/apps/details?id=nl.tringtring.bestellen.foodmarketamsterdam';
                break;
            case 'iOS':
                appLink[i].href = 'https://apps.apple.com/app/id1505493471';
                break;
            default:
                appLink[i].href = '#downloadApp';
                break;
        }
    }
}