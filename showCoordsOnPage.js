((x, y, seconds) => {
    // Create a small div to mark the coordinates
    const marker = document.createElement('div');
    
    // Set styles for the marker
    marker.style.position = 'absolute';
    marker.style.width = '10px';
    marker.style.height = '10px';
    marker.style.backgroundColor = 'red';
    marker.style.borderRadius = '50%';
    marker.style.top = `${y}px`;
    marker.style.left = `${x}px`;
    marker.style.transform = 'translate(-50%, -50%)';
    marker.style.zIndex = 9999;
  
    // Append marker to body
    document.body.appendChild(marker);
  
    // Log the coordinates to the console
    console.log(`Coordinates: X = ${x}, Y = ${y}`);
  
    // Convert seconds to milliseconds and remove the marker after that time
    setTimeout(() => {
      marker.remove();
      console.log('Marker removed.');
    }, seconds * 1000);  // Convert seconds to milliseconds
  })(100, 150, 60); // Pass your x, y coordinates and seconds here
  