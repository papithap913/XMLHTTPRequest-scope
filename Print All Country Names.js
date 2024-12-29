// Fetching country data and displaying details
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((country) => {
            console.log(
                `Name: ${country.name.common}, Region: ${country.region}, Sub-region: ${country.subregion}, Population: ${country.population}`
            );
        });
    })
    .catch((error) => console.error("Error fetching country data:", error));
