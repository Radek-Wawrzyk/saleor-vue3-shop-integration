interface MegaMenuItem {
  id: number,
  name: string,
  path: string,
  subcategory?: MegaMenuItem[],
}

export const megaMenu = [
  {
    id: 1,
    name: 'Nowości',
    path: '/',
    subcategory: [
      {
        id: 1,
        name: 'Polecane',
        subcategory: [
          { name: 'Member days', path: '/member-day', id: 24 },
          { name: 'Przeglądaj wszystkie nowości', path: '/' },
          { name: 'Bestseellery', path: '/bestseeller' },
          { name: 'Kalendarz premier', path: '/premieres-calendar' },
        ],
      },
      {
        id: 2,
        name: 'Nowości dla mężczyzn',
        subcategory: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla mężczyzn', path: '/new-man' },
        ],
      },
      {
        id: 3,
        name: 'Nowości dla kobiet',
        subcategory: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 4,
        name: 'Nowości dla dzieci',
        subcategory: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 5,
        name: 'Nowości dla kobiet',
        subcategory: [
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
        name: 'Polecane',
        subcategory: [
          { name: 'Buty', path: '/member-day' },
          { name: 'Ubrania', path: '/' },
          { name: 'Sprzęt', path: '/bestseeller' },
          { name: 'Przeglądaj wszystkie nowości dla mężczyzn', path: '/premieres-calendar' },
        ],
      },
      {
        id: 2,
        name: 'Nowości dla mężczyzn',
        subcategory: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla mężczyzn', path: '/new-man' },
        ],
      },
      {
        id: 3,
        name: 'Nowości dla kobiet',
        subcategory: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 4,
        name: 'Nowości dla dzieci',
        subcategory: [
          { name: 'Buty', path: '/shoes' },
          { name: 'Ubrania', path: '/cloths' },
          { name: 'Sprzęt', path: '/equipment' },
          { name: 'Przeglądaj wszystkie nowości dla kobiet', path: '/new-woman' },
        ],
      },
      {
        id: 5,
        name: 'Nowości dla kobiet',
        subcategory: [
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
] as MegaMenuItem[];
