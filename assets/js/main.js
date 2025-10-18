const container = document.querySelector(".container");

container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize mouse position
    const moveX = (x / rect.width - 0.5) * 2;
    const moveY = (y / rect.height - 0.5) * 2;

    // Background parallax
    container.style.backgroundPosition = `${50 + moveX * 40}% ${50 + moveY * 40}%`;

    // Tilt and scale
    const skew = moveX * 5; // tilt intensity
    container.style.transform = `translate(-50%, -50%) skewY(${skew}deg) scale(1.05)`;

    // shadows
    const shadowX = -moveX * 20; // reverse X for realistic light direction
    const shadowY = -moveY * 10;
    const shadowBlur = 20;
    const shadowColor = "rgba(0, 0, 0, 0.5)";
    container.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}, inset 0 0 15px rgba(255, 255, 255, 0.1)`;
});

container.addEventListener("mouseleave", () => {
    container.style.backgroundPosition = "50% 50%";
    container.style.transform = "translate(-50%, -50%) skewY(-5deg) scale(1)";
    container.style.boxShadow =
        "-1px -1px 0 #2b2b2b, -2px -2px 0 #2b2b2b, -3px -3px 0 #2b2b2b, -4px -4px 0 #2b2b2b, -5px -5px 0 #2b2b2b, -6px -6px 0 #2b2b2b";
});
