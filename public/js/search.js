async function searchCompany(event) { 
    event.preventDefault();
    const result = await fetch('/api/company/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    const companyList = await result.json();
    const input = document.querySelector('#company-name-search').value;

    for(let i=0; i<companyList.length; i++) {
        if (input===companyList[i].name) {
            var id=companyList[i].id;
            break;
        };
    };
    document.location.replace(`/company/${id}`);
};

document.querySelector('#search').addEventListener('click', searchCompany);
/* const companyList = result.json();
const companyNames = companyList.map(company => {
    return company;
});

console.log(companyNames); */


//When the search button is clicked
//get the company id off the input to the search bar
//query the company database by that id