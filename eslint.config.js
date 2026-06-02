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
    plugins: betterTailwindcss.configs.recommended.plugins,
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/index.css',
      },
    },
    rules: betterTailwindcss.configs.recommended.rules,
  },
);
