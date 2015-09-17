module.exports = function( grunt ) {
  grunt.initConfig({
    watch: {
      livereload: {
        files: [ '_config.yml', 'Gruntfile.js', '*.html', 'css/*.css', 'js/*.js', 'img/*.{png,jpg,jpeg,gif,webp,svg}' ],
        options: { livereload: true }
      }
    },
    connect: {
      server: {
        options: {
          open: true,
          livereload: true,
          base: '_site'
        }
      }
    },
    jekyll: {
      dist: {
        options: {
          config: '_config.yml'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['jekyll', 'connect:server', 'watch'] );
};
