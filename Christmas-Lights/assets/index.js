const lights = document.querySelectorAll(".light"); // all bulbs
const speedButtons = document.querySelectorAll(".speed");
const onBtn = document.querySelector(".on")
const offBtn = document.querySelector(".off")

// default speed multiplier for flicker
let flickerSpeed = 1; // 1 = normal speed
let lightsOn = true; // flag to control flicker

// attach click events to each speed button
speedButtons.forEach(button => {
    button.addEventListener("click", () => {
        const speed = Number(button.querySelector(".spd").textContent);
        flickerSpeed = speed; // set global speed multiplier
        console.log("Flicker speed set to:", flickerSpeed);
    });
});

// flicker function for one light
function flickerLight(light) {
    if (!lightsOn) return;

    const opacity = 0.7 + Math.random() * 0.3;
    const blur = Math.random() * 2;
    light.style.opacity = opacity.toFixed(2);
    light.style.filter = `blur(${blur}px)`;

    const on = Math.random() > 0.5;
    light.classList.toggle("glow", on);

    // next flicker interval affected by speed multiplier
    const nextTime = (100 + Math.random() * 400) / flickerSpeed;
    setTimeout(() => flickerLight(light), nextTime);
}

onBtn.addEventListener("click", () => {
    if (!lightsOn) {
        lightsOn = true;
        lights.forEach(light => flickerLight(light));
    }
});

offBtn.addEventListener("click", () => {
    lightsOn = false;
    lights.forEach(light => {
        light.style.opacity = "0.7";
        light.style.filter = "blur(0px"
        light.classList.remove("glow");
    });
});

// start flickering each light independently
lights.forEach(light => flickerLight(light));
