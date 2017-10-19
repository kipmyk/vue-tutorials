var one = new Vue({

	el: "#vue-app-one",
	data:{
		title: 'vue App One',
	},
	methods:{

	},
	computed:{
		greeting: function(){
			return 'hello from the Vue app one';
		}
	}

});

var two = new Vue({

	el: "#vue-app-two",
	data:{
		title: 'Vue App Two',
	},
	methods:{

	},
	computed:{
		wow: function(){
			return 'wow!!';
		}
	}

});