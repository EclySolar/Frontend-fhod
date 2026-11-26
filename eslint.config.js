import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
export default [{ignores:['dist']},{files:['src/**/*.{js,jsx}'],languageOptions:{ecmaVersion:2022,sourceType:'module',parserOptions:{ecmaFeatures:{jsx:true}},globals:{window:'readonly',document:'readonly',sessionStorage:'readonly'}},plugins:{'react-hooks':reactHooks},rules:{...js.configs.recommended.rules,'no-unused-vars':'off'}}]
