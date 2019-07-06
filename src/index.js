module.exports = function check(str, bracketsConfig) {
    // your solution
    var stack = [];

    for (var chr of str) {

        var pushed = false;

        for (var pair of bracketsConfig) {
            if (chr === pair[0]) {
                stack.push(pair[1]);
                pushed = true;
                break;
            }
        }

        if (!pushed && (stack.length === 0 || stack.pop() !== chr)) {
            return false;
        }
    }

    return stack.length === 0;
};
