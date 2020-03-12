const dwellPerStopDowntown = [
    { stop_name: "Galleria", dwell: 54.11117519826965 }, { stop_name: "Goose Hollow", dwell: 32.83650181770864 },
    { stop_name: "Kings Hill", dwell: 24.73927454744034 },
    { stop_name: "SW 9th Ave", dwell: 26.02418928910954 },
    { stop_name: "SW 4th Ave", dwell: 42.91065549236755 },
    { stop_name: "SW 5th Ave", dwell: 42.88480650504442 },
    { stop_name: "SW 3rd Ave", dwell: 36.061797752808985 },
    { stop_name: "SW 1st Ave", dwell: 29.663905379508027 },
    { stop_name: "Chinatown", dwell: 36.129821135186006 },
    { stop_name: "Pioneer Square N", dwell: 48.27635197066911 },
    { stop_name: "Pioneer Square S", dwell: 39.44800942902043 },
    { stop_name: "Providence Park", dwell: 30.757930822289783 },
    { stop_name: "Skidmore Fountain", dwell: 25.869241934382188 },
    { stop_name: "Yamhill District", dwell: 27.64268549113848 }
];

const dwellPerStopBanfield = [
    { stop_name: "Gateway/NE 99th", dwell: 55.46650790221335 },
    { stop_name: "Hollywood/NE 42nd", dwell: 25.634728997507544 },
    { stop_name: "Lloyd Center/NE 11th", dwell: 41.06495280808694 },
    { stop_name: "NE 60th Ave", dwell: 25.256214775160988 },
    { stop_name: "NE 82nd Ave", dwell: 28.17363071616098 }
];

const dwellPerStopInterstate = [
    { stop_name: "Mississippi", dwell: 24.01441720356635 },
    { stop_name: "Rose Quarter", dwell: 51.73682179891176 },
    { stop_name: "Kenton", dwell: 24.93879023307436 },
    { stop_name: "N Killingsworth", dwell: 25.483198680891615 },
    { stop_name: "N Lombard", dwell: 29.57677198277229 },
    { stop_name: "N Prescott", dwell: 26.229762844038504 },
    { stop_name: "Overlook Park", dwell: 24.549540642368314 },
    { stop_name: "Rosa Parks", dwell: 24.473664747469456 }
];

const dwellPerSegment = [
    { segment: "Banfield", dwell: 35.86452212439221},
    { segment: "Interstate", dwell: 29.13752671402992 },
    { segment: "Downtown", dwell: 33.725260499564946 }
];

const arrivalDeltaPerStopBanfield = [
    {
        arrival_delta: 65.44963168468382,
        route_direction: "East",
        sequence: 0,
        stop_name: "Lloyd Center/NE 11th"
    },
    {
        arrival_delta: 117.81471709176195,
        route_direction: "East",
        sequence: 1,
        stop_name: "Hollywood/NE 42nd"
    },
    {
        arrival_delta: 119.35129780067366,
        route_direction: "East",
        sequence: 3,
        stop_name: "NE 60th Ave"
    },
    {
        arrival_delta: 116.98015446280183,
        route_direction: "East",
        sequence: 3,
        stop_name: "NE 82nd Ave"
    },
    {
        arrival_delta: 91.7756220636854,
        route_direction: "East",
        sequence: 4,
        stop_name: "Gateway/NE 99th"
    },
    {
        arrival_delta: -15.856158017041054,
        route_direction: "West",
        sequence: 0,
        stop_name: "Gateway/NE 99th"
    },
    {
        arrival_delta: 28.340517665584095,
        route_direction: "West",
        sequence: 1,
        stop_name: "NE 82nd Ave"
    },
    {
        arrival_delta: 36.790972701291025,
        route_direction: "West",
        sequence: 2,
        stop_name: "NE 60th Ave"
    },
    {
        arrival_delta: 44.583618080640434,
        route_direction: "West",
        sequence: 3,
        stop_name: "Hollywood/NE 42nd"
    },
    {
        arrival_delta: 50.21050141911069,
        route_direction: "West",
        sequence: 4,
        stop_name: "Lloyd Center/NE 11th"
    }
];

