// Generate a random company to display on the Grove homepage
const companyLink = document.getElementById("random-company");

const random = async () => {
    const result = await fetch('/api/company/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const companyList = await result.json();
    const companyArray = companyList.map(company => {
        return company;
    });
    var randomNum = Math.floor(Math.random() * companyArray.length);
    const companyName = companyArray[randomNum].name;
    const companyId = companyArray[randomNum].id;
    companyLink.innerHTML = `<a class="col-5" href="/company/` + companyId + `">` + companyName + `</a>`;
};

random();