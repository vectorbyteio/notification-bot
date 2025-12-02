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

You can customize the notification interval and message by editing `index.js`:

- **Change the interval**: Modify the cron expression in `schedule.scheduleJob()`
  - `*/1 * * * *` - Every 1 minute
  - `*/5 * * * *` - Every 5 minutes
  - `*/10 * * * *` - Every 10 minutes

- **Change the message**: Update the `title` and `message` properties in the `notifier.notify()` function

For more information on cron expressions, see [crontab.guru](https://crontab.guru/).

## Troubleshooting

**Notifications Not Showing**: Ensure that your system's notification manager is properly configured:
- For Windows 10+: Notifications should display by default. Check your notification settings.
- For Linux: Ensure the notification daemon (e.g., D-Bus, systemd-logind) is active.
- For macOS: Ensure the app has notification permissions.

**Bot Not Starting**: Make sure Node.js and npm are installed correctly, and all dependencies are installed via `npm install`.
