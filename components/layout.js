import Navbar from './navbar';
import Footer from '../components/footer';
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
export default function Layout({ children }) {
  const {data:session, loading} = useSession();
  const router = useRouter();
  let navbarLinks = [
    { url: '/social', title: 'Social Dancers' },
    { url: '/competition', title: 'Competitive' },
    { url: '/wedding', title: 'Wedding couples' },
    { url: '#', title: 'Kids' },
    { url: '/about', title: 'About Us' },,
    { url: '/contacts/0', title: 'Locations' },
  ];
  let navbarLinksAdmin = [
    { url: '/book', title: 'Забронировать' },
    { url: '/admin', title: 'Расписание' },
    { url: '/adm_location/0', title: 'Резервации' },
    { url: '/contacts/0', title: 'Где находится?' },
  ];
  let navbarLinksSuper = [
    { url: '/book', title: 'Забронировать' },
    { url: '/admin', title: 'Расписание' },
    { url: '/adm_location/0', title: 'Резервации' },
    { url: '/contacts/0', title: 'Где находится?' },
    { url: '/user_screen', title: 'Пользователи' },
  ];
  console.log(session)
  // let opt=session?{ url: '/logout', title: 'Выйти' }:{ url: '/login', title: 'Регистрация' }
  let opt=session?{ url: '/logout', title: 'Log off' }:{ url: '/login', title: 'Register' }
  navbarLinks.push(opt);
  navbarLinksAdmin.push(opt);
  navbarLinksSuper.push(opt);
  return (
    <div>
      <Head>
      </Head>
      {/* bg-main-bg  */}

      <main id="mainPage" className="h-screen  bg-cover bg-center containerFont text-black relative text-lg overflow-y-auto" >
        <Navbar navbarLinks={(session && session.user.status ==="admin")?navbarLinksAdmin:(session && session.user.status ==="super")?navbarLinksSuper:navbarLinks} path={router.asPath} />
      
        {children}
      
        {/* <Footer /> */}
      </main>
    </div>
  );
}
