window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookieChoice')) {
      setTimeout(() => {
        openCookieDrawer();
      }, 2000); 
    }
  });
  
  function openCookieDrawer() {
    const drawer = document.getElementById('cookie-drawer');
    drawer.classList.add('show');
    
    const options = document.querySelectorAll('.tracking-option');
    options.forEach((option, index) => {
      option.style.opacity = '0';
      option.style.transform = 'translateY(10px)';
      setTimeout(() => {
        option.style.opacity = '1';
        option.style.transform = 'translateY(0)';
      }, 100 * (index + 1));
    });
  }
  
  function closeCookieDrawer() {
    const drawer = document.getElementById('cookie-drawer');
    drawer.style.opacity = '0';
    drawer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      drawer.classList.remove('show');
      setTimeout(() => {
        drawer.style.opacity = '';
        drawer.style.transform = '';
      }, 50);
    }, 300);
  }
  
  function handleCookieChoice(choice) {
    localStorage.setItem('cookieChoice', choice);
    
    const message = "Don't worry! We're not tracking you like some monopoly browsers do. 😈"
    
    showToast(message);
    
    closeCookieDrawer();
    
  }
  
  function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.right = '20px';
      toast.style.backgroundColor = " rgba(199, 167, 25, 0.5)";
      toast.style.color = 'white';
      toast.style.padding = '12px 16px';
      toast.style.borderRadius = '8px';
      toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
      toast.style.zIndex = '1001';
      toast.style.maxWidth = '300px';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 4000);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
      .tracking-option {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease;
      }
    `;
    document.head.appendChild(style);
  });
  
  // Easter egg - if they inspect the console
  console.log("🕵️ Oh hello there, curious developer! We're tracking your debugging habits too...");
        window.addEventListener('scroll', () => {
            const header = document.querySelector('#header');
            header.classList.toggle('scrolled', window.scrollY > 0);
        });

        document.addEventListener('DOMContentLoaded', () => {
            const tables = document.querySelectorAll('table');
            tables.forEach(table => {
                const rows = table.querySelectorAll('tr');
                rows.forEach((row, index) => {
                    row.style.opacity = '0';
                    row.style.transform = 'translateY(10px)';
                    row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    row.style.transitionDelay = (index * 0.05) + 's';
                    setTimeout(() => {
                        row.style.opacity = '1';
                        row.style.transform = 'translateY(0)';
                    }, 500 + (index * 50));
                });
            });

            const cards = document.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px) scale(0.95)';
                card.style.animation = `cardSlideIn 0.5s ease forwards`;
                card.style.animationDelay = `${index * 0.1}s`;
            });

            const headings = document.querySelectorAll('h2');
            headings.forEach((heading, index) => {
                heading.style.opacity = '0';
                heading.style.transform = 'translateY(10px)';
                heading.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                heading.style.transitionDelay = (0.1 * index) + 's';
                setTimeout(() => {
                    heading.style.opacity = '1';
                    heading.style.transform = 'translateY(0)';
                }, 300 + (index * 150));
            });

            const mainTitle = document.querySelector('#header h1');
            const originalText = mainTitle.textContent;
            mainTitle.textContent = '';
            let charIndex = 0;
            const typeEffect = setInterval(() => {
                if (charIndex < originalText.length) {
                    mainTitle.textContent += originalText.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeEffect);
                }
            }, 30);

            document.addEventListener('mousemove', e => {
                const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
                const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
                headings.forEach(heading => {
                    heading.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
            });

            const links = document.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('focus', () => {
                    link.style.outline = '1px solid rgba(212, 160, 23, 0.5)';
                    link.style.padding = '2px 4px';
                    link.style.margin = '-2px -4px';
                });
                link.addEventListener('blur', () => {
                    link.style.outline = 'none';
                    link.style.padding = '0';
                    link.style.margin = '0';
                });
            });

            const ctaButton = document.querySelector('.cta-button');
            ctaButton.style.transform = 'translateY(10px)';
            ctaButton.style.opacity = '0';
            setTimeout(() => {
                ctaButton.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.5s ease';
                ctaButton.style.transform = 'translateY(0)';
                ctaButton.style.opacity = '1';
            }, 1000);
        });
 