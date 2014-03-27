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
    watch: {
        files: '<%= jshint.src %>',
            tasks: ['jshint']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', 'jshint');

  grunt.loadNpmTasks('grunt-contrib-watch');
};