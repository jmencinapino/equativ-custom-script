(function(w){
    let d = w.document, b = d.body, h = d.getElementsByTagName('head')[0];
    // Determina the additional styles
    let dedicatedCSS = '.container-reference { /*dedicated-styles*/ }'
    // Add a CSS Style
    let styleTag = d.createElement('style');
    styleTag.setAttribute('type', 'text/css');
    styleTag.textContent = dedicatedCSS;
    // Append the style to the head
    h.appendChild(styleTag); 
})(window.top);