LinkedIn Auto Connect Chrome Extension

Overview

This Chrome Extension automates the process of sending connection requests on LinkedIn by adding a floating "Connect with All" button on the LinkedIn My Network page. When clicked, the extension automatically sends connection requests to all visible profiles, with a 1-3 second delay between requests to avoid account blocking.

Features

Adds a floating "Connect with All" button on the LinkedIn "Grow My Network" page.
Automatically clicks the "Connect" buttons for all visible profiles.
Includes a random delay (between 1-3 seconds) between each connection request to prevent LinkedIn's anti-spam detection.
Alerts users if no connectable profiles are available.

Installation

Prerequisites

Node.js and npm installed on your system.
Basic knowledge of React, JavaScript, and Chrome Extensions.
Steps
Clone the repository to your local machine:


git clone https://github.com/yourusername/linkedin-auto-connect.git
Navigate into the project folder:

cd linkedin-auto-connect
Install the required dependencies:


npm install
Build the project:


npm run build
Load the extension in Chrome:

Open Chrome and navigate to chrome://extensions/.
Enable "Developer Mode" (toggle in the upper-right corner).
Click "Load Unpacked" and select the dist folder from your project directory.
Go to the LinkedIn Grow My Network page:


https://www.linkedin.com/mynetwork/grow/
Click the "Connect with All" button to start sending connection requests.

File Structure


linkedin-extension/
│
├── dist/                      # Compiled extension files

├── node_modules/              # Project dependencies

├── src/                       # Source files

│   ├── background.js          # Background script

│   ├── ConnectAllButton.js    # React component for the floating button

│   ├── contentScript.js       # Script injected into LinkedIn pages

│   └── index.js               # Main React entry point

│
├── .babelrc                   # Babel configuration

├── index.html                 # Popup UI

├── manifest.json              # Chrome extension configuration

├── package.json               # Node.js dependencies and scripts

├── package-lock.json          # Exact dependency versions

├── webpack.config.js          # Webpack configuration

├── README.md                  # Project documentation

└── FloatingButtons.css        # CSS file for button styling

Key Files

manifest.json: Defines the extension's metadata and permissions.
contentScript.js: Contains the logic to add the floating button and automate the connection requests.
ConnectAllButton.js: React component that creates and handles the "Connect with All" button.
background.js: Background script for managing extension-wide tasks.

Usage

After installing the extension, go to the LinkedIn Grow My Network page.
The floating "Connect with All" button will appear on the bottom-right of the page.
Click the button to automatically send connection requests to all visible profiles.

Troubleshooting

Button not appearing: Ensure you're on the LinkedIn My Network Grow page (https://www.linkedin.com/mynetwork/grow/).
No connectable profiles: If the extension shows a message saying "No connectable profiles found," ensure there are profiles visible with "Connect" buttons.






