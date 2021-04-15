<template>
	<div class="tool-bar-selector mk-cs-po">
		<SubMenu v-for="(item, index) in treeList" :key="index" :item="item"></SubMenu>
	</div>
</template>

<script>
import SubMenu from './sub-menu.vue';
export default {
	components: { SubMenu },
	props: {
		unniqueOpened: {
			type: Boolean,
			default: true
		}
	},
	provide() {
		return {
			activeById: this.activeById,
			openById: this.openById
		};
	},
	data() {
		this.treeMap = new Map();
		return {
			defaultActive: '',
			treeList: [
				{
					name: '成都市',
					value: 456,
					isOpen: true,
					isActive: true,
					childen: [
						{
							name: '武侯区',
							value: 456,
							isActive: false
						},
						{
							name: '武侯区',
							value: 456,
							isActive: false
						}
					]
				},
				{
					name: '成都市',
					value: 456,
					isOpen: false,
					isActive: false,
					childen: [
						{
							name: '武侯区',
							value: 456,
							isActive: false
						},
						{
							name: '武侯区',
							value: 456,
							isActive: false
						}
					]
				},
				{
					name: '成都市',
					value: 456,
					isOpen: false,
					isActive: false,
					childen: [
						{
							name: '武侯区',
							value: 456,
							isActive: false
						},
						{
							name: '武侯区',
							value: 456,
							isActive: false
						}
					]
				}
			]
		};
	},
	created() {
		this.typeMap();
	},
	methods: {
		// 将树状菜单降维生成一个map映射
		typeMap() {
			const flatTree = (item, index) => {
				if (item.childen && item.childen.length > 0) {
					item.childen.forEach((i, j) => {
						flatTree(i, `${index}-${j}`);
					});
				}
				item._id = `${index}`;
				this.treeMap.set(`${index}`, item);
				if (item.isActive) this.defaultActive = `${index}`;
			};
			this.treeList.forEach((l, k) => {
				flatTree(l, k);
			});
		},
		// 根据id控制菜单展开
		activeById(id) {
			this.treeMap.get(this.defaultActive).isActive = false;
			this.treeMap.get(id).isActive = true;
			this.defaultActive = id;
			this.openById(id);
		},
		// 根据id控制菜单展开收起
		openById(id) {
			const menu = this.treeMap.get(id);
			if (this.unniqueOpened) {
				const indexArr = id.split('-');
				if (indexArr.length > 1) {
					this.treeMap.get(indexArr.slice(0, indexArr.length - 1).join('-')).childen.forEach(item => {
						if (item != menu) item.isOpen = false;
					});
				} else {
					this.treeList.forEach(item => {
						if (item != menu) item.isOpen = false;
					});
				}
			}
			menu.isOpen = !menu.isOpen;
		}
	}
};
</script>

<style lang="scss">
.tool-bar-selector {
	font-family: 'Microsoft YaHei';
	.active {
		background-color: #ecf1fd;
		color: #4074eb;
		border-right: 2px solid #4074eb;
		z-index: 0;
		&::before {
			content: '';
			display: table-cell;
			width: 256px;
			height: 100%;
			position: absolute;
			right: 0px;
			background-color: #ecf1fd;
			z-index: -1;
		}
	}
}
</style>
