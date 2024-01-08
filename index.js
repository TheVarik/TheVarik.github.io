var Restart = 0;
var Money = "4000 ¥"
var Equipment = ", Автопистолет, Гарнитура"

function randAugs(){
    var points = 20
    var augsEqup =[]
    var augList = [
        {name:" Амбидекстр (10) ",cost:10},
        {name:" Амфибия (5) ",cost:5},
        {name:" Внутреннее ухо (5) ",cost:5},
        {name:" Вторая кожа (10)",cost:10},
        {name:" Выдвижные когти (10)",cost:10},
        {name:" Высокий болевой порог (10)",cost:10},
        {name:" Гибкость (5)",cost:5},
        {name:" Глаз насекомого (10)",cost:10},
        {name:" Деприватор сна (5)",cost:5},
        {name:" Животная эмпатия (5)",cost:5},
        {name:" Замедлитель метаболизма (5)",cost:5},
        {name:" Иммунитет к ядам (5)",cost:5},
        {name:" Искусственные глаза (5)",cost:5},
        {name:" Кошачьи глаза (10)",cost:10},
        {name:" Макрозрение (5)",cost:5},
        {name:" Микрозрение (5)",cost:5},
        {name:" Мимикрия (10)",cost:10},
        {name:" Мышечная матрица (15)",cost:15},
        {name:" Параболический слух (5)",cost:5},
        {name:" Подкожная броня (20)",cost:20},
        {name:" Подкожный мешочек (5)",cost:5},
        {name:" Регенерация (15)",cost:15},
        {name:" Супер-ноги (10)",cost:10},
        {name:" Супер-руки (10)",cost:10},
        {name:" Трансморф (20)",cost:20},
        {name:" Улучшенная дыхательная система (10)",cost:10},
        {name:" Ускоритель метаболизма (15)",cost:15},
        {name:" Чувство феромонов (5)",cost:5},
        {name:" Эйдетическая память (5)",cost:5},
        {name:" Ядовитые клыки (10)",cost:10}
    ]
    var augsAvel = augList
    var selected
    while (points > 0){
        augsAvel = augsAvel.filter(augsAvel => augsAvel.cost <= points)
        console.log(augsAvel.length)
        console.log(augsAvel)
        console.log(points)
        if (augsAvel.length >= 0){
        selected = GRV(augsAvel)
        console.log(selected)
        augsEqup.push(selected)
        points = points - selected.cost
        }
        else {
            selected = []
            return augsEqup
        }
    }
    return augsEqup
}

function randContact(Skills){
    contactList = ["Тюнин (фиксер)", "Инженер", "Армейский офицер", "Технарь", "Уличный хирург", "Частный сыщик", "Сплетник", "Учёный", "Андроид-преступник", "Кантайский бугай", "Культист-террорист", "Художник", "Коп", "Администрация города", "Местная банда", "Киллер", "Банк", "Медиа", "Ниндзя", "Бандит якудза", "Работник среднего дзайбацу", "Работник крупного дзайбацу", "Таксист/Курьер", "Уличный самурай", "Дек-жокей", "Делец", "Студент", "Контрабандист/Поставщик", "Политик", "Работник крупного дзайбацу", "Тюнин (делец)", "Член семьи", "Дек-жокей", "Работник малого дзайбацу", "Коп", "Бандит якудза"]
    contacts = []
    contacts.push(GRV(contactList))
    if (Skills.indexOf(" Знание Улиц-1") >= 0 || Skills.indexOf(" Бюрократия-1") >= 0){
        contacts.push(GRV(contactList))
    }
    return contacts
}

