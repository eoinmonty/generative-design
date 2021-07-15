<style>
    .p5 {
        height: 100%;
        position: relative;
    }
    .p5 > .canvas {
        position: absolute;
    }

    .overlay-label { 
        position: relative;
        font-family: Abril Fatface;
        font-size: 5.143em;
        line-height: 1.05em;
        width: 75%;
        left: 25%;
        right: 0%;
        top: 50%;
        text-align: center;
        color: #F0DFD1;
        background: rgba(255, 255, 255, 0.4);
        mix-blend-mode: exclusion;
        backdrop-filter: blur(10px);
        border-radius: 5px 0 0 5px;
    }
            
</style>

<script>
    import { onMount, afterUpdate } from 'svelte';
    import { fade, fly, scale, slide } from 'svelte/transition';

    export let sketch;
    export let id;
    export let container;
    let p5Sketch;
    afterUpdate(async () => {
     const { default: p5 } = await import('../p5.min.js');
     p5Sketch = new p5(sketch(container), id);
    });
</script>

<div class="p5">
  <div class="canvas" {id}> </div>
  <div class="overlay-label">test</div>
</div>
