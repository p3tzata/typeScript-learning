export class KeyPair<K, V> {

    key: K;
    value: V;

    setKeyValue(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKeyValueAsText(): string {

        return `key: ${this.key}, value: ${this.value}`;

    }


}


let keyValue = new KeyPair<number, string>();
keyValue.setKeyValue(3, "tree");
console.log(keyValue.getKeyValueAsText());
