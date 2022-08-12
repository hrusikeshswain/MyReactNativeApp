import { Platform } from 'react-native';

// Packages
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const adminsEmails = [ // TODO: emails must be lowercased!
  'albertogomez@safeguardglobal.com',
  'alexalexiuc@safeguardglobal.com',
  'andreigliga@safeguardglobal.com',
  'andrewbailey@safeguardglobal.com',
  'dragosstanciu@safeguardglobal.com',
  'demo_employee1@safeguardglobal.com',
  'gabrielabuftea@safeguardglobal.com',
  'gyorgydavid@safeguardglobal.com',
  'hrusikeshswain@safeguardglobal.com',
  'indukaladharannair@safeguardglobal.com',
  'johnpritchard@safeguardglobal.com',
  'juancarlossantiago@safeguardglobal.com',
  'juliojimenez@safeguardglobal.com',
  'maciejbaranowski@safeguardglobal.com',
  'marcstuart@safeguardglobal.com',
  'mihneacojocaru@safeguardglobal.com',
  'mobile1@20220122.SGIN-037.nccpentest.com', // TODO: for 22/11/21 NCC Group second security audit, should be removed after it
  'mobile2@20220122.SGIN-037.nccpentest.com', // TODO: for 22/11/21 NCC Group second security audit, should be removed after it
  'mobile3@20220122.SGIN-037.nccpentest.com', // TODO: for 22/11/21 NCC Group second security audit, should be removed after it
  'nickstanton@safeguardglobal.com',
  'pablocontreras@safeguardglobal.com',
  'patsyjones@safeguardglobal.com',
  'paullunn@safeguardglobal.com',
  'poonamrani@safeguardglobal.com',
  'rachaelgilman@safeguardglobal.com',
  'simonsturge@safeguardglobal.com',
  'suhailadam@safeguardglobal.com',
  'timday@safeguardglobal.com',
  'tomaszgorecki@safeguardglobal.com',
  'tyronnejones@safeguardglobal.com',
  'vaibhavrastogi@safeguardglobal.com'
];

const colours = {
  black:          '#000000',
  blue:           '#4a90e2',
  brown:          '#a52a2a',
  cyan:           '#99ffff', // Safeguard Global official
  darkcyan:       '#4fbabe', // Safeguard Global official
  darkgreen:      '#005000', // #006400
  darkgrey:       '#585858',
  darkorange:     '#ff4500',
  darklavender:   '#cbb4ed', // '#cbb4ed', // "lavender" was good for backgrounds but too light for texts
  darkred:        '#8b0000',
  green:          '#008000',
  grey:           '#9b9b9b',
  indigo:         '#172849', // Safeguard Global official
  lavender:       '#d9c9f2', // Safeguard Global supporting and limited-use
  lightbrown:     '#f5deb3', // #ffdead
  lightblue:      '#add8e6',
  lighterplum:    '#c6a2c7',
  lightgreen:     '#90ee90',
  lightgrey:      '#fafafa',
  lightplum:      '#583758', 
  lightred:       '#ff8080',
  lightteal:      '#adbdc2',
  lightyellow:    '#ffff00',
  mediumblue:     '#0000FF',
  mediumbrown:    '#e5c19d',
  mediumgreen:    '#32CD32',
  mediumgrey:     '#cbcbcb',
  navy:           '#000080',
  orange:         '#ff8c00',
  pink:           '#ffcccc',
  plum:           '#482348',
  purple:         '#9400d3',
  red:            '#ea0303',
  safeguardgreen: '#7ec78d',
  teal:           '#004552',
  violet:         '#ee82ee',
  white:          '#ffffff',
  yellow:         '#ffcc00'
};

