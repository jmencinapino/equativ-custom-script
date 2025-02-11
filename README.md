# Equativ Custom Script

## Overview

This repository demonstrates the possibilities of using the Equativ Custom Script feature at both the insertion and creative levels on EMP.

## General Use

The Equativ Custom Script is primarily used to integrate additional or specialized features that are not included by default in Equativ's services or products. These features provide flexibility and customization to meet specific needs. 

Some common use cases include:
- **Integrating custom styles (CSS):** To apply unique branding or aesthetic enhancements.
- **Adding tracking pixels:** For situations where pixel integration is restricted by the template.
- **Embedding additional scripts or code snippets:** To enhance or complement specific functionalities.

> [!NOTE]  
> Proper validation of your custom code is essential to ensure compatibility with the Equativ platform and to prevent performance issues.

---

## Scope

If a different scope is required, Custom Script integration allows interaction with `window.parent` and `window.top`. 

This functionality is made possible because Equativ integrates Custom Script elements within a separate iframe, configured as a **Friendly Iframe**, supporting secure usage.

---

## Basic Integration

Equativ Custom Script supports only HTML elements. Therefore, the integration of different scripts or elements should always adhere to an HTML context.


Example of Pixel:
```html
<img src="IMAGE_PIXEL_URL" alt="" width="1px" height="1px" style="border: 0px !important;" >
```

Example of Script:
```html
<script type="application/javascript">
    /**
     * Dedicated Script Code
    */
</script>
```

Example implementing Style for additional CSS application:
```html
<script type="application/javascript">
    (function(w){
        let d = w.document, b = d.body, h = d.getElementsByTagName('head')[0];
        let dedicatedCSS = '.container-reference { /*dedicated-styles*/ }'
        let styleTag = d.createElement('style');
        styleTag.setAttribute('type', 'text/css');
        styleTag.textContent = dedicatedCSS;
        h.appendChild(styleTag); 
    })(window.top);
</script>
```


---

## Third-Party Pixel Integrations

A popular application of the Equativ Custom Script is facilitating third-party integrations, particularly for analytics or measurement tools.

The following notes pertain to a standard integration that requires the use of script and noscript HTML tags, in accordance with third-party providers' requirements. These elements must be present within the same scope as the delivered creative.

## Standard Script Integration

Clients typically receive an extract of code from the third-party provider, which includes:
- A `<script>` tag referencing an external library.
- A `<noscript>` tag containing a fallback tracking pixel in case the script fails to load.

Example of the provided code:

```html
<script src="https://cdn.provider.com/library.js?params=true"></script>
<noscript><img src="https://cdn.provider.com/pixel.jpg?params=true" width="0" height="0"/></noscript>
```

Given the scope of the Custom Script parameter, this code must be restructured in relation to the `<script>` reference.

This restructuring is necessary because the `<script>` must be implemented within a different scope (as indicated above), whereas the `<noscript>` element can remain unchanged, as it does not require repositioning.

```html
<script>
    // Set Script URL information
    let scriptURL = 'https://cdn.provider.com/library.js?params=true';

    // Function will create the script at the creative scope level
    !function(){let t=window.parent===window.top?window.top:window.parent;if(!t.document){console.error("dv-custom-target","document-scope-error");return}let e=t.document.createElement("script");e.setAttribute("src",scriptURL),e.async=!0;let o=t.document.body;t.document.querySelector("#[sas_tagId]")?(t.document.querySelector("#[sas_tagId]").appendChild(e),console.log("dv-custom-target","format")):o?(o.appendChild(e),console.log("dv-custom-target","body")):console.error("dv-custom-target","not-found")}();
</script>
<!-- MAINTAIN NO SCRIPT -->
<noscript>
    <img src='https://cdn.provider.com/pixel.jpg?params=true' width='0' height='0'/>
</noscript>
```

### IAS Viewability Integration

One notable example is the integration of **Integral Ad Science (IAS)** for additional viewability measurements. This setup often requires a custom implementation using the Equativ Custom Script.

For detailed instructions and example code, please refer to the dedicated repository: [IAS Viewability Integration](https://github.com/jmencinapino/ias-viewability-integration).

---

> [!IMPORTANT]  
> Always test third-party integrations in a controlled environment before deploying to production. Ensure compliance with privacy regulations (e.g., GDPR, CCPA) when handling user data. Additionally, confirm that the integration aligns with the [official Custom Script field documentation](https://help.smartadserver.com/s/article/Configuring-creatives#:~:text=unchecked%20by%20default.-,Custom%20script%20(for%20creatives),-You%20can%20add).

> [!WARNING]  
> Custom scripts can introduce security risks or performance degradation if not implemented properly. Exercise caution and consult the Equativ support team if unsure.

---
