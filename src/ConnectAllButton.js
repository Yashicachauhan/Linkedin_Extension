import React, { useState } from "react";
import "./FloatingButtons.css";

const ConnectAllButton = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const clickConnectButtons = async () => {
    setIsConnecting(true);

    // Get all visible 'Connect' buttons
    const connectButtons = document.querySelectorAll(
      'button[aria-label*="Connect"]'
    );

    if (connectButtons.length === 0) {
      alert("No connectable profiles found.");
      setIsConnecting(false);
      return;
    }

    for (let i = 0; i < connectButtons.length; i++) {
      // Click the button
      connectButtons[i].click();

      // Wait for 1-3 seconds before clicking the next button
      const delay = Math.floor(Math.random() * 2000) + 1000; // 1-3 seconds
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    setIsConnecting(false);
    alert("All connection requests sent!");
  };

  return (
    <button
      className="floating-connect-button"
      onClick={clickConnectButtons}
      disabled={isConnecting}
    >
      {isConnecting ? "Connecting..." : "Connect with All"}
    </button>
  );
};

export default ConnectAllButton;
