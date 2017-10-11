var vm = new Vue({

	el: "#vue-app",
	data:{
		vueevents: 'Events',
		age: '23',
		x:0,
		y:0
	},
	methods:{
		add: function(inc){
			this.age +=inc;
		},
		subtract: function(dec){
			this.age -=dec;
		},
		updateXY: function(evet){
			this.x = event.offsetX;
			this.x = event.offsetY;
		}
	}

})
