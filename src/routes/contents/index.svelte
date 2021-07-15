<script>
	import { fade, fly, scale, slide } from 'svelte/transition';
	import {send, receive, slideInBounce, slideDirection } from '../../components/transitions.js';
    import { onMount, afterUpdate } from 'svelte';

    import { quintOut, quintIn } from 'svelte/easing';
    import Arrow from '../../components/Arrow.svelte'
    import P5Square from '../../components/P5Square.svelte'

      const loadDelay = 2000;
      const canvasID = "p5-canvas";
      let container;
      let sketchWrapper;
      let container2;
      let sketchWrapper2;
      let container3;
      let sketchWrapper3;
      let container4;
      let sketchWrapper4;

      const containerResized = (p, containermismatchWidth, containerMismatchHeight) => {
        const resized = container.offsetwidth !== p.width + containermismatchWidth || 
                        container.offsetheight !== p.height + containermismatchHeight;
        return resized; 
      };

      const createSketch = (sketchContainer) => {
        console.log('container');
        console.log(sketchContainer);
        const wrappedSketch = (sketchContainer) => {
          const sketch = (p) => {
            console.log("p5 func");
            let containerMismatchHeight;
            let containerMismatchWidth;

            p.setup = () => {
              console.log("p5 setup");
              console.log(sketchContainer)
              console.log(sketchContainer.offsetHeight);
              console.log(sketchContainer.clientHeight);
              p.createCanvas(sketchContainer.offsetWidth, sketchContainer.offsetHeight);
              containerMismatchHeight = sketchContainer.offsetHeight - p.height;
              containerMismatchWidth = sketchContainer.offsetWidth - p.width;
              p.noCursor();
              p.colorMode(p.HSB, 360, 100, 100);
              p.rectMode(p.CENTER);
              p.noStroke();
            };
            p.draw = () => {
              p.background(p.mouseY / 2, 100 , 100);
              p.fill(360 - p.mouseY / 2, 100, 100);
              p.rect(p.width/2, p.height/2, p.mouseX + 1, p.mouseX + 1);
            };
            p.windowResized = () => {
              console.log("p5 window resize");

              if(containerResized(p, containerMismatchWidth, containerMismatchHeight)) {
                p.resizeCanvas(sketchContainer.offsetWidth - containerMismatchWidth, sketchContainer.offsetHeight - containerMismatchHeight);
                containerMismatchWidth = sketchContainer.offsetWidth - p.width;
              }
            }
          };
          return sketch;
        }
        return wrappedSketch;
      };

      afterUpdate(() => {
        console.log("Update Occured");
        sketchWrapper = createSketch(container);
        sketchWrapper2 = createSketch(container2);
        sketchWrapper3 = createSketch(container3);
        sketchWrapper4 = createSketch(container4);
      })
</script>

<style>

    :root {
        --margin-sides: 10%;
    }

    .background {
        column-count: 2;
        column-width: 50%;
        column-gap: 0;
        background-color: #F0DFD1;
        height: 100%;
    }
    .background-container-left {
        background-color: #F05522;
        height: 100%;
    }

    .background-container-right {
        background-color: #F0DFD1;
        height: 100%;
    }

    .contents {
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        height: 100%;
    	width: 100%;
        grid-template-columns: repeat(16, 1fr);
        grid-template-rows: 24px repeat(8, 1fr);
        row-gap: 24px;
	}

	a {
		font-family: 'Abril Fatface', cursive;
		grid-column: 2;
		grid-row: 2;
		align-self: center;
		justify-self: center;
		z-index: 2;
	}

    .p5-container-top-left {
        grid-column: 4 / span 4;
        grid-row: 2 / span 4;
    }
    .p5-container-top-right {
        grid-column: 10 / span 4;
        grid-row: 2 / span 4;
    }
    .p5-container-bottom-left {
        grid-column: 4 / span 4;
        grid-row: 6 / span 4;
    }
    .p5-container-bottom-right {
        grid-column: 10 / span 4;
        grid-row: 6 / span 4;
    }

    @media (max-width: 768px) {
        .contents {
          grid-template-columns: var(--margin-sides) repeat(10, 1fr) var(--margin-sides);
          grid-template-rows: 24px repeat(20, 1fr) 24px;

        }
        .p5-container-top-left {
          grid-column: 6 / span 6;
          grid-row: 3 / span 4;
          margin: 0;
        }
        .p5-container-top-right {
          grid-column: 2 / span 6;
          grid-row: 8 / span 4;
          margin: 0;
        }
        .p5-container-bottom-left {
          grid-column: 6 / span 6;
          grid-row: 13 / span 4;
          margin: 0;
        }
        .p5-container-bottom-right {
          grid-column: 2 / span 6;
          grid-row: 18 / span 4;
          margin: 0;
        }
    }
</style>

<svelte:head>
	<title>Contents Page</title>
</svelte:head>

<div class="background">
	<div	
		class="background-container-left"
    in:slideInBounce="{{duration: loadDelay, delay: loadDelay, direction: slideDirection.BOTTOM}}"
		out:slideInBounce="{{duration: loadDelay, direction: slideDirection.BOTTOM}}"
	>
	</div>
	<div class="background-container-right"> 
	</div>

</div>
<div out:scale="{{duration: 500, delay: 500, opacity: 0.005, start: 0.05, easing: quintOut}}" 
     class="contents"
>
	<a transition:scale="{{duration: 500, delay: 50, opacity: 0.2, start: 0.1, easing: quintOut}}" href="/" >
		<div  class="arrow">
			<Arrow  scale={5.0} rotation={"180deg"} />
		</div>
	</a>
  <div 
    in:scale="{{duration: loadDelay, delay: loadDelay, opacity: 0.005, start: 0.05, easing: quintIn}}"
    class="p5-container-top-left ratio" bind:this={container}
  >
    <P5Square id={`${canvasID}-1`} container={container} sketch={sketchWrapper} />
  </div>

  <div 
    in:scale="{{duration: loadDelay, delay: loadDelay, opacity: 0.005, start: 0.05, easing: quintIn}}"
    class="p5-container-top-right ratio" bind:this={container2}
  >
    <P5Square id={`${canvasID}-2`} container={container2} sketch={sketchWrapper2} />
  </div>

  <div 
    in:scale="{{duration: loadDelay, delay: loadDelay, opacity: 0.005, start: 0.05, easing: quintIn}}"
    class="p5-container-bottom-left ratio" bind:this={container3}
  >
    <P5Square id={`${canvasID}-3`} container={container3} sketch={sketchWrapper3} />
  </div>
  <div 
    in:scale="{{duration: loadDelay, delay: loadDelay, opacity: 0.005, start: 0.05, easing: quintIn}}"
    class="p5-container-bottom-right ratio" bind:this={container4}
  >
    <P5Square id={`${canvasID}-4`} container={container4} sketch={sketchWrapper4} />
  </div>
</div>
