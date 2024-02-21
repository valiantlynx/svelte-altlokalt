<script>
    import { page } from '$app/stores';
    import { _ } from 'svelte-i18n';
    import Chat from '$lib/components/Chat.svelte';

    const company = $page.data.companyData;
</script>

<div class="w-full">
	<main
		class="profile-page mb-10"
		style="background-image: url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80);"
	>
		<section class="relative block h-400-px">
			<div
				class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
				style="transform: translateZ(0);"
			>
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
				</svg>
			</div>
		</section>

		<section class="relative py-8 bg-blueGray-200">
			<div class="container mx-auto px-4">
				<div class="relative bg-base-100 w-full mb-6 shadow-xl rounded-lg">
					<div class="px-6 py-4">
						<div class="flex items-center justify-between">
							<img alt="Profile Avatar" src={`https://via.placeholder.com/600x600/4506CB/FFFFFF/?text=${company.navn}`} class="rounded-full h-20 w-20 object-cover" />
                            <!-- Website -->
                            {#if company.hjemmeside}
                                <div class="mt-4">
                                    <a href="http://{company.hjemmeside}" target="_blank" class="btn btn-outline btn-accent font-bold">{company.hjemmeside}</a>
                                </div>
                            {/if}
							<a class="btn btn-outline btn-accent font-bold" href="/dashboard/profile/edit">Edit</a>
						</div>
						<div class="text-center mt-6">
							<h3 class="text-2xl font-semibold text-blueGray-700">
								{company.navn}
							</h3>
							<div class="text-sm text-blueGray-600 mt-1">
								<i class="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
								{company.organisasjonsform.beskrivelse} ({company.organisasjonsform.kode})
							</div>
                            
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

<div class="container mx-auto px-4">    
    <section class="container">
        <div class="divider"></div>
        <!-- Grid for Detailed Info -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 container">
            <!-- General Information -->
            <div>
                <h3 class="text-lg font-bold">{$_('page.enheter.generalInfo')}</h3>
                <ul class="list-disc pl-5">
                    <li>{$_('page.enheter.organizationNumber')}: {company.organisasjonsnummer}</li>
                    <li>{$_('page.enheter.founded')}: {company.stiftelsesdato}</li>
                    <li>{$_('page.enheter.employees')}: {company.antallAnsatte}</li>
                    <li>{$_('page.enheter.businessType')}: {company.naeringskode1.beskrivelse}</li>
                </ul>
            </div>
    
            <!-- Registration Details -->
            <div>
                <h3 class="text-lg font-bold">{$_('page.enheter.registrationDetails')}</h3>
                <ul class="list-disc pl-5">
                    <li>{$_('page.enheter.registered')}: {company.registreringsdatoEnhetsregisteret}</li>
                    <li>{$_('page.enheter.corporateAssembly')}: {company.registrertIForetaksregisteret ? $_('common.yes') : $_('common.no')}</li>
                    <li>{$_('page.enheter.bankruptcy')}: {company.konkurs ? $_('common.yes') : $_('common.no')}</li>
                    <li>{$_('page.enheter.underLiquidation')}: {company.underAvvikling ? $_('common.yes') : $_('common.no')}</li>
                </ul>
            </div>
    
            <!-- Additional Info -->
            <div>
                <h3 class="text-lg font-bold">{$_('common.additionalInfo')}</h3>
                <ul class="list-disc pl-5">
                    <li>{$_('common.sectorCode')}: {company.institusjonellSektorkode.beskrivelse} ({company.institusjonellSektorkode.kode})</li>
                    <li>{$_('common.registeredInVoluntaryRegistry')}: {company.registrertIFrivillighetsregisteret ? $_('common.yes') : $_('common.no')}</li>
                    <li>{$_('common.dialect')}: {company.maalform}</li>
                </ul>
            </div>
        </div>
        <div class="divider"></div>
        <!-- Address Sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Business Address -->
            <div>
                <h3 class="text-lg font-bold">{$_('page.enheter.businessAddress')}</h3>
                <p>{company.forretningsadresse.adresse.join(", ")}</p>
                <p>{company.forretningsadresse.postnummer} {company.forretningsadresse.poststed}</p>
                <p>{$_('common.norway')}</p>
            </div>
            
            <!-- Postal Address -->
            {#if company.postadresse}
            <div>
                <h3 class="text-lg font-bold">{$_('common.postalAddress')}</h3>
                <p>{company.postadresse.adresse.join(", ")}</p>
                <p>{company.postadresse.postnummer} {company.postadresse.poststed}</p>
                <p>{$_('common.norway')}</p>
            </div>
            {/if}
        </div>
    </section>
  
	<Chat />
</div>

<svelte:head>
    <title>{company.navn} | {$page.siteName}</title>
    <link rel="canonical" href={`https://${$page.url.origin}/enheter/${company.organisasjonsnummer}`} />
    <meta name="description" content={$_('page.enheter_organisasjonsnummer.description', { companyName: company.navn })} />
    <meta name="keywords" content={`${company.navn}, ${company.organisasjonsform.beskrivelse}, ${$_('common.norwegianCompany')}, ${company.naeringskode1.beskrivelse}`} />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content={`${company.navn} | ${$page.siteName}`} />
    <meta property="og:description" content={$_('page.enheter_organisasjonsnummer.description', { companyName: company.navn })} />
    <meta property="og:url" content={`https://${$page.url.origin}/enheter/${company.organisasjonsnummer}`} />
    <meta property="og:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`} />
    <meta property="og:site_name" content={$page.siteName} />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:title" content={`${company.navn} | ${$page.siteName}`} />
    <meta name="twitter:description" content={$_('page.enheter_organisasjonsnummer.description', { companyName: company.navn })} />
    <meta name="twitter:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`} />

    <!-- Schema.org for Google -->
    <meta itemprop="name" content={`${company.navn} | ${$page.siteName}`} />
    <meta itemprop="description" content={$_('page.enheter_organisasjonsnummer.description', { companyName: company.navn })} />
    <meta itemprop="image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`} />
</svelte:head>
