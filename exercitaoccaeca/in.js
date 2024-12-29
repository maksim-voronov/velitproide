let adder = {
    total: 0,
    add: function(number) {
        this.total += number;
    }
};

adder.add(1);
console.log(adder.total);  // Output: 1
