


if (window.innerWidth > innerHeight) {

    //Face icon for landscape

    gsap.fromTo(".face-icon", { opacity: 0, x: -40 }, { duration: 1.5, x: 20, opacity: 1, ease: "bounce" })

    //Menu shower for landscape

    gsap.fromTo(".main-button", { y: -100 }, { y: 0, duration: 1, delay: 2.3 });

    gsap.fromTo("nav", { y: -100 }, { y: 0, duration: 1, delay: 2.45 });
}

else {

    //Face icon for portrait

    gsap.fromTo(".face-icon", { opacity: 0, y: -40 }, { duration: 1.5, y: 0, opacity: 1, ease: "bounce" })
}


//Animation for text in main page

gsap.fromTo
    (".main-text>h1", { opacity: 0, y: 30 }, { delay: 1.3, duration: 1, y: 0, opacity: 1, ease: 'power1' }
    )
gsap.fromTo
    (".main-text>h2", { opacity: 0, y: -30 }, { delay: 1.3, duration: 1, y: 0, opacity: 1, ease: 'power1' }
    )


//Animation for button in main page

gsap.from(".see-more", { duration: 3, delay: 2, y: 300, opacity: 0, scale: 0.5, ease: "elastic" });











