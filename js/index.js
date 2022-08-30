
const qr = document.getElementById("qrcode")

const SendForm = () => {

    
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    if (url === ""){
        alert("Por favor digite a URL!")
    } else{
        showSpinner()
        setTimeout(() => {
            hideSpinner()
             generateQRCode(url,size)
        },1500)
    }
}

//criar qrcode
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
      text: url,
      width: size,
      height: size,
    });
  };

  //show load
  const showSpinner = () => {
    const spinner = document.getElementById('load');
    spinner.style.display = 'block';
  };
  
  // Hide spinner
  const hideSpinner = () => {
    const spinner = document.getElementById('load');
    spinner.style.display = 'none';
  };

  