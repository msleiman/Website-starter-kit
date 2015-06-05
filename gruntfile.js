	module.exports = function(grunt){
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-compass');
		grunt.initConfig({
			uglify:{
				my_target:{
					files:{
						'js/script.js' : ['component/js/*.js']
					}//files
				}// my_target
			},//uglify
			compass :{
				dev: {
					options:{
						config: 'config.rb'
					}// options
				}//dev
			}, //compass
				watch: {
					options: { livereload: true},
					scripts: {
						files : ['component/js/*.js'],
						tasks: ['uglify']
			}, //scripts

			sass: {
				files: ['component/sass/*scss'],
				tasks: ['compass:dev']
			},//sass
			html: {
				files : ['*.html']
			}
		}// watch
		}) //initConfig
		grunt.registerTask('default', 'watch');
	} //exports