const arrivalDeltaPerStopBanfieldWithDirection = [
    {
        arrival_delta: 65.44963168468382,
        route_direction: "East",
        sequence: 0,
        stop_name: "Lloyd Center/NE 11th (E)"
    },
    {
        arrival_delta: 117.81471709176195,
        route_direction: "East",
        sequence: 1,
        stop_name: "Hollywood/NE 42nd (E)"
    },
    {
        arrival_delta: 119.35129780067366,
        route_direction: "East",
        sequence: 3,
        stop_name: "NE 60th Ave (E)"
    },
    {
        arrival_delta: 116.98015446280183,
        route_direction: "East",
        sequence: 3,
        stop_name: "NE 82nd Ave (E)"
    },
    {
        arrival_delta: 91.7756220636854,
        route_direction: "East",
        sequence: 4,
        stop_name: "Gateway/NE 99th (E)"
    },
    {
        arrival_delta: -15.856158017041054,
        route_direction: "West",
        sequence: 0,
        stop_name: "Gateway/NE 99th (W)"
    },
    {
        arrival_delta: 28.340517665584095,
        route_direction: "West",
        sequence: 1,
        stop_name: "NE 82nd Ave (W)"
    },
    {
        arrival_delta: 36.790972701291025,
        route_direction: "West",
        sequence: 2,
        stop_name: "NE 60th Ave (W)"
    },
    {
        arrival_delta: 44.583618080640434,
        route_direction: "West",
        sequence: 3,
        stop_name: "Hollywood/NE 42nd (W)"
    },
    {
        arrival_delta: 50.21050141911069,
        route_direction: "West",
        sequence: 4,
        stop_name: "Lloyd Center/NE 11th (W)"
    }
];

const arrivalDeltaPerStopInterstate = [
    {
        location_id: "11500",
        arrival_delta: 0.3368121442125237,
        stop_name: "Kenton/N Denver Ave",
        sequence: 0,
        route_direction: "South"
    },
    {
        location_id: "11501",
        arrival_delta: -6.980946527350953,
        stop_name: "N Lombard TC",
        sequence: 1,
        route_direction: "South"
    },
    {
        location_id: "11502",
        arrival_delta: 0.3890644753476612,
        stop_name: "Rosa Parks",
        sequence: 2,
        route_direction: "South"
    },
    {
        location_id: "11503",
        arrival_delta: -7.656609642301711,
        stop_name: "N Killingsworth St",
        sequence: 3,
        route_direction: "South"
    },
    {
        location_id: "11504",
        arrival_delta: -1.3031618102913824,
        stop_name: "N Prescott St",
        sequence: 4,
        route_direction: "South"
    },
    {
        location_id: "11505",
        arrival_delta: 2.8346556648682957,
        stop_name: "Overlook Park",
        sequence: 5,
        route_direction: "South"
    },
    {
        location_id: "11506",
        arrival_delta: 3.216608778023366,
        stop_name: "Albina/Mississippi",
        sequence: 6,
        route_direction: "South"
    },
    {
        location_id: "11507",
        arrival_delta: -3.9668893406912575,
        stop_name: "Interstate/Rose Quarter",
        sequence: 7,
        route_direction: "South"
    },
    {
        location_id: "11508",
        arrival_delta: 137.18238822246457,
        stop_name: "Interstate/Rose Quarter",
        sequence: 0,
        route_direction: "North"
    },
    {
        location_id: "11509",
        arrival_delta: 144.41753063147974,
        stop_name: "Albina/Mississippi",
        sequence: 1,
        route_direction: "North"
    },
    {
        location_id: "11510",
        arrival_delta: 136.09762125424777,
        stop_name: "Overlook Park",
        sequence: 2,
        route_direction: "North"
    },
    {
        location_id: "11511",
        arrival_delta: 128.68252044834898,
        stop_name: "N Prescott St",
        sequence: 3,
        route_direction: "North"
    },
    {
        location_id: "11512",
        arrival_delta: 133.53642384105962,
        stop_name: "N Killingsworth St",
        sequence: 4,
        route_direction: "North"
    },
    {
        location_id: "11513",
        arrival_delta: 128.5748180955394,
        stop_name: "Rosa Parks",
        sequence: 5,
        route_direction: "North"
    },
    {
        location_id: "11514",
        arrival_delta: 122.59520884520884,
        stop_name: "N Lombard TC",
        sequence: 6,
        route_direction: "North"
    },
    {
        location_id: "11515",
        arrival_delta: 124.62358490566038,
        stop_name: "Kenton/N Denver Ave",
        sequence: 7,
        route_direction: "North"
    },
];

