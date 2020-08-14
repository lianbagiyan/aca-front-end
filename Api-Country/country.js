fetch('https://restcountries.eu/rest/v2/all')
    .then((r) => r.json())
    .then(console.log)
    .catch( (err) => {
        console.warn(err);
    })