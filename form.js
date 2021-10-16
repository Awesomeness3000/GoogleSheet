 var scriptURL = "https://script.google.com/macros/s/AKfycbxrIUPVainngPth2GMtpbqPA6SzoYgm3ynnd1t4rCjsgIM14RSnSq0ztSfJZ5r3ENwo/exec"
 var form = doxument.form['google-sheet']

 form.addEventListener('submit', e=>{
     e.preventDefault()
     fetch(scriptURL,{method: 'POST',body: new FormData(form)}).then(response => document.getElementById('form_alert').innerHTML = "Data has been stored").catch
     fetch(scriptURL,{method: 'POST',body: new FormData(form)}).then(response => document.getElementById('form_alert').innerHTML = "Data has nor been stored").catch
 })
