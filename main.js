var app = new Vue({
	el: '#app',
	data: {

		ingredientes: [
			{ nombre: 'Queso', checked: false },
			{ nombre: 'Pan', checked: false  },
			{ nombre: 'Papas', checked: false  }
		],

		ingredientesElegidos: [],
		recetasFiltradas: [],

		recetas: [
			{
				titulo: 'Sanguchito',
				instrucciones: 'abres el pan, le echas el queso, te comes esa vaina.',
				ingredientes: [
					"Queso", "Pan",
				]
			},
			{
				titulo: 'Pure de papas',
				instrucciones: 'hierve y esmachaquea las papas, rallale queso, comete esa vaina.',
				ingredientes: [
					"Queso",  "Papas",
				]
			},
		]
	},
	watch: {
		ingredientesElegidos: function () {
			this.$data.recetasFiltradas = []
			this.$data.recetas.forEach(receta => {
				receta.ingredientes.forEach((ingrediente) => this.$data.ingredientesElegidos.forEach((elegido) => {
					if (ingrediente == elegido) {
						this.$data.recetasFiltradas.push(receta)
					}
				}
				))
			});
			var limpiadorDePocetasMas = _.uniq(this.$data.recetasFiltradas);
			this.$data.recetasFiltradas = limpiadorDePocetasMas
		}
	},
	methods: {
		clearAll() {
			this.ingredientesElegidos = []
		}
	/*	filterItems() {
			this.$data.recetas.forEach(receta => {
				receta.ingredientes.forEach((ingrediente) => this.$data.ingredientesElegidos.forEach((elegido) => {
					if (ingrediente == elegido) {
						this.$data.recetasFiltradas.push(receta)
					}
				}
				))
			});
		}
		*/
	}
});
Vue.config.devtools = true;