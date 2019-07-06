module.exports = function check(str, bracketsConfig) {
    // your solution
    var stack = [];

    for (var chr of str) {

        var pushed = false;

        for (var pair of bracketsConfig) {
            if (chr === pair[0]) {
                if (pair[0] === pair[1]) {
                    if (stack.length > 0 && stack[stack.length - 1] === chr) {
                        stack.pop();
                        pushed = true;
                    }
                    else {
                        stack.push(pair[1]);
                        pushed = true;
                        break;
                    }
                }
                else {
                    stack.push(pair[1]);
                    pushed = true;
                    break;
                }
            }
        }

        if (!pushed && (stack.length === 0 || stack.pop() !== chr)) {
            return false;
        }
    }

    return stack.length === 0;
};