const arrivalDeltaPerStopInterstateWithDirection = [
    {
        location_id: "11500",
        arrival_delta: 0.3368121442125237,
        stop_name: "Kenton/N Denver Ave (S)",
        sequence: 0,
        route_direction: "South"
    },
    {
        location_id: "11501",
        arrival_delta: -6.980946527350953,
        stop_name: "N Lombard TC (S)",
        sequence: 1,
        route_direction: "South"
    },
    {
        location_id: "11502",
        arrival_delta: 0.3890644753476612,
        stop_name: "Rosa Parks (S)",
        sequence: 2,
        route_direction: "South"
    },
    {
        location_id: "11503",
        arrival_delta: -7.656609642301711,
        stop_name: "N Killingsworth St (S)",
        sequence: 3,
        route_direction: "South"
    },
    {
        location_id: "11504",
        arrival_delta: -1.3031618102913824,
        stop_name: "N Prescott St (S)",
        sequence: 4,
        route_direction: "South"
    },
    {
        location_id: "11505",
        arrival_delta: 2.8346556648682957,
        stop_name: "Overlook Park (S)",
        sequence: 5,
        route_direction: "South"
    },
    {
        location_id: "11506",
        arrival_delta: 3.216608778023366,
        stop_name: "Albina/Mississippi (S)",
        sequence: 6,
        route_direction: "South"
    },
    {
        location_id: "11507",
        arrival_delta: -3.9668893406912575,
        stop_name: "Interstate/Rose Quarter (S)",
        sequence: 7,
        route_direction: "South"
    },
    {
        location_id: "11508",
        arrival_delta: 137.18238822246457,
        stop_name: "Interstate/Rose Quarter (N)",
        sequence: 0,
        route_direction: "North"
    },
    {
        location_id: "11509",
        arrival_delta: 144.41753063147974,
        stop_name: "Albina/Mississippi (N)",
        sequence: 1,
        route_direction: "North"
    },
    {
        location_id: "11510",
        arrival_delta: 136.09762125424777,
        stop_name: "Overlook Park (N)",
        sequence: 2,
        route_direction: "North"
    },
    {
        location_id: "11511",
        arrival_delta: 128.68252044834898,
        stop_name: "N Prescott St (N)",
        sequence: 3,
        route_direction: "North"
    },
    {
        location_id: "11512",
        arrival_delta: 133.53642384105962,
        stop_name: "N Killingsworth St (N)",
        sequence: 4,
        route_direction: "North"
    },
    {
        location_id: "11513",
        arrival_delta: 128.5748180955394,
        stop_name: "Rosa Parks (N)",
        sequence: 5,
        route_direction: "North"
    },
    {
        location_id: "11514",
        arrival_delta: 122.59520884520884,
        stop_name: "N Lombard TC (N)",
        sequence: 6,
        route_direction: "North"
    },
    {
        location_id: "11515",
        arrival_delta: 124.62358490566038,
        stop_name: "Kenton/N Denver Ave (N)",
        sequence: 7,
        route_direction: "North"
    },
];

const arrivalDeltaPerStopDowntown = [
    {location_id: "10118", arrival_delta: -4.922524678432546, stop_name: "Goose Hollow/SW Jefferson St", sequence: 0, route_direction: "East"},
    {location_id: "9759", arrival_delta: 13.613446609052293, stop_name: "Kings Hill/SW Salmon St", sequence: 1, route_direction: "East"},
    {location_id: "9758", arrival_delta: 30.3267141689055, stop_name: "Providence Park", sequence: 2, route_direction: "East"},
    {location_id: "8333", arrival_delta: 21.671701700644345, stop_name: "Library/SW 9th Ave", sequence: 3, route_direction: "East"},
    {location_id: "8334", arrival_delta: 14.843242535358826, stop_name: "Pioneer Square South", sequence: 4, route_direction: "East"},
    {location_id: "8335", arrival_delta: 17.70323256510027, stop_name: "Mall/SW 4th Ave", sequence: 5, route_direction: "East"},
    {location_id: "8336", arrival_delta: 34.34304595974767, stop_name: "Yamhill District", sequence: 6, route_direction: "East"},
    {location_id: "8337", arrival_delta: 37.70207532667179, stop_name: "Oak/ SW 1st Ave", sequence: 7, route_direction: "East"},
    {location_id: "8338", arrival_delta: 47.817814371257484, stop_name: "Skidmore Fountain", sequence: 8, route_direction: "East"},
    {location_id: "8339", arrival_delta: 39.643066549399, stop_name: "Old Town/Chinatown", sequence: 9, route_direction: "East"},
    {location_id: "8378", arrival_delta: 55.78239705301934, stop_name: "Old Town/Chinatown", sequence: 0, route_direction: "West"},
    {location_id: "8379", arrival_delta: 62.1838783269962, stop_name: "Skidmore Fountain", sequence: 1, route_direction: "West"},
    {location_id: "8380", arrival_delta: 55.4671322301503, stop_name: "Oak/ SW 1st Ave", sequence: 2, route_direction: "West"},
    {location_id: "8381", arrival_delta: 53.10948813982522, stop_name: "Morrison/SW 3rd Ave", sequence: 3, route_direction: "West"},
    {location_id: "8382", arrival_delta: 63.293781057069715, stop_name: "Mall/SW 5th Ave", sequence: 4, route_direction: "West"},
    {location_id: "8383", arrival_delta: 53.802016498625115, stop_name: "Pioneer Square North", sequence: 5, route_direction: "West"},
    {location_id: "8384", arrival_delta: 62.99927901946648, stop_name: "Galleria/SW 10th Ave", sequence: 6, route_direction: "West"},
    {location_id: "9757", arrival_delta: 92.97422455220621, stop_name: "Providence Park", sequence: 7, route_direction: "West"},
    {location_id: "9820", arrival_delta: 94.43261868300154, stop_name: "Kings Hill/SW Salmon St", sequence: 8, route_direction: "West"},
    {location_id: "10117", arrival_delta: 93.05972201008095, stop_name: "Goose Hollow/SW Jefferson St", sequence: 9, route_direction: "West"}
];

