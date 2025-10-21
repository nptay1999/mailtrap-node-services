# Velocity.js Email Template Test

A Node.js project for testing email templates using Velocity.js template engine and Mailtrap for email delivery.

## Overview

This project demonstrates how to:

- Render email templates using Velocity.js syntax
- Send emails via Mailtrap
- Use ES modules in Node.js
- Implement a singleton service pattern for email sending

## Project Structure

```
.
├── templates/
│   └── emailNewSignUp.vm      # WEX Factoring signup email template
├── index.js                    # Main entry point
├── mailtrap.js                 # Mailtrap email service (singleton)
├── package.json                # Project dependencies and scripts
├── .env                        # Environment variables (not in repo)
└── .gitignore                  # Git ignore rules
```

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Mailtrap account

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mailtrap-node-services
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
MAILTRAP_TOKEN=your_mailtrap_token_here
```

## Dependencies

- **velocityjs** (^2.1.5) - Apache Velocity template engine for JavaScript
- **mailtrap** (^4.3.0) - Email delivery service for testing
- **dotenv** (^17.2.3) - Environment variable management

## Usage

### Basic Usage

Run the project to send a test email:

```bash
npm start
```

### Customizing Email Data

Edit the `data` object in [`index.js`](index.js) to customize the email content:

```javascript
const data = {
  map: {
    firstName: "Your Name",
    leadFormUrl: "https://your-url.com",
    urlUnsubscribe: "https://your-unsubscribe-url.com",
  },
};
```

### Using the Mailtrap Service

The [`MailtrapServices`](mailtrap.js) class is implemented as a singleton. Import and use it anywhere in your code:

```javascript
import mailtrapServices from "./mailtrap.js";

await mailtrapServices.sendMail({
  html: yourHtmlContent,
  subject: "Custom Subject",
  category: "Custom Category",
  // Optional: override sender/recipients
  sender: { email: "custom@example.com", name: "Custom Sender" },
  recipients: [{ email: "recipient@example.com" }],
});
```

## Template Variables

The email template ([`emailNewSignUp.vm`](templates/emailNewSignUp.vm)) supports the following variables:

- `$map.firstName` - Recipient's first name
- `$map.leadFormUrl` - URL for the WEX Factoring application
- `$map.urlUnsubscribe` - Unsubscribe URL

## Features

- ✅ ES Module syntax
- ✅ Velocity.js template rendering
- ✅ Singleton pattern for email service
- ✅ Environment variable configuration
- ✅ Async/await email sending
- ✅ Error handling and logging

## Scripts

- `npm start` - Run the application
- `npm test` - Run tests (not configured yet)

## Environment Variables

| Variable         | Description        | Required |
| ---------------- | ------------------ | -------- |
| `MAILTRAP_TOKEN` | Mailtrap API token | Yes      |

## License

ISC

## Author

Nguyen Phuong Tay

## Support

For issues or questions, contact: support@truckerpath.com
