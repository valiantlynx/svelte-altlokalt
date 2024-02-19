<script>
    import { page } from '$app/stores';
    import { _ } from 'svelte-i18n';

    const company = $page.data.companyData;
</script>

<div class="container mx-auto px-4 py-8">
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <!-- Company Name and Type -->
            <div class="flex flex-col md:flex-row justify-between items-center">
                <h2 class="card-title text-3xl mb-4 md:mb-0">{company.navn}</h2>
                <p class="text-xl bg-blue-100 text-blue-800 px-4 py-2 rounded-full">{company.organisasjonsform.beskrivelse} ({company.organisasjonsform.kode})</p>
            </div>

            <!-- Website -->
            {#if company.hjemmeside}
                <div class="mt-4">
                    <a href="http://{company.hjemmeside}" target="_blank" class="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">{company.hjemmeside}</a>
                </div>
            {/if}

            <div class="divider"></div>

            <!-- Grid for Detailed Info -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
        </div>
    </div>
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
