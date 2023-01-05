// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	css: ['/assets/styles/main.scss'],
	app: {
		head: {
			link: [
				{
					href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
					rel: 'stylesheet',
					integrity:
						'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
					crossorigin: 'anonymous',
				},
			],
			script: [
				{
					src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
					type: 'text/javascript',
				},
			],
		},
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
})
