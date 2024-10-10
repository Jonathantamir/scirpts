document.addEventListener('touchmove', e => {
    const t = e.touches[0];
    const d = document.createElement('div');
    d.style.cssText = `width:5px; height:5px; background:red; position:absolute; left:${t.pageX}px; top:${t.pageY}px; border-radius:50%; z-index: 99999;`;
    document.body.appendChild(d);
});