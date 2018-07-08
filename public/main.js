var basketball = document.getElementsByClassName("fa-basketball-ball");
var soccer = document.getElementsByClassName("fa-futbol")
var trash = document.getElementsByClassName("fa-trash");

Array.from(basketball).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const team = this.parentNode.parentNode.childNodes[3].innerText
        const msg = this.parentNode.parentNode.childNodes[5].innerText
        const basketball = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          //what is stringify????
          body: JSON.stringify({
            'name': name,
            'team': team,
            'msg': msg,
            'basketball':basketball
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(soccer).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const team = this.parentNode.parentNode.childNodes[3].innerText
        const msg = this.parentNode.parentNode.childNodes[5].innerText
        const soccer = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)

        fetch('messagesDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          //what is stringify????
          body: JSON.stringify({
            'name': name,
            'team': team,
            'msg': msg,
            'soccer':soccer
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const team = this.parentNode.parentNode.childNodes[3].innerText
        const msg = this.parentNode.parentNode.childNodes[5].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'team': team,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
//every get request reloads the page