const apiUrls = [
  {
    'colour': colours.black,
    'label': 'Local',
    'value': 'http://192.168.1.144:3002'
  },
  {
    'colour': colours.safeguardgreen,
    'label': 'Acting Development',
    'value': 'https://acting-dev-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.safeguardgreen,
    'label': 'Acting QA',
    'value': 'https://acting-qa-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.safeguardgreen,
    'label': 'Acting UAT',
    'value': 'https://acting-uat-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.blue,
    'label': 'Core Development',
    'value': 'https://core-dev-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.blue,
    'label': 'Core QA',
    'value': 'https://core-qa-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.blue,
    'label': 'Core UAT',
    'value': 'https://core-uat-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.navy,
    'label': 'Kanban Development',
    'value': 'https://kanban-dev-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.navy,
    'label': 'Kanban QA',
    'value': 'https://kanban-qa-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.navy,
    'label': 'Kanban UAT',
    'value': 'https://kanban-uat-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.purple,
    'label': 'Roadmap Development',
    'value': 'https://roadmap-dev-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.purple,
    'label': 'Roadmap QA',
    'value': 'https://roadmap-qa-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.purple,
    'label': 'Roadmap UAT',
    'value': 'https://roadmap-uat-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.brown,
    'label': 'Perf',
    'value': 'https://perf-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.orange,
    'label': 'Staging',
    'value': 'https://staging-globalunity.safeguardglobal.com'
  },
  {
    'colour': colours.red,
    'label': 'Production',
    'value': 'https://globalunity.safeguardglobal.com'
  }
];

const borderRadius = {
  huge: 26,
  bigger: 16,
  big: 12,
  medium: 10,
  small: 6,
  smaller: 4,
  none: 0
};

const durations = {
  longer: 7000,
  long: 5000,
  medium: 3000,
  short: 2000,
  shorter: 500
};

/* const dynatraceConfiguration = {
  beaconUrl: 'https://bf73501utm.bf.dynatrace.com/mbeacon',  // Identifies the environment within Dynatrace
  applicationId: 'd8ca402e-72ea-4775-9c24-517369cb19f4', // Identifies the mobile app
  reportCrash:  true, // Reports crashes, "true" by default
  logLevel: LogLevel.Info, // Allows you to choose between "LogLevel.Info" and "LogLevel.Debug" (.Debug returns more logs and this is especially important when something is not functioning correctly)
  lifecycleUpdate: false, // To see update cycles on lifecycle actions as well ("false" by default as it creates a lot more actions)
  certificateValidation: false, // Allows the use of self-signed certificates ("false" by default, this configuration key doesn't impact mobile app connections and it's only used for OneAgent communication)
  userOptIn: true // Activates the privacy mode when set to "true", user consent must be queried and set
}; */

const eventTypes = { // Types of clockingd
  missed : -1,
  in: 0,
  out: 1
};

const eventTypesForRadiobuttons = [
  {
    key: 0,
    text: 'In'
  },
  {
    key: 1,
    text: 'Out'
  }
];

const expensesStatuses = {
  1: 'Pending',
  2: 'Approved',
  3: 'Rejected',
  4: 'Paid'
};

const expensesCategories = {
  1: 'receipt.violet', // Other expenses
  2: 'gas-pump.purple', // Fuel
  3: 'suitcase-rolling.navy', // Non Overnight Per Diem
  4: 'bed.navy', // Overnight Per Diem
  5: 'landmark.red', // Taxes // fa-gavel
  6: 'credit-card.red', // Visas
  7: 'box.orange', // Courier
  8: 'envelope-open-text.orange', // Post
  9: 'mail-bulk.orange', // Office supply
  10: 'phone-square-alt.blue', // Skype credit
  11: 'phone.blue', // Fixed Phone
  12: 'mobile-alt.blue', // Mobile phone
  13: 'wifi.blue', // Internet Access
  14: 'handshake.red', // Representation // fa-hands-helping
  15: 'glass-whiskey.darkgreen', // Refreshment
  16: 'utensils.darkgreen', // Dinner
  17: 'glass-cheers.darkgreen', // Lunch
  18: 'coffee.darkgreen', // Breakfast
  19: 'concierge-bell.navy', // Hotel
  20: 'bus-alt.brown', // Public transportation
  21: 'taxi.brown', // Taxi
  22: 'parking.purple', // Parking
  23: 'tachometer-alt.brown', // Road
  24: 'train.brown', // Train
  25: 'plane.brown', // Flight
  26: 'road.purple', // Mileage
  27: 'glass-martini-alt.darkgreen', // Bar
  28: 'traffic-light.purple', // Refund car leasing km
  29: 'compress-alt.navy', // Reduce per diem
  30: 'couch.navy', // Per Diem after 18:00
  31: 'laptop.navy', // Overnight Per Diem - Tech
  32: 'globe.navy', // Per Diem - Abroad
  33: 'suitcase.navy' // Per Diem - Manager
};

