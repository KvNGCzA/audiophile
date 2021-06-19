import { Link } from 'react-router-dom';

import './index.scss';
import headphones from '../../../assets/images/image-headphones.png';
import speakers from '../../../assets/images/image-speakers.png';
import earphones from '../../../assets/images/image-earphones.png';
import { ReactComponent as ArrowRight } from '../../../assets/icons/icon-arrow-right.svg';

const categories = [
  {
    title: 'headphones',
    link: '/headphones',
    image: headphones,
  },
  {
    title: 'speakers',
    link: '/speakers',
    image: speakers,
  },
  {
    title: 'earphones',
    link: '/earphones',
    image: earphones,
  },
];

const Category = ({ title, link, image }) => (
  <div className='category'>
    <img className='image' src={image} alt='' />
    <span className='title'>{title}</span>
    <Link to={link} className='link'>
      shop now
      <ArrowRight className='arrow' />
    </Link>
  </div>
);

const Categories = () => (
  <div className='categories'>
    {categories.map(category => (
      <Category {...category} key={category.title} />
    ))}
  </div>
);

export default Categories;
