  
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); 
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }


  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const [key, value] = cookies[i].split('=');
      if (key === name) {
        return value;
      }
    }
    return null;
  }

 
  function showAgeDialog() {
    if (getCookie('isAdult') !== 'true') {
      document.getElementById('age-dialog').style.display = 'block';
      document.getElementById('age-dialog-overlay').style.display = 'block';
    }
  }

 
  function handleAgeResponse(isAdult) {
    if (isAdult) {
      setCookie('isAdult', 'true', 30); 
      document.getElementById('age-dialog').style.display = 'none';
      document.getElementById('age-dialog-overlay').style.display = 'none';
    } else {
      alert("We're sorry, this content is not suitable for minors.");
      window.location.href = "http://atticus.icu"; 
    }
  }

  
  window.onload = function() {
    showAgeDialog();
  };
