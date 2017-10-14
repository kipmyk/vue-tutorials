var vm = new Vue({

	el: "#vue-app",

	data:{
		name:"Vuejs Data & Methods",
	},

	methods:{
		greet: function(time){
			return 'Good '+ time + ' ' + this.name;
			//to access the data we use this ey proper
			
		}
	}

})