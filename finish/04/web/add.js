(function() {

    var message = "Moduł add.js";

    console.log(message);

    function add(n1, n2) {

        return n1 + n2;

    }

    window.add = add;

})();