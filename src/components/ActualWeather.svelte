<script>

import { getActualWeather } from "../services/getActualWeather";
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

    import dayjs from 'dayjs';
    import "dayjs/locale/es";

</script>

<article class="bg-white dark:bg-dark-card-color w-full md:w-2/5 md:p-12 p-12">
    <!-- TOGGLE -->
    <label for="purple-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
        
        <input type="checkbox" value="" id="purple-toggle" class="sr-only peer" checked>
        
        <div on:click={toggle} class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        
        <span class="ml-3 text-sm font-display font-semibold text-gray-900 dark:text-gray-300">
            {condition ? 'Dark Mode' : 'Light Mode'}
        </span>

      </label>
      <!-- TOGGLE -->
    <section class="w-full flex flex-col text-center justify-center mt-12">
        {#await getWeather then weather }
            <img class="w-28 mx-auto" src="{weather.icon}" alt="{weather.text}">
            <span class="mt-10 font-title font-semibold text-5xl text-center text-black dark:text-dark-title-color">{weather.temp}ºc</span>
            <h1 class="mt-8 font-title font-semibold text-3xl text-center text-black dark:text-dark-title-color">{weather.text}</h1>
            <div class="mt-28 text-center w-full">
                <p class="text-card">Today - {dayjs(weather.localtime).locale("es").format("D MMMM, YYYY")}</p>
                <div class="flex justify-center p-2 align-center">
                    <p class="text-card">{weather.name}</p>
                    <svg class="w-6 h-6 fill-red-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                </div>
            </div>
        {/await}
    </section>
</article>
