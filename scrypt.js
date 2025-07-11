function showView(viewId) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });

  // Show the selected view
  const selectedView = document.getElementById(viewId);
  if (selectedView) {
    selectedView.classList.add('active');
  }
}

function toggleImage(componentDiv) {
    const popup = componentDiv.querySelector('.popuptext');
    const isOpen = popup.classList.contains('show');

    // Close all popups
    document.querySelectorAll('.popuptext.show').forEach(function(p) {
        p.classList.remove('show');
    });

    // If it was not open, open it
    if (!isOpen) {
        popup.classList.add('show');
    }
}

// Hide popup when clicking outside
document.addEventListener('click', function(event) {
    // Check if the click is inside a component popup
    if (!event.target.closest('.component.popup')) {
        document.querySelectorAll('.popuptext.show').forEach(function(popup) {
            popup.classList.remove('show');
        });
    }
});

