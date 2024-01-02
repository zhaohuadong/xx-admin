module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'standard', './.eslintrc-auto-import.json', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  plugins: ['vue'],
  rules: {
    'space-before-function-paren': 0,
    camelcase: 0,
    'vue/attribute-hyphenation': 0,
    'vue/multi-word-component-names': 0,
    'vue/valid-define-emits': 0,
    'vue/v-on-event-hyphenation': 0,
  },
}
