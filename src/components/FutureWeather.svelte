<script>
    import { getFutureWeather }from '../services/getFutureWeather.js';
    const futureDaysWeather = getFutureWeather();

    import dayjs from 'dayjs';
    import "dayjs/locale/es";
</script>

<section class="p-4 grid place-content-center md:place-content-start">
    <div class="w-fit flex md:flex-row flex-col md:space-x-6 space-x-0 space-y-8 md:space-y-0">
        {#await futureDaysWeather then elements }
        {#each elements as element}
            <article class="highlight-card">
                <span class="text-highlight">{dayjs(element.date).locale("es").format("D MMMM, YYYY")}</span>
                <img class="w-16 h-16 mx-auto mb-2" src="{element.day.condition.icon}" alt="{element.day.condition.text}">
                <div class="flex mt-2 align-center justify-center">
                    <span class="font-display text-slate-500 dark:text-slate-300 font-semibold">{element.day.mintemp_c}ºc</span>
                    <span>-</span>
                    <span class="font-display text-black dark:text-dark-text-color font-bold">{element.day.maxtemp_c}ºc</span>
                </div>
            </article>
        {/each}
    {/await}
    </div>
</section>