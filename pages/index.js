import Head from 'next/head';

import FrontPage from '../components/frontPage';
import Animation from '../components/Animation';
export default function Home() {
  return (
    <>
        {/* <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-30113583-2', 'auto');
  ga('send', 'pageview');

</script>  */}
      <Head>
      <title>Best Time To Dance - Welcome</title>
<meta name="title" content="Best Time To Dance - Welcome" />
<meta name="description" content="Best Time To Dance - Welcome - Independent Ballroom And Latin Dance Instruction with highly skilled and certified Professionals in New York City, Long Island and New Jersey"/>
<meta name="keywords" content="Best, Time, Dance, studio, lesson, Sergey, Bolotnikov, Social, Ballroom, Latin, Pro-Am, ProAm, kids, Dancesport,competition, championship,  best time to dance"/>
<meta property="og:url" content="https://www.time-dance.com/"/>
<meta property="og:title" content="Best Time To Dance"/>
<meta property="og:description" content="Independent Ballroom And Latin Dance Instruction with highly skilled and certified Professionals in New York City, Long Island and New Jersey"/>
<meta property="og:site_name" content="Best Time To Dance"/>
<meta property="og:image"  content="/images/weddingfull.jpg"/>

      </Head>
      <FrontPage />
    </>
  );
}
