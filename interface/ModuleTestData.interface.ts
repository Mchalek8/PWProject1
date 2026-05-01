export interface SearchValues {
  computer: string;
  laptop: string;
  gift: string;
}

export interface RegisterCompleted {
  register: string;
  completeMessage: string;
}

export interface HeaderLinks {
  login: string;
  logout: string;
  register: string;
  shoppingCart: string;
  wishlist: string;
}

export interface HeaderMenu {
  books: string;
  computers: string;
  electronics: string;
  apparelAndShoes: string;
  digitalDownloads: string;
  jewelry: string;
  giftCards: string;
}

export interface SortBy {
  position: string;
  nameAZ: string;
  nameZA: string;
  priceLowToHigh: string;
  priceHighToLow: string;
  createdOn: string;
}

export interface DisplayPerPage {
  four: string;
  eigth: string;
  twelve: string;
}

export interface BookHeader {
  books: string;
  sortBy: SortBy;
  displayPerPage: DisplayPerPage;
}

export interface ModuleTestData {
  searchValues: SearchValues;
  registerCompleted: RegisterCompleted;
  headerLinks: HeaderLinks;
  headerMenu: HeaderMenu;
  bookHeader: BookHeader;
}

export interface TestDataRoot {
  moduleTestData: ModuleTestData;
}