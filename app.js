function showPage(pageId) {
    const pages = ['home', 'register', 'otp', 'login'];
    pages.forEach(id => {
        const el = document.getElementById('page-' + id);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById('page-' + pageId);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function registerUser(event) {
    event.preventDefault(); 
    alert("Success! The buttons are working perfectly.");
    showPage('otp'); 
}

function changeLanguage(lang) {
    // We will add translations back later
}
