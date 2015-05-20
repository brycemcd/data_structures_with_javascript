// Q1

var List = function() {
    this.dataStore = [];

    this.add = function(ele) {
        var largestEle = this.dataStore.sort()[this.dataStore.length - 1];
        if(this.dataStore.length == 0 || ele > largestEle) {
            this.dataStore.push(ele);
            return true;
        } else {
            return false;
        }
    }
}

var numbers = new List();
numbers.add(2); // should work
numbers.add(4); // should work
numbers.add(1); // should fail

numbers.dataStore;

var letters = new List();
letters.add('b'); // should work
letters.add('c'); // should work
letters.add('a'); // should fail

letters.dataStore;
