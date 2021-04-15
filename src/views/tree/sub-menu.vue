<template>
	<div class="sub-menu">
		<div v-if="item.childen">
			<div
				@click="activeById(item._id)"
				:class="['label mk-fs-14 mk-fl-r mk-jc-sb mk-ai-c', { active: item.isActive }]"
			>
				<div class="mk-ps-rl">
					<i
						@click.stop="openById(item._id)"
						:class="[item.isOpen ? 'el-icon-caret-top' : 'el-icon-caret-bottom', 'icon']"
					></i>
					<span>{{ item.name }}</span>
				</div>
				<div class="count mk-fs-12">{{ item.value }}</div>
			</div>
			<transition name="el-zoom-in-top">
				<div v-show="item.isOpen" :class="['sub-menu-content', { close: !item.isOpen }]">
					<SubMenu v-for="(child, index) in item.childen" :key="index" :item="child"></SubMenu>
				</div>
			</transition>
		</div>
		<MenuItem v-else :item.sync="item"></MenuItem>
	</div>
</template>

<script>
import MenuItem from './menu-item.vue';
export default {
	name: 'SubMenu',
	components: { MenuItem },
	inject: ['activeById', 'openById'],
	props: {
		item: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.sub-menu-content {
	padding-left: 30px;
}
.sub-menu-content.close {
	transition: all 0.3s;
	height: 0;
}
.label {
	height: 45px;
	padding: 0 30px;
}
.icon {
	position: absolute;
	left: -20px;
	top: 50%;
	transform: translateY(-50%);
	color: #333333;
}
.count {
	width: 42px;
	background: #cad8f9;
	border-radius: 10px;
	text-align: center;
	font-family: 'OPPOSans';
	color: #4074eb;
	line-height: 20px;
}
</style>
