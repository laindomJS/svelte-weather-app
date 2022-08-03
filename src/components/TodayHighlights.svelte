<script>
    import getWeatherHighlights from "../services/getWeatherHighlights";
    const weatherHighlights = getWeatherHighlights();
</script>

<section class="w-full h-fit md:p-4 p-4 md:mt-0 mt-6 bg-slate-300 dark:bg-dark-bg-color">
    <h2 class="font-titles font-semibold md:text-4xl text-3xl text-black dark:text-dark-title-color md:text-left text-center">Today's Highlights</h2>
    <div class="w-full h-auto mt-6 flex flex-wrap gap-10">
        {#await weatherHighlights then highlight }
            <article class="today-card">
                <p class="today-title">Wind Status</p>
                <span class="today-data">{highlight.wind}km/h</span>
            </article>
            
            <article class="today-card">
                <p class="today-title">Humidity</p>
                <span class="today-data">{highlight.humidity}%</span>
                <div class="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                    <div class="dark:bg-yellow-400 bg-green-500 h-2.5 rounded-full" style="width:{`${highlight.humidity.toString()}%`}"></div>
                </div>
            </article>

            <article class="today-card">
                <p class="today-title">Visibility</p>
                <span class="today-data">{highlight.visibility}miles</span>
            </article>

            <article class="today-card">
                <p class="today-title">Air Pressure</p>
                <span class="today-data">{highlight.pressure}miles</span>
            </article>

        {/await}
    </div>
       
</section>