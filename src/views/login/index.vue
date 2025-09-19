<script setup lang="ts">
	import { LoginLeftContent, LoginRightContent } from './componnets'
</script>

<template>
	<div class="login-container">
		<header class="login-title">协同文档管理系统</header>
		<LoginLeftContent />
		<LoginRightContent />
	</div>
</template>

<style lang="scss">
	.login-container {
		height: 100vh;
		width: 100vw;
		display: flex;
		.login-title {
			font-size: 24px;
			position: absolute;
			top: 12px;
			left: 16px;
			color: #fff;
		}
		.login-form {
			display: flex;
			justify-content: center;
			align-content: center;
			width: 36%;
			background-color: #f3f4f8;
		}
	}
</style>
