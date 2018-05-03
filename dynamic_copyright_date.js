/***** Set the copyright text in the site footer *****/
document.addEventListener("DOMContentLoaded", function(event) { 
  let thisYear = new Date().getFullYear();
  let footerText = document.querySelector("#bottom-bar .wf-wrap .wf-container-bottom .wf-table .wf-td .wf-float-left");
  footerText.innerHTML = `Copyright © ${thisYear}, <strong>Rutgers, The State University of New Jersey</strong>,<br>an equal opportunity, affirmative action institution. All rights reserved.`;
});
/***** End *****/