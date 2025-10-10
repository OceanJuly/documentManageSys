<template>
	<a-layout class="layout-content">
		<a-layout-header>
			<LayoutHeader />
		</a-layout-header>
		<a-layout>
			<a-layout-sider theme="dark">Sider</a-layout-sider>
			<a-layout-content>
				<router-view />
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	import { LayoutHeader } from './components'
</script>

<style scoped>
	.layout-content {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
