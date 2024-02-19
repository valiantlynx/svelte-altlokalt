<script>
	import BlogGrid from '$lib/components/BlogGrid.svelte';
  import { page } from '$app/stores';

</script>


<div class="w-full mt-4 flex flex-wrap -m-4 p-10 items-center">
	<h2 class="text-3xl font-bold w-full ">Alle enheter</h2>
	<BlogGrid />
</div>



<svelte:head>
	<title>{$page.data.siteName}</title>
	<!-- Canonical Link -->
	<link rel="canonical" href="https://{$page.data.siteName}/" />
	<!-- Author Meta Tag -->
	<meta name="author" content="{$page.data.siteName}" />
	<!--OWN STUFF-->
	<link rel="dns-prefetch" href="https://{$page.data.siteName}" />

	<meta name="apple-mobile-web-app-title" content={$page.data.siteName} />

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	<meta name="mobile-web-app-capable" content="yes" />

	<!-- Open Graph Meta Tags (for social media sharing) -->
	<meta property="og:title" content={$page.data.siteName} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.origin} />
	<!--meta property="og:image" content="/twitter-image.png" /-->
	<meta property="og:image:alt" content="{$page.data.siteName} Logo" />
	<meta property="og:site_name" content={$page.data.siteName} />

	<!-- Twitter Meta Tags (for social media sharing) -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$page.data.siteName} />
	<meta name="twitter:description" content="ValiantLynx.com is an innovative digital platform dedicated to empowering creators, tech enthusiasts, and curious minds. Our website offers a dynamic blend of inspiring blog posts, cutting-edge project showcases, and a vibrant community space. Dive into a world where technology meets creativity, with in-depth articles, engaging tutorials, and the latest tech trends. Whether you're a seasoned developer, a creative professional, or just passionate about technology, ValiantLynx.com is your go-to source for insights, inspiration, and cutting-edge digital exploration. Join us at ValiantLynx.com – where technology and creativity converge to spark imagination and drive innovation."/>
	<!--meta name="twitter:image" content="/twitter-image.png" /-->

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={$page.data.siteName} />

	<!-- Facebook Meta Tags (for social media sharing) -->
	<meta property="fb:app_id" content={$page.data.siteName} />
	<meta property="fb:admins" content={$page.data.siteName} />
	<meta property="fb:page_id" content={$page.data.siteName} />
	<meta property="fb:site_name" content={$page.data.siteName} />
	<meta property="article:publisher" content={$page.data.siteName} />
	<meta property="article:author" content={$page.data.siteName} />
	<meta property="article:section" content={$page.data.siteName} />
	<meta property="article:tag" content={$page.data.siteName} />
	<meta property="article:published_time" content={$page.data.siteName} />
	<meta property="article:modified_time" content={$page.data.siteName} />
	<meta property="article:expiration_time" content={$page.data.siteName} />
	<meta property="article:author:first_name" content={$page.data.siteName} />
	<meta property="article:author:last_name" content={$page.data.siteName} />
	<meta property="article:author:username" content={$page.data.siteName} />

	<!-- Schema.org Meta Tags (for SEO) -->
	<meta itemprop="headline" content={$page.data.siteName} />
	<meta itemprop="description" content="ValiantLynx.com is an innovative digital platform dedicated to empowering creators, tech enthusiasts, and curious minds. Our website offers a dynamic blend of inspiring blog posts, cutting-edge project showcases, and a vibrant community space. Dive into a world where technology meets creativity, with in-depth articles, engaging tutorials, and the latest tech trends. Whether you're a seasoned developer, a creative professional, or just passionate about technology, ValiantLynx.com is your go-to source for insights, inspiration, and cutting-edge digital exploration. Join us at ValiantLynx.com – where technology and creativity converge to spark imagination and drive innovation." />
	<!--meta itemprop="image" content="/twitter-image.png" /-->
	<!-- Keywords Meta Tag -->
	<meta name="keywords" content="{import.meta.env.VITE_SITE_TAGS} {$page.data.siteName}" />
</svelte:head>


