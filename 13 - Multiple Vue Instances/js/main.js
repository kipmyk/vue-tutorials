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
		changeTitle: function(){
			one.title = "Title changed";
		}
	},
	computed:{
		wow: function(){
			return 'wow!!';
		}
	}

});

two.title = "changed from outside the instance"