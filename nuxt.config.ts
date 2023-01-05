// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	css: ['/assets/styles/main.scss'],
	app: {
		head: {
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
