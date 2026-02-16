# Kastra Library

A comprehensive library management system for Kastra, built with Node.js and TypeScript.

## Features

- **User Management**: Manage user accounts and access permissions.
- **Remote Gate Control**: Control remote gates and access points.
- **Payment System**: Handle payments and subscriptions.
- **MQTT Integration**: Real-time communication with gate controllers.
- **Zod Validation**: Type-safe data validation for all inputs.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kastra-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Build and Upload
Execute the following command to build and upload the library to the remote server:

```bash
npm run build-and-upload
```

Dependant applications should run `npm install` to install the library's latest version.

## Project Structure

```
kastra-library/
├── src/
│   ├── dto/              # Data Transfer Objects and validation schemas
│   ├── enum/             # Enums and constants
│   └── index.ts          # Library entry point
├── dist/                 # Compiled JavaScript files
├── node_modules/         # Project dependencies
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
└── tsup.config.ts        # tsup build configuration
```

## License

ISC