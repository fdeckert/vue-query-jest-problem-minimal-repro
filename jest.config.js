module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/*.spec.(js|ts|tsx)'],
  collectCoverageFrom: ['src/**/*.(js|vue)'],
  coverageReporters: ['text', 'text-summary', 'lcov'],
  coveragePathIgnorePatterns: [
    'toolkit.vue',
    '.i18n.js',
    '-types.js',
    'widget.vue',
    'src/services/*',
    'src/db/*',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
