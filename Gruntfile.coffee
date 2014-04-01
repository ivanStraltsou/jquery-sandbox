'use strict'

module.exports = (grunt) ->
  config =
    app: './'
    dist: 'dist'

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.initConfig(
    config: config

    # copy configuration
    copy:
      dist:
        files: [
          {
            expand: true
            cwd: 'reveal.js/'
            dest: 'dist/'
            src: [
              '**',
              '!package.json',
              '!.travis.yml'
            ]
          }
        ]

    clean:
      dist:
        src: [
          '<%= config.dist %>/*',
          '!<%= config.dist %>/web.js',
          '!<%= config.dist %>/Procfile',
          '!<%= config.dist %>/package.json',
          '!<%= config.dist %>/package2.json'
        ]
        force: true
  )

  grunt.registerTask('build', ['clean:dist', 'copy:dist'])

  return