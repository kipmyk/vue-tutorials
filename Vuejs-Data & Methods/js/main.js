var vm = new Vue({

	el: "#vue-app",

	data:{
		name:"mykkip",
		job:"front end developer @ cybernox.io",
	},

	methods:{
		greet: function(time){
			return 'Good '+ time + ' ' + this.name;
			//to access the data we use this ey proper
			
		}
	}

})