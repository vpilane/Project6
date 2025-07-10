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
function toggleImage(headerElement) {
  // Close all other popups
  const allPopups = document.querySelectorAll('.popuptext');
  allPopups.forEach(popup => popup.classList.remove('show'));

  // Toggle the one related to this header
  const thisPopup = headerElement.parentElement.querySelector('.popuptext');
  if (thisPopup) {
    thisPopup.classList.toggle('show');
  }
}

