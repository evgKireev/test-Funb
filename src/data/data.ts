import images from '../assets/Rectangle.png';

export const cards = [
  {
    id: 0,
    title: 'Нямушка',
    categoria: 'с фуа-гра',
    portion: '10',
    gift: '',
    images: images,
    weight: '0,5',
    disabled: false,
    isCompleted: false,
    satisfied: false,
    desc: 'Печень утки разварная с артишоками',
  },
  {
    id: 1,
    title: 'Нямушка',
    categoria: 'с рыбой',
    portion: '40',
    gift: '2',
    images: images,
    weight: '2',
    disabled: false,
    isCompleted: false,
    satisfied: false,
    desc: 'Головы щучьи с чесноком да свежайшая сёмгушка',
  },
  {
    id: 2,
    title: 'Нямушка',
    categoria: 'с курой',
    portion: '100',
    gift: '5',
    images: images,
    weight: '5',
    disabled: false,
    isCompleted: false,
    satisfied: true,
    desc: 'ПФиле из цыплят с трюфелями в бульоне',
  },
  
];

export default cards;
