document.addEventListener('touchstart', e => {
    const t = e.touches[0];
    const d = document.createElement('div');
    d.style.position = 'absolute';
    d.style.width = '10px';
    d.style.height = '10px';
    d.style.backgroundColor = 'red';
    d.style.borderRadius = '50%';
    d.style.top = `${t.pageY}px`;
    d.style.left = `${t.pageX}px`;
    d.style.transform = 'translate(-50%, -50%)';
    d.style.zIndex = 800; 
    document.body.appendChild(d);

    setTimeout(() => {
        d.remove();
        console.log('Marker removed.');
      }, 60 * 1000); 


});