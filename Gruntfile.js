module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            src: ['Gruntfile.js', 'app/**/*.js', 'test/**/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    require: true,
                    define: true,
                    requirejs: true,
                    describe: true,
                    expect: true,
                    it: true,
                    module: true,
                    exports: true
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "public/css/blog.min.css": "./public/css/*.less"
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/js/blog.min.js': ['public/js/*.js']
                }
            }
        },
        watch: {
            css: {
                files: 'public/css/*.less',
                tasks: ['less']
            },
            scripts: {
                files: ['<%= jshint.src %>', 'public/js/*.js'],
                tasks: ['jshint', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', 'jshint', 'less', 'uglify', 'watch');
};