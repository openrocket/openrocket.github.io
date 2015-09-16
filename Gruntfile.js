module.exports = function( grunt ) {
  grunt.initConfig({
    watch: {
      livereload: {
        files: [ '*.html', '*.css', '*.js', '*.{png,jpg,jpeg,gif,webp,svg}' ],
        options: { livereload: true }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch'] );
};
