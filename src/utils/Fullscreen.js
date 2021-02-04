import screenfull from 'screenfull';

const typeList = ['dblclick', 'click'];

const oneOf = (target, list) => list.some((item) => target === item);

const isFunction = (fn) => typeof fn === 'function' && fn instanceof Function;

const isElement = (el) => typeof el === 'object' && el.nodeType === 1;

export default {
    name: 'fullscreen',
    abstract: true,
    props: {
        // 绑定元素
        bind: {
            type: [String, HTMLElement, Function],
            default: '', // 默认为空 代表 document.documentElement
        },
        type: {
            type: String,
            default: 'dblclick',
            validator(val) {
                return oneOf(val, typeList);
            },
        },
    },
    data() {
        return {};
    },
    render() {
        try {
            const vnode = this.$slots.default[0]; // 子组件的vnode
            const event = vnode.data; // 子组件绑定的click事件
            event.style = {
                cursor: 'pointer',
            };
            event.on = {
                [this.type]: this.bindFullScreen,
            };
            return vnode;
        } catch (e) {
            console.error('[fullscreen] must contain elements');
            return null;
        }
    },
    computed: {
        doc() {
            return document.documentElement || document.body;
        },
    },
    mounted() {
        if (screenfull.enabled) {
            screenfull.on('change', this.toggleFullScreen);
            document.addEventListener('keydown', this.handleKeydown);
        }
    },
    methods: {
        bindFullScreen() {
            if (screenfull.enabled) {
                if (isFunction(this.bind)) {
                    this.bind.call(this, (el) => {
                        screenfull.toggle(el || this.doc);
                    });
                    return;
                }
                let el = null;
                if (this.bind) {
                    el = isElement(this.bind) ? this.bind : document.querySelector(this.bind);
                } else {
                    el = this.doc;
                }
                return screenfull.toggle(el);
            }
            console.error('current browser environment not support full screen');
        },
        handleKeydown(event) {
            event.stopPropagation();
            if (event.keyCode === 122) {
                event.preventDefault();
                this.bindFullScreen();
            }
            return false;
        },
        toggleFullScreen() {
            this.$emit('change', screenfull.isFullscreen);
        },
    },
    beforeDestroy() {
        if (screenfull.enabled) {
            screenfull.off('change', this.toggleFullScreen);
            document.removeEventListener('keydown', this.handleKeydown);
        }
    },
};
