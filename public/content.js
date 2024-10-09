// Check if the button already exists to avoid duplicates
if (!document.getElementById('connectAllBtn')) {
  
    // Create the "Connect with All" button
    const connectWithAllButton = document.createElement('button');
    connectWithAllButton.id = 'connectAllBtn';
    connectWithAllButton.textContent = 'Connect with All';
    
    // Style the button
    connectWithAllButton.style.position = 'fixed';
    connectWithAllButton.style.bottom = '20px';
    connectWithAllButton.style.right = '20px';
    connectWithAllButton.style.padding = '10px 20px';
    connectWithAllButton.style.backgroundColor = '#0a66c2';
    connectWithAllButton.style.color = '#fff';
    connectWithAllButton.style.border = 'none';
    connectWithAllButton.style.borderRadius = '5px';
    connectWithAllButton.style.cursor = 'pointer';
    connectWithAllButton.style.zIndex = '1000';
  
    // Add the button to the page
    document.body.appendChild(connectWithAllButton);
  
    // Add click event listener to automate connections
    connectWithAllButton.addEventListener('click', async () => {
      // Select all "Connect" buttons on the page by using aria-label attribute
      const connectButtons = document.querySelectorAll('button[aria-label^="Connect with"]');
      
      // Alert if no connectable profiles are found
      if (connectButtons.length === 0) {
        alert('No connectable profiles found.');
        return;
      }
  
      // Set a delay between each connection request to avoid LinkedIn limits
      let delay = 2000;  // 2 seconds
  
      // Loop over each Connect button and click with a delay
      for (let i = 0; i < connectButtons.length; i++) {
        setTimeout(() => {
          connectButtons[i].click();
        }, delay * i);
      }
    });
  }
  