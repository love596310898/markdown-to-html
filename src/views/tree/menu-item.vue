<template>
	<div @click="activeById(item._id)" :class="['menu-item mk-fs-14', { active: item.isActive }]">
		{{ item.name }}
	</div>
</template>

<script>
export default {
	inject: ['activeById'],
	props: {
		item: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.menu-item {
	color: #333333;
	line-height: 45px;
	position: relative;
	padding: 0 30px;
}
</style>
