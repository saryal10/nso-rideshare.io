function toggleSection(header) {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');
  
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(section => {
      section.classList.remove('open');
    });
  
    // Show the clicked section if it was not already open
    if (!isOpen) {
      content.classList.add('open');
    }
  }