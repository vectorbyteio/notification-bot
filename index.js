const notifier = require('node-notifier');
const schedule = require('node-schedule');

// Function to send the notification
function sendNotification() {
    notifier.notify({
        title: 'Notification Bot',
        message: 'This is your 3-min notification!',
        sound: true,  // You can set sound to false if you don't want sound
        wait: true,   // Makes the notification interactive (e.g., wait for user to close it)
    });
}

// Schedule the notification to appear in 3 mins
schedule.scheduleJob('*/3 * * * *', function() {
    sendNotification();
});

console.log('Notification bot is running...');
