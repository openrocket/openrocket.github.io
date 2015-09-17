module.exports = function( grunt ) {
  grunt.initConfig({
    watch: {
      livereload: {
        files: [ '*.html', 'css/*.css', 'js/*.js', 'img/*.{png,jpg,jpeg,gif,webp,svg}' ],
        options: { livereload: true }
      }
    },
    connect: {
      server: {
        options: {
          open: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:server', 'watch'] );
};
