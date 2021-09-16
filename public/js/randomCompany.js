// Generate a random company to display on the Grove homepage

const random = async () => {
    const result = await fetch('/api/company/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const companyList = await result.json();
    const companyNames = companyList.map(company => {
        company = company.name;
        return company;
    });
    // use jQuery to grab #random-company and inject a random company name into it
};

random();