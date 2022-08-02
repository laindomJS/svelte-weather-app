<script>

	import FutureWeather from "./components/FutureWeather.svelte";
	import { getActualWeather } from "./services/getActualWeather";
	const getWeather = getActualWeather();

	function toggle() {
		const html = window.document.querySelector('html');
		html.classList.toggle('dark');
	}

</script>

<main class="w-full h-screen bg-slate-300 dark:bg-dark-bg-color flex flex-row">
	
	<!-- LEFT SECTION -->
	<article class="bg-white dark:bg-dark-card-color w-2/5 p-8 h-auto">
		<button class="btn" on:click={toggle}>Dark Mode</button>
		<section class="w-full flex flex-col text-center justify-center mt-12">
			{#await getWeather then weather }
				<img class="w-28 mx-auto" src="{weather.icon}" alt="{weather.text}">
				<span class="mt-10 font-title font-semibold text-5xl text-center text-black dark:text-dark-title-color">{weather.temp}ºc</span>
				<h1 class="mt-8 font-title font-semibold text-3xl text-center text-black dark:text-dark-title-color">{weather.text}</h1>
				<div class="mt-28 text-center w-full">
					<p class="text-card">Today - {weather.localtime}</p>
					<span class="text-card">{weather.name}</span>
				</div>
			{/await}
		</section>
	</article>
	<!-- LEFT SECTION END -->
	

	<!-- RIGHT SECTION -->
	<article class="w-full h-full p-8">
		<FutureWeather />
	</article>
	<!-- RIGHT SECTION END -->
</main>

