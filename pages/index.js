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
      color: '#62acb5',
      image: ''
    },
    {
      id: 1,
      title: 'projects',
      color: '#fc7223',
      image: ''
    },
    {
      id: 2,
      title: 'tech',
      color: '#b2b356',
      image: ''

    },
    {
      id: 3,
      title: 'contact',
      color: '#e4324c',
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