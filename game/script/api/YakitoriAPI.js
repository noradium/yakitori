"use strict";
var YakitoriAPI = (function () {
    function YakitoriAPI() {
    }
    YakitoriAPI.post = function (data) {
        return fetch('http://localhost:3001/api/yakitori', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) { return response.json(); });
    };
    return YakitoriAPI;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = YakitoriAPI;
