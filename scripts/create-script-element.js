(function(w){
    let d = w.document, b = d.body;
    // Create script element
    let scriptTag = d.createElement('script');
    scriptTag.setAttribute('type', 'application/javascript');
    // Replace with the actual script URL
    scriptTag.setAttribute('src', 'SCRIPT_URL'); 
    // Append the script to the body
    b.appendChild(scriptTag);
})(window.top);