function randSkills(ConSkill, EDU){
    var SkillList = [" Будзюцу-1", " Взрывчатка-1", " Джиу-джитсу-1", " Карате-1", " Прицеливание-1", " Стрельба-1", " Коммуникаторы-1", " Компьютеры-1", " Медицина-1", " Механика-1", " Системы безопасности-1", " Электроника-1", " Азартные Игры-1", " Бюрократия-1", " Взятки-1", " Лидерство-1", " Коммерция-1", " Кутёж-1", " Городское Выживание-1", " Гравитранспорт-1", " Знание Улиц-1", " Наземный Транспорт-1", " Расследование-1", " Разведка-1", " Подделка-1"]
    var filtered = SkillList.filter(function(el) {return el.Name != ConSkill})
    skills = []
    skills.push(ConSkill)
    while (skills.length <= 4){
        ranRes = filtered[Math.floor(Math.random()*filtered.length)]
        skills.push(ranRes)
        filtered.splice(filtered.indexOf(ranRes), 1)
    }
    console.log(EDU)
    if (EDU >= 2, EDU <= 3){
        res = skills.slice(0,2)
        console.log(skills)
        console.log(res)
        return res
    }
    else if (EDU >= 4, EDU <= 6){
        res = skills.slice(0,3)
        return res
    }
    else if (EDU >= 7, EDU <= 9){
        res = skills.slice(0,4)
        return res
    }
    else if (EDU >= 10){
        res = skills
        return res
        }
    }

function GRV(list){
    return list[Math.floor(Math.random()*list.length)]
}

function ConceptSet(){
    var Concepts = [{concept: "Технарь", skill:[" Механик-1", " Электрик-1"],equp:"Многофункциональный набор инструментов, мастерская"},
    {concept: "Уличный хирург", skill:" Медицина-1", equp:"Препараты на 20000 ¥"},
    {concept: "Сарариман", skill:" Коммерция-1", equp:"Кибердека Модель/1, 2 программы"},
    {concept: "Курума", skill:" Наземный Транспорт-1", equp:"Бронированный седан"},
    {concept: "Торговец органами", skill:" Городское Выживание-1", equp:"Шокер"},
    {concept: "Софт-жокей", skill:" Компьютер-1", equp:"Кибердека Модель/3, два ЛЕДокола рейтинга 3 и один рейтинга 5"},
    {concept: "Ниндзя", skill:" Система Безопасности-1", equp:"Дешифратор карточных замков"},
    {concept: "Самуай", skill:" Разведка-1", equp:"Кевларовый жилет скрытого ношения"},
    {concept: "Спецназовец", skill:[" Тяжёлое оружие-1"," Взрывчатка-1"], equp:["Два БРМД","магнитная мина"]},
    {concept: "Дедектив", skill:" Расследование-1", equp:"3 Жучка, приёмник сигнала жучков"},
    {concept: "Делец", skill:" Знание улиц-1", equp:"Препараты на 20000 ¥"},
    {concept: "Буракумин", skill:" Будзюцу-1", equp:"WEAPONS"},
    {concept: "Киллер", skill:" Прицеливание-1", equp:"Набор для маскировки"},
    {concept: "Дипломат", skill:" Подделка-1", equp:"Фальшивая ID-карта"},
    {concept: "Вольный коп", skill:" Взятки-1", equp:"Кевларовый жилет скрытого ношения"},
    {concept: "Мастер единоборств", skill:[" Карате-1"," Джиу-джитсу-1"], equp:""}]
    var Opt = GRV(Concepts);
    console.log(typeof(Opt.skill))
    console.log(typeof(Opt.equp))
    if (Opt.concept == "Спецназовец"){
        var rand = Math.floor(Math.random()*2)
        Opt.skill = Opt.skill[rand]
        Opt.equp = Opt.equp[rand]
        return Opt
    }
    else if (Opt.equp == "WEAPONS"){
        Blades = ["Боевой нож", "Дубинка", "Боевая цепь", "Катана", "Нэкодэ", "Нунчаки", "Танто"]
        Opt.equp = GRV(Blades) + ", " + GRV(Blades)
    }
    else if (typeof(Opt.skill)=="object"){
        Opt.skill = Opt.skill[Math.floor(Math.random()*Opt.skill.length)]
        console.log("RANDOM SKILL")
    }
    else if (typeof Opt.equp == "object"){
        Opt.equp = GRV(Opt.equp)
        console.log("RANDOM EQUIP")
    }
    return Opt
}
    
