var GOOGLE_ADS_ID = 'AW-18425210766';

var GOOGLE_ADS_LABEL = '6VSICIzzvO0cEI7P6dFE';


var GOOGLE_ADS_SEND_TO = GOOGLE_ADS_ID + '/' + GOOGLE_ADS_LABEL;

function googleAdsPronto() {
    return typeof window.gtag === 'function' &&
           GOOGLE_ADS_SEND_TO.indexOf('X') === -1;
}

function gtag_report_conversion(url, elemento) {
    var novaAba = !!(elemento && elemento.target === '_blank');

    if (!googleAdsPronto()) {
        if (novaAba || typeof url === 'undefined') return true;
        window.location = url;
        return false;
    }

    var jaSeguiu = false;
    var seguirParaWhatsApp = function () {
        if (jaSeguiu) return;
        jaSeguiu = true;
        if (typeof url !== 'undefined') window.location = url;
    };

    if (novaAba) {
        window.gtag('event', 'conversion', {
            send_to: GOOGLE_ADS_SEND_TO
        });
        return true;
    }

    window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_SEND_TO,
        event_callback: seguirParaWhatsApp
    });

    setTimeout(seguirParaWhatsApp, 800);

    return false;
}
