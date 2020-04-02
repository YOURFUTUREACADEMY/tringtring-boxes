const appLink = document.querySelectorAll('.application');

function getAppLink(type) {
    for (i = 0; i < appLink.length; i++) {
        switch (type) {
            case 'apple':
                appLink[i].href = 'https://apps.apple.com/app/id1505493471';
                break;
            case 'android':
                appLink[i].href = 'https://play.google.com/store/apps/details?id=nl.tringtring.bestellen.foodmarketamsterdam';
            case 'iOS':
                appLink[i].href = 'https://apps.apple.com/app/id1505493471';
                break;
            default:
                appLink[i].href = '#downloadApp';
                break;
        }

    }
}