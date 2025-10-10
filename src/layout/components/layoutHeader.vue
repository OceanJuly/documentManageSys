<template>
	<div class="layout-header-wrap">
		<v-toolbar :title="SYS_TITLE">
			<a-space>
				<a-input-search placeholder="请输入关键词" />

				<a-button type="primary">创建Excel</a-button>

				<v-avatar color="info" size="small"> ZF </v-avatar>
			</a-space>
		</v-toolbar>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	import { SYS_TITLE } from '@/utils/constant.ts'
</script>

<style scoped>
	.layout-header-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 24px;
		.sys-title {
			font-size: 24px;
			font-weight: bold;
			display: flex;
			align-items: center;
		}
	}
</style>
