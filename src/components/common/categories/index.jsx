import { Link } from 'react-router-dom';

import './index.scss';
import headphones from '../../../assets/images/image-headphones.png';
import speakers from '../../../assets/images/image-speakers.png';
import earphones from '../../../assets/images/image-earphones.png';
import { ReactComponent as ArrowRight } from '../../../assets/icons/icon-arrow-right.svg';

const categories = [
  {
    title: 'headphones',
    link: '/category/headphones',
    image: headphones,
  },
  {
    title: 'speakers',
    link: '/category/speakers',
    image: speakers,
  },
  {
    title: 'earphones',
    link: '/category/earphones',
    image: earphones,
  },
];

const Category = ({ title, link, image, callback }) => (
  <Link className='category' to={link} onClick={callback || function () {}}>
    <img className='image' src={image} alt='' />
    <span className='title'>{title}</span>
    <span className='link'>
      shop
      <ArrowRight className='arrow' />
    </span>
  </Link>
);

const Categories = ({ callback }) => (
  <div className='categories'>
    {categories.map(category => (
      <Category {...category} key={category.title} callback={callback} />
    ))}
  </div>
);

export default Categories;
