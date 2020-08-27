<script>
  import { onMount, afterUpdate } from 'svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';

  export let sketch;
  export let id;
  export let container;
  let p5Sketch;
  afterUpdate(async () => {
    console.log("mounting p5Sketch");
    console.log(id);
    const { default: p5 } = await import('../p5.min.js');
    p5Sketch = new p5(sketch(container), id);
  });

</script>

<style>
</style>

<div {id}>
</div>
