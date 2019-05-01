//@ts-check

function get(url, body, handler) {
    request('GET', url, body, handler);
}

function put(url, body, handler) {
    request('PUT', url, body, handler);
}

function post(url, body, handler) {
    request('POST', url, body, handler);
}

function request(method, url, body, handler = defaultHandler) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handler;

    if (body === undefined) {
        xhr.send();
    } else {
        xhr.send(JSON.stringify(body));
    }
};

function defaultHandler() {
    console.log(this.responseText);
};

export { request, get, put, post };