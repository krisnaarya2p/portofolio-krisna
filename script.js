// ==================== INTERAKSI UMUM & MENU MOBILE ====================
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu Mobile
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('header nav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            const isHidden = nav.classList.contains('hidden');
            if (isHidden) {
                nav.classList.remove('hidden');
                nav.classList.add('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'p-6', 'border-b', 'border-slate-200', 'shadow-lg', 'gap-4', 'z-40');
            } else {
                nav.classList.add('hidden');
                nav.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'w-full', 'bg-white', 'p-6', 'border-b', 'border-slate-200', 'shadow-lg', 'gap-4', 'z-40');
            }
        });
    }

    // Penanganan Formulir Kontak Interaktif
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Tampilkan pesan sukses
            formFeedback.classList.remove('hidden');
            contactForm.reset();

            // Sembunyikan pesan sukses setelah 6 detik
            setTimeout(() => {
                formFeedback.classList.add('hidden');
            }, 6000);
        });
    }
});
