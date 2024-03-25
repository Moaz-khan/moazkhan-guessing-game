#! /usr/bin/env node
import inquirer from "inquirer";
// 1)Computer will generate a random number done
// 2)User input for guessing number done
// 3)compare user input with computer genrated number done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuestNumber",
        type: "number",
        message: "Please guest the number between 1-6:",
    },
]);
if (answer.userGuestNumber === randomNumber) {
    console.log("Congractulation! you guest right number");
}
else {
    console.log("you guest wrong number");
}
