var vm = new Vue({

	el: "#vue-app",
	data:{
		keyboardevent: 'Keyboard Events in Vuejs'
	},
	methods:{
		logName: function(){
			console.log('You Entered Your Name');
		},
		logAge: function(){
			console.log('You entered Your Age.');
		}
	}

});