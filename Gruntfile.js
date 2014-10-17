module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("docready.json"),
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  By: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
				" *  License: <%= pkg.licenses[0].type %>\n" +
				" */\n"
		},
		concat: {
			dist: {
				src: ["src/docready.js"],
				dest: "dist/docready.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		jshint: {
			files: ["src/docready.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			my_target: {
				src: ["src/docready.js"],
				dest: "dist/docready.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		watch: {
		    scripts: {
				files: ['src/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['dist/*.html'],
			},
		    tasks: ['default']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
	grunt.registerTask("testjs", ["jshint"]);

};
