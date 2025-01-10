
let textUrl = document.getElementById("text-url");
let qrGenarateBtn = document.getElementById("qr-genarate-btn");
let img = document.getElementById("img-el");



let qrApi = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


  qrGenarateBtn.addEventListener("click", async()=>{
    const textOrUrl = textUrl.value;
     getQR(textOrUrl);
   textUrl.value = "";
  })

  async function getQR(inp) {
    fetch(qrApi+`${inp}`)
    .then(response=>{
        img.src = response.url;     
    })
    .catch(err=>{ 
        console.log(err);
    })
}
