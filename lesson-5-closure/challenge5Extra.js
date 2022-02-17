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

var mark = {
    bills: [77, 375, 110, 45],
    calcTip: function () {
        this.tips = [];
        this.finalAmounts = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if (this.bills[i] < 100) {
                percentage = 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.finalAmounts[i] = this.bills[i] + this.bills[i] * percentage;
        }

    }
}

jhon.calcTip();
mark.calcTip();

console.log(jhon, mark);

function calcAverageTips(tips) {
    var sum = 0;
    for (var tip of tips) {
        sum += tip;
    }
    return sum / tips.length;
}

jhon.average = calcAverageTips(jhon.tips);
mark.average = calcAverageTips(mark.tips);

if (jhon.average > mark.average) {
    console.log("Jon`s family paid the highest tips");
} else {
    console.log("Mark`s family paid the highest tips");
}
