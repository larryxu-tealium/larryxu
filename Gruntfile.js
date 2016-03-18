module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            main : {
                src: 'less/*',
                dest: 'css/app.css'
            }
        },
        postcss: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                src: 'css/app.css'
            }
        },
        watch: {
            css: {
                files: ['**/*.less', '**/*.html'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['less:main', 'postcss']);

};