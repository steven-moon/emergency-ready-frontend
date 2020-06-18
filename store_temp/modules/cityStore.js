const namespaced = true
import clonedeep from 'lodash.clonedeep'


export default {
  namespaced,
  state: {
    page: 'Not Set',
    states: [],
    cityNames: ['Aberdeen', 'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown', 'Amarillo', 'Anaheim', 'Anchorage', 'Ann Arbor', 'Antioch', 'Apple Valley', 'Appleton', 'Arlington', 'Arvada', 'Asheville', 'Athens', 'Atlanta', 'Atlantic City', 'Augusta', 'Aurora', 'Austin', 'Bakersfield', 'Baltimore', 'Barnstable', 'Baton Rouge', 'Beaumont', 'Bel Air', 'Bellevue', 'Berkeley', 'Bethlehem', 'Billings', 'Birmingham', 'Bloomington', 'Boise', 'Boise City', 'Bonita Springs', 'Boston', 'Boulder', 'Bradenton', 'Bremerton', 'Bridgeport', 'Brighton', 'Brownsville', 'Bryan', 'Buffalo', 'Burbank', 'Burlington', 'Cambridge', 'Canton', 'Cape Coral', 'Carrollton', 'Cary', 'Cathedral City', 'Cedar Rapids', 'Champaign', 'Chandler', 'Charleston', 'Charlotte', 'Chattanooga', 'Chesapeake', 'Chicago', 'Chula Vista', 'Cincinnati', 'Clarke County', 'Clarksville', 'Clearwater', 'Cleveland', 'College Station', 'Colorado Springs', 'Columbia', 'Columbus', 'Concord', 'Coral Springs', 'Corona', 'Corpus Christi', 'Costa Mesa', 'Dallas', 'Daly City', 'Danbury', 'Davenport', 'Davidson County', 'Dayton', 'Daytona Beach', 'Deltona', 'Denton', 'Denver', 'Des Moines', 'Detroit', 'Downey', 'Duluth', 'Durham', 'El Monte', 'El Paso', 'Elizabeth', 'Elk Grove', 'Elkhart', 'Erie', 'Escondido', 'Eugene', 'Evansville', 'Fairfield', 'Fargo', 'Fayetteville', 'Fitchburg', 'Flint', 'Fontana', 'Fort Collins', 'Fort Lauderdale', 'Fort Smith', 'Fort Walton Beach', 'Fort Wayne', 'Fort Worth', 'Frederick', 'Fremont', 'Fresno', 'Fullerton', 'Gainesville', 'Garden Grove', 'Garland', 'Gastonia', 'Gilbert', 'Glendale', 'Grand Prairie', 'Grand Rapids', 'Grayslake', 'Green Bay', 'GreenBay', 'Greensboro', 'Greenville', 'Gulfport-Biloxi', 'Hagerstown', 'Hampton', 'Harlingen', 'Harrisburg', 'Hartford', 'Havre de Grace', 'Hayward', 'Hemet', 'Henderson', 'Hesperia', 'Hialeah', 'Hickory', 'High Point', 'Hollywood', 'Honolulu', 'Houma', 'Houston', 'Howell', 'Huntington', 'Huntington Beach', 'Huntsville', 'Independence', 'Indianapolis', 'Inglewood', 'Irvine', 'Irving', 'Jackson', 'Jacksonville', 'Jefferson', 'Jersey City', 'Johnson City', 'Joliet', 'Kailua', 'Kalamazoo', 'Kaneohe', 'Kansas City', 'Kennewick', 'Kenosha', 'Killeen', 'Kissimmee', 'Knoxville', 'Lacey', 'Lafayette', 'Lake Charles', 'Lakeland', 'Lakewood', 'Lancaster', 'Lansing', 'Laredo', 'Las Cruces', 'Las Vegas', 'Layton', 'Leominster', 'Lewisville', 'Lexington', 'Lincoln', 'Little Rock', 'Long Beach', 'Lorain', 'Los Angeles', 'Louisville', 'Lowell', 'Lubbock', 'Macon', 'Madison', 'Manchester', 'Marina', 'Marysville', 'McAllen', 'McHenry', 'Medford', 'Melbourne', 'Memphis', 'Merced', 'Mesa', 'Mesquite', 'Miami', 'Milwaukee', 'Minneapolis', 'Miramar', 'Mission Viejo', 'Mobile', 'Modesto', 'Monroe', 'Monterey', 'Montgomery', 'Moreno Valley', 'Murfreesboro', 'Murrieta', 'Muskegon', 'Myrtle Beach', 'Naperville', 'Naples', 'Nashua', 'Nashville', 'New Bedford', 'New Haven', 'New London', 'New Orleans', 'New York', 'New York City', 'Newark', 'Newburgh', 'Newport News', 'Norfolk', 'Normal', 'Norman', 'North Charleston', 'North Las Vegas', 'North Port', 'Norwalk', 'Norwich', 'Oakland', 'Ocala', 'Oceanside', 'Odessa', 'Ogden', 'Oklahoma City', 'Olathe', 'Olympia', 'Omaha', 'Ontario', 'Orange', 'Orem', 'Orlando', 'Overland Park', 'Oxnard', 'Palm Bay', 'Palm Springs', 'Palmdale', 'Panama City', 'Pasadena', 'Paterson', 'Pembroke Pines', 'Pensacola', 'Peoria', 'Philadelphia', 'Phoenix', 'Pittsburgh', 'Plano', 'Pomona', 'Pompano Beach', 'Port Arthur', 'Port Orange', 'Port Saint Lucie', 'Port St. Lucie', 'Portland', 'Portsmouth', 'Poughkeepsie', 'Providence', 'Provo', 'Pueblo', 'Punta Gorda', 'Racine', 'Raleigh', 'Rancho Cucamonga', 'Reading', 'Redding', 'Reno', 'Richland', 'Richmond', 'Richmond County', 'Riverside', 'Roanoke', 'Rochester', 'Rockford', 'Roseville', 'Round Lake Beach', 'Sacramento', 'Saginaw', 'Saint Louis', 'Saint Paul', 'Saint Petersburg', 'Salem', 'Salinas', 'Salt Lake City', 'San Antonio', 'San Bernardino', 'San Buenaventura', 'San Diego', 'San Francisco', 'San Jose', 'Santa Ana', 'Santa Barbara', 'Santa Clara', 'Santa Clarita', 'Santa Cruz', 'Santa Maria', 'Santa Rosa', 'Sarasota', 'Savannah', 'Scottsdale', 'Scranton', 'Seaside', 'Seattle', 'Sebastian', 'Shreveport', 'Simi Valley', 'Sioux City', 'Sioux Falls', 'South Bend', 'South Lyon', 'Spartanburg', 'Spokane', 'Springdale', 'Springfield', 'St. Louis', 'St. Paul', 'St. Petersburg', 'Stamford', 'Sterling Heights', 'Stockton', 'Sunnyvale', 'Syracuse', 'Tacoma', 'Tallahassee', 'Tampa', 'Temecula', 'Tempe', 'Thornton', 'Thousand Oaks', 'Toledo', 'Topeka', 'Torrance', 'Trenton', 'Tucson', 'Tulsa', 'Tuscaloosa', 'Tyler', 'Utica', 'Vallejo', 'Vancouver', 'Vero Beach', 'Victorville', 'Virginia Beach', 'Visalia', 'Waco', 'Warren', 'Washington', 'Waterbury', 'Waterloo', 'West Covina', 'West Valley City', 'Westminster', 'Wichita', 'Wilmington', 'Winston', 'Winter Haven', 'Worcester', 'Yakima', 'Yonkers', 'York', 'Youngstown'],
    alabamaCities: [
      'Birmingham',
      'Montgomery',
      'Mobile',
      'Huntsville',
      'Tuscaloosa',
      'Hoover',
      'Dothan',
      'Decatur',
      'Auburn',
      'Gadsden'
    ],
    alaskaCities: [
      'Anchorage',
      'Juneau',
      'Fairbanks',
      'Sitka'
    ],
    arizonaCities: [
      'Phoenix',
      'Tucson',
      'Mesa',
      'Glendale',
      'Scottsdale',
      'Chandler',
      'Tempe',
      'Gilbert',
      'Peoria',
      'Yuma'
    ],
    arkansasCities: [
      'Little Rock',
      'Fort Smith',
      'North Little Rock',
      'Fayetteville',
      'Jonesboro',
      'Pine Bluff',
      'Springdale',
      'Conway',
      'Rogers',
      'Hot Springs'
    ],
    californiaCities: [
      'Los Angeles',
      'San Diego',
      'San Jose',
      'San Francisco',
      'Long Beach',
      'Fresno',
      'Sacramento',
      'Oakland',
      'Santa Ana',
      'Anaheim'
    ],
    canadaCities: [
      'Toronto, Ontario',
      'Montreal, Quebec',
      'Vancouver, Britsh Columbia',
      'Calgary, Alberta',
      'Edmonton, Alberta',
      'Ottawa-Gatineau',
      'Quebec City, Quebec',
      'Winnipeg, Manitoba',
      'Hamliton, Ontario',
      'Kitchener, Ontario',
      'London, Ontario',
      'Victoria, British Columbia',
      'St. Catharines-Niagra, Ontario',
      'Halifax, Nova Scotia',
      'Oshawa, Ontario',
      'Windsor, Ontario',
      'Saskatoon, Saskatchewan',
      'Barrie, Ontario',
      'St. John\'s, Newfoundland and Labrador'
    ],
    coloradoCities: [
      'Denver',
      'Colorado Springs',
      'Aurora',
      'Lakewood',
      'Fort Collins',
      'Arvada',
      'Pueblo',
      'Westminster',
      'Boulder',
      'Thornton'
    ],
    connecticutCities: [
      'Bridgeport',
      'New Haven',
      'Hartford',
      'Stamford',
      'Waterbury',
      'Norwalk',
      'Danbury',
      'New Britain',
      'West Hartford',
      'Greenwich'
    ],
    delewareCities: [
      'Wilmington',
      'Dover',
      'Newark',
      'Milford',
      'Seaford',
      'Middletown',
      'Elsmere',
      'Smyma',
      'New Castle',
      'Georgetown'
    ],
    floridaCities: [
      'Jacksonville',
      'Miami',
      'Tampa',
      'St. Petersburg',
      'Hialeah',
      'Orlando',
      'Fort Lauderdale',
      'Tallahassee',
      'Hollywood',
      'Pembroke Pines'
    ],
    georgiaCities: [
      'Altanta',
      'Augusta-Richmond County',
      'Columbus',
      'Savannah',
      'Athens-Clarke County',
      'Macon',
      'Roswell',
      'Albany',
      'Marietta',
      'Warner Robins'
    ],
    hawaiiCities: [
      'Honolulu',
      'Hilo',
      'Kailua',
      'Kaneohe',
      'Waipahu'
    ],
    idahoCities: [
      'Boise',
      'Nampa',
      'Pocatello',
      'Idaho Falls',
      'Meridian'
    ],
    illinoisCities: [
      'Chicago',
      'Rockford',
      'Aurora',
      'Naperville',
      'Peoria',
      'Springfield',
      'Joliet',
      'Elgin',
      'Waukegan',
      'Cicero'
    ],
    indianaCities: [
      'Indianapolis',
      'Fort Wayne',
      'Evansville',
      'South Bend',
      'Gary',
      'Hammond',
      'Bloomington',
      'Muncie',
      'Anderson',
      'Terre Haute'
    ],
    iowaCities: [
      'Des Moines',
      'Cedar Rapids',
      'Davenport',
      'Sioux City',
      'Waterloo',
      'Iowa City',
      'Council Bluffs'
    ],
    kansasCities: [
      'Wichita',
      'Overland Park',
      'Kansas City',
      'Topeka',
      'Olathe',
      'Lawrence',
      'Shawnee',
      'Salina',
      'Manhattan',
      'Hutchinson'
    ],
    kentuckyCities: [
      'Lexington-Fayette',
      'Louisville',
      'Owensboro',
      'Bowling Green',
      'Covington',
      'Hopkinsville',
      'Frankfort',
      'Henderson',
      'Richmond',
      'Jeffersontown'
    ],
    louisianaCities: [
      'New Orleans',
      'Baton Rouge',
      'Shreveport',
      'Lafayette',
      'Lake Charles',
      'Kenner',
      'Bossier City',
      'Monroe',
      'Alexandria',
      'New Iberia'
    ],
    maineCities: [
      'Portland',
      'Lewiston',
      'Bangor',
      'South Portland',
      'Auburn'
    ],
    marylandCities: [
      'Baltimore',
      'Frederick',
      'Geithersburg',
      'Bowie',
      'Rockville',
      'Hagerstown',
      'Annapolis'
    ],
    massachusettsCities: [
      'Boston',
      'Worcester',
      'Springfield',
      'Lowell',
      'Cambridge',
      'Brockton',
      'New Bedford',
      'Fall River',
      'Lynn',
      'Quincy'
    ],
    michiganCities: [
      'Detroit',
      'Grand Rapids',
      'Warren',
      'Flint',
      'Sterling Heights',
      'Lansing',
      'Ann Arbor',
      'Livonia',
      'Dearborn',
      'Westland'
    ],
    minnesotaCities: [
      'Minneapolis',
      'St Paul',
      'Duluth',
      'Rockester',
      'Bloomington',
      'Brooklyn Park',
      'Plymouth',
      'Eagan',
      'Coon Rapids',
      'Burnsville'
    ],
    mississippiCities: [
      'Jackson',
      'Gulfport',
      'Biloxi',
      'Hattiesburg',
      'Greenville',
      'Meridian',
      'Tupelo',
      'Southaven',
      'Vicksburg',
      'Pascagoula'
    ],
    missouriCities: [
      'Kansas City',
      'St. Louis',
      'Springfield',
      'Independence',
      'Columbia',
      'St Joseph',
      'Lee\'s Summit',
      'St Charles',
      'St Peters',
      'Florissant'
    ],
    montanaCities: [
      'Billings',
      'Missoula',
      'Great Falls',
      'Butte-Sliver Bow',
      'Bozeman',
      'Helena'
    ],
    nebraskaCities: [
      'Omaha',
      'Lincoln',
      'Bellevue',
      'Grand Island',
      'Kearney'
    ],
    nevadaCities: [
      'Las Vegas',
      'Reno',
      'Henderson',
      'North Las Vegas',
      'Sparks',
      'Carson City',
      'Elko'
    ],
    newHampshireCities: [
      'Manchester',
      'Nashua',
      'Concord',
      'Derry',
      'Roschester'
    ],
    newJerseyCities: [
      'Newark',
      'Jersey City',
      'Paterson',
      'Elizabeth',
      'Edison',
      'Woodbridge',
      'Dover',
      'Hamilton',
      'Trenton',
      'Camden'
    ],
    newMexicoCities: [
      'Albuquerque',
      'Las Cruces',
      'Santa Fe',
      'Rio Rancho',
      'Roswell',
      'Farmington',
      'Alamogordo',
      'Clovis',
      'Hobbs',
      'Carlsbad'
    ],
    newYorkCities: [
      'New York City',
      'Buffalo',
      'Rochester',
      'Yonkers',
      'Syracuse',
      'Albany',
      'New Rochelle',
      'Mount Vernon',
      'Schenectady',
      'Utica'
    ],
    northCarolinaCities: [
      'Charlotte',
      'Raleigh',
      'Greensboro',
      'Durham',
      'Winston-Salem',
      'Fayetteville',
      'Cary',
      'High Point',
      'Wilmington',
      'Asheville'
    ],
    northDakotaCities: [
      'Fargo',
      'Bismarck',
      'Grand Forks',
      'Minot',
      'Mandan'
    ],
    ohioCities: [
      'Columbus',
      'Cleveland',
      'Cincinnati',
      'Toledo',
      'Akron',
      'Dayton',
      'Parma',
      'Youngstown',
      'Canton',
      'Lorain'
    ],
    oklahomaCities: [
      'Oklahoma City',
      'Tulsa',
      'Norman',
      'Lawton',
      'Broken Arrow',
      'Edmond',
      'Midwest City'
    ],
    oregonCities: [
      'Portland',
      'Eugene',
      'Salem',
      'Gresham',
      'Beaverton',
      'Hillsboro',
      'Medford',
      'Springfield'
    ],
    pennsylvaniaCities: [
      'Philadelphia',
      'Pittsburgh',
      'Allentown',
      'Erie',
      'Upper Darby',
      'Reading',
      'Scranton',
      'Bethlehem',
      'Lower Merion',
      'Bensalem'
    ],
    rhodeIslandCities: [
      'Providence',
      'Warwick',
      'Cranston',
      'Pawtucket',
      'East Providence',
      'Woonsocket',
      'Coventry',
      'North Providence',
      'Cumberland',
      'West Warwick'
    ],
    southCarolinaCities: [
      'Columbia',
      'Charleston',
      'North Charleston',
      'Greenville',
      'Rock Hill',
      'Mount Pleasant'
    ],
    southDakotaCities: [
      'Sioux Falls',
      'Rapid City',
      'Aberdeen',
      'Watertown'
    ],
    tennesseeCities: [
      'Nashville-Davidson',
      'Knoxville',
      'Chattanooga',
      'Clarksville',
      'Murfreesboro',
      'Jackson',
      'Johnson City'
    ],
    texasCities: [
      'Dallas',
      'San Antonio',
      'Austin',
      'El Paso',
      'Forth Worth',
      'Arlington',
      'Corpus Christi',
      'Plano',
      'Garland',
      'Lubbock'
    ],
    utahCities: [
      'Salt Lake City',
      'Ogden',
      'Logan',
      'Brigham City',
      'Layton',
      'Sandy',
      'Orem',
      'Provo',
      'Tooele',
      'Springville',
      'Price',
      'Vernal',
      'Cedar City',
      'St George',
      'West Jordan',
      'Taylorsville'
    ],
    vermontCities: [
      'Burlington',
      'Essex',
      'Rutland',
      'Colchester',
      'South Burlington',
      'Bennington'
    ],
    virginiaCities: [
      'Norfolk',
      'Chesapeake',
      'Richmond',
      'Newport News',
      'Hampton',
      'Alexandria',
      'Portsmouth',
      'Roanoke',
      'Lynchburg'
    ],
    washingtonCities: [
      'Seattle',
      'Spokane',
      'Tacoma',
      'Vancouver',
      'Bellevue',
      'Everette',
      'Federal Way',
      'Kent',
      'Yakima',
      'Bellingham'
    ],
    washingtonDCCities: [],
    westVirginiaCities: [
      'Charleston',
      'Huntington',
      'Parkersburg',
      'Wheeling',
      'Morgantown'
    ],
    wisconsinCities: [
      'Milwaukee',
      'Madison',
      'Green Bay',
      'Kenosha',
      'Racine',
      'Appleton',
      'Waukesha',
      'Oshkosh',
      'Eau Claire',
      'West Allis'
    ],
    wyomingCities: [
      'Cheyenne',
      'Casper',
      'Laramie',
      'Gillette',
      'Rocks Springs'
    ]
  },
  getters: {
    utahCities(state) {
      return state.utahCities
    },
    page(state) {
      return state.page
    },
    stateData(state) {
      //console.log('Get theStates')
      //console.log(state.page)

      var response = {}
      response['pageName'] = state.page
      response['stateName'] = 'Unknown'
      response['cities'] = []
      response['stateName'] = state.page.replace('Mobile-Dev-', '')


      if (state.page === 'Alabama') {
        response['cities'] = clonedeep(state.alabamaCities)
      } else if (state.page === 'Alaska') {
        response['cities'] = clonedeep(state.alaskaCities)
      } else if (state.page === 'Arizona') {
        response['cities'] = clonedeep(state.arizonaCities)
      } else if (state.page === 'Arkansas') {
        response['cities'] = clonedeep(state.arkansasCities)
      } else if (state.page === 'California') {
        response['cities'] = clonedeep(state.californiaCities)
      } else if (state.page === 'Canada') {
        response['cities'] = clonedeep(state.canadaCities)
      } else if (state.page === 'Colorado') {
        response['cities'] = clonedeep(state.coloradoCities)
      } else if (state.page === 'Connecticut') {
        response['cities'] = clonedeep(state.connecticutCities)
      } else if (state.page === 'Deleware') {
        response['cities'] = clonedeep(state.delewareCities)
      } else if (state.page === 'Florida') {
        response['cities'] = clonedeep(state.floridaCities)
      } else if (state.page === 'Georgia') {
        response['cities'] = clonedeep(state.georgiaCities)
      } else if (state.page === 'Hawaii') {
        response['cities'] = clonedeep(state.hawaiiCities)
      } else if (state.page === 'Idaho') {
        response['cities'] = clonedeep(state.idahoCities)
      } else if (state.page === 'Illinois') {
        response['cities'] = clonedeep(state.illinoisCities)
      } else if (state.page === 'Indiana') {
        response['cities'] = clonedeep(state.indianaCities)
      } else if (state.page === 'Iowa') {
        response['cities'] = clonedeep(state.iowaCities)
      } else if (state.page === 'Kansas') {
        response['cities'] = clonedeep(state.kansasCities)
      } else if (state.page === 'Kentucky') {
        response['cities'] = clonedeep(state.kentuckyCities)
      } else if (state.page === 'Louisiana') {
        response['cities'] = clonedeep(state.louisianaCities)
      } else if (state.page === 'Maine') {
        response['cities'] = clonedeep(state.maineCities)
      } else if (state.page === 'Maryland') {
        response['cities'] = clonedeep(state.marylandCities)
      } else if (state.page === 'Massachusetts') {
        response['cities'] = clonedeep(state.massachusettsCities)
      } else if (state.page === 'Michigan') {
        response['cities'] = clonedeep(state.michiganCities)
      } else if (state.page === 'Minnesota') {
        response['cities'] = clonedeep(state.minnesotaCities)
      } else if (state.page === 'Mississippi') {
        response['cities'] = clonedeep(state.mississippiCities)
      } else if (state.page === 'Missouri') {
        response['cities'] = clonedeep(state.missouriCities)
      } else if (state.page === 'Montana') {
        response['cities'] = clonedeep(state.montanaCities)
      } else if (state.page === 'Nebraska') {
        response['cities'] = clonedeep(state.nebraskaCities)
      } else if (state.page === 'Nevada') {
        response['cities'] = clonedeep(state.nevadaCities)
      } else if (state.page === 'New Hampshire') {
        response['cities'] = clonedeep(state.newHampshireCities)
      } else if (state.page === 'New Jersey') {
        response['cities'] = clonedeep(state.newJerseyCities)
      } else if (state.page === 'New Mexico') {
        response['cities'] = clonedeep(state.newMexicoCities)
      } else if (state.page === 'New York') {
        response['cities'] = clonedeep(state.newYorkCities)
      } else if (state.page === 'North Carolina') {
        response['cities'] = clonedeep(state.northCarolinaCities)
      } else if (state.page === 'North Dakota') {
        response['cities'] = clonedeep(state.northDakotaCities)
      } else if (state.page === 'Ohio') {
        response['cities'] = clonedeep(state.ohioCities)
      } else if (state.page === 'Oklahoma') {
        response['cities'] = clonedeep(state.oklahomaCities)
      } else if (state.page === 'Oregon') {
        response['cities'] = clonedeep(state.oregonCities)
      } else if (state.page === 'Pennsylvania') {
        response['cities'] = clonedeep(state.pennsylvaniaCities)
      } else if (state.page === 'Rhode Island') {
        response['cities'] = clonedeep(state.rhodeIslandCities)
      } else if (state.page === 'South Carolina') {
        response['cities'] = clonedeep(state.southCarolinaCities)
      } else if (state.page === 'South Dakota') {
        response['cities'] = clonedeep(state.southDakotaCities)
      } else if (state.page === 'Tennessee') {
        response['cities'] = clonedeep(state.tennesseeCities)
      } else if (state.page === 'Texas') {
        response['cities'] = state.texasCities;
      } else if (state.page === 'Utah') {
        response['cities'] = clonedeep(state.utahCities)
      } else if (state.page === 'Vermont') {
        response['cities'] = clonedeep(state.vermontCities)
      } else if (state.page === 'Virginia') {
        response['cities'] = clonedeep(state.virginiaCities)
      } else if (state.page === 'Washington') {
        response['cities'] = clonedeep(state.washingtonCities)
      } else if (state.page === 'Washington DC') {
        response['cities'] = clonedeep(state.washingtonDCCities)
      } else if (state.page === 'West Virginia') {
        response['cities'] = clonedeep(state.westVirginiaCities)
      } else if (state.page === 'Wisconsin') {
        response['cities'] = clonedeep(state.wisconsinCities)
      } else if (state.page === 'Wyoming') {
        response['cities'] = clonedeep(state.wyomingCities)
      }else{
        response['cities'] = ['Unknown State'];
      }


      return clonedeep(response)
    }
  },
  mutations: {
    reset(state) {
      console.log('Reset Bug Cities')
    },
    setUtahCities(state, utahCities) {
      state.utahCities = utahCities
    },
    setPage(state, page) {
      var cleanedUp = page.replace('Mobile-Dev-', '')
      cleanedUp = cleanedUp.replace('-', '')
      state.page = cleanedUp
    }
  },
  actions: {
    reset({ commit }) {
      commit('reset')
    },
    setUtahCities({ commit }, payload) {
      commit('setUtahCities', payload)
    },
    setPage({ commit }, payload) {
      commit('setPage', payload)
    }
  }
}



