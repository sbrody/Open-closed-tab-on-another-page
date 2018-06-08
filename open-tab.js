// Open relevant Bootstrap 4 tab from another page link
window.onload = function() {
if (window.location.pathname == '/tabpage/') {

    var urlHash = window.location.hash.substr(1);
    var tabContainer = document.getElementById('portfolioTabContent');

    switch (urlHash) {
      case '1':
      jQuery('#tabcontainer1').addClass('show active');
      jQuery('#tab1').addClass('show active');
      tabContainer.scrollIntoView({block: 'start'});
      break;
      case '2':
      jQuery('#tabcontainer2').addClass('show active');
      jQuery('#tab2').addClass('show active');
      tabContainer.scrollIntoView({block: 'start'});
      break;
      case '3':
      jQuery('#tabcontainer3').addClass('show active');
      jQuery('#tab3').addClass('show active');
      tabContainer.scrollIntoView({block: 'start'});
      break;
    }

}
}
