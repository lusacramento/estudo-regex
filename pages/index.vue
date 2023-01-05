<template>
	<div
		id="app"
		class="container mt-5 justify-content-center align-items-center"
	>
		<form
			action="/confirmation"
			method="post"
			class="justify-content-center m-3 align-items-center"
		>
			<AlertBox v-if="!name.isCorrect" :message="name.errorMessage" />
			<div class="row mb-2 justify-content-center">
				<div class="col-12 col-lg-1">
					<label :for="name.name" class="form-label">{{ name.label }}</label>
				</div>
				<div class="col-10 col-lg-6">
					<input
						:name="name.name"
						type="text"
						class="form-control"
						v-model="name.value"
						:placeholder="name.place"
					/>
				</div>
				<div class="col-2 col-lg-1">
					<img
						v-if="name.isCorrect"
						class="img-fluid"
						src="~/assets/img/icon-ok.svg"
						width="35"
						alt=""
					/>
				</div>
			</div>

			<AlertBox v-if="!email.isCorrect" :message="email.errorMessage" />
			<div class="row mb-2 justify-content-center">
				<div class="col-12 col-lg-1">
					<label :for="email.name" class="form-label">{{ email.label }}</label>
				</div>
				<div class="col-10 col-lg-6">
					<input
						:name="email.name"
						type="text"
						class="form-control"
						v-model="email.value"
						:placeholder="email.place"
					/>
				</div>
				<div class="col-2 col-lg-1">
					<img
						v-if="email.isCorrect"
						class="img-fluid"
						src="~/assets/img/icon-ok.svg"
						width="35"
						alt=""
					/>
				</div>
			</div>

			<AlertBox v-if="!phone.isCorrect" :message="phone.errorMessage" />
			<div class="row mb-2 justify-content-center">
				<div class="col-12 col-lg-1">
					<label :for="phone.name" class="form-label">{{ phone.label }}</label>
				</div>
				<div class="col-10 col-lg-6">
					<input
						:name="phone.name"
						type="text"
						class="form-control"
						v-model="phone.value"
						:placeholder="phone.place"
					/>
				</div>
				<div class="col-2 col-lg-1">
					<img
						v-if="phone.isCorrect"
						class="img-fluid"
						src="~/assets/img/icon-ok.svg"
						width="35"
						alt=""
					/>
				</div>
			</div>

			<AlertBox v-if="!cpf.isCorrect" :message="cpf.errorMessage" />
			<div class="row mb-2 justify-content-center">
				<div class="col-12 col-lg-1">
					<label :for="cpf.name" class="form-label">{{ cpf.label }}</label>
				</div>
				<div class="col-10 col-lg-6">
					<input
						:name="cpf.name"
						type="text"
						class="form-control"
						v-model="cpf.value"
						:placeholder="cpf.place"
					/>
				</div>
				<div class="col-2 col-lg-1">
					<img
						v-if="cpf.isCorrect"
						class="img-fluid"
						src="~/assets/img/icon-ok.svg"
						width="35"
						alt=""
					/>
				</div>
			</div>

			<div class="row mb-5 d-flex justify-content-center">
				<div class="col-10 col-lg-3">
					<button type="reset" class="btn btn-secondary mx-2">Limpar</button>
					<button class="btn btn-success" :class="{ disabled: !isAllowSend }">
						Enviar
					</button>
				</div>
			</div>
		</form>
		<p class="text-center">
			<strong>Observação:</strong>
			Este formuário é usado só para demonstração de testes e não envia dados
			para qualquer lugar.
		</p>
	</div>
</template>
<script>
	export default {
		name: 'IndexPage',
		data() {
			return {
				name: {
					name: 'name',
					label: 'Nome',
					value: '',
					regex: /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]+$/,
					isCorrect: true,
					errorMessage: 'O nome deve conter apenas letras!',
					place: 'João da Silva',
				},
				email: {
					name: 'email',
					label: 'Email',
					value: '',
					regex: /^\w+[@]\w+[.]\w+([.]\w+)?$/,
					isCorrect: true,
					errorMessage: 'Insira um email válido!',
					place: 'joao@silva.com.br',
				},
				phone: {
					name: 'phone',
					label: 'Telefone',
					value: '',
					regex: /^\d{2}[-]?\d{4,5}[-]?\d{4}$/,
					isCorrect: true,
					errorMessage: 'Insira um número de telefone válido!',
					place: '11-22222-3333',
				},
				cpf: {
					name: 'cpf',
					label: 'CPF',
					value: '',
					regex: /^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/,
					isCorrect: true,
					errorMessage: 'Insira um CPF válido!',
					place: '111.222.333-44',
				},
				isAllowSend: false,
			}
		},

		watch: {
			name: {
				handler(newName) {
					this.name.isCorrect = this.verifyField(this.name.regex, newName.value)
					console.log('newname: ', newName.value)
					this.verifyAllFields()
				},
				deep: true,
			},

			email: {
				handler(newEmail) {
					this.email.isCorrect = this.verifyField(
						this.email.regex,
						newEmail.value,
					)
					this.verifyAllFields()
				},
				deep: true,
			},

			phone: {
				handler(newPhone) {
					this.phone.isCorrect = this.verifyField(
						this.phone.regex,
						newPhone.value,
					)
					this.verifyAllFields()
				},
				deep: true,
			},

			cpf: {
				handler(newCpf) {
					this.cpf.isCorrect = this.verifyField(this.cpf.regex, newCpf.value)
					this.verifyAllFields()
				},
				deep: true,
			},
		},

		methods: {
			verifyField(regex, field) {
				return regex.test(field)
			},

			verifyAllFields() {
				this.name.isCorrect &&
				this.email.isCorrect &&
				this.phone.isCorrect &&
				this.cpf.isCorrect
					? (this.isAllowSend = true)
					: (this.isAllowSend = false)
			},
		},
	}
</script>
<style>
	html {
		height: 99vh;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
	}
	body {
		display: flex;
		align-items: center;
	}
</style>
