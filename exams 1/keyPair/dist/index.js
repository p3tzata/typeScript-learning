"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPair = void 0;
var KeyPair = /** @class */ (function () {
    function KeyPair() {
    }
    KeyPair.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.value = value;
    };
    KeyPair.prototype.getKeyValueAsText = function () {
        return "key: " + this.key + ", value: " + this.value;
    };
    return KeyPair;
}());
exports.KeyPair = KeyPair;
var keyValue = new KeyPair();
keyValue.setKeyValue(3, "tree");
console.log(keyValue.getKeyValueAsText());
//# sourceMappingURL=index.js.map