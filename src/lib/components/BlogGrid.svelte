<script>
	import EntityCards from '$lib/components/EntityCards.svelte';
	import { page } from '$app/stores';


	const entities = $page.data.entities;
	const prev = entities._links.prev?.href.split("?")
	const next = entities._links.next?.href.split("?")
</script>

<div class="flex flex-wrap justify-center">
	{#each entities._embedded.enheter as entity (entity.id)}
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