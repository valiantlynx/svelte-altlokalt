<script>
	import { page } from '$app/stores';
	export let entity;

	function shareButtonClick(entity) {
		if (navigator.share) {
			navigator
				.share({
					title: entity.navn,
					url: $page.url.origin + 'enheter/' + entity.organisasjonsnummer,
					text: entity.naeringkode1?.beskrivelse ?? entity.institusjonellSektorkode?.beskrivelse,
				})
				.then(() => {
					console.dir('Thanks for sharing!');
				})
				.catch((err) => {
					console.dir('Error while using Web share API:');
					console.error(err);
				});
		} else {
			alert("Browser doesn't support this API !");
		}
	}
</script>


		<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
			<!-- entity Card Component -->
			<div class="bg-primary border rounded-lg p-4 shadow-md hover:shadow-lg text-primary-content">
				<img src={`https://via.placeholder.com/500/4506CB/FFFFFF/?text=${entity.navn}`} alt={entity.navn} class="w-full h-48 object-cover rounded-lg">
				<h2 class="text-xl font-bold mt-4">
					<a href={`/enheter/${entity.organisasjonsnummer}`} class="hover:cursor-pointer hover:underline hover:text-warning">
					{entity.navn}
					</a>
				</h2>
				<p class="text-sm mt-2">{entity.naeringkode1?.beskrivelse ?? entity.institusjonellSektorkode?.beskrivelse}</p>
				<div class="flex items-center justify-between mt-4">
					<div class="flex items-center">
						<img src={`https://via.placeholder.com/500/4506CB/FFFFFF/?text=${entity.navn}`} alt={entity.navn + " logo på altlokalt.no"} class="w-8 h-8 rounded-full object-cover">
						<p class="ml-2 text-sm hover:underline hover:text-warning">{entity.organisasjonsform.beskrivelse}</p>
					</div>
					<div class="flex items-center">
						<a href={`/enheter/${entity.organisasjonsnummer}`} class="block font-bold hover:cursor-pointer hover:underline hover:text-warning">Read more</a>
					</div>
					<div class="flex items-center">
						<ul class="flex justify-end mt-4">
							<li class="inline pr-2">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<i class="fa fa-envelope-o fa-lg  hover:text-warning" on:click={() => shareButtonClick(entity)}></i>
							</li>
							<li class="inline">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<i 
								class="fa fa-share-alt fa-lg hover:text-warning"
								on:click={() => shareButtonClick(entity)}
								></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

