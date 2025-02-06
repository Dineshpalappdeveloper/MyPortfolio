import { useEffect } from "react";

const HeartRain = () => {
    useEffect(() => {
        const createHeart = () => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            heart.style.fontSize = Math.random() * 10 + 20 + "px";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        };

        const interval = setInterval(createHeart, 300);
        return () => clearInterval(interval);
    }, []);

    return null;
};

export default HeartRain;
