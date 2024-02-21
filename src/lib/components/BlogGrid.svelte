<script>
	import EntityCards from '$lib/components/EntityCards.svelte';
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';

	const entities = $page.data.entities;
	const prev = entities._links.prev?.href.split("?")
	const next = entities._links.next?.href.split("?")

	let pageTitle = $_('page.entitiesListing.title');
  let pageDescription = $_('page.entitiesListing.description');
  let pageKeywords = $_('page.entitiesListing.keywords');
</script>

<div class="flex flex-wrap justify-center">
	{#each entities._embedded.enheter as entity (entity.organisasjonsnummer)}
		<EntityCards entity={entity} />
	{/each}
</div>
<div class="join flex flex-wrap justify-center mt-4 gap-4">
	{#if entities._links.prev}
		<a href={`/enheter?${prev[1]}`} class="join-item btn btn-outline">Previous</a>
	{/if}
	{#if entities._links.next}
		<a href={`/enheter?${next[1]}`} class="join-item btn btn-outline">Next</a>
	{/if}
</div>
<svelte:head>
    <title>{pageTitle} | ${$page.siteName}</title>
    <link rel="canonical" href={`https://${$page.url.host}/enheter`} />
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{pageTitle} | ${$page.siteName}" />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:url" content={`https://${$page.url.host}/enheter`} />
    <meta property="og:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${encodeURIComponent(pageTitle)}`} />
    <meta property="og:site_name" content=${$page.siteName} />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:title" content="{pageTitle} | ${$page.siteName}" />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${encodeURIComponent(pageTitle)}`} />

    <!-- Schema.org for Google -->
    <meta itemprop="name" content="{pageTitle} | ${$page.siteName}" />
    <meta itemprop="description" content={pageDescription} />
    <meta itemprop="image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${encodeURIComponent(pageTitle)}`} />
</svelte:head>