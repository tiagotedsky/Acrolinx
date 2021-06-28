enum OrderStatusDTO {
  Created = 'Created',
  Paid = 'Paid',
  Pending = 'Pending',
  Canceled = 'Canceled',
}

enum JuristicFormDTO {
  Ltd = 'Ltd',
  Public = 'Public',
  Limited = 'Limited',
  Holding = 'Holding',
}

enum ServiceTypeDTO {
  Software = 'Software',
  Training = 'Training',
  EventPlanning = 'Event planning',
  Consulting = 'Consulting',
  Marketing = 'Marketing',
}

export interface InvoiceDTO {
  id: number;
  orderStatus: OrderStatusDTO;
  companyName: string;
  juristicForm: JuristicFormDTO;
  serviceType: ServiceTypeDTO;
  createdAt: number;
  country: string;
  email: string;
}

export const data = [{
  id: 1,
  serviceType: 'Software',
  juristicForm: 'Ltd',
  orderStatus: 'Created',
  email: 'sadamiak0@google.com.hk',
  country: 'Brazil',
  companyName: 'Photobean',
  createdAt: 1606501493000,
}, {
  id: 2,
  serviceType: 'Software',
  juristicForm: 'Ltd',
  orderStatus: 'Created',
  email: 'sadamiak0@google.com.hk',
  country: 'Brazil',
  companyName: 'Photobean',
  createdAt: 1609635299000,
}, {
  id: 3,
  serviceType: 'Training',
  juristicForm: 'Public',
  orderStatus: 'Pending',
  email: 'aantoni2@washingtonpost.com',
  country: 'China',
  companyName: 'Gevee',
  createdAt: 1619329486000,
}, {
  id: 4,
  serviceType: 'Software',
  juristicForm: 'Public',
  orderStatus: 'Pending',
  email: 'nmatasov4@ycombinator.com',
  country: 'Sweden',
  companyName: 'Topicblab',
  createdAt: 1611679336000,
}, {
  id: 5,
  serviceType: 'Software',
  juristicForm: 'Public',
  orderStatus: 'Pending',
  email: 'nmatasov4@ycombinator.com',
  country: 'Sweden',
  companyName: 'Topicblab',
  createdAt: 1606470759000,
}, {
  id: 6,
  serviceType: 'Event planning',
  juristicForm: 'Public',
  orderStatus: 'Pending',
  email: 'nlarcombe5@examiner.com',
  country: 'Peru',
  companyName: 'Zoonder',
  createdAt: 1593776629000,
}, {
  id: 7,
  serviceType: 'Consulting',
  juristicForm: 'Public',
  orderStatus: 'Paid',
  email: 'aantonich6@infoseek.co.jp',
  country: 'Indonesia',
  companyName: 'Babblestorm',
  createdAt: 1602736743000,
}, {
  id: 8,
  serviceType: 'Software',
  juristicForm: 'Limited',
  orderStatus: 'Paid',
  email: 'jlivoir7@noaa.gov',
  country: 'Belarus',
  companyName: 'Skyble',
  createdAt: 1619875785000,
}, {
  id: 9,
  serviceType: 'Software',
  juristicForm: 'Limited',
  orderStatus: 'Created',
  email: 'wpetry8@bloglovin.com',
  country: 'Brazil',
  companyName: 'Yozio',
  createdAt: 1609601381000,
}, {
  id: 10,
  serviceType: 'Software',
  juristicForm: 'Limited',
  orderStatus: 'Created',
  email: 'wpetry8@bloglovin.com',
  country: 'Brazil',
  companyName: 'Yozio',
  createdAt: 1606489313000,
}, {
  id: 11,
  serviceType: 'Software',
  juristicForm: 'Limited',
  orderStatus: 'Pending',
  email: 'dferraraa@amazon.co.uk',
  country: 'Brazil',
  companyName: 'Jatri',
  createdAt: 1609594171000,
}, {
  id: 12,
  serviceType: 'Software',
  juristicForm: 'Limited',
  orderStatus: 'Pending',
  email: 'hrentonb@wikia.com',
  country: 'Poland',
  companyName: 'Flashpoint',
  createdAt: 1599736497000,
}, {
  id: 13,
  serviceType: 'Software',
  juristicForm: 'Limited',
  orderStatus: 'Paid',
  email: 'ssauratc@mozilla.org',
  country: 'Albania',
  companyName: 'Twimm',
  createdAt: 1598898820000,
}, {
  id: 14,
  serviceType: 'Software',
  juristicForm: 'Ltd',
  orderStatus: 'Canceled',
  email: 'acadremand@sun.com',
  country: 'Armenia',
  companyName: 'Bluezoom',
  createdAt: 1622167632000,
}, {
  id: 15,
  serviceType: 'Marketing',
  juristicForm: 'Holding',
  orderStatus: 'Canceled',
  email: 'tstumpe@dropbox.com',
  country: 'Senegal',
  companyName: 'Mydo',
  createdAt: 1609089382000,
}, {
  id: 16,
  serviceType: 'Software',
  juristicForm: 'Ltd',
  orderStatus: 'Canceled',
  email: 'lchantlerf@moonfruit.com',
  country: 'China',
  companyName: 'Feedmix',
  createdAt: 1619839663000,
}, {
  id: 17,
  serviceType: 'Software',
  juristicForm: 'Ltd',
  orderStatus: 'Created',
  email: 'bcrossgroveg@ocn.ne.jp',
  country: 'France',
  companyName: 'Linklinks',
  createdAt: 1603979060000,
}, {
  id: 18,
  serviceType: 'Event planning',
  juristicForm: 'Ltd',
  orderStatus: 'Paid',
  email: 'aaronsohnh@cornell.edu',
  country: 'Botswana',
  companyName: 'Gigazoom',
  createdAt: 1606009480000,
}, {
  id: 19,
  serviceType: 'Event planning',
  juristicForm: 'Holding',
  orderStatus: 'Paid',
  email: 'enurseyi@nih.gov',
  country: 'Philippines',
  companyName: 'Digitube',
  createdAt: 1611005932000,
}, {
  id: 20,
  serviceType: 'Event planning',
  juristicForm: 'Holding',
  orderStatus: 'Paid',
  email: 'dgisbornej@amazonaws.com',
  country: 'United States',
  companyName: 'Flashset',
  createdAt: 1610259193000,
}, {
  id: 21,
  serviceType: 'Software',
  juristicForm: 'Limited',
  orderStatus: 'Created',
  email: 'wpetry8@bloglovin.com',
  country: 'Brazil',
  companyName: 'Yozio',
  createdAt: 1603124885000,
}, {
  id: 22,
  serviceType: 'Event planning',
  juristicForm: 'Holding',
  orderStatus: 'Created',
  email: 'bkeysell@sakura.ne.jp',
  country: 'Indonesia',
  companyName: 'Twiyo',
  createdAt: 1615786661000,
}, {
  id: 23,
  serviceType: 'Event planning',
  juristicForm: 'Ltd',
  orderStatus: 'Pending',
  email: 'mwaddamm@sciencedaily.com',
  country: 'Brazil',
  companyName: 'Blogpad',
  createdAt: 1602070246000,
}, {
  id: 24,
  serviceType: 'Event planning',
  juristicForm: 'Holding',
  orderStatus: 'Pending',
  email: 'browledgen@sun.com',
  country: 'Russia',
  companyName: 'Roodel',
  createdAt: 1601759588000,
}, {
  id: 25,
  serviceType: 'Event planning',
  juristicForm: 'Ltd',
  orderStatus: 'Paid',
  email: 'obritoo@timesonline.co.uk',
  country: 'Philippines',
  companyName: 'Fiveclub',
  createdAt: 1621406676000,
}, {
  id: 26,
  serviceType: 'Event planning',
  juristicForm: 'Ltd',
  orderStatus: 'Paid',
  email: 'ggoldsteinp@youtu.be',
  country: 'China',
  companyName: 'Quinu',
  createdAt: 1621447518000,
}, {
  id: 27,
  serviceType: 'Event planning',
  juristicForm: 'Ltd',
  orderStatus: 'Pending',
  email: 'mwaddamm@sciencedaily.com',
  country: 'Brazil',
  companyName: 'Blogpad',
  createdAt: 1614540276000,
}, {
  id: 28,
  serviceType: 'Event planning',
  juristicForm: 'Ltd',
  orderStatus: 'Pending',
  email: 'mwaddamm@sciencedaily.com',
  country: 'Brazil',
  companyName: 'Blogpad',
  createdAt: 1614651313000,
}, {
  id: 29,
  serviceType: 'Event planning',
  juristicForm: 'Holding',
  orderStatus: 'Created',
  email: 'hlaurencots@apple.com',
  country: 'United States',
  companyName: 'Meeveo',
  createdAt: 1604782789000,
}, {
  id: 30,
  serviceType: 'Event planning',
  juristicForm: 'Holding',
  orderStatus: 'Created',
  email: 'mronaynet@eventbrite.com',
  country: 'China',
  companyName: 'Abata',
  createdAt: 1620323075000,
}] as InvoiceDTO[];