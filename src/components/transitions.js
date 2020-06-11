import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';
import { backOut } from 'svelte/easing';

const slideDirection = Object.freeze({
    TOP:   Symbol("TOP"),
    RIGHT:  Symbol("RIGHT"),
    BOTTOM: Symbol("BOTTOM"),
    LEFT: Symbol("LEFT")
});

const slideInBounce = (node, params) => {

    const existingTransform = getComputedStyle(node).transform.replace('none', '');
    const direction = params.direction || slideDirection.LEFT;
    const calcTranslation = (direction, u, t) => {
        switch (direction) {
            case slideDirection.LEFT:
                return `translate(${u * -100}%, 0)`;
            case slideDirection.RIGHT:
                return `translate(${u * 100}%, 0)`;
            case slideDirection.TOP:
                return `translate(0, ${u * -100}%)`;
            case slideDirection.BOTTOM:
                return `translate(0, ${u * 100}%)`;
            default:
                break;
        }	
    }

    return {
        delay: params.delay || 0,
        duration: params.duration || 400,
        easing: params.easing || backOut,
        css: (t, u) => `transform: ${existingTransform} ${calcTranslation(direction, u, t)}; opacity: ${t}`
    };
}

const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 300),
    fallback(node, params) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            duration: 600,
            easing: quintOut,
            css: t => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
        };
    }
});

export {
    send, 
    receive,
    slideDirection,
    slideInBounce
};
