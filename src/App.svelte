<script>
	import FutureWeather from "./components/FutureWeather.svelte";
	import TodayHighlights from "./components/TodayHighlights.svelte";

	import { getActualWeather } from "./services/getActualWeather";
	const getWeather = getActualWeather();
	
	let condition = true;

	function toggle() {
		const html = window.document.querySelector('html');
		html.classList.toggle('dark');
		if(html.classList.contains('dark')) {
			condition = false;
		} else {
			condition = true;
		}
	}

</script>

<main class="w-full h-screen bg-slate-300 dark:bg-dark-bg-color flex flex-col md:flex-row">
	
	<!-- LEFT SECTION -->
	<article class="bg-white dark:bg-dark-card-color w-full md:w-2/5 md:p-12 p-12">
		<button class="btn" on:click={toggle}>{condition === false ? 'Light Mode' : 'Dark Mode'}</button>
		<section class="w-full flex flex-col text-center justify-center mt-12">
			{#await getWeather then weather }
				<img class="w-28 mx-auto" src="{weather.icon}" alt="{weather.text}">
				<span class="mt-10 font-title font-semibold text-5xl text-center text-black dark:text-dark-title-color">{weather.temp}ºc</span>
				<h1 class="mt-8 font-title font-semibold text-3xl text-center text-black dark:text-dark-title-color">{weather.text}</h1>
				<div class="mt-28 text-center w-full">
					<p class="text-card">Today - {weather.localtime}</p>
					<div class="flex justify-center p-2 align-center">
						<p class="text-card">{weather.name}</p>
						<svg class="w-6 h-6 fill-red-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
					</div>
				</div>
			{/await}
		</section>
	</article>
	<!-- LEFT SECTION END -->
	

	<!-- RIGHT SECTION -->
	<article class="md:w-full w-full p-8 bg-slate-300 dark:bg-dark-bg-color">
		<FutureWeather />
		<TodayHighlights />
	</article>
	<!-- RIGHT SECTION END -->
</main>

