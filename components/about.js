import Card from './card';
import { useState } from 'react';
import AccordionFAQ from './accordionFAQ';
import Slider from './Slider';

function AboutComponent() {
  
  const listArrayLeft = [
    {
      imgLink: '/svg/certificate.svg',
      name: 'Certified and highly accomplished teachers.',
      desc: 'All our instructors are officially register with NDCA (USA Professional DanceSport Organization). They hold numerous certificates from Fred Astaire, Arthur Murray, Imperial Society Teachers of Dance and the Russian DanceSport Association. ',
    },
    {
      imgLink: '/svg/choreo.svg',
      name: 'Special choreography',
      desc: 'Create special choreography for events (Pro-Am Competitions, parties, Weddings, Sweet 16, Bar/Bat-Mitzvahs).',
    },
    {
      imgLink: '/svg/trophey.svg',
      name: 'Reach high level of dancing',
      desc: 'Possibility to reach high level of competitive dancing as Pro-Am, Amateur, Children or older Adults.',
    },    

  ];
  const listArrayRight = [
    {
      imgLink: '/icons/banquette.svg',
      name: 'Body conditioning',
      desc: 'Support your peak performance with body conditioning, improve your coordination, sense of rhythm, and body poise.',
    },
    {
      imgLink: '/svg/path.svg',
      name: 'Our locations',
      desc: 'Utilize the flexibility of our New York location. We are in the middle of EVERYTHING! Just give us a call and let us know your preference. Would you like to dance in Mid-town, Downtown, or Long Island? All of these locations are possible.',
    },
   

  ];
  const [visibleDetails, setVisibleDetails] = useState(false);
  var options = [
    {
      question: 'Это безопасно?',
      answer:
        'Да, игра абсолютно безопасна. В локации нет травмирующих предметов. Кроме того, перед началом игры вам выдадут специальное снаряжение.',
    },
    {
      question: 'Могут ли играть дети?',
      answer:
        'Конечно, кроме взрослых, у нас с удовольствием играют дети и отмечают дни рождения. Узнайте больше о том, как проходят «Прятки» для детей:<br> <button class="btnBlue"><a href="/kids">Подробнее 🠢</a></button>',
    },
    {
      question: 'В какой одежде приходить?',
      answer:
        'Приходите в любой удобной одежде, которая вам нравится. В игре нет пачкающих предметов.',
    },
    {
      question: 'Где находится игра?',
      answer:
        'В Челябинске несколько адресов:- пр-т Ленина, д. 24 <em><a href="/contacts/0">(см. карту)</a></em>- ул. Тепличная 21 <em><a href="/contacts/1">(см. карту)</a></em> При бронировании вы можете выбрать наиболее удобную локацию.',
    },
    {
      question: 'Сколько это стоит?',
      answer:
        'От 540 рублей за игрока. Стоимость зависит от дня недели, времени игры и экшен-пакета. Чтобы узнать стоимость, нажмите здесь, после выберите экшен-пакет и время игры.',
    },
    {
      question: 'А это страшно? :)',
      answer:
        'Все зависит только от вас . Темнота умеет подстраиваться под игроков. <b>Если приходят взрослые</b>, то она конечно не упускает возможность пощекотать игрокам нервишки! <b>Если приходят дети</b>, то лабиринт становится чуть более дружелюбным. В любом случае, скучать вам не придется, лабиринт полон сюрпризов .',
    },
    {
      question: 'С нами будут играть другие команды?',
      answer:
        'На время, которое вы забронируете, игровая локация будет в распоряжении вашей команды. Других команд в локации не будет.',
    },
    {
      question: 'Сколько игроков может быть в команде?',
      answer:
        'В вашей команде может быть от 2 до 35 человек. Размер команды практически не влияет на качество игры, но чем больше, тем веселее. ;)',
    },
    {
      question: 'Как проходит игра, какие правила?',
      answer:
        'Перед началом игры проводится инструктаж, выдается защитное снаряжение (шлемы и очки), между игроками распределяются роли и начинается игра. Правила игры подробно расскажет ведущий во время инструктажа. Также вы можете ознакомиться с ними самостоятельно чуть выше на этой странице.',
    },
  ];

  return (
    <div className="max-w-[1170px] w-full font-['SourceSansPro'] mx-auto mt-10">
      <h1 className="text-right font-titles p-10 text-2xl font-extrabold">
        {' '}
        "The one thing that can solve most of our problems is dancing" <br/>James Brown
      </h1>
      <h2 className="text-center">Why Us</h2>
      <div className="flex xs:flex-col sm:flex-col tablet:flex-col laptop:flex-row w-full my-3">
        
        <div className="w-full m-auto bg-popup/80">
          {listArrayLeft.map((item, index) => {
            return (
              <Card
                item={item}
                key={`leftSide${index}`}
                id={`leftSide${index}`}
                classesCSS={{
                  card: [],
                  text: [],
                  image: ['w-12', 'h-12', 'm-5', 'laptop:order-1'],
                  name: [
                    'font-extrabold',
                    'uppercase',
                    'sm:text-left',
                    'laptop:text-right',
                  ],
                  desc: ['xs:text-left', 'laptop:text-right','text-gray-400'],
                }}
              />
            );
          })}
        </div>
        <img
          src="/images/hall.png"
          alt="Прятки в темноте"
          className="lazyloaded m-auto sm:hidden  max-w-[390px] sm:order-first tablet:order-first laptop:block   xs:order-none"
        />
        <div className="w-full m-auto bg-popup/80">
          {listArrayRight.map((item, index) => {
            return (
              <Card
                item={item}
                key={`rightSide${index}`}
                id={`rightSide${index}`}
                classesCSS={{
                  card: [],
                  text: [],
                  image: ['w-12', 'h-12', 'm-5'],
                  name: ['font-extrabold', 'uppercase', 'text-left'],
                  desc: ['text-left', 'text-gray-400'],
                }}
              />
            );
          })}
        </div>
      </div>
      
      
        <Slider />
      <AccordionFAQ options={options} />
    </div>
  );
}

export default AboutComponent;
