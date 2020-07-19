import React from 'react';
import './App.css';
import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import $ from 'jquery';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: ['andorra', 'united arab emirates', 'afghanistan', 'antigua and barbuda', 'anguilla', 'albania', 'armenia', 'angola', 'argentina', 'american samoa', 'austria', 'australia', 'aruba', 'aland islands', 'azerbaijan', 'bosnia and herzegovina', 'barbados', 'bangladesh', 'belgium', 'burkina faso', 'bulgaria', 'bahrain', 'burundi', 'benin', 'saint barthelemy', 'brunei darussalam', 'bolivia', 'bermuda', 'bonaire, saint eustachius and saba', 'brazil', 'bahamas', 'bhutan', 'bouvet island', 'botswana', 'belarus', 'belize', 'canada', 'cocos (keeling) islands', 'democratic republic of congo', 'central african republic', 'republic of congo', 'switzerland', "cote d'ivoire", 'cook islands', 'chile', 'cameroon', 'china', 'colombia', 'costa rica', 'cuba', 'cape verde', 'curaçao', 'christmas island', 'cyprus', 'czech republic', 'germany', 'djibouti', 'denmark', 'dominica', 'dominican republic', 'algeria', 'ecuador', 'egypt', 'estonia', 'western sahara', 'eritrea', 'spain', 'ethiopia', 'finland', 'fiji', 'falkland islands', 'federated states of micronesia', 'faroe islands', 'france', 'gabon', 'united kingdom', 'georgia', 'grenada', 'french guiana', 'guernsey', 'ghana', 'gibraltar', 'greenland', 'gambia', 'guinea', 'glorioso islands', 'guadeloupe', 'equatorial guinea', 'greece', 'south georgia and south sandwich islands', 'guatemala', 'guam', 'guinea-bissau', 'guyana', 'hong kong', 'heard island and mcdonald islands', 'honduras', 'croatia', 'haiti', 'hungary', 'indonesia', 'ireland', 'israel', 'isle of man', 'india', 'british indian ocean territory', 'iraq', 'iran', 'iceland', 'italy', 'jersey', 'jamaica', 'jordan', 'japan', 'juan de nova island', 'kenya', 'kyrgyzstan', 'cambodia', 'kiribati', 'comoros', 'saint kitts and nevis', 'north korea', 'south korea', 'kosovo', 'kuwait', 'cayman islands', 'kazakhstan', "lao people's democratic republic", 'lebanon', 'saint lucia', 'liechtenstein', 'sri lanka', 'liberia', 'lesotho', 'lithuania', 'luxembourg', 'latvia', 'libya', 'morocco', 'monaco', 'moldova', 'madagascar', 'montenegro', 'saint martin', 'marshall islands', 'macedonia', 'mali', 'macau', 'myanmar', 'mongolia', 'northern mariana islands', 'martinique', 'mauritania', 'montserrat', 'malta', 'mauritius', 'maldives', 'malawi', 'mexico', 'malaysia', 'mozambique', 'namibia', 'new caledonia', 'niger', 'norfolk island', 'nigeria', 'nicaragua', 'netherlands', 'norway', 'nepal', 'nauru', 'niue', 'new zealand', 'oman', 'panama', 'peru', 'french polynesia', 'papua new guinea', 'philippines', 'pakistan', 'poland', 'saint pierre and miquelon', 'pitcairn islands', 'puerto rico', 'palestinian territories', 'portugal', 'palau', 'paraguay', 'qatar', 'reunion', 'romania', 'serbia', 'russia', 'rwanda', 'saudi arabia', 'solomon islands', 'seychelles', 'sudan', 'sweden', 'singapore', 'saint helena', 'slovenia', 'svalbard and jan mayen', 'slovakia', 'sierra leone', 'san marino', 'senegal', 'somalia', 'suriname', 'south sudan', 'sao tome and principe', 'el salvador',
                'saint martin', 'syria', 'swaziland', 'turks and caicos islands', 'chad', 'french southern and antarctic lands', 'togo', 'thailand', 'tajikistan', 'tokelau', 'timor-leste', 'turkmenistan', 'tunisia', 'tonga', 'turkey', 'trinidad and tobago', 'tuvalu', 'taiwan', 'tanzania', 'ukraine', 'uganda', 'jarvis island', 'baker island', 'howland island', 'johnston atoll', 'midway islands', 'wake island', 'united states', 'uruguay', 'uzbekistan', 'vatican city', 'saint vincent and the grenadines', 'venezuela', 'british virgin islands', 'us virgin islands', 'vietnam', 'vanuatu', 'wallis and futuna', 'samoa', 'yemen', 'mayotte', 'south africa', 'zambia', 'zimbabwe'],
            countriesMap: {'andorra': 'Andorra', 'united arab emirates': 'United Arab Emirates', 'afghanistan': 'Afghanistan', 'antigua and barbuda': 'Antigua and Barbuda', 'anguilla': 'Anguilla', 'albania': 'Albania', 'armenia': 'Armenia', 'angola': 'Angola', 'argentina': 'Argentina', 'american samoa': 'American Samoa', 'austria': 'Austria', 'australia': 'Australia', 'aruba': 'Aruba', 'aland islands': 'Aland Islands', 'azerbaijan': 'Azerbaijan', 'bosnia and herzegovina': 'Bosnia and Herzegovina', 'barbados': 'Barbados', 'bangladesh': 'Bangladesh', 'belgium': 'Belgium', 'burkina faso': 'Burkina Faso', 'bulgaria': 'Bulgaria', 'bahrain': 'Bahrain', 'burundi': 'Burundi', 'benin': 'Benin', 'saint barthelemy': 'Saint Barthelemy', 'brunei darussalam': 'Brunei Darussalam', 'bolivia': 'Bolivia', 'bermuda': 'Bermuda', 'bonaire, saint eustachius and saba': 'Bonaire, Saint Eustachius and Saba', 'brazil': 'Brazil', 'bahamas': 'Bahamas', 'bhutan': 'Bhutan', 'bouvet island': 'Bouvet Island', 'botswana': 'Botswana', 'belarus': 'Belarus', 'belize': 'Belize', 'canada': 'Canada', 'cocos (keeling) islands': 'Cocos (Keeling) Islands', 'democratic republic of congo': 'Democratic Republic of Congo', 'central african republic': 'Central African Republic', 'republic of congo': 'Republic of Congo', 'switzerland': 'Switzerland', "cote d'ivoire": "Côte d'Ivoire", 'cook islands': 'Cook Islands', 'chile': 'Chile', 'cameroon': 'Cameroon', 'china': 'China', 'colombia': 'Colombia', 'costa rica': 'Costa Rica', 'cuba': 'Cuba', 'cape verde': 'Cape Verde', 'curaçao': 'Curaçao', 'christmas island': 'Christmas Island', 'cyprus': 'Cyprus', 'czech republic': 'Czech Republic', 'germany': 'Germany', 'djibouti': 'Djibouti', 'denmark': 'Denmark', 'dominica': 'Dominica', 'dominican republic': 'Dominican Republic', 'algeria': 'Algeria', 'ecuador': 'Ecuador', 'egypt': 'Egypt', 'estonia': 'Estonia', 'western sahara': 'Western Sahara', 'eritrea': 'Eritrea', 'spain': 'Spain', 'ethiopia': 'Ethiopia', 'finland': 'Finland', 'fiji': 'Fiji', 'falkland islands': 'Falkland Islands', 'federated states of micronesia': 'Federated States of Micronesia', 'faroe islands': 'Faroe Islands', 'france': 'France', 'gabon': 'Gabon', 'united kingdom': 'United Kingdom', 'georgia': 'Georgia', 'grenada': 'Grenada', 'french guiana': 'French Guiana', 'guernsey': 'Guernsey', 'ghana': 'Ghana', 'gibraltar': 'Gibraltar', 'greenland': 'Greenland', 'gambia': 'Gambia', 'guinea': 'Guinea', 'glorioso islands': 'Glorioso Islands', 'guadeloupe': 'Guadeloupe', 'equatorial guinea': 'Equatorial Guinea', 'greece': 'Greece', 'south georgia and south sandwich islands': 'South Georgia and South Sandwich Islands', 'guatemala': 'Guatemala', 'guam': 'Guam', 'guinea-bissau': 'Guinea-Bissau', 'guyana': 'Guyana', 'hong kong': 'Hong Kong', 'heard island and mcdonald islands': 'Heard Island and McDonald Islands', 'honduras': 'Honduras', 'croatia': 'Croatia', 'haiti': 'Haiti', 'hungary': 'Hungary', 'indonesia': 'Indonesia', 'ireland': 'Ireland',
                'israel': 'Israel', 'isle of man': 'Isle of Man', 'india': 'India', 'british indian ocean territory': 'British Indian Ocean Territory', 'iraq': 'Iraq', 'iran': 'Iran', 'iceland': 'Iceland', 'italy': 'Italy', 'jersey': 'Jersey', 'jamaica': 'Jamaica', 'jordan': 'Jordan', 'japan': 'Japan', 'juan de nova island': 'Juan De Nova Island', 'kenya': 'Kenya', 'kyrgyzstan': 'Kyrgyzstan', 'cambodia': 'Cambodia', 'kiribati': 'Kiribati', 'comoros': 'Comoros', 'saint kitts and nevis': 'Saint Kitts and Nevis', 'north korea': 'North Korea', 'south korea': 'South Korea', 'kosovo': 'Kosovo', 'kuwait': 'Kuwait', 'cayman islands': 'Cayman Islands', 'kazakhstan': 'Kazakhstan', "lao people's democratic republic": "Lao People's Democratic Republic", 'lebanon': 'Lebanon', 'saint lucia': 'Saint Lucia', 'liechtenstein': 'Liechtenstein', 'sri lanka': 'Sri Lanka', 'liberia': 'Liberia', 'lesotho': 'Lesotho', 'lithuania': 'Lithuania', 'luxembourg': 'Luxembourg', 'latvia': 'Latvia', 'libya': 'Libya', 'morocco': 'Morocco', 'monaco': 'Monaco', 'moldova': 'Moldova', 'madagascar': 'Madagascar', 'montenegro': 'Montenegro', 'saint martin': 'Saint Martin', 'marshall islands': 'Marshall Islands', 'macedonia': 'Macedonia', 'mali': 'Mali', 'macau': 'Macau', 'myanmar': 'Myanmar', 'mongolia': 'Mongolia', 'northern mariana islands': 'Northern Mariana Islands', 'martinique': 'Martinique', 'mauritania': 'Mauritania', 'montserrat': 'Montserrat', 'malta': 'Malta', 'mauritius': 'Mauritius', 'maldives': 'Maldives', 'malawi': 'Malawi', 'mexico': 'Mexico', 'malaysia': 'Malaysia', 'mozambique': 'Mozambique', 'namibia': 'Namibia', 'new caledonia': 'New Caledonia', 'niger': 'Niger', 'norfolk island': 'Norfolk Island', 'nigeria': 'Nigeria', 'nicaragua': 'Nicaragua', 'netherlands': 'Netherlands', 'norway': 'Norway', 'nepal': 'Nepal', 'nauru': 'Nauru', 'niue': 'Niue', 'new zealand': 'New Zealand', 'oman': 'Oman', 'panama': 'Panama', 'peru': 'Peru', 'french polynesia': 'French Polynesia', 'papua new guinea': 'Papua New Guinea', 'philippines': 'Philippines', 'pakistan': 'Pakistan', 'poland': 'Poland', 'saint pierre and miquelon': 'Saint Pierre and Miquelon', 'pitcairn islands': 'Pitcairn Islands', 'puerto rico': 'Puerto Rico', 'palestinian territories': 'Palestinian Territories', 'portugal': 'Portugal', 'palau': 'Palau', 'paraguay': 'Paraguay', 'qatar': 'Qatar', 'reunion': 'Reunion', 'romania': 'Romania', 'serbia': 'Serbia', 'russia': 'Russia', 'rwanda': 'Rwanda', 'saudi arabia': 'Saudi Arabia', 'solomon islands': 'Solomon Islands', 'seychelles': 'Seychelles', 'sudan': 'Sudan', 'sweden': 'Sweden', 'singapore': 'Singapore', 'saint helena': 'Saint Helena', 'slovenia': 'Slovenia', 'svalbard and jan mayen': 'Svalbard and Jan Mayen', 'slovakia': 'Slovakia', 'sierra leone': 'Sierra Leone', 'san marino': 'San Marino', 'senegal': 'Senegal', 'somalia': 'Somalia', 'suriname': 'Suriname', 'south sudan': 'South Sudan', 'sao tome and principe': 'Sao Tome and Principe', 'el salvador': 'El Salvador',
                'syria': 'Syria', 'swaziland': 'Swaziland', 'turks and caicos islands': 'Turks and Caicos Islands', 'chad': 'Chad', 'french southern and antarctic lands': 'French Southern and Antarctic Lands', 'togo': 'Togo', 'thailand': 'Thailand', 'tajikistan': 'Tajikistan', 'tokelau': 'Tokelau', 'timor-leste': 'Timor-Leste', 'turkmenistan': 'Turkmenistan', 'tunisia': 'Tunisia', 'tonga': 'Tonga', 'turkey': 'Turkey', 'trinidad and tobago': 'Trinidad and Tobago', 'tuvalu': 'Tuvalu', 'taiwan': 'Taiwan', 'tanzania': 'Tanzania', 'ukraine': 'Ukraine', 'uganda': 'Uganda', 'jarvis island': 'Jarvis Island', 'baker island': 'Baker Island', 'howland island': 'Howland Island', 'johnston atoll': 'Johnston Atoll', 'midway islands': 'Midway Islands', 'wake island': 'Wake Island', 'united states': 'United States', 'uruguay': 'Uruguay', 'uzbekistan': 'Uzbekistan', 'vatican city': 'Vatican City', 'saint vincent and the grenadines': 'Saint Vincent and the Grenadines', 'venezuela': 'Venezuela', 'british virgin islands': 'British Virgin Islands', 'us virgin islands': 'US Virgin Islands', 'vietnam': 'Vietnam', 'vanuatu': 'Vanuatu', 'wallis and futuna': 'Wallis and Futuna', 'samoa': 'Samoa', 'yemen': 'Yemen', 'mayotte': 'Mayotte', 'south africa': 'South Africa', 'zambia': 'Zambia', 'zimbabwe': 'Zimbabwe' }, 
            submissions: [],
            started: false,
            timer: '15:00' 
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

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            self.setState({
                timer: `${minutes}:${seconds}`
            });

            timer--;
            if (timer < 0) {
                self.finish();
                clearInterval(countdown);
            }
        }, 1000);
    }

    retry = () => {
        this.setState({
            finished: false,
            submissions: [],
            timer: '15:00'
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            $(`[name="${value}"]`).css({ fill: "lightgrey" });
        } 

        this.startTimer(); 
    }

    finish = () => {
        this.setState({
            finished: true
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            if(!this.state.submissions.includes(value))
                $(`[name="${value}"]`).css({ fill: "#dc3545" });
        } 
    }

    handleChange = (event) => {
        var submission = event.target.value.toLowerCase();
        if(!this.state.countries.includes(submission))
            return;

        var name = this.state.countriesMap[submission];
        if(name && this.state.submissions.includes(name))
            return;

        $(`[name="${name}"]`).css({ fill: "#a1d99b" });

        var update = this.state.submissions;
        update.push(name);
        this.setState({
            submissions: update 
        });

        event.target.value = "";
    }

    mouseOver = (event) => {
        console.log(event.target.getAttribute('name'));
    }

    mouseOut = (event) => {
        console.log(event.target.getAttribute('name'));
    }

    render() {
        return (
            <div className="App">
                <SVGMap
                    map={World}
                    onLocationMouseOver={this.mouseOver}
                    onLocationMouseOut={this.mouseOut}
                />
                {
                    this.state.started ?
                    <div id="score-container">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Enter country..."
                            onChange={this.handleChange}
                            readOnly={this.state.finished}
                            autoFocus
                        />
                        <p className="card-text text-center">
                            {this.state.submissions.length} of {this.state.countries.length}
                        </p>
                        <h1 className="text-center">{this.state.timer}</h1>
                        {
                            this.state.finished ?
                            <div className="text-center">
                                <button className="btn btn-info " onClick={this.retry}>Retry?</button>
                            </div>
                            :
                            <div className="text-center">
                                <button className="btn btn-warning text-center" onClick={this.finish}>Give Up</button>
                            </div>
                        }
                    </div>
                    :
                    <div id="start-button">
                        <button className="btn btn-success" onClick={this.startTimer}>
                            Start
                        </button>
                   </div> 
                }
            </div>
        );
    }
}

export default App;
