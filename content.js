function clickDismissLink() {
    const dismissLink = Array.from(document.querySelectorAll('a[href=""]'))
        .find(el => el.textContent.trim().toLowerCase() === 'continue with');

    if (dismissLink && dismissLink.offsetParent !== null) {
        dismissLink.click();
        console.log("✅ Songsterr popup dismissed.");
    }
}

function cleanupOverlay() {
    const overlay = document.querySelector('.hide-layer-overlay');
    if (overlay) overlay.remove();

    document.body.style.overflow = 'auto';
}

// Try every half second
setInterval(() => {
    clickDismissLink();
    cleanupOverlay();
}, 100);
