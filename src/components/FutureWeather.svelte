<script>
    import { getFutureWeather }from '../services/getFutureWeather.js';
    const futureDaysWeather = getFutureWeather();

    import dayjs from 'dayjs';
    import "dayjs/locale/es";
</script>

<section class="flex p-4 space-x-6">
    {#await futureDaysWeather then elements }
        {#each elements as element}
            <article class="highlight-card">
                <span class="text-highlight">{dayjs(element.date).locale("es").format("D MMMM, YYYY")}</span>
                <img class="w-16 h-16 mx-auto mb-2" src="{element.day.condition.icon}" alt="{element.day.condition.text}">
                <span class="mt-4 text-highlight">{element.day.mintemp_c}ºc - {element.day.maxtemp_c}ºc</span>
            </article>
        {/each}
    {/await}
</section>