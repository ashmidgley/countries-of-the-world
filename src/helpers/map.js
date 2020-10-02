import World from "@svg-maps/world";

export const getWorld = () => {
    return {
        ...World,
        label: World.label,
        locations: World.locations.map(location => {
            switch(location.name) {
                case "Greenland":
                    location.name = "Denmark";
                    break;
                case "Svalbard and Jan Mayen":
                    location.name = "Norway";
                    break;
                case "French Guiana":
                    location.name = "France";
                    break;
                case "Western Sahara":
                    location.name = "Morocco";
                    break;
                case 'Anguilla':
                case 'American Samoa':
                case 'Aruba':
                case 'Aland Islands':
                case 'Saint Barthelemy':
                case 'Bermuda':
                case 'Bouvet Island':
                case 'Cocos (Keeling) Islands':
                case 'Cook Islands':
                case 'Curaçao':
                case 'Christmas Island':
                case 'Falkland Islands':
                case 'Faroe Islands':
                case 'Guernsey':
                case 'Gibraltar':
                case 'Guadeloupe':
                case 'South Georgia and South Sandwich Islands':
                case 'Guam':
                case 'Hong Kong':
                case 'Heard Island and McDonald Islands':
                case 'Isle of Man':
                case 'British Indian Ocean Territory':
                case 'Jersey':
                case 'Cayman Islands':
                case 'Saint Martin':
                case 'Macau':
                case 'Northern Mariana Islands':
                case 'Martinique':
                case 'Montserrat':
                case 'New Caledonia':
                case 'Norfolk Island':
                case 'Niue':
                case 'French Polynesia':
                case 'Saint Pierre and Miquelon':
                case 'Pitcairn Islands':
                case 'Puerto Rico':
                case 'Reunion':
                case 'Saint Helena':
                case 'Turks and Caicos Islands':
                case 'French Southern and Antarctic Lands':
                case 'Tokelau':
                case 'US Virgin Islands':
                case 'British Virgin Islands':
                case 'Wallis and Futuna':
                case 'Mayotte':
                case 'Baker Island':
                case 'Bonaire, Saint Eustachius and Saba':
                case 'Glorioso Islands':
                case 'Howland Island':
                case 'Jarvis Island':
                case 'Johnston Atoll':
                case 'Juan De Nova Island':
                case 'Midway Islands':
                case 'Wake Island':
                    location.name = null;
                    break;
                default:
                    break;
            }

            return location;
        })
    };
};
