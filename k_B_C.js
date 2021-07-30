console.log("WELCOME ......TO .......KBC")

function question() {
    Question = ["1.how many continentes are there?",
        "2.what is the capital of India?",
        "3.NG mei kaun se course padhey jata hai?"
    ]
    return Question
}
var Question_list = question()

function option() {
    option = [
        ["Four", "Nine", "seven", "Eight"],
        ["Chandigarh", "Bhopal", "chennai", "Delhi"],
        ["Software engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    return option
}
var option_list = option()

function solution() {
    solution = [3, 4, 1]
    return solution
}
solution_list = solution()

function answer() {
    answer = ["3.seven", "4.eight", "2.bhopal", "4.delhi", "1.software engineering", "3.tourism"]
    return answer
}
Ans = answer()
var i = 0
var r = 1
var y = 0
var count = 0
while (i < Question_list.length) {
    i1 = Question_list[i]
    console.log(i1)
    var j = 0
    var k = i
    while (j < option_list[i].length) {
        var l = option_list[k][j]
        console.log(j + 1, l)
        j = j + 1
    }
    let readlineSync = require("readline-sync");
    Lifeline1 = readlineSync.question("do you want 5050 lifeline")
    if (Lifeline1 == "yes") {
        console.log("50-50")
        if (count == 0) {
            console.log(Ans[y + i])
            console.log(Ans[y + r])
            let readlineSync = require("readline-sync");
            n = readlineSync.questionInt("enter answer")
            if (n == solution_list[i]) {
                console.log("right")
            } else {
                console.log("wrong")
                break
            }
            count += 1
        } else {
            console.log("you already used lifeline")
            let readlineSync = require("readline-sync");
            m = readlineSync.questionInt("enter answer")
            if (m == solution_list[i]) {
                console.log("right")
            } else {
                console.log("wrong")
            }
        }
    } else if (Lifeline1 == "no") {
        let readlineSync = require("readline-sync");
        u = readlineSync.questionInt("choose the answer")
        if (u == solution_list[i]) {
            console.log("your answer is correct")
        } else {
            console.log("you are answer is wrong")
        }
    } else {
        console.log("error")
    }
    i = i + 1
    r += 1
    y += 1
}