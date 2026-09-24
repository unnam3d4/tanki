(()=>{'use strict';
const D={
ru:{
'menu.kicker':'ARCADE DEFENSE','menu.lead':'Удержи базу, разбей волны врагов и усиливай танк после каждого рубежа.','play':'ИГРАТЬ','quick':'БЫСТРЫЙ СТАРТ','settings':'НАСТРОЙКИ','how':'КАК ИГРАТЬ',
'levels.kicker':'КАРТА БОЯ','levels.title':'Выбери сектор','back':'← НАЗАД','difficulty':'Сложность','difficulty.hint':'Для первого прохождения рекомендуем лёгкий режим.','easy':'ЛЕГКО','normal':'НОРМА','hard':'СЛОЖНО','fight':'В БОЙ',
'help.kicker':'УПРАВЛЕНИЕ','help.title':'Защищай центральную базу','help.move':'ДВИЖЕНИЕ','help.aim':'ПРИЦЕЛ','help.fire':'ОГОНЬ','help.upgrade':'УСИЛЕНИЯ','help.desc':'Уничтожай врагов до того, как они разрушат базу. После каждой волны выбери одно усиление.','ok':'ПОНЯТНО',
'pause.kicker':'ПАУЗА','pause.title':'Бой остановлен','resume':'ПРОДОЛЖИТЬ','restart':'ЗАНОВО','menu':'В МЕНЮ',
'settings.kicker':'НАСТРОЙКИ','settings.title':'Комфорт игры','volume':'Громкость','volume.desc':'Общая громкость звуков игры.','sfx':'Звуковые эффекты','sfx.desc':'Выстрелы, взрывы и сигналы интерфейса.','shake':'Тряска экрана','shake.desc':'По умолчанию выключена для комфортной игры.','autopause':'Автопауза','autopause.desc':'Останавливает игру и звук при потере фокуса.','on':'ВКЛЮЧЕНО','off':'ВЫКЛЮЧЕНО','settings.note':'Настройки сохраняются на устройстве. Прогресс игры дополнительно синхронизируется через Яндекс Игры, когда Player API доступен.',
'upgrade.kicker':'УСИЛЕНИЕ','upgrade.title':'Выбери одно улучшение','upgrade.desc':'Одно решение перед следующей волной.',
'result.kicker':'РЕЗУЛЬТАТ','next':'СЛЕДУЮЩИЙ УРОВЕНЬ','retry':'ЕЩЁ РАЗ','map':'К КАРТЕ','points':'ОЧКИ','wave':'ВОЛНА','base':'БАЗА','tank':'ТАНК','targets':'ЦЕЛЕЙ','sector':'СЕКТОР',
'level.0.name':'Зелёный рубеж','level.0.desc':'Лёгкий старт','level.1.name':'Пыльный фронт','level.1.desc':'Песчаный сектор','level.2.name':'Ночной кордон','level.2.desc':'Ночной сектор','level.3.name':'Красная зона','level.3.desc':'Тяжёлая броня','level.4.name':'Ледяной периметр','level.4.desc':'Плотные волны','level.5.name':'Последний рубеж','level.5.desc':'Босс',
'up.damage.name':'Тяжёлые снаряды','up.damage.text':'+22% урона','up.rate.name':'Быстрая перезарядка','up.rate.text':'+20% скорострельности','up.speed.name':'Форсаж','up.speed.text':'+16% скорости','up.repair.name':'Полевой ремонт','up.repair.text':'+28 HP базе','up.armor.name':'Усиленная броня','up.armor.text':'-18% входящего урона','up.multi.name':'Двойной выстрел','up.multi.text':'Два снаряда за залп',
'toast.boss':'БОСС НА ПОДХОДЕ','toast.defend':'ЗАЩИЩАЙ БАЗУ','toast.tankback':'ТАНК ВЕРНУЛСЯ','toast.perfect':'ИДЕАЛЬНАЯ ОБОРОНА','victory':'ПОБЕДА!','defeat':'БАЗА ПАЛА','defeat.text':'Усиль танк и попробуй ещё раз.','level.word':'УРОВЕНЬ','waves.word':'волн'
},
en:{
'menu.kicker':'ARCADE DEFENSE','menu.lead':'Hold the base, crush enemy waves and upgrade your tank after every line of defense.','play':'PLAY','quick':'QUICK START','settings':'SETTINGS','how':'HOW TO PLAY',
'levels.kicker':'BATTLE MAP','levels.title':'Choose a sector','back':'← BACK','difficulty':'Difficulty','difficulty.hint':'Easy is recommended for the first run.','easy':'EASY','normal':'NORMAL','hard':'HARD','fight':'DEPLOY',
'help.kicker':'CONTROLS','help.title':'Protect the central base','help.move':'MOVE','help.aim':'AIM','help.fire':'FIRE','help.upgrade':'UPGRADES','help.desc':'Destroy enemies before they break the base. After each wave, choose one upgrade.','ok':'GOT IT',
'pause.kicker':'PAUSED','pause.title':'Battle paused','resume':'RESUME','restart':'RESTART','menu':'MAIN MENU',
'settings.kicker':'SETTINGS','settings.title':'Game comfort','volume':'Volume','volume.desc':'Master game sound volume.','sfx':'Sound effects','sfx.desc':'Shots, explosions and interface cues.','shake':'Screen shake','shake.desc':'Disabled by default for a more comfortable game.','autopause':'Auto pause','autopause.desc':'Pauses gameplay and sound when focus is lost.','on':'ON','off':'OFF','settings.note':'Settings are stored on this device. Game progress also syncs through Yandex Games when Player API is available.',
'upgrade.kicker':'UPGRADE','upgrade.title':'Choose one upgrade','upgrade.desc':'One choice before the next wave.',
'result.kicker':'RESULT','next':'NEXT LEVEL','retry':'TRY AGAIN','map':'BATTLE MAP','points':'SCORE','wave':'WAVE','base':'BASE','tank':'TANK','targets':'TARGETS','sector':'SECTOR',
'level.0.name':'Green Line','level.0.desc':'Easy start','level.1.name':'Dust Front','level.1.desc':'Desert sector','level.2.name':'Night Border','level.2.desc':'Night sector','level.3.name':'Red Zone','level.3.desc':'Heavy armor','level.4.name':'Frozen Perimeter','level.4.desc':'Dense waves','level.5.name':'Last Stand','level.5.desc':'Boss',
'up.damage.name':'Heavy Shells','up.damage.text':'+22% damage','up.rate.name':'Fast Reload','up.rate.text':'+20% fire rate','up.speed.name':'Overdrive','up.speed.text':'+16% movement speed','up.repair.name':'Field Repair','up.repair.text':'+28 base HP','up.armor.name':'Reinforced Armor','up.armor.text':'-18% incoming damage','up.multi.name':'Double Shot','up.multi.text':'Two shells per volley',
'toast.boss':'BOSS INCOMING','toast.defend':'DEFEND THE BASE','toast.tankback':'TANK RESTORED','toast.perfect':'PERFECT DEFENSE','victory':'VICTORY!','defeat':'BASE LOST','defeat.text':'Upgrade your tank and try again.','level.word':'LEVEL','waves.word':'waves'
}};
let lang='ru';
function setLanguage(v){lang=(String(v||'ru').toLowerCase().startsWith('ru'))?'ru':'en';document.documentElement.lang=lang;apply()}
function t(key){return D[lang]?.[key]??D.ru[key]??key}
function apply(root=document){root.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)})}
window.I18N={setLanguage,t,apply,get lang(){return lang}};
})();