<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import { onMount } from "svelte";
  import "@splidejs/svelte-splide/css";
  import "./splide-override.css";
  import { _ } from 'svelte-i18n';

// Assuming features data is fetched from the localized JSON files
let features = $_('page.home.features');

  // set up carousel config
  const mainOptions = {
    pagination: true,
    type: "loop",
    autoplay: true,
    fixedHeight: 520,
  };
  const thumbsOptions = {
    arrows: false,
    focus: "center",
    gap: 5,
    isNavigation: true,
    pagination: false,
    perMove: 1,
    perPage: 4,
    type: "loop",
    updateOnMove: true,
  };

  // sync carousels
  let main;
  let thumbs;
  onMount(() => {
    if (main && thumbs) {
      main.sync(thumbs.splide);
    }
  });
</script>

<div class="gallery">
  <div class="gallery--main">
    <Splide bind:this={main} options={mainOptions}>
      {#each features as feature}
      <SplideSlide>
        <a 
          href={`/enheter`}
          class="hover:cursor-pointer hover:underline hover:text-secondary"
          >
          <div class="feature-hero">
            <img src={feature.image} alt={feature.alt} />
            <div class=" absolute p-10 bg-secondary text-secondary-content bg-opacity-75 bottom-5 left-5 right-5 rounded-md">
              <h2 class="text-2xl font-bold text-secondary-content">
              {feature.title}</h2>
              <p class="text-base font-normal text-secondary-content my-4">
                {feature.summary}</p>
              <p class="btn btn-primary">{$_('common.readMore')}</p>
            </div>
          </div>
        </a>
      </SplideSlide>
      {/each}
    </Splide>
  </div>

  <div class="gallery--thumbs">
    <Splide id="gallery--thumbs" bind:this={thumbs} options={thumbsOptions}>
      {#each features as feature}
      <SplideSlide>
        <img src={feature.image} alt={feature.alt} />
      </SplideSlide>
      {/each}
    </Splide>
  </div>
</div>

<style>
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    margin: 0 auto;
    max-width: 115rem;
    min-height: 200px;
  }

  .feature-hero {
    position: relative;
  }

  .feature-hero img {
    width: 100%;
    height: 520px; /* Set an appropriate height for your hero images */
    object-fit: cover;
  }


</style>
