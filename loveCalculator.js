function calculateLove() {
    const userName = document.getElementById('userName').value;
    const partnerName = document.getElementById('partnerName').value;

    if (userName === '' || partnerName === '') {
        alert('Please enter both names.');
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101);// Generates a random number between 0 and 100
    let message;
    if (lovePercentage > 70) {
        message = `${userName} and ${partnerName}, your love percentage is ${lovePercentage}%. It's a match made in heaven!`;
    } else {
        message = `${userName} and ${partnerName}, your love percentage is ${lovePercentage}%. There's room for improvement. Keep working on your relationship!`;
    }

    document.getElementById('loveResult').innerText = message;
}


// Attach the calculateLove function to a button click event
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateButton').addEventListener('click', calculateLove);
});
