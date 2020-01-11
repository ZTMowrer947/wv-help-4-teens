// Imports
const { defaults: tsjPreset } = require('ts-jest/presets');

// Export
module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js',
    },
    moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
    transform: {
        ...tsjPreset.transform,
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/components/**/*.vue',
        '<rootDir>/pages/**/*.vue',
    ],
    coverageReporters: ['json', 'text', 'lcovonly', 'clover'],
};
