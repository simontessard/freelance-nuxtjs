import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
    const lenis = new Lenis({
        duration: 1.4,
    })

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})