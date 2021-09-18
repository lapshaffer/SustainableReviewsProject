const addCompany = document.querySelector('#addCompany');

addCompany && addCompany.addEventListener('click', async (event) => {
    event.preventDefault();

    const companyName = document.querySelector('#companyName').value.trim();
    const companyDescription = document.querySelector('#companyDescription').value.trim();
    const industry = document.querySelector('#industry').value.trim();


    const newCompany = await fetch(`/api/company/`, {
        method: 'POST',
        body: JSON.stringify({
            name: companyName,
            description: companyDescription,
            industry: industry
        }),
        headers: { 'Content-type': 'application/json' }
    });

    if (newCompany.ok) {
        let newCompanyInfo = await newCompany.json();
        let companyId=newCompanyInfo.id;
        document.location.replace(`/company/${companyId}`);
    }
})