document.addEventListener("DOMContentLoaded", function() {
    const bootScreen = document.getElementById("boot-screen");
    setTimeout(() => {
        bootScreen.style.opacity = "0";
        setTimeout(() => {
            bootScreen.style.display = "none";
        }, 500); // matches fade duration
    }, 4000); // show boot screen for 2 sec
});

document.addEventListener('DOMContentLoaded', function() {
    // Window management
    const capyWindow = document.getElementById('capybara-window');
    const capyIcon = document.getElementById('capybara-icon');
    const closeBtn = document.querySelector('.close');
    const forgiveBtn = document.getElementById('forgive-btn');
    const charmMessage = document.getElementById('charm-message');

    // Make window draggable
    makeDraggable(capyWindow);

    // Icon double-click handler
    capyIcon.addEventListener('dblclick', () => {
        capyWindow.style.display = 'block';
        capyWindow.style.zIndex = '1000';
    });

    // Close button handler
    closeBtn.addEventListener('click', () => {
        capyWindow.style.display = 'none';
    });

    // Forgive button handler
    forgiveBtn.addEventListener('click', () => {
        charmMessage.style.display = 'block';
        forgiveBtn.disabled = true;
        createHearts();
    });

    // Clock update
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        document.getElementById('clock').textContent = timeString;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
});

// Make window draggable
function makeDraggable(element) {
    const titleBar = element.querySelector('.title-bar');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    titleBar.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Create floating hearts effect
function createHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.cssText = `
                position: fixed;
                font-size: 24px;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                opacity: 1;
                pointer-events: none;
                animation: floatHeart 3s ease-in forwards;
            `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 200);
    }
}

// Add floating hearts animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes floatHeart {
        to {
            transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", function() {
    // Developer Note open button
    const devNoteIcon = document.getElementById("developer-note-icon");
    const devNoteWindow = document.getElementById("developer-note-window");

    if (devNoteIcon && devNoteWindow) {
        devNoteIcon.addEventListener("click", () => {
            devNoteWindow.style.display = "block";
        });
    }

    // Close button inside developer note window
    const closeButtons = devNoteWindow.querySelectorAll(".close");
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            devNoteWindow.style.display = "none";
        });
    });
});
