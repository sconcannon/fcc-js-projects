// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
function checkCashRegister(price, cash, cid) {
    // the return object - will give register status and change breakdown
    var change = {};
    // total up the cash on hand
    function addChange(cashArr) {
        let total = 0;
        for (let x = 0; x < cashArr.length; x++) {
            total = total + cashArr[x][1];
        }
        return total;
    }

    function figureChange(cd, cid) {
        const values = [.01, .05, .1, .25, 1, 5, 10, 20, 100]; // cash value for each cid type/element
        let changeList = [];
        let bd = cd; // hold change due value 'balance due' - will decrement as denominations that satisfy change due are identified
        let pushValue; // build value to to push to change array
        let denDue;
        for (let den = 8; den >= 0; den--) { // 8 = index of last change drawer array element; den - denomination being checked, largest to smallest
            if (bd / values[den] >= 1) { // ie if we can make some fo the change with the denomination we are checking
                if (bd > cid[den][1]) { // if balance due exceeds total available in this denomination
                    denDue = cid[den][1];
                } else {
                    let changeFactor = bd / values[den];
                    changeFactor = Math.floor(changeFactor);
                    denDue = values[den] * changeFactor;
                    if (values[den] < 1) {
                        denDue = parseFloat(denDue.toFixed(2));
                    }
                }
                bd = bd - denDue;
                pushValue = cid[den];
                pushValue[1] = denDue;
                changeList.push(pushValue);
                bd = parseFloat(bd.toFixed(2));
            }
        }
        return changeList;
    }
    let coh = addChange(cid);
    coh = parseFloat(coh.toFixed(2));
    // calculate change due
    let changeDue = parseFloat((cash - price).toFixed(2));
    console.log('Change due is ' + changeDue);
    if (changeDue < coh) { // ie if the amount in the drawer exceeds change due
        change.status = "OPEN";
        change.change = figureChange(changeDue, cid);
        if (addChange(change.change) < changeDue) { // if you can't make change
            change = { "status": "INSUFFICIENT_FUNDS", change: [] };
        }
    } else if (changeDue > coh) {
        change = { "status": "INSUFFICIENT_FUNDS", change: [] };
    } else { // change due equals the amount of change in the drawer
        change = { "status": "CLOSED", change: cid };
    }
    return change;
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);