const canvas = document.getElementById("neon-bg");
const ctx = canvas.getContext("2d");

let width, height;
let particles = [];
const PARTICLE_COUNT = 80;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
...
        p.move();
        p.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
}

// Init
for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
}

animate();
