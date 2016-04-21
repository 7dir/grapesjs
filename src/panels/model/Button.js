define([ 'backbone','require'],
	function (Backbone, require) {
	/**
	 * @class Button
	 * */
	return Backbone.Model.extend({

		defaults :{
			id: '',
			className: '',
			command: '',
			context: '',
			buttons: [],
			attributes: {},
			active: false,
		},

		initialize: function(options) {
			if(this.get('buttons').length){
				var Buttons	= require('./Buttons');
				this.set('buttons', new Buttons(this.get('buttons')) );
			}
		},

	});
});
