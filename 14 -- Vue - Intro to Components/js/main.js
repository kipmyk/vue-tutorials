Vue.component('greeting',{

	template:'<p>Hey there? this is a reusable {{name}} . <button @click="changeName">Change Name</button></p>',
	data: function(){
		return {
			name: 'mie'
		}
	},

	methods:{

		changeName: function(){
			this.name = 'messa'
		}
	}
	
});


var vm = new Vue({

	el: "#vue-app-one"

});


var vm = new Vue({

	el: "#vue-app-two"

});