<script>
	import {send, receive, slideInBounce, slideDirection } from '../components/transitions.js';
	import { fade, fly, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { elasticOut } from 'svelte/easing';

	import Arrow from '../components/Arrow.svelte';
	import { backOut } from 'svelte/easing';

</script>

<style>
	.intro {
		height: 100%;
		display: grid;
		grid-template-columns: 1em repeat(10, 1fr) 1em;
		grid-template-rows: 48px repeat(8, 1fr) 48px;

	}

	a {
		font-size: 6rem;
		font-family: 'Abril Fatface', cursive;
		grid-column: 3 / 11;
		grid-row: 4 / 8;
		align-self: center;
		text-align: right;
		margin-bottom: -4.2rem;
		z-index: 2;
		text-decoration-line: none;
		display: flex;
	}

	.arrow {
		font-size: 1rem;
		margin-left: 4rem;
		margin-bottom: 3rem;
		align-self: flex-end;
	}

	.background-container-top {
		background-color: #F05522;
		grid-row: 1 / 6;
		grid-column: 1 / column-end;
		z-index: 1;
	}
	
	.background-container-bottom {
		background-color: #F0DFD1;
		grid-row: 1 / end;
		grid-column: 1 / end;
		z-index: 0;
	}
	
	@media (max-width: 720px) {
		a {
			font-size: 3em;
			margin-bottom: -0.6rem;
    }
    .arrow {
      font-size: 0.6rem;
    }
	}
</style>

<svelte:head>
	<title>Intro Page</title>
</svelte:head>


<div class="intro">
	<div 
		in:slideInBounce="{{duration: 2000, delay: 2000, direction: slideDirection.LEFT}}"
		out:slideInBounce="{{duration: 2000, direction: slideDirection.LEFT}}"
		class="background-container-top"> 
	</div>
	<a  out:slide in:slide="{{x: 100, delay: 2000}}" href="contents" >
    <div>Generative Design Playground</div>
    <div class="arrow">
			<Arrow scale={5.0} />
		</div>
	</a>
	<div class="background-container-bottom"> 
	</div>
</div>



