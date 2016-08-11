module.exports = function(grunt) {
	grunt.initConfig({
		postcss: {
			// mobile: {
			// 	options: {
			// 		map: true,
			// 		processors: [
			// 			require('autoprefixer')({browsers: ['last 2 versions', '>3%']})
			// 		]
			// 	},
			// 	dist: {
			// 		src: 'src/css/puchMain.css',
			// 		dest: 'build/css/puchMain.css'
			// 	}
			// },
			// desk: {
			// 	options: {
			// 		map: true,
			// 		processors: [
			// 			require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9', '>3%']})
			// 		]
			// 	},
			// 	dist: {
			// 		src: 'src/css/puchTabletDesktop.css',
			// 		dest: 'build/css/puchTabletDesktop.css'
			// 	}
			// }


			options: {
				map: true,
				processors: [
					// require('pixrem')(),
					require('autoprefixer')({browsers: ['last 4 versions', 'ie 8', 'ie 9', '>2%']})
				]
			},
			dist: {
				// src: 'src/css/*.css',
				// dest: 'build/css/*.css'
				src: 'src/css/litu.css',
				dest: 'build/css/litu.css'
				// src: 'src/css/lituTabletDesktop.css',
				// dest: 'build/css/lituTabletDesktop.css'
			}
		},
		copy: {
			devHtml: {
				files: [{expand: true, cwd: 'src/', src: ['*.html'], dest: 'build/'}]
			},
			devScripts: {
				files: [{expand: true, cwd: 'src/js', src: ['*.js'], dest: 'build/js/'}]
			}//,
			// devStyles: {
			// 	files: [{expand: true, cwd: 'src/css', src: ['*'], dest: 'build/css/'}]
			// }
		}//,

		// watch: {
		// 	// jansenFiles: {
		// 	// 	files: ['src/web/noncmscss/2015coleccionPrimavera.css', 'src/coleccion.html', 'src/web/noncmsjs/2015coleccionPrimavera.js'],
		// 	// 	tasks: ['autoprefixer', 'copy:devHtml', 'copy:devScripts']
		// 	// }
		// }
	});
	grunt.loadNpmTasks('grunt-postcss');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-contrib-watch');

	//Task setup
	grunt.registerTask('default', ['postcss', 'copy']);//
};