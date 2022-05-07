const scriptURL = 'https://script.google.com/macros/s/AKfycbxMLJT3jyRvgpwv1ZPoKkcEOhspJsjp4_T1rcnTEdxju8n3CO68B_zczIVEgnyVnC0EYA/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })

 function myFunction() {
          document.getElementById("myForm").reset();
        }