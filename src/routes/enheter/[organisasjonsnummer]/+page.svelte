<script>
    import { page } from '$app/stores';

    const company = $page.data.companyData;
</script>

<div class="container mx-auto px-4 py-8">
    <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title text-3xl">{company.navn}</h2>
            <p class="text-xl">{company.organisasjonsform.beskrivelse} ({company.organisasjonsform.kode})</p>

            <div class="divider"></div>

            <!-- Company Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 class="text-lg font-bold">Generell informasjon</h3>
                    <ul class="list-disc pl-5">
                        <li>Organisasjonsnummer: {company.organisasjonsnummer}</li>
                        <li>Stiftelsesdato: {company.stiftelsesdato}</li>
                        <li>Antall ansatte: {company.antallAnsatte}</li>
                        <li>Næringskode: {company.naeringskode1.beskrivelse}</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold">Registreringsdetaljer</h3>
                    <ul class="list-disc pl-5">
                        <li>Registrert i Enhetsregisteret: {company.registreringsdatoEnhetsregisteret}</li>
                        <li>Registrert i Foretaksregisteret: {company.registrertIForetaksregisteret ? 'Ja' : 'Nei'}</li>
                        <li>Konkurs: {company.konkurs ? 'Ja' : 'Nei'}</li>
                        <li>Under avvikling: {company.underAvvikling ? 'Ja' : 'Nei'}</li>
                    </ul>
                </div>
            </div>

            <div class="divider"></div>

            <!-- Address Section -->
            <div>
                <h3 class="text-lg font-bold">Forretningsadresse</h3>
                <p>{company.forretningsadresse.adresse.join(", ")}</p>
                <p>{company.forretningsadresse.postnummer} {company.forretningsadresse.poststed}</p>
                <p>Norge</p>
            </div>
        </div>
    </div>
</div>

<svelte:head>
    <title>{company.navn} | altlokalt</title>
    <!-- Canonical Link -->
    <link rel="canonical" href={`https://${$page.data.siteName}/enheter/${company.organisasjonsnummer}`} />
    <meta name="description" content={`Finn ut mer om ${company.navn}, deres tjenester og bedriftsdetaljer.`} />
    <meta name="keywords" content={`${company.navn}, ${company.organisasjonsform.beskrivelse}, Norsk bedrift, ${company.naeringskode1.beskrivelse}`} />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content={`${company.navn} | altlokalt`} />
    <meta property="og:description" content={`Finn ut mer om ${company.navn} og deres virksomhet i Norge.`} />
    <meta property="og:url" content={`https://${$page.data.siteName}/enheter/${company.organisasjonsnummer}`} />
    <meta property="og:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`} />
    <meta property="og:site_name" content={$page.data.siteName} />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:title" content={`${company.navn} | ${$page.data.siteName}`} />
    <meta name="twitter:description" content={`Finn ut mer om ${company.navn} og deres virksomhet.`} />
    <meta name="twitter:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`} />

    <!-- Schema.org for Google -->
    <meta itemprop="name" content={`${company.navn} | ${$page.data.siteName}`} />
    <meta itemprop="description" content={`Informasjon om ${company.navn}, et ${company.organisasjonsform.beskrivelse} i Norge.`} />
    <meta itemprop="image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`} />
</svelte:head>
