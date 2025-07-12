// underline.js
import gsap from 'gsap';

export const underlineAnimation = () => {
  const anchorTags = document.querySelectorAll('.navbar a');

  anchorTags.forEach(link => {
    const underline = document.createElement('span');
    underline.classList.add('link-underline');
    link.appendChild(underline);

    gsap.set(underline, {
      width: '0%',
      left: '50%',
      bottom: '-2px',
      position: 'absolute',
      height: '2px',
      backgroundColor: '#22c55e', // Tailwind green-500
      transformOrigin: 'center',
      pointerEvents: 'none' // make sure it doesn't block mouse
    });

    link.style.position = 'relative'; // Important for underline positioning

    link.addEventListener('mouseenter', () => {
      gsap.to(underline, {
        width: '100%',
        left: '0%',
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(underline, {
        width: '0%',
        left: '50%',
        duration: 0.3,
        ease: 'power2.in'
      });
    });
  });
};