const fontFamilies = {
  light: 'Comfortaa-Light',
  regular: 'Comfortaa-Regular',
  bold: 'Comfortaa-Bold'
};

const fontSizes = {
  forClockingsListTimer: (Platform.OS === 'android') ? hp('8.5%') : hp('7.5%'), 
  gigantic: hp('4.65%'),
  huge: hp('4.15%'),
  bigger: hp('3.15%'),
  big: (Platform.OS === 'android') ? hp('2.75%') : hp('2.5%'),
  medium: (Platform.OS === 'android') ? hp('2.25%') : hp('2.10%'),
  small: (Platform.OS === 'android') ? hp('2%') : hp('1.8%'),
  smaller: (Platform.OS === 'android') ? hp('1.6%') : hp('1.42%'),
  smallest: hp('1.1%') 
};



const ipv4Url = 'https://api.ipify.org?format=json';



const levels = { // TODO: find a way to stop using this
  debug: 'debug',
  error: 'error',
  info: 'info',
  warning: 'warning',
  success: 'success'
};

const months = [
  {
    'label': 'January',
    'value': '1'
  },
  {
    'label': 'February',
    'value': '2'
  },
  {
    'label': 'March',
    'value': '3'
  },
  {
    'label': 'April',
    'value': '4'
  },
  {
    'label': 'May',
    'value': '5'
  },
  {
    'label': 'June',
    'value': '6'
  },
  {
    'label': 'July',
    'value': '7'
  },
  {
    'label': 'August',
    'value': '8'
  },
  {
    'label': 'September',
    'value': '9'
  },
  {
    'label': 'October',
    'value': '10'
  },
  {
    'label': 'November',
    'value': '11'
  },
  {
    'label': 'December',
    'value': '12'
  }
];



const recaptchaKeys = [
  {
    'label': 'development',
    'baseUrl': 'https://roadmap-qa-globalunity.safeguardglobal.com',
    'siteKey': '6LepR3gaAAAAAFp_JzZPX5jefR7owbU2i99VXwBk'
  },
  {
    'label': 'google',
    'baseUrl': 'https://google.com',
    'siteKey': '6Lf41K0UAAAAAHd3FeZbJsMbL00-Beqyk33NHqtp'
  },
  {
    'label': 'production',
    'baseUrl': 'https://globalunity.safeguardglobal.com',
    'siteKey': '6LeaR3gaAAAAANzw2PnrwLm6_-nXQ5qDQxID6bta'
  }
];

const themes = {
  'admin': {
    'themeFrontColour': colours.darkorange,
    'themeBackColour': colours.lightyellow,
    'themeExtraColour': colours.black
  },
  'red': {
    'themeFrontColour': colours.pink,
    'themeBackColour': colours.red,
    'themeExtraColour': colours.darkred
  },
  'yellow': { // Adm In Me official
    'themeFrontColour': colours.black,
    'themeBackColour': colours.yellow,
    'themeExtraColour': colours.grey
  },
  'green': {
    'themeFrontColour': colours.lightgreen,
    'themeBackColour': colours.darkgreen,
    'themeExtraColour': colours.green
  },
  'blue': {
    'themeFrontColour': colours.lightblue,
    'themeBackColour': colours.mediumblue,
    'themeExtraColour': colours.navy
  },
  'plum': { // Safeguard Global official
    'themeFrontColour': colours.cyan,
    'themeBackColour': colours.plum,
    'themeExtraColour': colours.teal
  }
};
const IS_IOS = Platform.OS === 'ios';

export { adminsEmails, apiUrls, borderRadius, colours, durations, eventTypes, eventTypesForRadiobuttons, expensesCategories, expensesStatuses, fontFamilies, fontSizes, ipv4Url, levels, months, recaptchaKeys, themes, IS_IOS };
