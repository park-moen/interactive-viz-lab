import antfu from '@antfu/eslint-config';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: true,
    stylistic: {
      semi: true,
    },
  },
  {
    ignores: ['**', '!src/**'],
  },
  {
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    plugins: betterTailwindcss.configs.recommended.plugins,
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/app/styles.css',
      },
    },
    rules: betterTailwindcss.configs.recommended.rules,
  },
);
