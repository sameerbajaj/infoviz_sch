module.exports = function (grunt) {
    "use strict";

    // Config...
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['F:/Programming/infoviz/week1/INFO247_HW_Highcharts-master/*.*', 'F:/Programming/infoviz/week1/INFO247_HW_Highcharts-master/_css/*.*', 'F:/Programming/infoviz/week1/INFO247_HW_Highcharts-master/_js/*.*']
            }
        },
        // Run a connect server with livereload on http://0.0.0.0:8888
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8888,
                    hostname: '*'
                }
            }
        },
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('server', ['connect:server', 'watch']);

    // Default task when run from terminal $ grunt
    grunt.registerTask('default', ['server']);
};
