module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            options: {
                paths: ['less']
            },
            //以下的comileCore為一組，可以依需求增加
            compileCore: {
                src: 'less/source.less', //要compile的less檔
                dest: 'build/css/<%= pkg.name %>.css'  //compile後放置的位置
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};