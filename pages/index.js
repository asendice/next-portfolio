import { Fragment } from 'react';
import Hero from "../components/home-page/hero";

function HomePage(props){
  const { items } = props;
  return (
    <Fragment>
      <Hero items={items} />
    </Fragment>
  )

}

export async function getStaticProps(){
  const items = [
    {
      id: 0,
      title: 'about',
      image: ''
    },
    {
      id: 1,
      title: 'projects',
      image: ''
    },
    {
      id: 2,
      title: 'tech',
      image: ''
    },
    {
      id: 3,
      title: 'contact',
      image: ''
    },
  
  ];

  return {
    props: {
      items: items
    }
  }
}

export default HomePage;