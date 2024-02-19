<script>
    import { page } from '$app/stores';

    const company = $page.data.companyData;
</script>
  
  <div class="container mx-auto px-4 py-8">
	<div class="card bg-base-100 shadow-xl">
	  <div class="card-body">
		<h2 class="card-title text-3xl">{company.navn}</h2>
		<p class="text-xl">{company.organisasjonsform.beskrivelse} ({company.organisasjonsform.kode})</p>
  
		<div class="divider"></div> <!-- Stylish divider -->
  
		<!-- Company Details -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		  <div>
			<h3 class="text-lg font-bold">General Information</h3>
			<ul class="list-disc pl-5">
			  <li>Organization Number: {company.organisasjonsnummer}</li>
			  <li>Founded: {company.stiftelsesdato}</li>
			  <li>Employees: {company.antallAnsatte}</li>
			  <li>Business Type: {company.naeringskode1.beskrivelse}</li>
			</ul>
		  </div>
		  <div>
			<h3 class="text-lg font-bold">Registration Details</h3>
			<ul class="list-disc pl-5">
			  <li>Registered: {company.registreringsdatoEnhetsregisteret}</li>
			  <li>Corporate Assembly: {company.registrertIForetaksregisteret ? 'Yes' : 'No'}</li>
			  <li>Bankruptcy: {company.konkurs ? 'Yes' : 'No'}</li>
			  <li>Under Liquidation: {company.underAvvikling ? 'Yes' : 'No'}</li>
			</ul>
		  </div>
		</div>
  
		<div class="divider"></div>
  
		<!-- Address Section -->
		<div>
		  <h3 class="text-lg font-bold">Business Address</h3>
		  <p>{company.forretningsadresse.adresse.join(", ")}</p>
		  <p>{company.forretningsadresse.postnummer} {company.forretningsadresse.poststed}</p>
		  <p>{company.forretningsadresse.land}</p>
		</div>
	  </div>
	</div>
  </div>
  

  <svelte:head>
    <title>{company.navn} | altlokalt</title>
    <!-- Canonical Link -->
    <link rel="canonical" href={`https://${$page.data.siteName}/enheter/${company.organisasjonsnummer}`} />
	<meta name="author" content="{$page.data.siteName}" />
    <!-- Description Meta Tag -->
    <meta name="description" content={`Learn more about ${company.navn}, their services, and company details.`} />
    <!-- Keywords Meta Tag -->
    <meta name="keywords" content={`${company.navn}, ${company.organisasjonsform.beskrivelse}, Norwegian Company, ${company.naeringskode1.beskrivelse}`} />

    <!-- Mobile Web App Meta Tags -->
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content={$page.data.siteName} />

    <!-- Open Graph Meta Tags (for social media sharing) -->
    <meta property="og:title" content={`${company.navn} | altlokalt`} />
    <meta property="og:type" content="business.business" />
    <meta property="og:url" content={`https://${$page.data.siteName}/enheter/${company.organisasjonsnummer}`} />
    <meta property="og:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`}/>
    <meta property="og:description" content={`Learn more about ${company.navn} and their business operations in Norway.`} />
    <meta property="og:site_name" content={$page.data.siteName} />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`} />
    <meta name="twitter:title" content={`${company.navn} | ${$page.data.siteName}`} />
    <meta name="twitter:description" content={`Learn more about ${company.navn} and their business operations.`} />
    <meta name="twitter:image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`}/> <!-- Adjust as needed -->

    <!-- Additional Meta Tags for SEO and Social Media -->
    <!-- Schema.org for Google -->
    <meta itemprop="name" content={`${company.navn} | ${$page.data.siteName}`} />
    <meta itemprop="description" content={`Information about ${company.navn}, a ${company.organisasjonsform.beskrivelse} in Norway.`} />
    <meta itemprop="image" content={`https://via.placeholder.com/1200x628/4506CB/FFFFFF/?text=${company.navn}`}/> <!-- Adjust as needed -->
</svelte:head>