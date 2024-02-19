<script>
	import EntityCards from '$lib/components/EntityCards.svelte';
	import { page } from '$app/stores';
	const entities = $page.data.entities;
</script>

<div class="flex flex-wrap">
	{#each entities._embedded.enheter as entity (entity.id)}
		<EntityCards entity={entity} />
	{/each}
</div>
<!-- if they want to see more available to go to the features page -->
<div class="justify-center mb-8">
	<a href="/blogs" class="flex btn btn-primary mx-8">show more</a>
</div>

