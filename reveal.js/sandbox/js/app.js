(function($) {

  $(document).ready(function() {
    var URL = 'http://jquery-lab.herokuapp.com/data';

    $.ajax({
      url: URL,
      method: 'GET',
      crossDomain: true,
      dataType: "json",
      success: function() {
        console.log(arguments);
      },
      error: function() {
        console.log(arguments);
      }
    });

    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

      } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

      } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

      }
      return xhr;
    }

    var xhr = createCORSRequest('GET', URL);

    xhr.onload = function() {
      var responseText = xhr.responseText;
      console.log(responseText);
      // process the response.
    };

    xhr.send();

  });

})(jQuery);
