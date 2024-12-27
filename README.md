# React + TypeScript + Vite

### сокращение путей в Typescript, Vite, Webpack, Rollup и ESBuild

- [Сокращение путей с помощью алиасов ](https://vc.ru/dev/661503-sokrashenie-putei-s-pomoshyu-aliasov)

<hr>

### [Избегайте экспорта по умолчанию](https://basarat.gitbook.io/typescript/main-1/defaultisbad)

Не рекомендуется использовать экспорт по умолчанию, поскольку он может привести к ошибкам в вашем коде. Вместо этого используйте именованные экспорты.

```typescript
import { Counter } from '@/components/counter/Counter';
```

`@/components/counter/Counter.tsx`:

```typescript
export const Counter = () => {
	// ...
};
```

<hr>

Рекомендованная "Cody" структура проекта:

```bash
src/
├── assets/          # Static files like images, fonts, global styles
├── components/      # Reusable UI components
│   ├── common/      # Shared basic components (Button, Input, etc)
│   └── features/    # More complex components grouped by feature
├── hooks/           # Custom React hooks
├── layouts/         # Layout components (Header, Footer, etc)
├── pages/           # Page components for routing
├── services/        # API calls and external services
├── store/           # State management (if using Redux/MobX)
├── types/           # TypeScript type definitions
└── utils/           # Helper functions and constants
```

Рекомендованная "QODO GEN" структура проекта:

```bash
src/
├── assets/          # Статические файлы, такие как изображения, шрифты, глобальные стили
├── components/      # Переиспользуемые UI-компоненты
│   ├── common/      # Общие базовые компоненты (Button, Input и т.д.)
│   └── features/    # Более сложные компоненты, сгруппированные по функциям
├── hooks/           # Пользовательские хуки React
├── layouts/         # Компоненты макета (Header, Footer и т.д.)
├── pages/           # Компоненты страниц для маршрутизации
├── services/        # Вызовы API и внешние сервисы
├── store/           # Управление состоянием (если используется Redux/MobX)
├── types/           # Определения типов TypeScript
└── utils/           # Вспомогательные функции и константы
```

<hr>

### Vitest

- [Getting Started ](https://vitest.dev/guide/)

<hr>

## Дополнительная информация

- В статье есть некоторые конструкции, которые считаются ошибочными по мнению автора React Testing Library. Настоятельно рекомендую к прочтению его [статью, где он их подробно разбирает](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [tsconfig.json с комментариями](https://gist.github.com/KRostyslav/82a25c469ffa6652825d58537ac6bc22)
- [React + TypeScript: необходимый минимум](https://habr.com/ru/companies/timeweb/articles/707744/)
  - [Шпаргалка по React + TypeScript](https://my-js.org/docs/cheatsheet/react-typescript/)

<hr>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
	// Set the react version
	settings: { react: { version: '18.3' } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs['jsx-runtime'].rules,
	},
});
```
