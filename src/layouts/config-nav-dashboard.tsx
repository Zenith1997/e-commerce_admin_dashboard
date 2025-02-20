import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Orders',
    path: '/',
    icon: icon('ic-orders'),
  },
  {
    title: 'Products',
    path: '/products',
    icon: icon('ic-user'),
  },
  {
    title: 'Images',
    path: '/images',
    icon: icon('ic-user'),
  },

  {
    title: 'Customers',
    path: '/customers',
    icon: icon('ic-user'),
  },
  {
    title: 'SMS',
    path: '/customers',
    icon: icon('ic-user'),
  },
  {
    title: 'Settings',
    icon: icon('ic-user'),
    nested:true,
    children:[
      {
        title: 'Item1',
        path: '/',
      },
      {
        title: 'Item2',
        path: '/customers',
      },
      {
        title: 'Item3',
        path: '/customers',
      }
    ]
  },
  {
    title: 'User logs',
    path: '/customers',
    icon: icon('ic-user'),
  }
];