const arrivalDeltaPerStopDowntownWithDirection = [
    {location_id: "10118", arrival_delta: -4.922524678432546, stop_name: "Goose Hollow/SW Jefferson St (E)", sequence: 0, route_direction: "East"},
    {location_id: "9759", arrival_delta: 13.613446609052293, stop_name: "Kings Hill/SW Salmon St (E)", sequence: 1, route_direction: "East"},
    {location_id: "9758", arrival_delta: 30.3267141689055, stop_name: "Providence Park (E)", sequence: 2, route_direction: "East"},
    {location_id: "8333", arrival_delta: 21.671701700644345, stop_name: "Library/SW 9th Ave (E)", sequence: 3, route_direction: "East"},
    {location_id: "8334", arrival_delta: 14.843242535358826, stop_name: "Pioneer Square South (E)", sequence: 4, route_direction: "East"},
    {location_id: "8335", arrival_delta: 17.70323256510027, stop_name: "Mall/SW 4th Ave (E)", sequence: 5, route_direction: "East"},
    {location_id: "8336", arrival_delta: 34.34304595974767, stop_name: "Yamhill District (E)", sequence: 6, route_direction: "East"},
    {location_id: "8337", arrival_delta: 37.70207532667179, stop_name: "Oak/ SW 1st Ave (E)", sequence: 7, route_direction: "East"},
    {location_id: "8338", arrival_delta: 47.817814371257484, stop_name: "Skidmore Fountain (E)", sequence: 8, route_direction: "East"},
    {location_id: "8339", arrival_delta: 39.643066549399, stop_name: "Old Town/Chinatown (E)", sequence: 9, route_direction: "East"},
    {location_id: "8378", arrival_delta: 55.78239705301934, stop_name: "Old Town/Chinatown (W)", sequence: 0, route_direction: "West"},
    {location_id: "8379", arrival_delta: 62.1838783269962, stop_name: "Skidmore Fountain (W)", sequence: 1, route_direction: "West"},
    {location_id: "8380", arrival_delta: 55.4671322301503, stop_name: "Oak/ SW 1st Ave (W)", sequence: 2, route_direction: "West"},
    {location_id: "8381", arrival_delta: 53.10948813982522, stop_name: "Morrison/SW 3rd Ave (W)", sequence: 3, route_direction: "West"},
    {location_id: "8382", arrival_delta: 63.293781057069715, stop_name: "Mall/SW 5th Ave (W)", sequence: 4, route_direction: "West"},
    {location_id: "8383", arrival_delta: 53.802016498625115, stop_name: "Pioneer Square North (W)", sequence: 5, route_direction: "West"},
    {location_id: "8384", arrival_delta: 62.99927901946648, stop_name: "Galleria/SW 10th Ave (W)", sequence: 6, route_direction: "West"},
    {location_id: "9757", arrival_delta: 92.97422455220621, stop_name: "Providence Park (W)", sequence: 7, route_direction: "West"},
    {location_id: "9820", arrival_delta: 94.43261868300154, stop_name: "Kings Hill/SW Salmon St (W)", sequence: 8, route_direction: "West"},
    {location_id: "10117", arrival_delta: 93.05972201008095, stop_name: "Goose Hollow/SW Jefferson St (W)", sequence: 9, route_direction: "West"}
];

const arrivalDeltaPerSegment = [
    {
        segment: "Downtown (E)",
        route_direction: "East",
        arrival_delta: 25.274181510770468
    },
    {
        segment: "Downtown (W)",
        route_direction: "West",
        arrival_delta: 68.7104537570441
    },
    {
        segment: "Banfield (E)",
        route_direction: "East",
        arrival_delta: 102.27428462072135
    },
    {
        segment: "Banfield (W)",
        route_direction: "West",
        arrival_delta: 28.81389036991704
    },
    {
        segment: "Interstate (N)",
        route_direction: "North",
        arrival_delta: 131.96376203050116
    },
    {
        segment: "Interstate (S)",
        route_direction: "South",
        arrival_delta: -1.6413082822729321
    }
];
