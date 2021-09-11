// Autocomplete widget
// Need to figure out best way to import all company names from database
$(function () {
    var companyNames = [];
    $('#company-name-search').autocomplete({
      source: companyNames,
    });
  });
  