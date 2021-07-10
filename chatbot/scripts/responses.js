function getBotResponse(input) {
    //rock paper scissors
    if (input == "when it's my turn") {
        return "you still have to time to  enjoy";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "by talk to you next time!";
    } else {
        return "do you want to  ask about something else!";
    }
}