# React + TypeScript + Vite

### Сокращение путей в Typescript, Vite, Webpack, Rollup и ESBuild

- [Сокращение путей с помощью алиасов ](https://vc.ru/dev/661503-sokrashenie-putei-s-pomoshyu-aliasov)

#### При импорте путей по алиасу тесты не работают с ошибкой:

```bash
Error: Failed to resolve import "@/components/features/counter/Counter" from "src/features/app/App.tsx". Does the file exist?
```

Чтобы это исправить нужно убрать прописанные в конфиге `Vite` и/или `Vitest` настройки `alias` и [Наиболее практичным решением является установка `vite-tsconfig-paths` и изменение `vite.config.ts` (если используется, то и `vitest.config.ts`)следующим образом:](https://stackoverflow.com/questions/77794583/how-can-i-add-alias-to-vitest-config-file)

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

> **Разъяснение разницы между Vitest и React Testing Library:**
>
> Перед установкой React Testing Library я хочу прояснить разницу между Vitest и React Testing Library и зачем нам обе. Сначала я был в замешательстве, зачем нам нужны две библиотеки тестирования в одном проекте.
>
> Чтобы прояснить ситуацию, поймите, что **Vitest не является альтернативой React Testing Library**. Они оба дополняют друг друга.

### Vitest

- [Getting Started ](https://vitest.dev/guide/)

  - [Configuring Vitest ](https://vitest.dev/guide/#configuring-vitest)

    Если вы уже используете Vite, добавьте свойство `test` в конфигурацию Vite.

    > **Примечание:** Если вы используете TypeScript, убедитесь, что в файле конфигурации Vite есть директива тройной косой черты `/// <reference types="vitest" />`. Это позволяет TypeScript использовать типы Vitest. Если вы используете JavaScript, этот шаг можно пропустить.

    `vite.config.ts`:

    ```TypeScript
    /// <reference types="vitest" />
    import { defineConfig } from 'vite';

    export default defineConfig({
    	test: {
    		// ...
    	},
    });
    ```

    Если вы решите иметь два отдельных файла конфигурации для Vite и Vitest, обязательно определите одни и те же параметры Vite в файле конфигурации Vitest, поскольку он будет переопределять ваш файл Vite, а не расширять его. Вы также можете использовать метод mergeConfig из записей vite или vitest/config, чтобы объединить конфигурацию Vite с конфигурацией Vitest:

    ```ts
    import { defineConfig, mergeConfig } from 'vitest/config';
    import viteConfig from './vite.config.ts';

    export default mergeConfig(
    	viteConfig,
    	defineConfig({
    		test: {
    			// ...
    		},
    	})
    );
    ```

    > **Примечание:** Однако мы рекомендуем использовать один и тот же файл для Vite и Vitest вместо создания двух отдельных файлов.

    Хорошим решением объединить конфигурацию `Vite` и `Vitest` в одном файле будет следующее: мы можем использовать метод `mergeConfig` из `vite` или `vitest/config`:

    ```ts
    /// <reference types="vitest" />

    import react from '@vitejs/plugin-react';
    import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
    import tsconfigPaths from 'vite-tsconfig-paths';
    import { defineConfig as defineVitestConfig } from 'vitest/config';

    const viteConfig = defineViteConfig({
    	plugins: [tsconfigPaths(), react()],
    });

    const vitestConfig = defineVitestConfig({
    	test: {
    		environment: 'jsdom', // 'happy-dom' or 'jsdom' or 'node'
    		globals: true,
    		setupFiles: ['src/setupTests.ts'],
    	},
    });

    export default mergeConfig(viteConfig, vitestConfig);
    ```

<hr>

#### Существуют проблемы:

[From Jest to Vitest - Migration and Benchmark ](https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl)

- `ReferenceError: document is not defined`
  - необходимо определить `environment` в настройках `Vitest`:
    ```js
    	test: {
    		environment: 'jsdom', // 'happy-dom' or 'jsdom' or 'node'
    		//...
    	},
    ```
- `Error: Invalid Chai property: toBeInTheDocument`
  - `toBeInTheDocument` не является свойством Chai.
    `toBeInTheDocument` — это API `js-dom` тестовой библиотеки, а часть, ответственная за его включение и добавление его утверждений — это файл настройки теста (в приложении `create react` это файл `testSetup.js` в корне проекта). Я создаю файл конфигурации с именем `vite.config.ts` и устанавливаю конфигурацию следующим образом:
    ```js
    test: {
    	//...
    	globals: true,
    	setupFiles: ['src/setupTests.ts'],
    },
    ```
    `src/setupTests.ts`:
    ```js
    import '@testing-library/jest-dom/vitest';
    ```
    Как вы видите, я указываю местоположение файла настройки, который загружает необходимый `jest-dom`, а также обратите внимание, что у меня свойство `globals` установлено в `true`. Это означает, что мне не нужно импортировать те глобальные переменные, которые есть в Jest, такие как `describe`, `expect` и т. д.
- `ReferenceError: jest is not defined`
  - Мы используем `jest` в этом тесте для создания функций шпиона/заглушки (`spy`/`stub`) с помощью `jest.fn()`, но у `Vitest` есть другой способ добиться этого — у него та же реализация, но под `vi`. Поэтому вместо этого нам нужно использовать `vi.fn()`
    ```js
    import { vi } from 'vitest';
    ```
    ```js
    it('should be able to receive a handler for the "Cancel" button and   execute it upon click', () => {
    	const onCancellationHandler = vi.fn();
    	//...
    });
    ```
- `expect(screen.getByText(/click on the vite and react logos/i)).toBeInTheDocument();` - Свойство `toBeInTheDocument` не существует в типе `Assertion<HTMLElement>`

  - необходимо переименовать `setupTests.js` в `setupTests.ts`
  - а также изменить `setupFiles` в `vite.config.ts`
    ```js
    test: {
      //...
      setupFiles: ['src/setupTests.ts'],
    },
    ```

<hr>

### [Mocking](https://vitest.dev/guide/features.html#mocking)

`Vitest` поддерживает [happy-dom](https://github.com/capricorn86/happy-dom) или [jsdom](https://github.com/jsdom/jsdom) для имитации DOM и API браузера. Они не поставляются с Vitest, вам нужно будет установить их отдельно:

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
