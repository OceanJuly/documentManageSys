<script setup lang="ts">
	import { ref } from 'vue'

	import { UserApi } from '@/api'
	import type { ILoginForm } from '@/types'

	/* 表单 */
	const formRef = ref()
	const form = ref<ILoginForm>({
		userCode: '',
		password: ''
	})
	// 表单校验
	const nameRules = ref([(v: string) => !!v || '请输入用户名'])
	const codeRules = ref([(v: string) => !!v || '请输入密码'])
	// 表单事件
	const handleLogin = async () => {
		const { valid } = await formRef.value.validate()
		if (!valid) {
			return
		}
		const res = await UserApi.login(form.value)
		console.log(res)
	}
</script>

<template>
	<div class="login-right-content">
		<div class="form-content">
			<div class="title">欢迎回来</div>
			<v-sheet class="mx-auto" width="300">
				<v-form ref="formRef">
					<v-text-field
						v-model="form.userCode"
						:rules="nameRules"
						label="工号"
						required
					></v-text-field>

					<v-text-field
						v-model="form.password"
						:rules="codeRules"
						label="密码"
						required
					></v-text-field>

					<div class="d-flex">
						<v-btn class="mt-4" color="success" block @click="handleLogin">
							登录
						</v-btn>
					</div>
				</v-form>
			</v-sheet>
		</div>
	</div>
</template>

<style scoped>
	.login-right-content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		.form-content {
			width: 60%;
			.title {
				font-size: 16px;
				font-weight: 600;
				margin-bottom: 8px;
			}
		}
	}
</style>
