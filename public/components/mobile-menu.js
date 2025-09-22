// Mobile Menu Functions
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const html = document.documentElement;

  if (mobileMenu) {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('animate-fade-in-up');
      // Prevent scrolling when menu is open
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      closeMobileMenu();
    }
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const html = document.documentElement;

  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('animate-fade-in-up');
    // Restore scrolling
    body.style.overflow = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.width = '';
  }
}

// Initialize mobile menu when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu event listeners
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMobileMenuButton = document.getElementById('close-mobile-menu');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }

  if (closeMobileMenuButton) {
    closeMobileMenuButton.addEventListener('click', closeMobileMenu);
  }

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', function() {
      // Use the global ThemeManager instance
      if (window.themeManager) {
        window.themeManager.toggleTheme();
        updateMobileThemeIcons();
      }
    });
  }

  // Function to update mobile theme icons
  function updateMobileThemeIcons() {
    const lightIcon = document.getElementById('mobile-theme-icon-light');
    const darkIcon = document.getElementById('mobile-theme-icon-dark');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
      lightIcon?.classList.remove('hidden');
      darkIcon?.classList.add('hidden');
    } else {
      lightIcon?.classList.add('hidden');
      darkIcon?.classList.remove('hidden');
    }
  }

  // Initialize mobile theme icons
  updateMobileThemeIcons();
});