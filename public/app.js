var x = 1;

function something() {

    var x = window.localStorage.getItem('bbb')

    x = x * 1 + 1;
    window.localStorage.setItem('bbb', x);
    alert(x);
}

function add_to_cart(id) {
    var key = 'product_' + id;

    var x = window.localStorage.getItem(key);
    x = x * 1 + 1;
    window.localStorage.setItem(key, x);

    alert('Items in your cart: ' + cart_get_number_of_items());
}

function cart_get_number_of_items() {
    var cnt = 0;
    for (var i = 0; i < localStorage.length; i++) {
        var key = window.localStorage.key(i);           // получаем ключ
        var value = window.localStorage.getItem(key);   // получаем значение

        if (key.indexOf('product_') == 0) {
            cnt = cnt + value * 1
        }
    }

    return cnt;
}

function app_get_orders() {
    var orders = 0;
    for (var i = 0; i < localStorage.length; i++) {
        var key = window.localStorage.key(i);           // получаем ключ
        var value = window.localStorage.getItem(key);   // получаем значение

        if (key.indexOf('product_') == 0) {
            orders += key + '=' + value + ',';
        }
    }

    return orders;
}
