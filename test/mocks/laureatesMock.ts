export const laureatesPage1 = {
  laureates: [
    {
      id: '745',
      knownName: { en: 'A. Michael Spence', se: 'A. Michael Spence' },
      givenName: { en: 'A. Michael', se: 'A. Michael' },
      familyName: { en: 'Spence', se: 'Spence' },
      fullName: { en: 'A. Michael Spence', se: 'A. Michael Spence' },
      fileName: 'spence',
      gender: 'male',
      birth: {
        date: '1943-00-00',
        place: {
          city: { en: 'Montclair, NJ', no: 'Montclair, NJ', se: 'Montclair, NJ' },
          country: { en: 'USA', no: 'USA', se: 'USA' },
          cityNow: {
            en: 'Montclair, NJ',
            no: 'Montclair, NJ',
            se: 'Montclair, NJ',
            sameAs: [
              'https://www.wikidata.org/wiki/Q678437',
              'https://www.wikipedia.org/wiki/Montclair,_New_Jersey',
            ],
          },
          countryNow: {
            en: 'USA',
            no: 'USA',
            se: 'USA',
            sameAs: ['https://www.wikidata.org/wiki/Q30'],
          },
          continent: { en: 'North America', no: 'Nord-Amerika', se: 'Nordamerika' },
          locationString: {
            en: 'Montclair, NJ, USA',
            no: 'Montclair, NJ, USA',
            se: 'Montclair, NJ, USA',
          },
        },
      },
      wikipedia: {
        slug: 'Michael_Spence',
        english: 'https://en.wikipedia.org/wiki/Michael_Spence',
      },
      wikidata: { id: 'Q157245', url: 'https://www.wikidata.org/wiki/Q157245' },
      sameAs: [
        'https://www.wikidata.org/wiki/Q157245',
        'https://en.wikipedia.org/wiki/Michael_Spence',
      ],
      links: [
        {
          rel: 'laureate',
          href: 'https://api.nobelprize.org/2/laureate/745',
          action: 'GET',
          types: 'application/json',
        },
        {
          rel: 'external',
          href: 'https://www.nobelprize.org/laureate/745',
          title: 'A. Michael Spence - Facts',
          action: 'GET',
          types: 'text/html',
          class: ['laureate facts'],
        },
      ],
      nobelPrizes: [
        {
          awardYear: '2001',
          category: { en: 'Economic Sciences', no: 'Økonomi', se: 'Ekonomi' },
          categoryFullName: {
            en: 'The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel',
            no: 'Sveriges Riksbanks pris i økonomisk vitenskap til minne om Alfred Nobel',
            se: 'Sveriges Riksbanks pris i ekonomisk vetenskap till Alfred Nobels minne',
          },
          sortOrder: '2',
          portion: '1/3',
          dateAwarded: '2001-10-10',
          prizeStatus: 'received',
          motivation: {
            en: 'for their analyses of markets with asymmetric information',
            se: 'för deras analys av marknader med assymetrisk informations',
          },
          prizeAmount: 10000000,
          prizeAmountAdjusted: 12518033,
          affiliations: [
            {
              name: {
                en: 'Stanford University',
                no: 'Stanford University',
                se: 'Stanford University',
              },
              nameNow: { en: 'Stanford University' },
              city: { en: 'Stanford, CA', no: 'Stanford, CA', se: 'Stanford, CA' },
              country: { en: 'USA', no: 'USA', se: 'USA' },
              cityNow: {
                en: 'Stanford, CA',
                no: 'Stanford, CA',
                se: 'Stanford, CA',
                sameAs: [
                  'https://www.wikidata.org/wiki/Q173813',
                  'https://www.wikipedia.org/wiki/Stanford,_California',
                ],
              },
              countryNow: {
                en: 'USA',
                no: 'USA',
                se: 'USA',
                sameAs: ['https://www.wikidata.org/wiki/Q30'],
              },
              locationString: {
                en: 'Stanford, CA, USA',
                no: 'Stanford, CA, USA',
                se: 'Stanford, CA, USA',
              },
            },
          ],
          links: [
            {
              rel: 'nobelPrize',
              href: 'https://api.nobelprize.org/2/nobelPrize/eco/2001',
              action: 'GET',
              types: 'application/json',
            },
            {
              rel: 'external',
              href: 'https://www.nobelprize.org/prizes/economic-sciences/2001/spence/facts/',
              title: 'A. Michael Spence - Facts',
              action: 'GET',
              types: 'text/html',
              class: ['laureate facts'],
            },
            {
              rel: 'external',
              href: 'https://www.nobelprize.org/prizes/economic-sciences/2001/summary/',
              title:
                'The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2001',
              action: 'GET',
              types: 'text/html',
              class: ['prize summary'],
            },
          ],
        },
      ],
    },
  ],
  meta: {
    offset: 0,
    limit: 1,
    count: 981,
    terms:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/',
    license:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#licence',
    disclaimer:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#disclaimer',
  },
  links: {
    first: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1',
    self: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1',
    next: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=1&limit=1',
    last: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=981&limit=1',
  },
};
export const laureatesPage2 = {
  laureates: [
    {
      id: '102',
      knownName: { en: 'Aage N. Bohr', se: 'Aage N. Bohr' },
      givenName: { en: 'Aage N.', se: 'Aage N.' },
      familyName: { en: 'Bohr', se: 'Bohr' },
      fullName: { en: 'Aage Niels Bohr', se: 'Aage Niels Bohr' },
      fileName: 'bohr',
      gender: 'male',
      birth: {
        date: '1922-06-19',
        place: {
          city: { en: 'Copenhagen', no: 'København', se: 'Köpenhamn' },
          country: { en: 'Denmark', no: 'Danmark', se: 'Danmark' },
          cityNow: {
            en: 'Copenhagen',
            no: 'København',
            se: 'Köpenhamn',
            sameAs: [
              'https://www.wikidata.org/wiki/Q1748',
              'https://www.wikipedia.org/wiki/Copenhagen',
            ],
          },
          countryNow: {
            en: 'Denmark',
            no: 'Danmark',
            se: 'Danmark',
            sameAs: ['https://www.wikidata.org/wiki/Q35'],
          },
          continent: { en: 'Europe', no: 'Europa', se: 'Europa' },
          locationString: {
            en: 'Copenhagen, Denmark',
            no: 'København, Danmark',
            se: 'Köpenhamn, Danmark',
          },
        },
      },
      death: {
        date: '2009-09-08',
        place: {
          city: { en: 'Copenhagen', no: 'København', se: 'Köpenhamn' },
          country: {
            en: 'Denmark',
            no: 'Danmark',
            se: 'Danmark',
            sameAs: 'https://www.wikidata.org/wiki/Q35',
          },
          cityNow: {
            en: 'Copenhagen',
            no: 'København',
            se: 'Köpenhamn',
            sameAs: [
              'https://www.wikidata.org/wiki/Q1748',
              'https://www.wikipedia.org/wiki/Copenhagen',
            ],
          },
          countryNow: {
            en: 'Denmark',
            no: 'Danmark',
            se: 'Danmark',
            sameAs: ['https://www.wikidata.org/wiki/Q35'],
          },
          continent: { en: 'Europe', no: 'Europa', se: 'Europa' },
          locationString: {
            en: 'Copenhagen, Denmark',
            no: 'København, Danmark',
            se: 'Köpenhamn, Danmark',
          },
        },
      },
      wikipedia: { slug: 'Aage_Bohr', english: 'https://en.wikipedia.org/wiki/Aage_Bohr' },
      wikidata: { id: 'Q103854', url: 'https://www.wikidata.org/wiki/Q103854' },
      sameAs: ['https://www.wikidata.org/wiki/Q103854', 'https://en.wikipedia.org/wiki/Aage_Bohr'],
      links: [
        {
          rel: 'laureate',
          href: 'https://api.nobelprize.org/2/laureate/102',
          action: 'GET',
          types: 'application/json',
        },
        {
          rel: 'external',
          href: 'https://www.nobelprize.org/laureate/102',
          title: 'Aage N. Bohr - Facts',
          action: 'GET',
          types: 'text/html',
          class: ['laureate facts'],
        },
      ],
      nobelPrizes: [
        {
          awardYear: '1975',
          category: { en: 'Physics', no: 'Fysikk', se: 'Fysik' },
          categoryFullName: {
            en: 'The Nobel Prize in Physics',
            no: 'Nobelprisen i fysikk',
            se: 'Nobelpriset i fysik',
          },
          sortOrder: '1',
          portion: '1/3',
          dateAwarded: '1975-10-17',
          prizeStatus: 'received',
          motivation: {
            en: 'for the discovery of the connection between collective motion and particle motion in atomic nuclei and the development of the theory of the structure of the atomic nucleus based on this connection',
            se: 'för upptäckten av sambandet mellan kollektiva rörelser och partikelrörelser i atomkärnor, samt den därpå baserade utvecklingen av teorien för atomkärnans struktur',
          },
          prizeAmount: 630000,
          prizeAmountAdjusted: 3465908,
          affiliations: [
            {
              name: {
                en: 'Niels Bohr Institute',
                no: 'Niels Bohr Institute',
                se: 'Niels Bohr Institute',
              },
              nameNow: { en: 'Niels Bohr Institute' },
              city: { en: 'Copenhagen', no: 'København', se: 'Köpenhamn' },
              country: { en: 'Denmark', no: 'Danmark', se: 'Danmark' },
              cityNow: {
                en: 'Copenhagen',
                no: 'København',
                se: 'Köpenhamn',
                sameAs: [
                  'https://www.wikidata.org/wiki/Q1748',
                  'https://www.wikipedia.org/wiki/Copenhagen',
                ],
              },
              countryNow: {
                en: 'Denmark',
                no: 'Danmark',
                se: 'Danmark',
                sameAs: ['https://www.wikidata.org/wiki/Q35'],
              },
              locationString: {
                en: 'Copenhagen, Denmark',
                no: 'København, Danmark',
                se: 'Köpenhamn, Danmark',
              },
            },
          ],
          links: [
            {
              rel: 'nobelPrize',
              href: 'https://api.nobelprize.org/2/nobelPrize/phy/1975',
              action: 'GET',
              types: 'application/json',
            },
            {
              rel: 'external',
              href: 'https://www.nobelprize.org/prizes/physics/1975/bohr/facts/',
              title: 'Aage N. Bohr - Facts',
              action: 'GET',
              types: 'text/html',
              class: ['laureate facts'],
            },
            {
              rel: 'external',
              href: 'https://www.nobelprize.org/prizes/physics/1975/summary/',
              title: 'The Nobel Prize in Physics 1975',
              action: 'GET',
              types: 'text/html',
              class: ['prize summary'],
            },
          ],
        },
      ],
    },
  ],
  meta: {
    offset: 1,
    limit: 1,
    count: 981,
    terms:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/',
    license:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#licence',
    disclaimer:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#disclaimer',
  },
  links: {
    first: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1',
    prev: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1',
    self: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=1&limit=1',
    next: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=2&limit=1',
    last: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=981&limit=1',
  },
};
export const laureatesPage3 = {
  laureates: [
    {
      id: '779',
      knownName: { en: 'Aaron Ciechanover', se: 'Aaron Ciechanover' },
      givenName: { en: 'Aaron', se: 'Aaron' },
      familyName: { en: 'Ciechanover', se: 'Ciechanover' },
      fullName: { en: 'Aaron Ciechanover', se: 'Aaron Ciechanover' },
      fileName: 'ciechanover',
      gender: 'male',
      birth: {
        date: '1947-10-01',
        place: {
          city: { en: 'Haifa', no: 'Haifa', se: 'Haifa' },
          country: {
            en: 'British Protectorate of Palestine',
            no: 'British i Palestina',
            se: 'British Protectorate of Palestine',
          },
          cityNow: {
            en: 'Haifa',
            no: 'Haifa',
            se: 'Haifa',
            sameAs: [
              'https://www.wikidata.org/wiki/Q41621',
              'https://www.wikipedia.org/wiki/Haifa',
            ],
          },
          countryNow: {
            en: 'Israel',
            no: 'Israel',
            se: 'Israel',
            sameAs: ['https://www.wikidata.org/wiki/Q801'],
          },
          continent: { en: 'Asia', no: 'Asia', se: 'Asien' },
          locationString: {
            en: 'Haifa, British Protectorate of Palestine (now Israel)',
            no: 'Haifa, British i Palestina (nå Israel)',
            se: 'Haifa, British Protectorate of Palestine (nu Israel)',
          },
        },
      },
      wikipedia: {
        slug: 'Aaron_Ciechanover',
        english: 'https://en.wikipedia.org/wiki/Aaron_Ciechanover',
      },
      wikidata: { id: 'Q233205', url: 'https://www.wikidata.org/wiki/Q233205' },
      sameAs: [
        'https://www.wikidata.org/wiki/Q233205',
        'https://en.wikipedia.org/wiki/Aaron_Ciechanover',
      ],
      links: [
        {
          rel: 'laureate',
          href: 'https://api.nobelprize.org/2/laureate/779',
          action: 'GET',
          types: 'application/json',
        },
        {
          rel: 'external',
          href: 'https://www.nobelprize.org/laureate/779',
          title: 'Aaron Ciechanover - Facts',
          action: 'GET',
          types: 'text/html',
          class: ['laureate facts'],
        },
      ],
      nobelPrizes: [
        {
          awardYear: '2004',
          category: { en: 'Chemistry', no: 'Kjemi', se: 'Kemi' },
          categoryFullName: {
            en: 'The Nobel Prize in Chemistry',
            no: 'Nobelprisen i kjemi',
            se: 'Nobelpriset i kemi',
          },
          sortOrder: '1',
          portion: '1/3',
          dateAwarded: '2004-10-06',
          prizeStatus: 'received',
          motivation: {
            en: 'for the discovery of ubiquitin-mediated protein degradation',
            se: 'för upptäckten av ubiquitinmedierad proteinnedbrytning',
          },
          prizeAmount: 10000000,
          prizeAmountAdjusted: 11976161,
          affiliations: [
            {
              name: {
                en: 'Technion - Israel Institute of Technology',
                no: 'Technion - Israel Institute of Technology',
                se: 'Technion - Israel Institute of Technology',
              },
              nameNow: { en: 'Technion - Israel Institute of Technology' },
              city: { en: 'Haifa', no: 'Haifa', se: 'Haifa' },
              country: { en: 'Israel', no: 'Israel', se: 'Israel' },
              cityNow: {
                en: 'Haifa',
                no: 'Haifa',
                se: 'Haifa',
                sameAs: [
                  'https://www.wikidata.org/wiki/Q41621',
                  'https://www.wikipedia.org/wiki/Haifa',
                ],
              },
              countryNow: {
                en: 'Israel',
                no: 'Israel',
                se: 'Israel',
                sameAs: ['https://www.wikidata.org/wiki/Q801'],
              },
              locationString: { en: 'Haifa, Israel', no: 'Haifa, Israel', se: 'Haifa, Israel' },
            },
          ],
          links: [
            {
              rel: 'nobelPrize',
              href: 'https://api.nobelprize.org/2/nobelPrize/che/2004',
              action: 'GET',
              types: 'application/json',
            },
            {
              rel: 'external',
              href: 'https://www.nobelprize.org/prizes/chemistry/2004/ciechanover/facts/',
              title: 'Aaron Ciechanover - Facts',
              action: 'GET',
              types: 'text/html',
              class: ['laureate facts'],
            },
            {
              rel: 'external',
              href: 'https://www.nobelprize.org/prizes/chemistry/2004/summary/',
              title: 'The Nobel Prize in Chemistry 2004',
              action: 'GET',
              types: 'text/html',
              class: ['prize summary'],
            },
          ],
        },
      ],
    },
  ],
  meta: {
    offset: 2,
    limit: 1,
    count: 981,
    terms:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/',
    license:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#licence',
    disclaimer:
      'https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#disclaimer',
  },
  links: {
    first: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=1',
    prev: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=1&limit=1',
    self: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=2&limit=1',
    // next: undefined,
    last: 'https://masterdataapi.nobelprize.org/2.1/laureates?offset=981&limit=1',
  },
};
