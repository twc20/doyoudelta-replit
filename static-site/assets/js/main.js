// Delta Tire - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    }
  });
});

// Location Selector Modal
function openLocationModal() {
  const modal = document.getElementById('location-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLocationModal() {
  const modal = document.getElementById('location-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('location-modal');
  if (modal && event.target === modal) {
    closeLocationModal();
  }
});

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeLocationModal();
  }
});

// Blog Search and Filter
if (document.getElementById('blog-search')) {
  const searchInput = document.getElementById('blog-search');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const articles = document.querySelectorAll('.blog-article');
  
  let currentCategory = 'All';
  
  // Search functionality
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterArticles(searchTerm, currentCategory);
  });
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Update current category
      currentCategory = this.dataset.category;
      
      // Filter articles
      const searchTerm = searchInput.value.toLowerCase();
      filterArticles(searchTerm, currentCategory);
    });
  });
  
  function filterArticles(searchTerm, category) {
    articles.forEach(article => {
      const title = article.dataset.title.toLowerCase();
      const excerpt = article.dataset.excerpt.toLowerCase();
      const tags = article.dataset.tags.toLowerCase();
      const articleCategory = article.dataset.category;
      
      const matchesSearch = !searchTerm || 
        title.includes(searchTerm) || 
        excerpt.includes(searchTerm) || 
        tags.includes(searchTerm);
      
      const matchesCategory = category === 'All' || articleCategory === category;
      
      if (matchesSearch && matchesCategory) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  }
}

// FAQ Accordion
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function() {
    const content = this.nextElementSibling;
    const icon = this.querySelector('.accordion-icon');
    
    // Toggle active state
    content.classList.toggle('active');
    
    // Rotate icon
    if (icon) {
      icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    }
  });
});

// FAQ Search
if (document.getElementById('faq-search')) {
  const faqSearch = document.getElementById('faq-search');
  const faqItems = document.querySelectorAll('.accordion-item');
  
  faqSearch.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    faqItems.forEach(item => {
      const question = item.dataset.question.toLowerCase();
      const answer = item.dataset.answer.toLowerCase();
      
      if (!searchTerm || question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// SMS Appointment Booking
function sendAppointmentSMS() {
  const location = document.getElementById('location-select')?.value;
  const service = document.getElementById('service-select')?.value;
  
  if (!location || !service) {
    alert('Please select both a location and service');
    return;
  }
  
  const locations = {
    'grants': { name: 'Grants, NM', phone: '5052877946' },
    'gallup': { name: 'Gallup, NM', phone: '5057222945' },
    'farmington': { name: 'Farmington, NM', phone: '5053254500' },
    'eagar': { name: 'Eagar, AZ', phone: '9283333730' }
  };
  
  const services = {
    'tire-sales': 'Tire Sales & Installation',
    'tire-repair': 'Tire Repair',
    'oil-change': 'Oil Change',
    'brake-service': 'Brake Service',
    'wheel-alignment': 'Wheel Alignment',
    'battery': 'Battery Service',
    'ac-service': 'AC/Heater Service',
    'inspection': 'Vehicle Inspection',
    'general-repair': 'General Auto Repair',
    'truck-accessories': 'Truck Accessories',
    'other': 'Other'
  };
  
  const selectedLocation = locations[location];
  const selectedService = services[service];
  
  const message = `Hey, I was on your website and want to schedule an appointment for ${selectedService} at your ${selectedLocation.name} location.`;
  const encodedMessage = encodeURIComponent(message);
  
  window.location.href = `sms:${selectedLocation.phone}?&body=${encodedMessage}`;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add active state to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        (currentPath !== '/' && link.getAttribute('href').includes(currentPath))) {
      link.style.color = 'var(--color-primary)';
    }
  });
});
