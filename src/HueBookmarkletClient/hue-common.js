//@ts-check

import { get, put, post } from '../common'

function hueget(url, body, handler = requestHandler) {
    get(getHueUrl(url), body, handler)
}

function hueput(url, body, handler = requestHandler) {
    put(getHueUrl(url), body, handler)
}

function huepost(url, body, handler = requestHandler) {
    post(getHueUrl(url), body, handler)
}

function requestHandler() {
    console.log(this.responseText);
    setTimeout(() => blink(), 1000);
};

function blink(blinkDuration = 500, brightness = 50) {
    put(getHueUrl('lights/1/state'), {
        bri_inc: brightness
    });

    setTimeout(() => {
        put(getHueUrl('lights/1/state'), {
            bri_inc: -brightness
        });
    }, blinkDuration);
};

function getHueUrl(url) {
    return new URL(url, 'http://10.0.0.2/api/OiFgV2o2VubQDduqRzpOYrSX7XIEDdMm-WBaJhND/').href;
}

export { blink, getHueUrl, hueget, hueput, huepost };