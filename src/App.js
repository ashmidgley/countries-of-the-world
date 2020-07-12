import React from 'react';
import './App.css';
import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: ['andorra', 'united arab emirates', 'afghanistan', 'antigua and barbuda', 'anguilla', 'albania', 'armenia', 'angola', 'argentina', 'american samoa', 'austria', 'australia', 'aruba', 'aland islands', 'azerbaijan', 'bosnia and herzegovina', 'barbados', 'bangladesh', 'belgium', 'burkina faso', 'bulgaria', 'bahrain', 'burundi', 'benin', 'saint barthelemy', 'brunei darussalam', 'bolivia', 'bermuda', 'bonaire, saint eustachius and saba', 'brazil', 'bahamas', 'bhutan', 'bouvet island', 'botswana', 'belarus', 'belize', 'canada', 'cocos (keeling) islands', 'democratic republic of congo', 'central african republic', 'republic of congo', 'switzerland', "côte d'ivoire", 'cook islands', 'chile', 'cameroon', 'china', 'colombia', 'costa rica', 'cuba', 'cape verde', 'curaçao', 'christmas island', 'cyprus', 'czech republic', 'germany', 'djibouti', 'denmark', 'dominica', 'dominican republic', 'algeria', 'ecuador', 'egypt', 'estonia', 'western sahara', 'eritrea', 'spain', 'ethiopia', 'finland', 'fiji', 'falkland islands', 'federated states of micronesia', 'faroe islands', 'france', 'gabon', 'united kingdom', 'georgia', 'grenada', 'french guiana', 'guernsey', 'ghana', 'gibraltar', 'greenland', 'gambia', 'guinea', 'glorioso islands', 'guadeloupe', 'equatorial guinea', 'greece', 'south georgia and south sandwich islands', 'guatemala', 'guam', 'guinea-bissau', 'guyana', 'hong kong', 'heard island and mcdonald islands', 'honduras', 'croatia', 'haiti', 'hungary', 'indonesia', 'ireland', 'israel', 'isle of man', 'india', 'british indian ocean territory', 'iraq', 'iran', 'iceland', 'italy', 'jersey', 'jamaica', 'jordan', 'japan', 'juan de nova island', 'kenya', 'kyrgyzstan', 'cambodia', 'kiribati', 'comoros', 'saint kitts and nevis', 'north korea', 'south korea', 'kosovo', 'kuwait', 'cayman islands', 'kazakhstan', "lao people's democratic republic", 'lebanon', 'saint lucia', 'liechtenstein', 'sri lanka', 'liberia', 'lesotho', 'lithuania', 'luxembourg', 'latvia', 'libya', 'morocco', 'monaco', 'moldova', 'madagascar', 'montenegro', 'saint martin', 'marshall islands', 'macedonia', 'mali', 'macau', 'myanmar', 'mongolia', 'northern mariana islands', 'martinique', 'mauritania', 'montserrat', 'malta', 'mauritius', 'maldives', 'malawi', 'mexico', 'malaysia', 'mozambique', 'namibia', 'new caledonia', 'niger', 'norfolk island', 'nigeria', 'nicaragua', 'netherlands', 'norway', 'nepal', 'nauru', 'niue', 'new zealand', 'oman', 'panama', 'peru', 'french polynesia', 'papua new guinea', 'philippines', 'pakistan', 'poland', 'saint pierre and miquelon', 'pitcairn islands', 'puerto rico', 'palestinian territories', 'portugal', 'palau', 'paraguay', 'qatar', 'reunion', 'romania', 'serbia', 'russia', 'rwanda', 'saudi arabia', 'solomon islands', 'seychelles', 'sudan', 'sweden', 'singapore', 'saint helena', 'slovenia', 'svalbard and jan mayen', 'slovakia', 'sierra leone', 'san marino', 'senegal', 'somalia', 'suriname', 'south sudan', 'sao tome and principe', 'el salvador',
            'saint martin', 'syria', 'swaziland', 'turks and caicos islands', 'chad', 'french southern and antarctic lands', 'togo', 'thailand', 'tajikistan', 'tokelau', 'timor-leste', 'turkmenistan', 'tunisia', 'tonga', 'turkey', 'trinidad and tobago', 'tuvalu', 'taiwan', 'tanzania', 'ukraine', 'uganda', 'jarvis island', 'baker island', 'howland island', 'johnston atoll', 'midway islands', 'wake island', 'united states', 'uruguay', 'uzbekistan', 'vatican city', 'saint vincent and the grenadines', 'venezuela', 'british virgin islands', 'us virgin islands', 'vietnam', 'vanuatu', 'wallis and futuna', 'samoa', 'yemen', 'mayotte', 'south africa', 'zambia', 'zimbabwe'],
            submissions: []
        };
    }

    handleChange = (event) => {
        var submission = event.target.value.toLowerCase();
        if(this.state.submissions.includes(submission)
            || !this.state.countries.includes(submission))
            return;

        // TODO: change fill for element to #a1d99b 
        

        var update = this.state.submissions;
        update.push(submission);
        this.setState({
            submissions: update 
        });

        event.target.value = "";
    }

    render() {
        return (
            <div className="App">
                <SVGMap map={World} />
                <div id="score-container">
                    <input 
                        className="form-control" 
                        type="text" 
                        onChange={this.handleChange}
                    />
                    <p className="card-text text-center">
                        {this.state.submissions.length} of {this.state.countries.length}
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
