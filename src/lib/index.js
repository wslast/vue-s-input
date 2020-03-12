import VueSInput from "./VueSInput.vue";

const comment = {
	install: function (Vue) {
		Vue.component(VueSInput.name, VueSInput)
	}
}

if(typeof window !== 'undefined' && window.Vue){
	window.Vue.use(comment)
}

export default comment
