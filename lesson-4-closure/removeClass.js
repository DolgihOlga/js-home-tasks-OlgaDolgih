var obj = {
    className: 'my menu menu menu my',
};

function removeClass(obj, cls) {
    for (var key in obj) {
        obj[key] = obj[key].split(" ").filter(function (word) {
            return word !== cls;
        }).join(" ");
    }
}

removeClass(obj, "my");
console.log(obj.className);
console.log(obj);
