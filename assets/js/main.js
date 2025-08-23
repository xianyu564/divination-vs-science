// Enhanced UX for Divination vs Science website

document.addEventListener('DOMContentLoaded', function() {
  
  // Language detection and redirect
  function detectAndRedirectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const currentPath = window.location.pathname;
    
    // Don't redirect if already on a specific language page
    if (currentPath.includes('/zh-tw/') || currentPath.includes('/en/')) {
      return;
    }
    
    // Redirect to Traditional Chinese for Taiwan/Hong Kong users
    if (userLang.startsWith('zh-TW') || userLang.startsWith('zh-HK')) {
      if (!currentPath.includes('/zh-tw/')) {
        const newPath = '/zh-tw' + currentPath;
        if (window.location.pathname !== newPath) {
          window.history.replaceState({}, '', newPath);
        }
      }
    }
    // Redirect to English for English users
    else if (userLang.startsWith('en')) {
      if (!currentPath.includes('/en/')) {
        const newPath = '/en' + currentPath;
        if (window.location.pathname !== newPath) {
          window.history.replaceState({}, '', newPath);
        }
      }
    }
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add external link indicators
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add external link icon
      if (!link.innerHTML.includes('svg')) {
        link.innerHTML += ' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-left: 2px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15,3 21,3 21,9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';
      }
    }
  });
  
  // Copy citation functionality
  function addCitationCopyButtons() {
    document.querySelectorAll('pre code').forEach((codeBlock, index) => {
      if (codeBlock.textContent.includes('@') || codeBlock.textContent.includes('Zhang, Z.')) {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        codeBlock.parentNode.insertBefore(wrapper, codeBlock.parentNode);
        wrapper.appendChild(codeBlock.parentNode);
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.style.position = 'absolute';
        copyButton.style.top = '10px';
        copyButton.style.right = '10px';
        copyButton.style.padding = '4px 8px';
        copyButton.style.fontSize = '12px';
        copyButton.style.backgroundColor = '#007acc';
        copyButton.style.color = 'white';
        copyButton.style.border = 'none';
        copyButton.style.borderRadius = '4px';
        copyButton.style.cursor = 'pointer';
        
        copyButton.addEventListener('click', function() {
          navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
              copyButton.textContent = 'Copy';
            }, 2000);
          });
        });
        
        wrapper.appendChild(copyButton);
      }
    });
  }
  
  // Add structured data for better SEO
  function addDynamicStructuredData() {
    // Add breadcrumb structured data
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": []
    };
    
    const pathParts = window.location.pathname.split('/').filter(part => part);
    let currentPath = '';
    
    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": window.location.origin + "/divination-vs-science/"
    });
    
    pathParts.forEach((part, index) => {
      currentPath += '/' + part;
      if (part !== 'divination-vs-science') {
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": part.charAt(0).toUpperCase() + part.slice(1),
          "item": window.location.origin + currentPath
        });
      }
    });
    
    if (breadcrumbList.itemListElement.length > 1) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbList);
      document.head.appendChild(script);
    }
  }
  
  // Initialize functions
  addCitationCopyButtons();
  addDynamicStructuredData();
  
  // Performance optimization: lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
});

// Google Analytics enhanced tracking (if GA is configured)
function trackOutboundLink(url, category) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      'event_category': category || 'outbound',
      'event_label': url,
      'transport_type': 'beacon'
    });
  }
}

// Track citation copies
function trackCitation(format) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'citation_copy', {
      'event_category': 'academic',
      'event_label': format,
      'value': 1
    });
  }
}