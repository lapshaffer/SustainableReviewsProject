// Autocomplete widget
// Need to figure out best way to import all company names from database
$(function () {
  const companyNames = await fetch('/api/company', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
});
  const namesList = companyNames.map(company => {
    company = company.name
  })
    $('#company-name-search').autocomplete({
      source: namesList,
    });
  });
  