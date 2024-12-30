// Smooth scroll functionality
const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Observe all elements with animation classes
document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});

// Initialize any dynamic content
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
});

// Moderators data
const moderators = [
    {
        name: "Priya Shah",
        image: "https://via.placeholder.com/150",
        description: "Clinical psychology background, supporting NRIs with emotional wellness for over 5 years."
    },
    {
        name: "Rahul Patel",
        image: "https://via.placeholder.com/150",
        description: "Certified counselor with expertise in supporting mental wellness across cultures."
    },
    {
        name: "Anita Kumar",
        image: "https://via.placeholder.com/150",
        description: "Specializing in cultural adjustment and identity challenges faced by NRIs."
    },
    {
        name: "Vikram Singh",
        image: "https://via.placeholder.com/150",
        description: "Expert in work-life balance and stress management for professionals abroad."
    }
];

// Render moderators
function renderModerators() {
    const moderatorsGrid = document.getElementById('moderators-grid');
    if (!moderatorsGrid) return;

    moderatorsGrid.innerHTML = moderators.map(moderator => `
        <div class="glass-card moderator-card">
            <img src="${moderator.image}" alt="${moderator.name}" class="moderator-image">
            <h3>${moderator.name}</h3>
            <p>${moderator.description}</p>
        </div>
    `).join('');
}

// Call renderModerators when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderModerators();
}); 