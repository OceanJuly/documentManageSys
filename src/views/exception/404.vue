<script setup lang="ts">
	import NotFoundImg from '@/assets/images/404.png'
</script>

<template>
	<v-empty-state :image="NotFoundImg">
		<template v-slot:title>
			<div class="text-subtitle-2 mt-8"> Manage your inventory transfers </div>
		</template>

		<template v-slot:actions>
			<v-btn
				class="text-none"
				color="white"
				elevation="1"
				rounded="lg"
				size="small"
				text="回到首页"
				width="96"
			/>
		</template>
	</v-empty-state>
</template>

<style scoped></style>
