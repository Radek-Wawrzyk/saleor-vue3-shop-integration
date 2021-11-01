export const megaMenu = [
  {
    id: 1,
    name: 'Nowości',
    subcategory: [
      {
        id: 1,
        name: 'Polecane',
        list: [
          { name: 'Member days', path: '/member-day' },
          { name: 'Przeglądaj wszystkie nowości', path: '/' },
          { name: 'Bestseellery', path: '/bestseeller' },
          { name: 'Kalendarz premier', path: '/premieres-calendar' },
        ],
      },
      {
        id: 2,
        name: 'Nowości dla mężczyzn',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla mężczyzn', path: '/new-man' },
        ],
      },
      {
        id: 3,
        name: 'Nowości dla kobiet',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 4,
        name: 'Nowości dla dzieci',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 5,
        name: 'Nowości dla kobiet',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Mężczyźni',
    subcategory: [
      {
        id: 1,
        name: 'Polecane 2',
        list: [
          { name: '1', path: '/member-day' },
          { name: '1', path: '/' },
          { name: '1', path: '/bestseeller' },
          { name: '1', path: '/premieres-calendar' },
        ],
      },
      {
        id: 2,
        name: 'Nowości dla mężczyzn',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla mężczyzn', path: '/new-man' },
        ],
      },
      {
        id: 3,
        name: 'Nowości dla kobiet',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 4,
        name: 'Nowości dla dzieci',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 5,
        name: 'Nowości dla kobiet',
        list: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Kobiety',
    subcategory: [],
  },
  {
    id: 4,
    name: 'Dzieci',
    subcategory: [],
  },
  {
    id: 5,
    name: 'Wyprzedaż',
    subcategory: [],
  },
] as const;

interface Menu {
  id: number;
  name: string;
  subcategory: any[];
}
