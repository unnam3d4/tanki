# Танки: Защити Базу!

HTML5 arcade-defense игра для Яндекс Игр.

## Production baseline

Сейчас в репозитории уже есть:

- главное меню и быстрый старт;
- 6 уровней / секторов;
- 3 сложности;
- desktop + mobile управление;
- волны врагов, элита и финальный босс;
- система усилений после каждой волны;
- сохранение прогресса и звёзд в localStorage;
- отдельный адаптер Yandex Games SDK;
- корректные точки LoadingAPI.ready() и GameplayAPI.start()/stop();
- GitHub Pages как постоянный preview.

## Структура

```text
/
├── index.html
├── src/
│   ├── game.js
│   ├── styles.css
│   └── platform.js
├── docs/
│   └── YANDEX_RELEASE_CHECKLIST.md
└── README.md
```

## Ближайший roadmap

1. Коммерческий sprite/FX слой и звук.
2. Сохранения через Yandex Player Data.
3. Rewarded/fullscreen реклама в логических паузах.
4. Лидерборд.
5. Ежедневные задания / вирусные механики.
6. Финальный QA и ZIP-сборка для загрузки в Яндекс Игры.
