(()=>{'use strict';
const D={
ru:{
'game.title':'Танки: Защити Базу!','title.top':'ТАНКИ:','title.bottom':'ЗАЩИТИ БАЗУ!',
'menu.kicker':'ARCADE DEFENSE','menu.lead':'Удержи базу, разбей волны врагов и усиливай танк после каждого рубежа.','play':'ИГРАТЬ','quick':'БЫСТРЫЙ СТАРТ','settings':'НАСТРОЙКИ','how':'КАК ИГРАТЬ',
'levels.kicker':'КАМПАНИЯ','levels.title':'Выбери уровень','back':'← НАЗАД','fight':'В БОЙ','campaign.progress':'ПРОГРЕСС','campaign.hint':'Сложность растёт с каждым уровнем. Босс — каждые 5 уровней.',
'help.kicker':'УПРАВЛЕНИЕ','help.title':'Защищай центральную базу','help.move':'ДВИЖЕНИЕ','help.aim':'ПРИЦЕЛ','help.fire':'ОГОНЬ','help.desc':'Уничтожай врагов до того, как они разрушат базу. После каждой волны выбери одно усиление.','ok':'ПОНЯТНО',
'pause.kicker':'ПАУЗА','pause.title':'Бой остановлен','resume':'ПРОДОЛЖИТЬ','restart':'ЗАНОВО','menu':'В МЕНЮ',
'settings.kicker':'НАСТРОЙКИ','settings.title':'Комфорт игры','language':'Язык','language.desc':'Выберите язык интерфейса.','volume':'Громкость','volume.desc':'Общая громкость звуков игры.','sfx':'Звуковые эффекты','sfx.desc':'Выстрелы, взрывы и сигналы интерфейса.','autopause':'Автопауза','autopause.desc':'Останавливает игру и звук при потере фокуса.','on':'ВКЛЮЧЕНО','off':'ВЫКЛЮЧЕНО',
'upgrade.kicker':'УСИЛЕНИЕ','upgrade.title':'Выбери одно улучшение','upgrade.desc':'Одно решение перед следующей волной.',
'result.kicker':'РЕЗУЛЬТАТ','next':'СЛЕДУЮЩИЙ УРОВЕНЬ','retry':'ЕЩЁ РАЗ','map':'К КАРТЕ','points':'ОЧКИ','wave':'ВОЛНА','base':'БАЗА','tank':'ТАНК','targets':'ЦЕЛЕЙ','fire':'ОГОНЬ','combo':'КОМБО','boss.tag':'БОСС','perfect.short':'ИДЕАЛЬНО',
'zone.0.name':'Зелёный рубеж','zone.0.desc':'Учебный сектор','zone.1.name':'Пыльный фронт','zone.1.desc':'Песчаная линия','zone.2.name':'Ночной кордон','zone.2.desc':'Тёмный сектор','zone.3.name':'Красная зона','zone.3.desc':'Тяжёлая броня','zone.4.name':'Ледяной периметр','zone.4.desc':'Холодный фронт','zone.5.name':'Последний рубеж','zone.5.desc':'Финальная линия',
'up.damage.name':'Тяжёлые снаряды','up.damage.text':'+22% урона','up.rate.name':'Быстрая перезарядка','up.rate.text':'+20% скорострельности','up.speed.name':'Форсаж','up.speed.text':'+16% скорости','up.repair.name':'Полевой ремонт','up.repair.text':'+28 HP базе','up.armor.name':'Усиленная броня','up.armor.text':'-18% входящего урона','up.multi.name':'Двойной выстрел','up.multi.text':'Два снаряда за залп',
'toast.boss':'БОСС НА ПОДХОДЕ','toast.defend':'ЗАЩИЩАЙ БАЗУ','toast.tankback':'ТАНК ВЕРНУЛСЯ','toast.perfect':'ИДЕАЛЬНАЯ ОБОРОНА','victory':'ПОБЕДА!','defeat':'БАЗА ПАЛА','defeat.text':'Усиль танк и попробуй ещё раз.','level.word':'УРОВЕНЬ','waves.one':'волна','waves.few':'волны','waves.many':'волн'
},
en:{
'game.title':'Tanks: Defend the Base!','title.top':'TANKS:','title.bottom':'DEFEND THE BASE!',
'menu.kicker':'ARCADE DEFENSE','menu.lead':'Hold the base, crush enemy waves and upgrade your tank after every line of defense.','play':'PLAY','quick':'QUICK START','settings':'SETTINGS','how':'HOW TO PLAY',
'levels.kicker':'CAMPAIGN','levels.title':'Choose a level','back':'← BACK','fight':'DEPLOY','campaign.progress':'PROGRESS','campaign.hint':'Difficulty rises every level. A boss appears every 5 levels.',
'help.kicker':'CONTROLS','help.title':'Protect the central base','help.move':'MOVE','help.aim':'AIM','help.fire':'FIRE','help.desc':'Destroy enemies before they break the base. After each wave, choose one upgrade.','ok':'GOT IT',
'pause.kicker':'PAUSED','pause.title':'Battle paused','resume':'RESUME','restart':'RESTART','menu':'MAIN MENU',
'settings.kicker':'SETTINGS','settings.title':'Game comfort','language':'Language','language.desc':'Choose the interface language.','volume':'Volume','volume.desc':'Master game sound volume.','sfx':'Sound effects','sfx.desc':'Shots, explosions and interface cues.','autopause':'Auto pause','autopause.desc':'Pauses gameplay and sound when focus is lost.','on':'ON','off':'OFF',
'upgrade.kicker':'UPGRADE','upgrade.title':'Choose one upgrade','upgrade.desc':'One choice before the next wave.',
'result.kicker':'RESULT','next':'NEXT LEVEL','retry':'TRY AGAIN','map':'BATTLE MAP','points':'SCORE','wave':'WAVE','base':'BASE','tank':'TANK','targets':'TARGETS','fire':'FIRE','combo':'COMBO','boss.tag':'BOSS','perfect.short':'PERFECT',
'zone.0.name':'Green Line','zone.0.desc':'Training sector','zone.1.name':'Dust Front','zone.1.desc':'Desert line','zone.2.name':'Night Border','zone.2.desc':'Dark sector','zone.3.name':'Red Zone','zone.3.desc':'Heavy armor','zone.4.name':'Frozen Perimeter','zone.4.desc':'Frozen front','zone.5.name':'Last Stand','zone.5.desc':'Final line',
'up.damage.name':'Heavy Shells','up.damage.text':'+22% damage','up.rate.name':'Fast Reload','up.rate.text':'+20% fire rate','up.speed.name':'Overdrive','up.speed.text':'+16% movement speed','up.repair.name':'Field Repair','up.repair.text':'+28 base HP','up.armor.name':'Reinforced Armor','up.armor.text':'-18% incoming damage','up.multi.name':'Double Shot','up.multi.text':'Two shells per volley',
'toast.boss':'BOSS INCOMING','toast.defend':'DEFEND THE BASE','toast.tankback':'TANK RESTORED','toast.perfect':'PERFECT DEFENSE','victory':'VICTORY!','defeat':'BASE LOST','defeat.text':'Upgrade your tank and try again.','level.word':'LEVEL','waves.one':'wave','waves.few':'waves','waves.many':'waves'
}};
let lang='ru';
function setLanguage(v){lang=String(v||'ru').toLowerCase().startsWith('ru')?'ru':'en';document.documentElement.lang=lang;apply()}
function t(key){return D[lang]?.[key]??D.ru[key]??key}
function apply(root=document){root.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});document.title=t('game.title')}
window.I18N={setLanguage,t,apply,get lang(){return lang}};
})();