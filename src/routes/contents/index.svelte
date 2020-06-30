<script>
	import { fade, fly, scale, slide } from 'svelte/transition';
	import {send, receive, slideInBounce, slideDirection } from '../../components/transitions.js';

	import { quintOut } from 'svelte/easing';
	import Arrow from '../../components/Arrow.svelte'
  import P5Square from '../../components/P5Square.svelte'

  const loadDelay = 2000;
</script>

<style>

  :root {
    --margin-sides: 2em;
  }

  .background {
    column-count: 2;
    -webkit-column-width: 150px;
    -moz-column-width: 150px;
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
    display: grid;
		grid-template-columns: var(--margin-sides) repeat(10, [col-start] 1fr) var(--margin-sides);
		grid-template-rows: 48px repeat(auto-fill, [row-start] 1fr) 48px;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
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
    grid-column: col-start 2 / span 4;
    grid-row: row-start 1 / span 4;
    background-color: red;
    margin-right: var(--margin-sides);
  }
  .p5-container-top-right {
    grid-column: col-start 7 / span 4;
    grid-row: row-start 1 / span 4;
    background-color: yellow;
    margin-left: var(--margin-sides);
  }
  .p5-container-bottom-left {
    grid-column: col-start 2 / span 4;
    grid-row: row-start 6 / span 4;
    background-color: blue;
    margin-right: var(--margin-sides);
  }
  .p5-container-bottom-right {
    grid-column: col-start 7 / span 4;
    grid-row: row-start 6 / span 4;
    background-color: purple;
    margin-left: var(--margin-sides);
  }
	
  @media (max-width: 768px) {
    .contents {

    }
    .p5-container-top-left {
      grid-column: col-start 3 / span 8;
      grid-row: row-start 1 / span 4;
      background-color: red;
    }
    .p5-container-top-right {
      grid-column: col-start 3 / span 8;
      grid-row: row-start 6 / span 4;
      background-color: yellow;
    }
    .p5-container-bottom-left {
      grid-column: col-start 3 / span 8;
      grid-row: row-start 11 / span 4;
      background-color: blue;
    }
    .p5-container-bottom-right {
      grid-column: col-start 3 / span 8;
      grid-row: row-start 16 / span 4;
      background-color: purple;
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
<div out:scale="{{duration: 500, delay: 500, opacity: 0.005, start: 0.05, easing: quintOut}}" class="contents">
	<a transition:scale="{{duration: 500, delay: 50, opacity: 0.2, start: 0.1, easing: quintOut}}" href="/" >
		<div  class="arrow">
			<Arrow  scale={5.0} rotation={"180deg"} />
		</div>
	</a>
  <div in:scale="{{delay: loadDelay*2 }}" class="p5-container-top-left">
    <P5Square />
  </div>
  <div in:scale="{{delay: loadDelay*2 }}" class="p5-container-top-right">
    <P5Square />
  </div>
  <div in:scale="{{delay: loadDelay*2 }}" class="p5-container-bottom-left">
    <P5Square />
  </div>
  <div in:scale="{{delay: loadDelay*2 }}" class="p5-container-bottom-right">
    <P5Square />
  </div>
</div>




