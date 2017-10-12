var vm = new Vue({

	el: "#vue-app",
	data:{
		events: 'Event Modifiers',
		age: 23,
		website: "https://www.vuejs.org"

	},
	methods:{
		add: function(inc){
			this.age +=inc;
		},
		substract: function(dec){
			this.age -=dec;
		},
		click: function(){
			alert("You clicked me");
		}
	}

});