# React + TypeScript + Vite

### Сокращение путей в Typescript, Vite, Webpack, Rollup и ESBuild

- [Сокращение путей с помощью алиасов ](https://vc.ru/dev/661503-sokrashenie-putei-s-pomoshyu-aliasov)

#### При импорте путей по алиасу тесты не работают с ошибкой:

```bash
Error: Failed to resolve import "@/components/features/counter/Counter" from "src/features/app/App.tsx". Does the file exist?
```

Чтобы это исправить нужно убрать прописанные в конфиге `Vite` и/или `Vitest` настройки `alias` и [Наиболее практичным решением является установка `vite-tsconfig-paths` и изменение `vite.config.js` (если используется, то и `vitest.config.js`)следующим образом:](https://stackoverflow.com/questions/77794583/how-can-i-add-alias-to-vitest-config-file)

```js
// install and import tsconfigPaths
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	//add tsconfigPaths() below
	plugins: [tsconfigPaths()],

	// ...
});
```

Плагин [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths):

> Предоставьте Vite возможность разрешать импорт с помощью сопоставления путей TypeScript.

То есть теперь алиасы нужно прописывать только в одном месте - конфиге TypeScript.

<hr>

### [Избегайте экспорта по умолчанию](https://basarat.gitbook.io/typescript/main-1/defaultisbad)

Не рекомендуется использовать экспорт по умолчанию, поскольку он может привести к ошибкам в вашем коде. Вместо этого используйте именованные экспорты.

```js
import { Counter } from '@/components/counter/Counter';
```

`@/components/counter/Counter.tsx`:

```js
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

## Тестирование

### [`Vitest` с `React Testing Library` в `React`-приложении, созданом с помощью `Vite`](https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a)

`Vitest` — это замена для библиотеки тестирования `Jest`, особенно для проектов (в нашем случае React), созданных с помощью `Vite`. Ранее приложения `React`, созданные с помощью инструмента сборки `create-react-app` от Facebook, поставлялись с тестовой средой, использующей библиотеку тестирования React (RTL) и уже настроенный Jest.

С марта 2023 года поддержка инструмента сборки `create-react-app` прекращена, и команда React рекомендует использовать Vite или Parcel в качестве альтернативы для создания приложений React, если вы не хотите использовать ни один из рекомендуемых фреймворков (NextJs, Remix, Gatsby, Expo).

**Разъяснение разницы между Vitest и библиотекой тестирования React:**

Перед установкой React Testing Library я хочу прояснить разницу между Vitest и React Testing Library и зачем нам обе. Сначала я был в замешательстве, зачем нам нужны две библиотеки тестирования в одном проекте.

> Чтобы прояснить ситуацию, поймите, что **Vitest не является альтернативой React Testing Library**. Они оба дополняют друг друга.

### Vitest

- [Getting Started ](https://vitest.dev/guide/)

  - [Configuring Vitest ](https://vitest.dev/guide/#configuring-vitest)

  If you are already using Vite, add test property in your Vite config (`vite.config.ts`). You'll also need to add a reference to Vitest types using a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file.

  ```js
  /// <reference types="vitest" />
  import { defineConfig } from 'vite';

  export default defineConfig({
  	test: {
  		// ...
  	},
  });
  ```

  > `test:{...}` в Vite config (`vite.config.ts`) не работает. Нужно создать `vitest.config.ts`:

  ```js
  // vitest.config.ts
  import { defineConfig } from 'vitest/config';

  export default defineConfig({
  	test: {
  		environment: 'jsdom', // 'happy-dom' or 'jsdom' or 'node'
  	},
  });
  ```

### [Mocking](https://vitest.dev/guide/features.html#mocking)

Vitest поддерживает [happy-dom](https://github.com/capricorn86/happy-dom) или [jsdom](https://github.com/jsdom/jsdom) для имитации DOM и API браузера. Они не поставляются с Vitest, вам нужно будет установить их отдельно:

```bash
$ yarn add i -D happy-dom
# or
$ yarn add i -D jsdom
```

> `happy-dom` работает быстрее, чем `jsdom` но он [содержит ошибки](https://github.com/vitest-dev/vitest/discussions/1607). `jsdom` является старым, проверенным, стабильным решением.

После этого измените `environment` опцию в вашем конфигурационном файле:

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom', // 'happy-dom' or 'jsdom' or 'node'
	},
});
```

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
