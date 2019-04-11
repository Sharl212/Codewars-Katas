function travel(r, zipcode) {
    const arr = r.split(',')
    let roadMatches = []
    let roadNumbers = '';
    for (let road of arr) {
        const destructRoad = road.split(' ')
        const destructRoadLength = destructRoad.length;
        const streetNumbersOfRoad = destructRoad[0];
        const zipCodeOfRoad = `${destructRoad[destructRoadLength - 2]} ${destructRoad[destructRoadLength - 1]}`;
        const roadWithoutStreetNumber = destructRoad.filter((info, i) => isNaN(info) && i !== destructRoadLength - 2).join(' ')

        if (zipcode == zipCodeOfRoad) {
            roadMatches.push(roadWithoutStreetNumber)
            roadNumbers += roadNumbers == '' ? streetNumbersOfRoad : `,${streetNumbersOfRoad}`;
        }
    }
    const constructStringOfRoads = roadMatches.join(',')
    return `${zipcode}:${constructStringOfRoads}/${roadNumbers}`
}

ad = "3200 Main Rd. Bern AE 56210,320 Main Al. Bern AE 56210,3 ain Rd. Bern AE 56210"

const execute = travel(ad, "AE 56210") //--> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
console.log(execute)


// AE 56210:Main Rd. Bern,Main Al. Bern,Main Rd. Bern/3200,320,3'
// , instead got: 'AE 56210:0 Main Rd. Bern,Main Al. Bern,ain Rd. Bern/320,320,3 M