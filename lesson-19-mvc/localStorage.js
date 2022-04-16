'use strict';

function TLocalStorage(name) {
    var self = this,
        pHash = {};
    self.reset = function () {
        pHash = JSON.parse(window.localStorage.getItem(name));
        return pHash;
    };
    self.addValue = function (key, value) {
        pHash[key] = value;
        window.localStorage.setItem(name, JSON.stringify(pHash));
    };
    self.getValue = function (key) {
        return pHash[key];
    };
    self.deleteValue = function (key) {
        delete pHash[key];
        window.localStorage.setItem(name, JSON.stringify(pHash));
    };
    self.getKeys = function () {
        return (Object.keys(pHash));
    };
}


