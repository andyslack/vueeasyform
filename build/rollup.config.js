import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import buble from '@rollup/plugin-buble' // Transpile/polyfill with reasonable browser support
import json from "@rollup/plugin-json"
import image from '@rollup/plugin-image'

export default {
    external: [
        'vue'
    ],
    input: 'src/wrapper.js',
    output: {
        name: 'VueEasyForm',
        exports: 'named',
        globals: {
            vue: 'Vue'
        }
    },
    plugins: [
        json({
            compact: true,
        }),
        image(),
        commonjs(),
        nodeResolve({
            main: true,
            module: true
        }),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
       buble({
           presets: ['validatorjs', 'vuesax'],
           transforms: {
               forOf: false
           },
           objectAssign: 'Object.assign',
        }), // Transpile to ES5*/
    ]
};