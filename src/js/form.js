export default function form() {
console.log('test');
  document.addEventListener('DOMContentLoaded', () => {
  
    const request = async (url, data = null) => {
      console.log('data2: ', data);
      // try {
          const response = await fetch(url, {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json'
            // },
            body: data
            // body: JSON.stringify(data)
          }).then(data => {
            console.log(data);
        }).catch(() => {
        }).finally(() => {
            // form.reset();
        });;
  //         console.log('response: ', response);
  
  //         if (!response.ok) {
  //             throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  //         }
  // console.log('response', response);
  //         const data = await response.json();
  //         console.log('data: ', data); 
  
  //         return data;
  //     } catch(e) {
  //         // throw e;
  //     }
    };
  
  
  
  
  
    const form = document.querySelector('.form');
    const submitButton = form.querySelector('button[type="submit"]');
  
    const submitForm = async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
  
      const data = {};
      formData.forEach(function(value, key){
          data[key] = value;
      });
  
      
      request('email2.php', formData)
  // console.log(form.send());
      // let cc = 
      // .then(text => {
      //   console.log('text: ', text);
  
      // })
      // console.log('cc: ', cc);
    //   fetch('http://example.com/movies.json')
    // .then((response) => response.json())
    // .then((data) => console.log(data));
  
  
  //multipart/form-data
  
    }
  
    submitButton.addEventListener('click', () => submitForm(event));
  })
}