let dataObject = {
    mainEmail:'Best Time To Dance<sbolotnikov@gmail.com>',
    games : [
        {
          name: `Квест "Тайны Гудини"` ,
          id: 'houdini',
          bgImage: '/images/gudini.jpg',
          img:'/icons/rabbit_hat.svg',
          short:'Гудини был великим, каждое его представление поражало воображение, он был лучшим до этого момента...',
          toWhom:' возрастное ограничение 15+',
          price:2000,
          description:'Гарри Гудини был великим, каждое его представление поражало воображение, он был лучшим до этого момента!<br>В городе появился новый иллюзионист, он с легкостью повторяет все трюки великого мастера и, кажется, превосходит его! Он – новый Гудини, а многие уверены, что это сам великий фокусник, которому удалось обмануть смерть.<br> Дополнительную таинственность его образу придает маска, которую он никогда не снимает.<br> Вы – группа журналистов, проникаете в поисках сенсационного материала в гримерку иллюзиониста, пока он находится на выступлении.<br> Сможете ли вы раскрыть тайну его личности? Узнать его секреты? И не попасться хозяину комнаты на глаза?',
            // 'Полноценная версия игры со множеством ловушек и бодрящих спецэффектов. Подходит как для тех, кто играет в первый раз, так и для опытных игроков (как для взрослых, так и для детей).<br> Вас ждет многоуровневая игровая локация - более 180 м2, неожиданные тайники, скрытые лазы, шуршащие покрытия, зыбучие переходы, звуковые иллюзии и десятки мест для пряток!',
          prices:
          "Стоимость игры для команды от 2 до 4 человек – от <b>2000</b> до <b>3000 рублей.</b><br> Доплата за 5го и 6го игрока – <b>500 рублей за каждого</b>",
          booking:
            'Время прохождения квеста: 60 минут.',
          locs: [0],
          minParticipants:2,
          maxParticipants:6
        },
        {
          name: `Квест "В поисках крестража"` ,
          id: 'horcrux',
          bgImage: '/images/krestrage1.jpg',
          img:'/icons/crestrazh.svg',
          short:'В районе гостиной Гриффиндора хранится крестраж, в котором заключена частичка души тёмного лорда',
          toWhom:'возрастное ограничение 12+ (с 8-ми лет в сопровождении взрослого)',
          price:2000,
          description:`Поступила информация, что в районе гостиной Гриффиндора хранится крестраж, в котором заключена частичка душы тёмного лорда. На нём лежит заклятие случайного перемещения и через час он переместится в новое место.<br>Ваша задача - как можно быстрее найти крестраж и уничтожить его, но только с помощью магии...`,
          prices:
            'Стоимость игры для команды от 2 до 4 человек – от <b>2000</b> до <b>3000 рублей</b>.<br> Доплата за дополнительного игрока – <b>500 рублей</b><b>650 руб.</b>',
          booking:
            'Игра длится 60 минут',
          locs: [0],
          minParticipants:2,
          maxParticipants:6
        },
        {
          name: `Экшн-игра:AmongUs (прятки в лабиринте "Среди нас")` ,
          id: 'among_us',
          bgImage: '/images/among_us_photo1.jpg',
          img:'/icons/amongus.svg',
          short:'прятки "Среди нас в лабиринте" ',
          toWhom:'возрастное ограничение 6+',
          price:2000,
          description:`Вы на космическом корабле. Есть две команды: предатели и члены экипажа.<br>Задача первых – устроить диверсию и помешать членам экипажа починить корабль, задача вторых – рассекретить предателя.<br>Перед началом каждый игрок тянет карточку, на которой указано, какую роль он будет выполнять.<br>Цель игроков - найти спрятанные в лабиринте генераторы (оборудование на стенах) и либо активировать их, либо деактивировать, в зависимости от роли.<br> Игроки, которых "убили" в процессе голосования (аналог игры мафия), становятся призраками. Они теряют право голоса, за них голосовать также нельзя, но они помогают своей команде.<br>Игра закончится, если корабль будет восстановлен, либо уничтожен. Либо если все члены одной из команд будут "убиты" путём голосования.<br>Световые и звуковые эффекты. `,
          prices:
            'Стоимость за одного игрока:<br><b>500 руб.</b> - в будние дни.<br><b>600 руб.</b> - в выходные, праздники.<br>Независимо от количества игроков минимальная общая стоимость игры: 2600 руб. - в будние дни / 3200 руб. - в выходные, праздники.',
          booking:
            'Игра длится 60 минут',
          locs: [0],
          minParticipants:4,
          maxParticipants:12
        },
        {
          name: `Экшн-игра:Прятки во тьме. Малый лабиринт.` ,
          id: 'hide_seek_sm',
          bgImage: '/images/pryatki2.png',
          img:'/icons/hide_seek1.svg',
          short:'прятки " Смесь лабиринтов и страха на площади 120кв.м.',
          toWhom:'возрастное ограничение 9+ (с 6-ти лет в сопровождении взрослого)',
          price:2000,
          description:` Смесь лабиринтов и страха на площади 120кв.м. и с множеством мест, где может затаиться опасность!<br>Когда сгущается тьма и зрение вам не помощник, остальные чувства обостряются до предела. В нашем городе, полностью лишенном света, вы встретитесь с множествами ловушек и потайных мест.<br>Сможете ли вы, положившись на свою интуицию, слух и тактильное восприятие, надежно спрятаться в лабиринте абсолютно темных комнат так, чтобы ваc не нашли?<br>Игра проходит по двум стандартным сценариям на выбор: "Зомби"(один ищет, остальные прячутся), либо "Хищники"(команда на команду).<br> Возможно проведение игры в лабиринте по индивидуальному сценарию.`,
          prices:
          'Стоимость за одного игрока:<br><b>500 руб.</b> - в будние дни.<br><b>600 руб.</b> - в выходные, праздники.<br>',
          booking:
            'Игра длится 60 минут',
          locs: [0],
          minParticipants:4,
          maxParticipants:10
        },
        {
          name: `Экшн-игра:Прятки во тьме. Средний лабиринт.` ,
          id: 'hide_seek_md',
          bgImage: '/images/pryatki_photo1.jpg',
          img:'/icons/hide_seek1.svg',
          short:'прятки " Смесь лабиринтов и страха на площади 180кв.м.',
          toWhom:'возрастное ограничение 9+ (с 6-ти лет в сопровождении взрослого)',
          price:2000,
          description:` Смесь лабиринтов и страха на площади 180кв.м. и с множеством мест, где может затаиться опасность!<br>Когда сгущается тьма и зрение вам не помощник, остальные чувства обостряются до предела. В нашем городе, полностью лишенном света, вы встретитесь с множествами ловушек и потайных мест.<br>Сможете ли вы, положившись на свою интуицию, слух и тактильное восприятие, надежно спрятаться в лабиринте абсолютно темных комнат так, чтобы ваc не нашли?<br>Игра проходит по двум стандартным сценариям на выбор: "Зомби"(один ищет, остальные прячутся), либо "Хищники"(команда на команду).<br> Возможно проведение игры в лабиринте по индивидуальному сценарию.`,
          prices:
          'Стоимость за одного игрока:<br><b>500 руб.</b> - в будние дни.<br><b>600 руб.</b> - в выходные, праздники.<br>',
          booking:
            'Игра длится 60 минут',
          locs: [0],
          minParticipants:11,
          maxParticipants:15
        },  
        {
          name: `Экшн-игра:Прятки во тьме. Большой лабиринт.` ,
          id: 'hide_seek_lg',
          bgImage: '/images/pryatki3.png',
          img:'/icons/hide_seek1.svg',
          short:'прятки " Смесь лабиринтов и страха на огромноой площади 300кв.м.',
          toWhom:'возрастное ограничение 9+ (с 6-ти лет в сопровождении взрослого)',
          price:2000,
          description:` Смесь лабиринтов и страха на огромных площадях до 300кв.м. и с множеством мест, где может затаиться опасность!<br>Когда сгущается тьма и зрение вам не помощник, остальные чувства обостряются до предела. В нашем городе, полностью лишенном света, вы встретитесь с множествами ловушек и потайных мест.<br>Сможете ли вы, положившись на свою интуицию, слух и тактильное восприятие, надежно спрятаться в лабиринте абсолютно темных комнат так, чтобы ваc не нашли?<br>Игра проходит по двум стандартным сценариям на выбор: "Зомби"(один ищет, остальные прячутся), либо "Хищники"(команда на команду).<br> Возможно проведение игры в лабиринте по индивидуальному сценарию.`,
          prices:
          'Стоимость за одного игрока:<br><b>500 руб.</b> - в будние дни.<br><b>600 руб.</b> - в выходные, праздники.<br>',
          booking:
            'Игра длится 60 минут',
          locs: [0],
          minParticipants:16,
          maxParticipants:32
        }, 
        {
          name: `Интерактивная стена <<Кидалки>>` ,
          id: 'kidalki',
          bgImage: '/images/pryatki_photo1.jpg',
          img:'/icons/kidalki.svg',
          short:'Необычно и весело! Вся стена – как огромный живой планшет.',
          toWhom:'возрастное ограничение 5-16 лет',
          price:'300',
          description:`14 игр прямо на стене +<br>«Кидалки» — это необычно и весело! Ведь вся стена – как огромный живой планшет.<br>быстрое переключение между играми.<br><br>Мультики и фильмы на огромном экране.<br><br>Если у вас перерыв, вы можете увлечь детей классным мультфильмом.<br>Механика игр: дети должны бросать мячик в экран, таким образом собирая<br>улов, побеждая монстров и злодеев, строя башни, решая примеры и считая<br>свои очки.<br><br>Администратор находится с детьми в комнате на протяжении всего времени<br>пребывания.<br>Световое, звуковое сопровождение, проектор, текстильные мячи.`,
          prices:
          'Стоимость за одного игрока:<br><b>300 руб. за 30 минут</b> - в будние дни.<br><b>350 руб.</b> - в выходные, праздники.<br>В стоимость входит: 30 минут аренды, кулер с водой,<br>стаканчики, чай, сахар, микроволновка.',
          booking:
            'Игра длится 30 минут',
          locs: [0],
          minParticipants:1,
          maxParticipants:15
        },  

              ],
      locations: [
        
        {
            name: 'Best Time To Dance NYC',
            description: 'New York City Location',
            symbol: '/svg/logo 2.svg',
            address: "410-412 8th Ave #4th floor<br> New York, NY 10001",
            link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.550877272467!2d-73.99697748484549!3d40.74990707932787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b1d7d90a35%3A0xdd6d7feb048a2ed2!2s410%208th%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1644636025936!5m2!1sen!2sus",
            address_short:"410-412 8th Ave #4th Floor",
            telephone: "+1 (917) 916-28-40",
            email: "sbolotnikov@gmail.com",
            address_desc:`On Eights Avenue between 30 and 31 street opposite side of Pennsylvania Station <br> <br> Best Time to dance is NOW!!!`,
            coordinates:{x:55.2038,y:61.3264,zoom:17.23},
            coordinates1:{x:55.20358,y:61.32539,text:"Вход"}
        },
        {
          name: 'Best Time To Dance NJ',
          description: 'Garfield, NJ',
          symbol: '/svg/logo 3.svg',
          address: "237 Division Ave, 2nd Floor<br> Garfield, NJ 07026",
          link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.30105402739!2d-74.1172838848408!3d40.88721057931322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9512a93d831%3A0xd3dce3ca909bad4f!2s237%20Division%20Ave%2C%20Garfield%2C%20NJ%2007026!5e0!3m2!1sen!2sus!4v1644640203405!5m2!1sen!2sus",
          address_short:"237 Division Ave 2nd Floor",
          telephone: "+1 (917) 916-28-40",
          email: "sbolotnikov@gmail.com",
          address_desc:`Free parking is available.<br> <br> Best Time to dance is NOW!!!`,
          coordinates:{x:55.2038,y:61.3264,zoom:17.23},
          coordinates1:{x:55.20358,y:61.32539,text:"Вход"}
      },
      ], 
      rules :[
        {
          maxParticipance: 10,
          gameLength: 60,
          instructions: 10,
          additionalRounds: 0,
          roomForRestAvailability: false,
        },
        {
          maxParticipance: 15,
          gameLength: 90,
          instructions: 10,
          additionalRounds: 1,
          roomForRestAvailability: false,
        },
        {
          maxParticipance: 20,
          gameLength: 120,
          instructions: 20,
          additionalRounds: 2,
          roomForRestAvailability: true,
        },
        {
          maxParticipance: 25,
          gameLength: 150,
          instructions: 20,
          additionalRounds: 3,
          roomForRestAvailability: true,
        },
        {
          maxParticipance: 30,
          gameLength: 160,
          instructions: 20,
          additionalRounds: 4,
          roomForRestAvailability: true,
        },
        {
          maxParticipance: 35,
          gameLength: 160,
          instructions: 20,
          additionalRounds: 5,
          roomForRestAvailability: true,
        },
      ],
  };
  
  export default dataObject;