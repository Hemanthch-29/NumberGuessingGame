//NumberGuessingGame using js
let control = true;
let minval, maxval;
while (control) {
    minval = Number(window.prompt('Enter the minimum value? 🤓'));
    maxval = Number(window.prompt('Enter the maximum value? 🤓'));
    if (isNaN(minval) || isNaN(maxval)) {
        window.alert('Please enter valid range 🤷‍♂️.');
    } else if (minval > maxval) {
        window.alert('Please enter valid range 🤷‍♂️.');
    } else {
        control = false;
    }
}
const answer = Math.floor(Math.random() * (maxval - minval + 1)) + minval;
let attempts = 0;
let control1 = true;
while (control1) {
    let guess = Number(window.prompt("Guess the Number 🧐:"));
    if (isNaN(guess)) {
        window.alert('Please enter a valid number 🤷‍♂️.');
    } else if (guess < minval || guess > maxval) {
        window.alert(`Please guess between ${minval} and ${maxval}🤷‍♂️.`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert('Your guess is Too Low 😭.');
        } else if (guess > answer) {
            window.alert('Your guess is Too High 😭.');
        } else {
            window.alert(`Correct! The answer was ${answer}. It took ${attempts} attempts to find 👍😎.`)
            control1 = false;
        }
    }
}