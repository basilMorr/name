document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded. Initializing Lottie animation.');

    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        path: 'https://test-rose-theta.vercel.app/data.json', // Correct production URL
        renderer: 'svg',
        loop: true,
        autoplay: true,
    });

    animation.addEventListener('DOMLoaded', () => {
        console.log('Lottie animation DOM loaded.');
        const totalFrames = animation.totalFrames;
        console.log(`Lottie data is ready, animation frames loaded. Total frames available: ${totalFrames}`);
        
        // Adjust body height based on animation
        document.body.style.height = `${animation.container.clientHeight}px`;
    });

    window.addEventListener('resize', () => {
        const containerRect = document.getElementById('lottie-container').getBoundingClientRect();
        const buttonBarRect = document.getElementById('button-bar').getBoundingClientRect();
        console.log('Window Dimensions:', {
            width: window.innerWidth,
            height: window.innerHeight
        });
        console.log('Lottie Container Dimensions:', containerRect);
        console.log('Button Bar Dimensions:', buttonBarRect);
        
        // Adjust body height based on animation
        document.body.style.height = `${containerRect.height}px`;
    });

    document.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const totalFrames = animation.totalFrames;
        const frame = Math.min(totalFrames - 1, Math.floor((scrollTop / (document.body.scrollHeight - window.innerHeight)) * totalFrames));
        animation.goToAndStop(frame, true);
    });
});
