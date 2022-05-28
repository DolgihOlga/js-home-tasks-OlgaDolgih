'use strict';
var ajaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
var password;

function TAJAXStorage(name) {
    this.name = name;
    this.storage = {};
    this.getInfo();
}

TAJAXStorage.prototype.getInfo = function () {
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: {f: 'READ', n: 'DOLGIH'},
        success: readReady,
        error: errorHandler
    });

    function readReady(data) {
        if (data.error !== undefined) {
            alert(data.error);
        } else if (data.result !== "") {// либо строка пустая - сообщений нет
            this.storage = JSON.parse(data.result);
        }
    }
};

TAJAXStorage.prototype.sendInfo = function (hash) {
    password = Math.random();
    $.ajax({
        url: ajaxHandlerScript,
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: {f: 'LOCKGET', n: 'DOLGIH', p: password},
        success: lockGetReady,
        error: errorHandler
    });

    function lockGetReady() {
        $.ajax({
                url: ajaxHandlerScript,
                type: "POST",
                cache: false,
                dataType: "json",
                data: {f: 'UPDATE', n: 'DOLGIH', p: password, v: JSON.stringify(hash)},
                success: updateReady,
                error: errorHandler
            }
        );

        function updateReady(data) {
            if (data.error !== undefined)
                alert(data.error);
        }
    }
};

TAJAXStorage.prototype.addValue = function (key, value) {
    this.storage[key] = value;
    this.sendInfo(this.storage);
};

TAJAXStorage.prototype.getValue = function (key) {
    return this.storage[key];
};

TAJAXStorage.prototype.deleteValue = function (key) {
    if (this.storage[key]) {
        delete this.storage[key];
        this.sendInfo(this.storage);
        return true;
    } else {
        return false;
    }
};

TAJAXStorage.prototype.getKeys = function () {
    this.sendInfo(this.storage);
    return Object.keys(this.storage);
};

function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}

