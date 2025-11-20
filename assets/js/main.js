// small helper to set year
document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.textContent = y;
  var el2 = document.getElementById('year-2');
  if(el2) el2.textContent = y;
});