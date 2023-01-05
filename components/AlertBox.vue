<template>
	<div class="row mb-2 justify-content-center">
		<div class="col-12 col-lg-8">
			<div class="alert alert-danger">
				<strong>{{ message }}</strong>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			message: {
				type: String,
				default() {
					return ''
				},
			},
		},
	}
</script>

<style></style>
