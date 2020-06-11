<script>
	import { fade, fly, scale } from 'svelte/transition';
	import {send, receive, slideInBounce, slideDirection } from '../../components/transitions.js';

	import { quintOut } from 'svelte/easing';
	import Arrow from '../../components/Arrow.svelte'
</script>

<style>
	.intro {
		height: 100%;
		display: grid;
		grid-template-columns: 32px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 32px;
		column-gap: 8px;
		grid-template-rows: 48px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 48px;
	}

	a {
		font-family: 'Abril Fatface', cursive;
		grid-column: 2;
		grid-row: 2;
		align-self: center;
		justify-self: center;
		z-index: 2;
	}

	.background-container-left {
		background-color: #F05522;
		grid-column: 1 / 7;
		grid-row: 1 / column-end;
		z-index: 1;
		transform: rotate("180deg")
	}
	
	.background-container-right {
		background-color: #F0DFD1;
		grid-row: 1 / end;
		grid-column: 1 / end;
		z-index: 0;
	}
	
	@media (max-width: 480px) {
		a {
			font-size: 3em;
			margin-bottom: -0.5rem;
		}
	}
</style>

<svelte:head>
	<title>Contents Page</title>
</svelte:head>

<div class="intro">
	<div	
		class="background-container-left"
		in:slideInBounce="{{duration: 2000, delay: 2000, direction: slideDirection.BOTTOM}}"
		out:slideInBounce="{{duration: 2000, direction: slideDirection.BOTTOM}}"
	>
	</div>
	<a transition:scale="{{duration: 500, delay: 50, opacity: 0.2, start: 0.1, easing: quintOut}}" href="/" >
		<div  class="arrow">
			<Arrow  scale={5.0} rotation={"180deg"} />
		</div>
	</a>
	<div class="background-container-right"> 
	</div>
</div>




