var vm = new Vue({

	el: "#vue-app",
	data:{
		cssd: 'Dynamic CSS Classes',
		ei: 'Example 1',
		eii: 'Example 2',
		available: false,
		nearby: false,
	},
	methods:{

	},
	computed:{
		compClasses: function(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}

});