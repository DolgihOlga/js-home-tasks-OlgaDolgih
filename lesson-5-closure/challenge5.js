var jhon = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tips = [];
        this.finalAmounts = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if (this.bills[i] < 50) {
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.finalAmounts[i] = this.bills[i] + this.bills[i] * percentage;
        }

    }
}
jhon.calcTip();
console.log(jhon);
