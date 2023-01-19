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
      imgLink: '/svg/poise1.svg',
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
      question: ' Do I need a dance partner?',
      answer:
        'Best Time to Dance offers dance lessons for singles and couples alike. Whatever your situation, one of our well trained professional dance instructors will guide you. If you come along your instructor will partner you while teaching the lessons. What an exciting and effective way of learning!',
    },
    {
      question: 'How should I dress for my dance lesson?',
      answer:
        'We encourage our dance students to dress comfortably stressing ease of movement.  Leather soled shoes are best on our ballroom floor. Any type of sling-backs, tennis shoes or boots are discouraged. Practice wear and dance shoes are available for purchase in stores of New York City. For list of suggested stores feel free to ask your instructor.',
    },
    {
      question: 'Where will I use this style of dancing?',
      answer:
        'Best Time to Dance teaches dances used in any social situation. Many students come to learn how to dance  for a special occasion such as a first wedding dance, formal dinner, company holiday party, bar or bat mitzvah or prom and find they develop dance skills appropriate for any occasion. Look at our Social Party page.',
    },
    {
      question: 'Are Group Classes Available?',
      answer:
        'Our group dance classes usually arrange by request. Also you may want to visit our Group Lesson page to learn more.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        "We understand that things come up, and we'll do our best,<br />To accommodate you, but please do the rest.<br />By letting us know in advance,<br />So we can plan accordingly, and give you a chance.<br /><br />To reschedule or cancel without any fees,<br />Just make sure to give us 24 hours notice, please.<br />We appreciate your understanding and cooperation,<br />And look forward to dancing with you, with elation.",
    },
    {
      question: 'Feel free to email us your question. We will be happy to answer you here.',
      answer:
        '',
    },
  ];

  return (
    <div className="max-w-[1170px] w-full font-['SourceSansPro'] mx-auto mt-10">
      <h1 className="text-right font-titles p-10 text-2xl text-white font-extrabold bg-cover bg-heroImg ">
        {' '}
        "The one thing that can solve most of our problems is dancing" <br/>James Brown
      </h1>
      <h2 className="text-center text-darkAccent font-extrabold uppercase">Why Us?</h2>
      <div className="flex xs:flex-col sm:flex-col tablet:flex-col laptop:flex-row w-full my-3">
        
        <div className="w-full m-auto bg-darkAccent text-white">
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
                  desc: ['xs:text-left', 'laptop:text-right','text-yellow1'],
                }}
              />
            );
          })}
        </div>
        <img
          src="/images/hall.png"
          alt="Sergey and Nancy"
          className="lazyloaded m-auto sm:hidden  max-w-[390px] sm:order-first tablet:order-first laptop:block   xs:order-none"
        />
        <div className="w-full m-auto bg-darkAccent text-white">
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
                  desc: ['text-left', 'text-yellow1'],
                }}
              />
            );
          })}
        </div>
      </div>
      
      
        {/* <Slider /> */}
      <AccordionFAQ options={options} />
    </div>
  );
}

export default AboutComponent;
