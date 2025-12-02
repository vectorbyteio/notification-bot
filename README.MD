# Notification Bot

A simple Node.js-based bot that sends notifications every 3 minutes using Windows, macOS, or Linux native notification systems.

## Features

- Sends a notification every 3 minutes (configurable)
- Works across platforms: Windows, macOS, and Linux
- Customizable title and message for the notification

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (comes with Node.js)

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/vectorbyteio/notification-bot.git
cd notification-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the bot

```bash
npm start
```

or simply:

```bash
node index.js
```

The bot will start running, and a notification will pop up every 3 minutes.

## Configuration

You can customize the notification interval and message by editing `index.js`.

### Changing the Notification Message

Update the `title` and `message` properties in the `notifier.notify()` function:

```javascript
notifier.notify({
    title: 'Your Custom Title',
    message: 'Your custom message here!',
    sound: true,
    wait: true,
});
```

### Scheduling with Cron Expressions

Modify the cron expression in `schedule.scheduleJob()`. The format is:

```
┌───────────── second (0 - 59)
│ ┌───────────── minute (0 - 59)
│ │ ┌───────────── hour (0 - 23)
│ │ │ ┌───────────── day of month (1 - 31)
│ │ │ │ ┌───────────── month (1 - 12, or Jan - Dec)
│ │ │ │ │ ┌───────────── day of week (0 - 6, or Sun - Sat)
│ │ │ │ │ │
│ │ │ │ │ │
* * * * * *
```

#### Common Examples

**By Seconds:**
- `*/10 * * * * *` - Every 10 seconds
- `*/30 * * * * *` - Every 30 seconds
- `0 * * * * *` - Every minute at 0 seconds

**By Minutes:**
- `*/1 * * * *` - Every 1 minute
- `*/5 * * * *` - Every 5 minutes
- `*/15 * * * *` - Every 15 minutes
- `*/30 * * * *` - Every 30 minutes

**By Hours:**
- `0 * * * *` - Every hour at 0 minutes
- `0 9 * * *` - Every day at 9:00 AM
- `0 9,17 * * *` - Every day at 9:00 AM and 5:00 PM

**By Days:**
- `0 0 1 * *` - First day of every month at midnight
- `0 0 15 * *` - 15th day of every month at midnight
- `0 0 1,15 * *` - 1st and 15th of every month

**By Months:**
- `0 0 1 1 *` - Every January 1st at midnight
- `0 0 1 6 *` - Every June 1st at midnight
- `0 0 1 1,6 *` - June 1st and January 1st

**By Day of Week:**
- `0 9 * * 1` - Every Monday at 9:00 AM
- `0 9 * * 1-5` - Every weekday at 9:00 AM
- `0 9 * * 0,6` - Every weekend at 9:00 AM

#### Complex Examples

- `30 2 15 6 *` - June 15th at 2:30 AM
- `0 8 * * 1-5` - Every weekday at 8:00 AM
- `15 14 * * *` - Every day at 2:15 PM
- `0 */6 * * *` - Every 6 hours
- `*/15 9-17 * * *` - Every 15 minutes between 9 AM and 5 PM

#### Using JavaScript Date Objects (Alternative Method)

For more flexibility, you can use JavaScript `Date` objects instead of cron:

```javascript
// Run at a specific time
const now = new Date();
const scheduledTime = new Date(now.getTime() + 60000); // 60 seconds from now
schedule.scheduleJob(scheduledTime, function() {
    sendNotification();
});

// Run at a specific date and time
const specificDate = new Date(2025, 11, 25, 14, 30, 0); // Dec 25, 2025 at 2:30 PM
schedule.scheduleJob(specificDate, function() {
    sendNotification();
});
```

#### Using RecurrenceRule (Advanced)

For more control, use `RecurrenceRule`:

```javascript
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();

// Set specific days, hours, minutes, seconds
rule.dayOfWeek = [0, 6]; // Sunday and Saturday
rule.hour = 14; // 2 PM
rule.minute = 30; // 30 minutes
rule.second = 0; // 0 seconds

schedule.scheduleJob(rule, function() {
    sendNotification();
});
```

For more information, see [node-schedule documentation](https://www.npmjs.com/package/node-schedule) and [crontab.guru](https://crontab.guru/).

## Troubleshooting

**Notifications Not Showing**: Ensure that your system's notification manager is properly configured:
- For Windows 10+: Notifications should display by default. Check your notification settings.
- For Linux: Ensure the notification daemon (e.g., D-Bus, systemd-logind) is active.
- For macOS: Ensure the app has notification permissions.

**Bot Not Starting**: Make sure Node.js and npm are installed correctly, and all dependencies are installed via `npm install`.
