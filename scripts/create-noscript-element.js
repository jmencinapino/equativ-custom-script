(function(w){
    let d = w.document, b = d.body;
    // Create noscript element
    let noScriptTag = d.createElement('noscript');
    // Create image inside noscript
    let noScriptImage = d.createElement('img');
    // Replace with the actual image URL
    noScriptImage.setAttribute('src', 'IMAGE_PIXEL_URL');
    noScriptImage.setAttribute('alt', 'Fallback image for no-script environments');
    // Append the image to noscript
    noScriptTag.appendChild(noScriptImage);
    // Append noscript to the body
    b.appendChild(noScriptTag);
})(window.top);