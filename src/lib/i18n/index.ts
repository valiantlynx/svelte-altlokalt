// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'nb';

register('en', () => import('./locales/en.json'));
register('nb', () => import('./locales/nb.json'));
register('no', () => import('./locales/nb.json'));
register('nn', () => import('./locales/nn.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});
