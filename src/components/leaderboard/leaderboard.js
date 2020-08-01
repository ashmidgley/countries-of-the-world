import React from 'react';
import './leaderboard.css';
import { Link } from 'react-router-dom';

class Leaderboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            codeMap: {'Andorra': 'ad', 'United Arab Emirates': 'ae', 'Afghanistan': 'af', 'Antigua and Barbuda': 'ag', 'Anguilla': 'ai', 'Albania': 'al', 'Armenia': 'am', 'Netherlands Antilles': 'an', 'Angola': 'ao', 'Antarctica': 'aq', 'Argentina': 'ar', 'American Samoa': 'as', 'Austria': 'at', 'Australia': 'au', 'Aruba': 'aw', '\\u00c5land Islands': 'ax', 'Azerbaijan': 'az', 'Bosnia and Herzegovina': 'ba', 'Barbados': 'bb', 'Bangladesh': 'bd', 'Belgium': 'be', 'Burkina Faso': 'bf', 'Bulgaria': 'bg', 'Bahrain': 'bh', 'Burundi': 'bi', 'Benin': 'bj', 'Saint Barthélemy': 'bl', 'Bermuda': 'bm', 'Brunei Darussalam': 'bn', 'Bolivia, Plurinational State of': 'bo', 'Caribbean Netherlands': 'bq', 'Brazil': 'br', 'Bahamas': 'bs', 'Bhutan': 'bt', 'Bouvet Island': 'bv', 'Botswana': 'bw', 'Belarus': 'by', 'Belize': 'bz', 'Canada': 'ca', 'Cocos (Keeling) Islands': 'cc', 'Congo, the Democratic Republic of the': 'cd', 'Central African Republic': 'cf', 'Congo': 'cg', 'Switzerland': 'ch', "C\\u00f4te d'Ivoire": 'ci', 'Cook Islands': 'ck', 'Chile': 'cl', 'Cameroon': 'cm', 'China': 'cn', 'Colombia': 'co', 'Costa Rica': 'cr', 'Cuba': 'cu', 'Cape Verde': 'cv', 'Cura\\u00e7ao': 'cw', 'Christmas Island': 'cx', 'Cyprus': 'cy', 'Czech Republic': 'cz', 'Germany': 'de', 'Djibouti': 'dj', 'Denmark': 'dk', 'Dominica': 'dm', 'Dominican Republic': 'do', 'Algeria': 'dz', 'Ecuador': 'ec', 'Estonia': 'ee', 'Egypt': 'eg', 'Western Sahara': 'eh', 'Eritrea': 'er', 'Spain': 'es', 'Ethiopia': 'et', 'Europe': 'eu', 'Finland': 'fi', 'Fiji': 'fj', 'Falkland Islands (Malvinas)': 'fk', 'Micronesia, Federated States of': 'fm', 'Faroe Islands': 'fo', 'France': 'fr', 'Gabon': 'ga', 'England': 'gb-eng', 'Northern Ireland': 'gb-nir', 'Scotland': 'gb-sct', 'Wales': 'gb-wls', 'United Kingdom': 'gb', 'Grenada': 'gd', 'Georgia': 'ge', 'French Guiana': 'gf', 'Guernsey': 'gg', 'Ghana': 'gh', 'Gibraltar': 'gi', 'Greenland': 'gl', 'Gambia': 'gm', 'Guinea': 'gn', 'Guadeloupe': 'gp', 'Equatorial Guinea': 'gq', 'Greece': 'gr', 'South Georgia and the South Sandwich Islands': 'gs', 'Guatemala': 'gt', 'Guam': 'gu', 'Guinea-Bissau': 'gw', 'Guyana': 'gy', 'Hong Kong': 'hk', 'Heard Island and McDonald Islands': 'hm', 'Honduras': 'hn', 'Croatia': 'hr', 'Haiti': 'ht', 'Hungary': 'hu', 'Indonesia': 'id', 'Ireland': 'ie', 'Israel': 'il', 'Isle of Man': 'im', 'India': 'in', 'British Indian Ocean Territory': 'io', 'Iraq': 'iq', 'Iran, Islamic Republic of': 'ir', 'Iceland': 'is', 'Italy': 'it', 'Jersey': 'je', 'Jamaica': 'jm', 'Jordan': 'jo', 'Japan': 'jp', 'Kenya': 'ke', 'Kyrgyzstan': 'kg', 'Cambodia': 'kh', 'Kiribati': 'ki', 'Comoros': 'km', 'Saint Kitts and Nevis': 'kn', "Korea, Democratic People's Republic of": 'kp', 'Korea, Republic of': 'kr', 'Kuwait': 'kw', 'Cayman Islands': 'ky', 'Kazakhstan': 'kz', "Lao People's Democratic Republic": 'la', 'Lebanon': 'lb', 'Saint Lucia': 'lc', 'Liechtenstein': 'li', 'Sri Lanka': 'lk', 'Liberia': 'lr', 'Lesotho': 'ls', 'Lithuania': 'lt', 'Luxembourg': 'lu', 'Latvia': 'lv',
                'Libya': 'ly', 'Morocco': 'ma', 'Monaco': 'mc', 'Moldova, Republic of': 'md', 'Montenegro': 'me', 'Saint Martin': 'mf', 'Madagascar': 'mg', 'Marshall Islands': 'mh', 'Macedonia, the former Yugoslav Republic of': 'mk', 'Mali': 'ml', 'Myanmar': 'mm', 'Mongolia': 'mn', 'Macao': 'mo', 'Northern Mariana Islands': 'mp', 'Martinique': 'mq', 'Mauritania': 'mr', 'Montserrat': 'ms', 'Malta': 'mt', 'Mauritius': 'mu', 'Maldives': 'mv', 'Malawi': 'mw', 'Mexico': 'mx', 'Malaysia': 'my', 'Mozambique': 'mz', 'Namibia': 'na', 'New Caledonia': 'nc', 'Niger': 'ne', 'Norfolk Island': 'nf', 'Nigeria': 'ng', 'Nicaragua': 'ni', 'Netherlands': 'nl', 'Norway': 'no', 'Nepal': 'np', 'Nauru': 'nr', 'Niue': 'nu', 'New Zealand': 'nz', 'Oman': 'om', 'Panama': 'pa', 'Peru': 'pe', 'French Polynesia': 'pf', 'Papua New Guinea': 'pg', 'Philippines': 'ph', 'Pakistan': 'pk', 'Poland': 'pl', 'Saint Pierre and Miquelon': 'pm', 'Pitcairn': 'pn', 'Puerto Rico': 'pr', 'Palestine': 'ps', 'Portugal': 'pt', 'Palau': 'pw', 'Paraguay': 'py', 'Qatar': 'qa', 'Réunion': 're', 'Romania': 'ro', 'Serbia': 'rs', 'Russian Federation': 'ru', 'Rwanda': 'rw', 'Saudi Arabia': 'sa', 'Solomon Islands': 'sb', 'Seychelles': 'sc', 'Sudan': 'sd', 'Sweden': 'se', 'Singapore': 'sg', 'Saint Helena, Ascension and Tristan da Cunha': 'sh', 'Slovenia': 'si', 'Svalbard and Jan Mayen Islands': 'sj', 'Slovakia': 'sk', 'Sierra Leone': 'sl', 'San Marino': 'sm', 'Senegal': 'sn', 'Somalia': 'so', 'Suriname': 'sr', 'South Sudan': 'ss', 'Sao Tome and Principe': 'st', 'El Salvador': 'sv', 'Sint Maarten (Dutch part)': 'sx', 'Syrian Arab Republic': 'sy', 'Swaziland': 'sz', 'Turks and Caicos Islands': 'tc', 'Chad': 'td', 'French Southern Territories': 'tf', 'Togo': 'tg', 'Thailand': 'th', 'Tajikistan': 'tj', 'Tokelau': 'tk', 'Timor-Leste': 'tl', 'Turkmenistan': 'tm', 'Tunisia': 'tn', 'Tonga': 'to', 'Turkey': 'tr', 'Trinidad and Tobago': 'tt', 'Tuvalu': 'tv', 'Taiwan': 'tw', 'Tanzania, United Republic of': 'tz', 'Ukraine': 'ua', 'Uganda': 'ug', 'US Minor Outlying Islands': 'um', 'United States': 'us', 'Uruguay': 'uy', 'Uzbekistan': 'uz', 'Holy See (Vatican City State)': 'va', 'Saint Vincent and the Grenadines': 'vc', 'Venezuela, Bolivarian Republic of': 've', 'Virgin Islands, British': 'vg', 'Virgin Islands, U.S.': 'vi', 'Viet Nam': 'vn', 'Vanuatu': 'vu', 'Wallis and Futuna Islands': 'wf', 'Kosovo': 'xk', 'Samoa': 'ws', 'Yemen': 'ye', 'Mayotte': 'yt', 'South Africa': 'za', 'Zambia': 'zm', 'Zimbabwe': 'zw'},
            entries: [
                { id: 1, name: 'KEM', country: 'England', countries: 256, time: '14:20' },
                { id: 2, name: 'HSW', country: 'Uganda', countries: 136, time: '8:20' },
                { id: 3, name: 'AKM', country: 'New Zealand', countries: 5, time: '15:00' }
            ]
        };
    }

    render() {
        return(
            <div className="leaderboard-container">
                <Link to="/">
                    <ion-icon id="home-icon" name="home-outline"></ion-icon>
                </Link>
                <Link to='/leaderboard'>
                    <ion-icon id="trophy-icon" name="trophy-outline"></ion-icon>
                </Link>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="text-center">
                            <h1>Leaderboard</h1>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Countries</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.entries.map(entry =>
                                    <tr key={entry.id}>
                                        <td>{this.state.entries.indexOf(entry)+1}</td>
                                        <td>{entry.name}</td>
                                        <td>
                                            <img id="flag" src={`/flags/${this.state.codeMap[entry.country]}.svg`} />
                                        </td>
                                        <td>{entry.countries}</td>
                                        <td>{entry.time}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Leaderboard;
