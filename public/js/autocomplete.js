// Autocomplete widget for header searchbar
const autocomplete = async () => {
    const result = await fetch('/api/company/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const companyList = await result.json();
    const companyNames = companyList.map(company => {
      company = company.name;
      return company; 
    });
    $('#company-name-search').autocomplete({
      source: companyNames,
    });
  };

autocomplete();