function Nemesis(){
    const Reason = ["одна сторона бросила или предала другую", "Действия одной стороны привели к серьёзным ранениям другой", "Одна сторона публично унизила другую", "Две стороны открыто противостоят друг другу", "Между сторонами постоянно возникают разногласия", "Одна сторона обвиняет другую в ужасном преступлении"]
    return GRV(Reason)
}

function PCStart(){
    // var RanUPP = document.getElementById("RanUPP").checked
    // var RanConcept = document.getElementById("RanConcept").checked
    // var RanRetro = document.getElementById("RanRetro").checked
    var SexBox = document.getElementById("Sex")
    var Sex;
    const PCGenerator = document.getElementById("Generator")
    // PCGenerator.innerHTML = ''
    const Age = 17 + Math.floor(Math.random() * ((6-1)+1) + 1) + Math.floor(Math.random() * ((6-1)+1) + 1)

    var element = document.getElementById('Terminal');
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    console.log(height)
    element.style.height = height
    PCGenerator.style.height = height


    const LiveEvent = [`Враг - друг или росдтвенник (${Nemesis()})`, `Враг - друг или росдтвенник (${Nemesis()})`, `Враг - друг или росдтвенник (${Nemesis()})`, `Враг - друг или росдтвенник (${Nemesis()})`, `Враг - друг или росдтвенник (${Nemesis()})`, `Враг - друг или росдтвенник (${Nemesis()})`, `Враг - друг или росдтвенник (${Nemesis()})`, `Враг - Правительство Токио (${Nemesis()})`, `Враг - Полиция Японии (${Nemesis()})`, `Враг - крупная дзайбацу (${Nemesis()})`, `Враг - коллега (${Nemesis()})`, `Враг - коллега (${Nemesis()})`, `Вторая половина всё время лезет в ваши авантюры, хотя вы против!`, `Несчастный случай оставил вас с ужасной травмой, возможно, не только фи-
    зической?`, `Вы должны кому-то с Улиц — ${Math.floor(Math.random()*6 + Math.random()*6) * 20000} ¥`, `Вы провели длительное время в заключении или в качестве заложника`, `Вы излечились от серьёзной болезни или зависимости`, `Вас жестоко предали, разоблачили или шантажировали`, `Вы столкнулись с трагической смертью друга, родственника или любви Известен ли вам виновник?`, `Вас по ошибке обвинили в преступлении`, `На вас охотилась полиция или влиятельный дзайбацу`, `У вас есть хорошее знакомство в правительстве, но каждая услуга обходится в 20000 ¥`, `У вас был крайне неудачный любовный роман, закончившийся трагическим образом`, `У вас был или есть роман с конкурентом`, `У вас был или есть роман, порождающий постоянные конфликты`, `У вас был или есть роман, который не одобряют друзья`, `Прошлая миссия закончилась очень плохо, люди пострадали или были убиты`, `У вас нет семьи. Или, быть может, вы её скрываете?`, `Вы пошли наперекор семье, вызвав её ненависть и отречение от вас`, `Вы состоите в тайном обществе`, `Вы знаете щекотливый секрет о работе якудза в Токио`, `Вы знаете щекотливый секрет о работе якудза в Токио`, `Вы в розыске за границей`, `На последней миссии вы убили невинных людей и попали в заголовки`, `Полиция хорошо знает вас и ваше прошлое`, `Вы каким-то образом получили ценный (вероятно, украденный) предмет`, `Вы являетесь единственным свидетелем убийства или крупного скандала`]
    const Looks = [`Ретро 50х, 60х, 70х, 80х`, `Гранж`, `Длинная куртка`, `Плотная мягкая одежда`, `Спортивная одежда`, `Мешковатая одежда`, `Высокая мода`, `Деловой/Корпоративный`, `Панк`, `Гладкая кожаная одежда`, `Камуфляж`]
    const Motivation = [`Собственное эго`, `Закон и порядок`, `Собственная честь`, `Наркотики`, `Богатство`, `Богатство`, `Отмщение`, `Власть`, `Слава`, `Чувство долга`, `Удовольствие`]
    const Traits = [`Перчатки без пальцев`, `Татуировки`, `Ирокез`, `Лысина`, `Серьги`, `Кольцо в носу`, `Кожаная одежда`, `Солнечные очки`, `Яркие волосы`, `Буйная растительность на
    лице`, `Стильная щетина`, `Куча украшений`, `Хвостик`, `Одноцветный стиль`, `Шляпа`, `Шипованные перчатки`]
    var UPPConv = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    var MaleNames =["Адати", "Акимицу", "Акимото", "Асикага", "Бунтаро", "Вакабэ","Ватамаро", "Гидаю", "Гото", "Ёсидзуми", "Ёсисунэ", "Ивадзуми", "Икэда", "Иэмицу", "Кагава","Кагэхару", "Кадзитори", "Канамори", "Канэмицу", "Кацура", "Кимура", "Кироси", "Кобори","Кодзима", "Курода", "Макимура", "Масамицу", "Мацудайра", "Мацуи", "Мацукара", "Мацусита","Мидзуно", "Минамото", "Мияги", "Миямото", "Могами", "Мураками", "Мурасаки", "Нава", "Нагао","Нагината", "Накамура", "Накатоми", "Накахиро", "Нарита", "Никки", "Огасавара", "Окимото","Омаро", "Осэки", "Отавара", "Ояма", "Роккаку", "Рокуго", "Сакимото", "Санада", "Сандзитомо","Сандзо", "Сатакэ", "Сиба", "Сибата", "Сигэнобо", "Симадзу", "Синдзё", "Сува", "Сэнгоку", "Тагая","Тада", "Тайра", "Тамага", "Танака", "Танэёси", "Тогама", "Тоёнари", "Токугава", "Томомасу", "Тэрадзава", "Тюкаё", "Усами", "Утимаро", "Уэсэги", "Фудзивара", "Фухито", "Хакатоко", "Ханава", "Хасэкура", "Хатакэяма", "Хисамацу", "Хосокава", "Цунаёси", "Ямагути"]
    var FemaleNames = ["Айко", "Акэми", "Аманэ", "Асако", "Вакако", "Дзицуко", "Ёко", "Ёрико","Ёсико", "Ёсино", "Икуми", "Ицуми", "Кавай", "Кагуя", "Кадзуха", "Кадзуё", "Кана", "Канако","Кацуко", "Кикуко", "Кимико", "Кира", "Курико", "Кэйко", "Кёко", "Майко", "Макико", "Мана","Масако", "Матико", "Маюми", "Мегуми", "Мидзуко", "Мика", "Микако", "Минако", "Минами","Мисато", "Митико", "Мицуё", "Миюми", "Миёко", "Момоко", "Нагако", "Нами", "Нанасэ", "Наоко","Наруми", "Нозоми", "Норико", "Нориё", "Ок", "Оми", "Рикако", "Рисако", "Риэко", "Румико", "Рэйка", "Рюрико", "Рёка", "Рёко", "Садако", "Саки", "Сакура", "Саори", "Сатико", "Сатоко", "Сатоми", "Саюми", "Саяка", "Сидзуко", "Сидзуэ", "Симако", "Сино", "Сугако", "Судзука", "Суми", "Сумика", "Сумико", "Сэцуко", "Сёко", "Такако", "Тамами", "Тамао", "Тамико", "Тацуко", "Таэко", "Тидзуру", "Тика", "Тисато", "Томоко", "Тоскико", "Тэйко", "Тэруко", "Тэруми", "Фудзико", "Фукуми", "Фусако", "Фуюми", "Хана", "Ханако", "Харуко", "Хацуэ", "Цукико", "Цуру", "Эйко", "Эмико", "Эри", "Эцуко", "Юка", "Юкари", "Юкико", "Юкина", "Юми", "Юмика", "Юмэко", "Юри", "Юрико", "Ясуко", "Яэ"]
    
    const Char1 = Math.floor(Math.random() * ((6-1)+1) + 1) + Math.floor(Math.random() * ((6-1)+1) + 1)
    const Char2 = Math.floor(Math.random() * ((6-1)+1) + 1) + Math.floor(Math.random() * ((6-1)+1) + 1)
    const Char3 = Math.floor(Math.random() * ((6-1)+1) + 1) + Math.floor(Math.random() * ((6-1)+1) + 1)
    const Char4 = Math.floor(Math.random() * ((6-1)+1) + 1) + Math.floor(Math.random() * ((6-1)+1) + 1)
    const Char5 = Math.floor(Math.random() * ((6-1)+1) + 1) + Math.floor(Math.random() * ((6-1)+1) + 1)
    const Char6 = Math.floor(Math.random() * ((6-1)+1) + 1) + Math.floor(Math.random() * ((6-1)+1) + 1)
    
    PlayerStats = ConceptSet()
    PlayerStats.skill = randSkills(PlayerStats.skill, Char5)
    console.log(PlayerStats)
    PlayerStats.contacts = randContact(PlayerStats.skill)
    PlayerStats.augs = randAugs()
    PlayerStats.augsStr = PlayerStats.augs.map(function(val){ return val.name})
    PlayerStats.looks = GRV(Looks)
    PlayerStats.Traits = GRV(Traits)
    PlayerStats.Motivation = GRV(Motivation)
    PlayerStats.liveEvent = GRV(LiveEvent)
    Sex = SexBox.selectedIndex
    if (PlayerStats.equp != ''){
    PlayerStats.equp = PlayerStats.equp + Equipment
    }
    else {PlayerStats.equp = Equipment}
    if (Sex == "0"){ PlayerStats.name = GRV(MaleNames)} else { PlayerStats.name = GRV(FemaleNames)}
    console.log(`Sex = ${Sex}`)
    console.log(MaleNames[Math.floor(Math.random()*MaleNames.length)])
    
    PCGenerator.insertAdjacentHTML('afterbegin', `<hr id="HorLine"> 
    <b id="PCName">${PlayerStats.name} </b> (${PlayerStats.concept}) ${UPPConv[Char1]}${UPPConv[Char2]}${UPPConv[Char3]}${UPPConv[Char4]}${UPPConv[Char5]}${UPPConv[Char6]} Возраст ${Age} Ранг 1 - Агент <br> \
    ${PlayerStats.skill} <br>
    <b>Ретрогеника: </b> ${PlayerStats.augsStr} <br>
    <b>Средства: </b> ${Money} <br>
    <b>Снаряжение: </b> ${PlayerStats.equp} <br>
    <b>Контакты: </b> ${PlayerStats.contacts}
    <hr id="divider">
    <b>Жизненные события:</b> ${PlayerStats.liveEvent} <br>
    <b>Внешность: </b> ${PlayerStats.looks} <br> 
    <b>Мотивация: </b> ${PlayerStats.Motivation} <br>
    <b>Отличительные Черты: </b> ${PlayerStats.Traits}
    `)
    var PCGenButton = document.getElementById("submit")
    PCGenButton.value = "Создать нового"
    // PCGenerator.insertAdjacentHTML('beforeend', "I\'m a new element,\
    //  but I\'m not green <br>")
    Restart = 1
}