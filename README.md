# Next.js 14 + i18n + FSD 🍰


```
src
├── middleware.ts
├── app
│   ├── (routing)
│   │   └── [lang]
│   │       └── /**/*.{ts,tsx}
│   └── providers
│       └── DictionaryProvider.tsx
├── ...
└── shared
    ├── config
    │   └── i18n
    │       ├── constants
    │       │   └── locales.ts
    │       ├── dictionaries
    │       │   ├── en.json
    │       │   └── ...
    │       └── helpers
	│           └── get-locale.ts
	│           └── get-dictionary.ts
	│           └── locale-redirection.ts
    ├── lib
    |   ├── contexts
    |   │   └── DictionaryContext
    |   └── hooks
    |       └── useDictionary
    └── ui
        └── LanguageSwitcher
```