<script>
	import ActualWeather from "./components/ActualWeather.svelte";
	import FutureWeather from "./components/FutureWeather.svelte";
	import TodayHighlights from "./components/TodayHighlights.svelte";
</script>

<main class="w-full h-screen bg-slate-300 dark:bg-dark-bg-color flex flex-col md:flex-row">
	
	<!-- LEFT SECTION -->
	<ActualWeather />
	<!-- LEFT SECTION END -->
	
	<!-- RIGHT SECTION -->
	<article class="md:w-full w-full p-8 bg-slate-300 dark:bg-dark-bg-color">
		<FutureWeather />
		<TodayHighlights />
	</article>
	<!-- RIGHT SECTION END -->
</main>

