const blockedSites = ["facebook.com", "youtube.com", ];

function blockPage() {
    document.body.innerHTML = `
        <div class="block-message">
            <h1>Access Denied</h1>
            <p>This website is blocked.</p>
        </div>
    `;
}

// Block content if site is restricted
if (blockedSites.some(site => window.location.href.includes(site))) {
    blockPage();
}

// Prevent tab switching
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        alert("Switching tabs is not allowed!");
        window.location.href = window.location.href; // Refresh to bring user back
    }
});

// Prevent new tab/window
window.addEventListener("blur", () => {
    setTimeout(() => {
        if (document.hidden) {
            alert("New tabs or switching is blocked!");
            window.location.href = window.location.href;
        }
    }, 500);
});
