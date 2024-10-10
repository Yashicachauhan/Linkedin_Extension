// src/contentScript.js

// Create and style the floating button
const createConnectButton = () => {
  const button = document.createElement("button");
  button.innerText = "Connect with All";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.padding = "10px";
  button.style.backgroundColor = "#0073b1";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.zIndex = "1000";

  // Append the button to the body
  document.body.appendChild(button);

  // Add click event listener to the button
  button.addEventListener("click", connectWithAll);
};

// Function to connect with all visible profiles
function connectWithAll() {
  // Select all button elements
  const buttons = document.querySelectorAll("button");

  // Filter buttons to find those with the text 'Connect'
  const connectButtons = Array.from(buttons).filter((button) => {
    return button.innerText.includes("Connect");
  });

  if (connectButtons.length === 0) {
    alert("No connectable profiles found.");
    return;
  }

  connectButtons.forEach((button, index) => {
    setTimeout(() => {
      button.click();
      console.log("Clicked Connect button");
    }, index * (Math.random() * (3000 - 1000) + 1000)); // 1-3 second delay
  });
}

// Run the create button function on page load
window.onload = createConnectButton;
