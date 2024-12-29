// Fetching country data and displaying flags
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((country) => {
            console.log(`Country: ${country.name.common}, Flag: ${country.flags.svg}`);
        });
    })
    .catch((error) => console.error("Error fetching country data:", error));
