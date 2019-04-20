javascript:

function main() {
    request('PUT', 'http://10.0.0.2/api/OiFgV2o2VubQDduqRzpOYrSX7XIEDdMm-WBaJhND/groups/0/action',
        JSON.stringify({ on: false }), requestHandler);
}

function requestHandler() {
    if (this.status === 200) {
        console.log(this.responseText);
        blink();
    }
};

function request(method, url, body, onload) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = onload;

    if (body === undefined) {
        xhr.send();
    } else {
        xhr.send(body);
    }
}

function blink(brightness = 50, duration = 500) {
    request('PUT', 'http://10.0.0.2/api/OiFgV2o2VubQDduqRzpOYrSX7XIEDdMm-WBaJhND/lights/1/state', JSON.stringify({ bri_inc: brightness }));
    setTimeout(function () {
        request('PUT', 'http://10.0.0.2/api/OiFgV2o2VubQDduqRzpOYrSX7XIEDdMm-WBaJhND/lights/1/state', JSON.stringify({ bri_inc: -brightness }));
    }, duration);
};

main();