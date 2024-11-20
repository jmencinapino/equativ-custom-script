(function(w){
    let d = w.document, b = d.body;
    let imagePixel = d.createElement('img');
    // Set the src attribute correctly
    imagePixel.setAttribute('src', 'IMAGE_PIXEL_URL');
    // Append the image to the body
    b.appendChild(imagePixel);
})(window.top);
