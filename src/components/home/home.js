import React from 'react';
import './home.css';
import 'react-svg-map/lib/index.css';
import $ from 'jquery';
import World from "@svg-maps/world";
import Modal from 'react-modal';
import { SVGMap } from "react-svg-map";
import { Link } from 'react-router-dom';
import { customStyles } from '../../helpers/custom-modal';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: ['andorra', 'united arab emirates', 'afghanistan', 'antigua and barbuda', 'anguilla', 'albania', 'armenia', 'angola', 'argentina', 'american samoa', 'austria', 'australia', 'aruba', 'aland islands', 'azerbaijan', 'bosnia and herzegovina', 'barbados', 'bangladesh', 'belgium', 'burkina faso', 'bulgaria', 'bahrain', 'burundi', 'benin', 'saint barthelemy', 'brunei darussalam', 'bolivia', 'bermuda', 'bonaire, saint eustachius and saba', 'brazil', 'bahamas', 'bhutan', 'bouvet island', 'botswana', 'belarus', 'belize', 'canada', 'cocos (keeling) islands', 'democratic republic of congo', 'central african republic', 'republic of congo', 'switzerland', "cote d'ivoire", 'cook islands', 'chile', 'cameroon', 'china', 'colombia', 'costa rica', 'cuba', 'cape verde', 'curaçao', 'christmas island', 'cyprus', 'czech republic', 'germany', 'djibouti', 'denmark', 'dominica', 'dominican republic', 'algeria', 'ecuador', 'egypt', 'estonia', 'western sahara', 'eritrea', 'spain', 'ethiopia', 'finland', 'fiji', 'falkland islands', 'federated states of micronesia', 'faroe islands', 'france', 'gabon', 'united kingdom', 'georgia', 'grenada', 'french guiana', 'guernsey', 'ghana', 'gibraltar', 'greenland', 'gambia', 'guinea', 'glorioso islands', 'guadeloupe', 'equatorial guinea', 'greece', 'south georgia and south sandwich islands', 'guatemala', 'guam', 'guinea-bissau', 'guyana', 'hong kong', 'heard island and mcdonald islands', 'honduras', 'croatia', 'haiti', 'hungary', 'indonesia', 'ireland', 'israel', 'isle of man', 'india', 'british indian ocean territory', 'iraq', 'iran', 'iceland', 'italy', 'jersey', 'jamaica', 'jordan', 'japan', 'juan de nova island', 'kenya', 'kyrgyzstan', 'cambodia', 'kiribati', 'comoros', 'saint kitts and nevis', 'north korea', 'south korea', 'kosovo', 'kuwait', 'cayman islands', 'kazakhstan', "lao people's democratic republic", 'lebanon', 'saint lucia', 'liechtenstein', 'sri lanka', 'liberia', 'lesotho', 'lithuania', 'luxembourg', 'latvia', 'libya', 'morocco', 'monaco', 'moldova', 'madagascar', 'montenegro', 'saint martin', 'marshall islands', 'macedonia', 'mali', 'macau', 'myanmar', 'mongolia', 'northern mariana islands', 'martinique', 'mauritania', 'montserrat', 'malta', 'mauritius', 'maldives', 'malawi', 'mexico', 'malaysia', 'mozambique', 'namibia', 'new caledonia', 'niger', 'norfolk island', 'nigeria', 'nicaragua', 'netherlands', 'norway', 'nepal', 'nauru', 'niue', 'new zealand', 'oman', 'panama', 'peru', 'french polynesia', 'papua new guinea', 'philippines', 'pakistan', 'poland', 'saint pierre and miquelon', 'pitcairn islands', 'puerto rico', 'palestinian territories', 'portugal', 'palau', 'paraguay', 'qatar', 'reunion', 'romania', 'serbia', 'russia', 'rwanda', 'saudi arabia', 'solomon islands', 'seychelles', 'sudan', 'sweden', 'singapore', 'saint helena', 'slovenia', 'svalbard and jan mayen', 'slovakia', 'sierra leone', 'san marino', 'senegal', 'somalia', 'suriname', 'south sudan', 'sao tome and principe', 'el salvador',
                'saint martin', 'syria', 'swaziland', 'turks and caicos islands', 'chad', 'french southern and antarctic lands', 'togo', 'thailand', 'tajikistan', 'tokelau', 'timor-leste', 'turkmenistan', 'tunisia', 'tonga', 'turkey', 'trinidad and tobago', 'tuvalu', 'taiwan', 'tanzania', 'ukraine', 'uganda', 'jarvis island', 'baker island', 'howland island', 'johnston atoll', 'midway islands', 'wake island', 'united states', 'uruguay', 'uzbekistan', 'vatican city', 'saint vincent and the grenadines', 'venezuela', 'british virgin islands', 'us virgin islands', 'vietnam', 'vanuatu', 'wallis and futuna', 'samoa', 'yemen', 'mayotte', 'south africa', 'zambia', 'zimbabwe'],
            countriesMap: {'andorra': 'Andorra', 'united arab emirates': 'United Arab Emirates', 'afghanistan': 'Afghanistan', 'antigua and barbuda': 'Antigua and Barbuda', 'anguilla': 'Anguilla', 'albania': 'Albania', 'armenia': 'Armenia', 'angola': 'Angola', 'argentina': 'Argentina', 'american samoa': 'American Samoa', 'austria': 'Austria', 'australia': 'Australia', 'aruba': 'Aruba', 'aland islands': 'Aland Islands', 'azerbaijan': 'Azerbaijan', 'bosnia and herzegovina': 'Bosnia and Herzegovina', 'barbados': 'Barbados', 'bangladesh': 'Bangladesh', 'belgium': 'Belgium', 'burkina faso': 'Burkina Faso', 'bulgaria': 'Bulgaria', 'bahrain': 'Bahrain', 'burundi': 'Burundi', 'benin': 'Benin', 'saint barthelemy': 'Saint Barthelemy', 'brunei darussalam': 'Brunei Darussalam', 'bolivia': 'Bolivia', 'bermuda': 'Bermuda', 'bonaire, saint eustachius and saba': 'Bonaire, Saint Eustachius and Saba', 'brazil': 'Brazil', 'bahamas': 'Bahamas', 'bhutan': 'Bhutan', 'bouvet island': 'Bouvet Island', 'botswana': 'Botswana', 'belarus': 'Belarus', 'belize': 'Belize', 'canada': 'Canada', 'cocos (keeling) islands': 'Cocos (Keeling) Islands', 'democratic republic of congo': 'Democratic Republic of Congo', 'central african republic': 'Central African Republic', 'republic of congo': 'Republic of Congo', 'switzerland': 'Switzerland', "cote d'ivoire": "Côte d'Ivoire", 'cook islands': 'Cook Islands', 'chile': 'Chile', 'cameroon': 'Cameroon', 'china': 'China', 'colombia': 'Colombia', 'costa rica': 'Costa Rica', 'cuba': 'Cuba', 'cape verde': 'Cape Verde', 'curaçao': 'Curaçao', 'christmas island': 'Christmas Island', 'cyprus': 'Cyprus', 'czech republic': 'Czech Republic', 'germany': 'Germany', 'djibouti': 'Djibouti', 'denmark': 'Denmark', 'dominica': 'Dominica', 'dominican republic': 'Dominican Republic', 'algeria': 'Algeria', 'ecuador': 'Ecuador', 'egypt': 'Egypt', 'estonia': 'Estonia', 'western sahara': 'Western Sahara', 'eritrea': 'Eritrea', 'spain': 'Spain', 'ethiopia': 'Ethiopia', 'finland': 'Finland', 'fiji': 'Fiji', 'falkland islands': 'Falkland Islands', 'federated states of micronesia': 'Federated States of Micronesia', 'faroe islands': 'Faroe Islands', 'france': 'France', 'gabon': 'Gabon', 'united kingdom': 'United Kingdom', 'georgia': 'Georgia', 'grenada': 'Grenada', 'french guiana': 'French Guiana', 'guernsey': 'Guernsey', 'ghana': 'Ghana', 'gibraltar': 'Gibraltar', 'greenland': 'Greenland', 'gambia': 'Gambia', 'guinea': 'Guinea', 'glorioso islands': 'Glorioso Islands', 'guadeloupe': 'Guadeloupe', 'equatorial guinea': 'Equatorial Guinea', 'greece': 'Greece', 'south georgia and south sandwich islands': 'South Georgia and South Sandwich Islands', 'guatemala': 'Guatemala', 'guam': 'Guam', 'guinea-bissau': 'Guinea-Bissau', 'guyana': 'Guyana', 'hong kong': 'Hong Kong', 'heard island and mcdonald islands': 'Heard Island and McDonald Islands', 'honduras': 'Honduras', 'croatia': 'Croatia', 'haiti': 'Haiti', 'hungary': 'Hungary', 'indonesia': 'Indonesia', 'ireland': 'Ireland',
                'israel': 'Israel', 'isle of man': 'Isle of Man', 'india': 'India', 'british indian ocean territory': 'British Indian Ocean Territory', 'iraq': 'Iraq', 'iran': 'Iran', 'iceland': 'Iceland', 'italy': 'Italy', 'jersey': 'Jersey', 'jamaica': 'Jamaica', 'jordan': 'Jordan', 'japan': 'Japan', 'juan de nova island': 'Juan De Nova Island', 'kenya': 'Kenya', 'kyrgyzstan': 'Kyrgyzstan', 'cambodia': 'Cambodia', 'kiribati': 'Kiribati', 'comoros': 'Comoros', 'saint kitts and nevis': 'Saint Kitts and Nevis', 'north korea': 'North Korea', 'south korea': 'South Korea', 'kosovo': 'Kosovo', 'kuwait': 'Kuwait', 'cayman islands': 'Cayman Islands', 'kazakhstan': 'Kazakhstan', "lao people's democratic republic": "Lao People's Democratic Republic", 'lebanon': 'Lebanon', 'saint lucia': 'Saint Lucia', 'liechtenstein': 'Liechtenstein', 'sri lanka': 'Sri Lanka', 'liberia': 'Liberia', 'lesotho': 'Lesotho', 'lithuania': 'Lithuania', 'luxembourg': 'Luxembourg', 'latvia': 'Latvia', 'libya': 'Libya', 'morocco': 'Morocco', 'monaco': 'Monaco', 'moldova': 'Moldova', 'madagascar': 'Madagascar', 'montenegro': 'Montenegro', 'saint martin': 'Saint Martin', 'marshall islands': 'Marshall Islands', 'macedonia': 'Macedonia', 'mali': 'Mali', 'macau': 'Macau', 'myanmar': 'Myanmar', 'mongolia': 'Mongolia', 'northern mariana islands': 'Northern Mariana Islands', 'martinique': 'Martinique', 'mauritania': 'Mauritania', 'montserrat': 'Montserrat', 'malta': 'Malta', 'mauritius': 'Mauritius', 'maldives': 'Maldives', 'malawi': 'Malawi', 'mexico': 'Mexico', 'malaysia': 'Malaysia', 'mozambique': 'Mozambique', 'namibia': 'Namibia', 'new caledonia': 'New Caledonia', 'niger': 'Niger', 'norfolk island': 'Norfolk Island', 'nigeria': 'Nigeria', 'nicaragua': 'Nicaragua', 'netherlands': 'Netherlands', 'norway': 'Norway', 'nepal': 'Nepal', 'nauru': 'Nauru', 'niue': 'Niue', 'new zealand': 'New Zealand', 'oman': 'Oman', 'panama': 'Panama', 'peru': 'Peru', 'french polynesia': 'French Polynesia', 'papua new guinea': 'Papua New Guinea', 'philippines': 'Philippines', 'pakistan': 'Pakistan', 'poland': 'Poland', 'saint pierre and miquelon': 'Saint Pierre and Miquelon', 'pitcairn islands': 'Pitcairn Islands', 'puerto rico': 'Puerto Rico', 'palestinian territories': 'Palestinian Territories', 'portugal': 'Portugal', 'palau': 'Palau', 'paraguay': 'Paraguay', 'qatar': 'Qatar', 'reunion': 'Reunion', 'romania': 'Romania', 'serbia': 'Serbia', 'russia': 'Russia', 'rwanda': 'Rwanda', 'saudi arabia': 'Saudi Arabia', 'solomon islands': 'Solomon Islands', 'seychelles': 'Seychelles', 'sudan': 'Sudan', 'sweden': 'Sweden', 'singapore': 'Singapore', 'saint helena': 'Saint Helena', 'slovenia': 'Slovenia', 'svalbard and jan mayen': 'Svalbard and Jan Mayen', 'slovakia': 'Slovakia', 'sierra leone': 'Sierra Leone', 'san marino': 'San Marino', 'senegal': 'Senegal', 'somalia': 'Somalia', 'suriname': 'Suriname', 'south sudan': 'South Sudan', 'sao tome and principe': 'Sao Tome and Principe', 'el salvador': 'El Salvador',
                'syria': 'Syria', 'swaziland': 'Swaziland', 'turks and caicos islands': 'Turks and Caicos Islands', 'chad': 'Chad', 'french southern and antarctic lands': 'French Southern and Antarctic Lands', 'togo': 'Togo', 'thailand': 'Thailand', 'tajikistan': 'Tajikistan', 'tokelau': 'Tokelau', 'timor-leste': 'Timor-Leste', 'turkmenistan': 'Turkmenistan', 'tunisia': 'Tunisia', 'tonga': 'Tonga', 'turkey': 'Turkey', 'trinidad and tobago': 'Trinidad and Tobago', 'tuvalu': 'Tuvalu', 'taiwan': 'Taiwan', 'tanzania': 'Tanzania', 'ukraine': 'Ukraine', 'uganda': 'Uganda', 'jarvis island': 'Jarvis Island', 'baker island': 'Baker Island', 'howland island': 'Howland Island', 'johnston atoll': 'Johnston Atoll', 'midway islands': 'Midway Islands', 'wake island': 'Wake Island', 'united states': 'United States', 'uruguay': 'Uruguay', 'uzbekistan': 'Uzbekistan', 'vatican city': 'Vatican City', 'saint vincent and the grenadines': 'Saint Vincent and the Grenadines', 'venezuela': 'Venezuela', 'british virgin islands': 'British Virgin Islands', 'us virgin islands': 'US Virgin Islands', 'vietnam': 'Vietnam', 'vanuatu': 'Vanuatu', 'wallis and futuna': 'Wallis and Futuna', 'samoa': 'Samoa', 'yemen': 'Yemen', 'mayotte': 'Mayotte', 'south africa': 'South Africa', 'zambia': 'Zambia', 'zimbabwe': 'Zimbabwe' }, 
            codeMap: {'Andorra': 'ad', 'United Arab Emirates': 'ae', 'Afghanistan': 'af', 'Antigua and Barbuda': 'ag', 'Anguilla': 'ai', 'Albania': 'al', 'Armenia': 'am', 'Netherlands Antilles': 'an', 'Angola': 'ao', 'Antarctica': 'aq', 'Argentina': 'ar', 'American Samoa': 'as', 'Austria': 'at', 'Australia': 'au', 'Aruba': 'aw', '\\u00c5land Islands': 'ax', 'Azerbaijan': 'az', 'Bosnia and Herzegovina': 'ba', 'Barbados': 'bb', 'Bangladesh': 'bd', 'Belgium': 'be', 'Burkina Faso': 'bf', 'Bulgaria': 'bg', 'Bahrain': 'bh', 'Burundi': 'bi', 'Benin': 'bj', 'Saint Barthélemy': 'bl', 'Bermuda': 'bm', 'Brunei Darussalam': 'bn', 'Bolivia, Plurinational State of': 'bo', 'Caribbean Netherlands': 'bq', 'Brazil': 'br', 'Bahamas': 'bs', 'Bhutan': 'bt', 'Bouvet Island': 'bv', 'Botswana': 'bw', 'Belarus': 'by', 'Belize': 'bz', 'Canada': 'ca', 'Cocos (Keeling) Islands': 'cc', 'Congo, the Democratic Republic of the': 'cd', 'Central African Republic': 'cf', 'Congo': 'cg', 'Switzerland': 'ch', "C\\u00f4te d'Ivoire": 'ci', 'Cook Islands': 'ck', 'Chile': 'cl', 'Cameroon': 'cm', 'China': 'cn', 'Colombia': 'co', 'Costa Rica': 'cr', 'Cuba': 'cu', 'Cape Verde': 'cv', 'Cura\\u00e7ao': 'cw', 'Christmas Island': 'cx', 'Cyprus': 'cy', 'Czech Republic': 'cz', 'Germany': 'de', 'Djibouti': 'dj', 'Denmark': 'dk', 'Dominica': 'dm', 'Dominican Republic': 'do', 'Algeria': 'dz', 'Ecuador': 'ec', 'Estonia': 'ee', 'Egypt': 'eg', 'Western Sahara': 'eh', 'Eritrea': 'er', 'Spain': 'es', 'Ethiopia': 'et', 'Europe': 'eu', 'Finland': 'fi', 'Fiji': 'fj', 'Falkland Islands (Malvinas)': 'fk', 'Micronesia, Federated States of': 'fm', 'Faroe Islands': 'fo', 'France': 'fr', 'Gabon': 'ga', 'England': 'gb-eng', 'Northern Ireland': 'gb-nir', 'Scotland': 'gb-sct', 'Wales': 'gb-wls', 'United Kingdom': 'gb', 'Grenada': 'gd', 'Georgia': 'ge', 'French Guiana': 'gf', 'Guernsey': 'gg', 'Ghana': 'gh', 'Gibraltar': 'gi', 'Greenland': 'gl', 'Gambia': 'gm', 'Guinea': 'gn', 'Guadeloupe': 'gp', 'Equatorial Guinea': 'gq', 'Greece': 'gr', 'South Georgia and the South Sandwich Islands': 'gs', 'Guatemala': 'gt', 'Guam': 'gu', 'Guinea-Bissau': 'gw', 'Guyana': 'gy', 'Hong Kong': 'hk', 'Heard Island and McDonald Islands': 'hm', 'Honduras': 'hn', 'Croatia': 'hr', 'Haiti': 'ht', 'Hungary': 'hu', 'Indonesia': 'id', 'Ireland': 'ie', 'Israel': 'il', 'Isle of Man': 'im', 'India': 'in', 'British Indian Ocean Territory': 'io', 'Iraq': 'iq', 'Iran, Islamic Republic of': 'ir', 'Iceland': 'is', 'Italy': 'it', 'Jersey': 'je', 'Jamaica': 'jm', 'Jordan': 'jo', 'Japan': 'jp', 'Kenya': 'ke', 'Kyrgyzstan': 'kg', 'Cambodia': 'kh', 'Kiribati': 'ki', 'Comoros': 'km', 'Saint Kitts and Nevis': 'kn', "Korea, Democratic People's Republic of": 'kp', 'Korea, Republic of': 'kr', 'Kuwait': 'kw', 'Cayman Islands': 'ky', 'Kazakhstan': 'kz', "Lao People's Democratic Republic": 'la', 'Lebanon': 'lb', 'Saint Lucia': 'lc', 'Liechtenstein': 'li', 'Sri Lanka': 'lk', 'Liberia': 'lr', 'Lesotho': 'ls', 'Lithuania': 'lt', 'Luxembourg': 'lu', 'Latvia': 'lv',
                'Libya': 'ly', 'Morocco': 'ma', 'Monaco': 'mc', 'Moldova, Republic of': 'md', 'Montenegro': 'me', 'Saint Martin': 'mf', 'Madagascar': 'mg', 'Marshall Islands': 'mh', 'Macedonia, the former Yugoslav Republic of': 'mk', 'Mali': 'ml', 'Myanmar': 'mm', 'Mongolia': 'mn', 'Macao': 'mo', 'Northern Mariana Islands': 'mp', 'Martinique': 'mq', 'Mauritania': 'mr', 'Montserrat': 'ms', 'Malta': 'mt', 'Mauritius': 'mu', 'Maldives': 'mv', 'Malawi': 'mw', 'Mexico': 'mx', 'Malaysia': 'my', 'Mozambique': 'mz', 'Namibia': 'na', 'New Caledonia': 'nc', 'Niger': 'ne', 'Norfolk Island': 'nf', 'Nigeria': 'ng', 'Nicaragua': 'ni', 'Netherlands': 'nl', 'Norway': 'no', 'Nepal': 'np', 'Nauru': 'nr', 'Niue': 'nu', 'New Zealand': 'nz', 'Oman': 'om', 'Panama': 'pa', 'Peru': 'pe', 'French Polynesia': 'pf', 'Papua New Guinea': 'pg', 'Philippines': 'ph', 'Pakistan': 'pk', 'Poland': 'pl', 'Saint Pierre and Miquelon': 'pm', 'Pitcairn': 'pn', 'Puerto Rico': 'pr', 'Palestine': 'ps', 'Portugal': 'pt', 'Palau': 'pw', 'Paraguay': 'py', 'Qatar': 'qa', 'Réunion': 're', 'Romania': 'ro', 'Serbia': 'rs', 'Russian Federation': 'ru', 'Rwanda': 'rw', 'Saudi Arabia': 'sa', 'Solomon Islands': 'sb', 'Seychelles': 'sc', 'Sudan': 'sd', 'Sweden': 'se', 'Singapore': 'sg', 'Saint Helena, Ascension and Tristan da Cunha': 'sh', 'Slovenia': 'si', 'Svalbard and Jan Mayen Islands': 'sj', 'Slovakia': 'sk', 'Sierra Leone': 'sl', 'San Marino': 'sm', 'Senegal': 'sn', 'Somalia': 'so', 'Suriname': 'sr', 'South Sudan': 'ss', 'Sao Tome and Principe': 'st', 'El Salvador': 'sv', 'Sint Maarten (Dutch part)': 'sx', 'Syrian Arab Republic': 'sy', 'Swaziland': 'sz', 'Turks and Caicos Islands': 'tc', 'Chad': 'td', 'French Southern Territories': 'tf', 'Togo': 'tg', 'Thailand': 'th', 'Tajikistan': 'tj', 'Tokelau': 'tk', 'Timor-Leste': 'tl', 'Turkmenistan': 'tm', 'Tunisia': 'tn', 'Tonga': 'to', 'Turkey': 'tr', 'Trinidad and Tobago': 'tt', 'Tuvalu': 'tv', 'Taiwan': 'tw', 'Tanzania, United Republic of': 'tz', 'Ukraine': 'ua', 'Uganda': 'ug', 'US Minor Outlying Islands': 'um', 'United States': 'us', 'Uruguay': 'uy', 'Uzbekistan': 'uz', 'Holy See (Vatican City State)': 'va', 'Saint Vincent and the Grenadines': 'vc', 'Venezuela, Bolivarian Republic of': 've', 'Virgin Islands, British': 'vg', 'Virgin Islands, U.S.': 'vi', 'Viet Nam': 'vn', 'Vanuatu': 'vu', 'Wallis and Futuna Islands': 'wf', 'Kosovo': 'xk', 'Samoa': 'ws', 'Yemen': 'ye', 'Mayotte': 'yt', 'South Africa': 'za', 'Zambia': 'zm', 'Zimbabwe': 'zw'},
            submissions: [],
            started: false,
            timer: '15:00',
            modalIsOpen: false,
            submitting: false,
            alreadyDone: false,
            name: '',
            nameInvalid: false,
            country: '',
            countryInvalid: false,
            tooltipText: null,
            tooltipStyle: { "display": "none" },
            trophyStyle: {}
        };
    }

    startTimer = () => {
        this.setState({
            started: true
        });

        let self = this;
        var timer = 15 * 60;
        var minutes = 15;
        var seconds = 0;

        var countdown = setInterval(function () {
            if(self.state.finished)
                clearInterval(countdown)

            timer--;
            if (timer < 0) {
                self.finish();
                clearInterval(countdown);
            }

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            self.setState({
                timer: `${minutes}:${seconds}`
            });
        }, 1000);
    }

    retry = () => {
        this.setState({
            finished: false,
            submissions: [],
            timer: '15:00',
            name: '',
            country: '',
            nameInvalid: false,
            countryInvalid: false
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            $(`[name="${value}"]`).css({ fill: "lightgrey" });
        } 

        this.startTimer(); 
    }

    finish = () => {
        this.setState({
            finished: true,
            modalIsOpen: true
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            if(!this.state.submissions.includes(value))
                $(`[name="${value}"]`).css({ fill: "#f4bc44" });
        } 
    }

    handleChange = (event) => {
        var submission = event.target.value.toLowerCase().trim();
        if(!this.state.countries.includes(submission))
            return;

        var name = this.state.countriesMap[submission];
        if(name && this.state.submissions.includes(name)) {
            this.flashAlreadyDone();
            return;
        }

        $(`[name="${name}"]`).css({ fill: "#a1d99b" });

        var update = this.state.submissions;
        update.push(name);
        this.setState({
            submissions: update 
        });

        event.target.value = "";
    }

    flashAlreadyDone = () => {
        this.setState({
            alreadyDone: true
        });

        let self = this;
        setTimeout(function() {
            self.setState({
                alreadyDone: false
            });
        }, 2000);
    }

    mouseOver = (event) => {
        if(!this.state.finished)
            return;

        this.setState({
            tooltipText: event.target.getAttribute('name')
        });
    }

    mouseMove = (event) => {
        if(!this.state.finished)
            return;

        var style = {
            "display": "block",
            "top": event.clientY + 10,
            "left": event.clientX - 100
        };

        this.setState({
            tooltipStyle: style
        });
    }

    mouseOut = (event) => {
        if(!this.state.finished)
            return;

        this.setState({
            tooltipText: null,
            tooltipStyle: { "display": "none" }
        });
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitting: true,
            nameInvalid: false,
            countryInvalid: false
        });

        if(this.state.name === '' || this.state.country === '') {
            var nameInvalid = this.state.name === '';
            var countryInvalid = this.state.country === '';

            this.setState({
                countryInvalid: countryInvalid,
                nameInvalid: nameInvalid,
                submitting: false
            });

            return;
        }

        var data = {
            name: this.state.name,
            country: this.state.country,
            countries: this.state.submissions.length,
            time: this.state.timer
        };

        // TODO: Call API.
        console.log(data);

        this.setState({
            modalIsOpen: false,
            submitting: false,
            name: '',
            country: ''
        });

        let self = this;
        setTimeout(function() {
            self.setState({
                trophyStyle: { "animation": "spin 1.5s" }
            });
        }, 500);

        setTimeout(function() {
            self.setState({
                trophyStyle: {}
            });
        }, 1500);
    }

    closeModal = (e) => {
        e.preventDefault();

        this.setState({
            modalIsOpen: false
        });
    }

    getTimeString() {
        var minutes = 14 - parseInt(this.state.timer.substring(0, 2));
        var seconds = 60 - parseInt(this.state.timer.substring(3));

        if(minutes === 0 && seconds === 1)
            return '1 second';

        if(minutes === 0)
            return `${seconds} seconds`; 

        if(minutes === 1 && seconds === 0)
            return `1 minute`;

        if(minutes === 1 && seconds === 1)
            return `1 minute and 1 second`;

        if(minutes === 1)
            return `1 minute and ${seconds} seconds`;

        if(seconds === 0)
            return `${minutes} minutes`;

        if(seconds === 1)
            return `${minutes} minutes and 1 second`;

        return `${minutes} minutes and ${seconds} seconds`;
    }

    render() {
        return (
            <div className="home-container">
                <Link to="/">
                    <ion-icon id="home-icon" name="home-outline"></ion-icon>
                </Link>
                <Link to='/leaderboard'>
                    <ion-icon
                        id="trophy-icon"
                        name="trophy-outline"
                        style={this.state.trophyStyle}>
                    </ion-icon>
                </Link>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <p>Congratulations! You completed {this.state.submissions.length} countries in {this.getTimeString()}.</p>
                            <p>Complete the below form to add your score to the leaderboard.</p>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                className={this.state.nameInvalid ? "form-control is-invalid" : "form-control"}
                                type="text"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                placeholder="Enter name..."
                            />
                            {
                                this.state.nameInvalid &&
                                <div className="invalid-feedback">
                                    Name is required. 
                                </div>
                            }
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <select
                                className={this.state.countryInvalid ? "form-control is-invalid" : "form-control"}
                                value={this.state.country}
                                onChange={this.handleCountryChange}>
                                    <option value="" disabled selected>Select country...</option>
                                    {
                                        Object.entries(this.state.codeMap).map(([key, value]) =>
                                            <option key={key}>{key}</option>
                                        )
                                    }
                            </select>
                            {
                                this.state.countryInvalid &&
                                <div className="invalid-feedback">
                                    Country is required. 
                                </div>
                            }
                        </div>
                        <hr />
                        <div className="modal-actions">
                            {
                                this.state.submitting ?
                                <button className="btn btn-success" disabled>
                                    <span className="spinner-border spinner-border-sm"></span>
                                </button>
                                :
                                <button className="btn btn-success" type="submit">
                                    Submit
                                </button>
                            }
                            <button id="cancel" className="btn btn-light" onClick={this.closeModal}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </Modal>
                <SVGMap
                    map={World}
                    onLocationMouseOver={this.mouseOver}
                    onLocationMouseMove={this.mouseMove}
                    onLocationMouseOut={this.mouseOut}
                />
                <div id="map_tooltip" style={this.state.tooltipStyle}>
                    {this.state.tooltipText}
                </div>
                <div id="score-container">
                    {
                        this.state.alreadyDone && 
                        <div id="submission-validation">
                            Already done! :/
                        </div>
                    }
                    <input 
                        className={this.state.alreadyDone ? "form-control invalid-field" : "form-control"} 
                        type="text" 
                        placeholder="Enter country..."
                        onChange={this.handleChange}
                        disabled={!this.state.started || this.state.finished}
                        autoFocus
                    />
                    <p id="submission-count" className="card-text text-center">
                        {this.state.submissions.length} of {this.state.countries.length}
                    </p>
                    <h1 className="text-center">{this.state.timer}</h1>
                    {
                        !this.state.started && !this.state.finished &&
                        <div className="text-center">
                            <button className="btn btn-success" onClick={this.startTimer}>Start</button>
                        </div>
                    }
                    {
                        this.state.started && !this.state.finished &&
                        <div className="text-center">
                            <button className="btn btn-warning" onClick={this.finish}>Give Up</button>
                        </div>
                    }
                    {
                        this.state.finished &&
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.retry}>Retry?</button>
                        </div>
                    }
                </div>
                <div id="attributes">
                    Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </div>
            </div>
        );
    }
}

export default Home;

