$(function () {
  let countryOpts;
  $.getJSON("/country-by-name.json", function (data) {
    $.each(data, function (i, valueOfElement) {
      console.log(valueOfElement.country);
      countryOpts += `<option  value="${valueOfElement.country}">${valueOfElement.country}</option>`;
    });
    $("#country").html(countryOpts);
  });
});

document.querySelector(".search-btn").addEventListener("click", function () {
  localStorage.setItem("country", document.getElementById("country").value);
});
