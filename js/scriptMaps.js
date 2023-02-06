let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.65310258792058, lng: -100.29139610922921 },
    zoom: 18,
    mapId:'19d44d248a609478'

  });

  new google.maps.Marker({
    position: {lat:25.652952910261828, lng:-100.29137748937288},
    map,
    title: "Residencias 1",
    icon: {
        url: "house.svg",
        scaledSize: new google.maps.Size(38,31)
    },
    animation: google.maps.Animation.DROP
  });

  function validate(){
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
  }
validate();
  function sendmail(name,email,msg){
    emailjs.send("service_t8ko2jv","template_6bnwb2f",{
        from_name: email,
        to_name: name,
        message: msg,
        });
  }

  function emptyerror(){
    swal({
        title: "Oh no!",
        text: "Le diste click al botón sin escribir tu info!",
        icon: "error",
        button: "Intenta de nuevo",
      });
  }

  function success(){
    swal({
        title: "Listo!",
        text: "Nos pondremos en contacto contigo en breve",
        icon: "success",
        button: "Entendido",
      });
  }

/*
  new google.maps.Marker({
    position: {lat:25.653822137582708, lng:-100.2905134875168},
    map,
    title: "Residencias 3",
  });

  new google.maps.Marker({
    position: {lat:25.65324285321756, lng:-100.29145401820948},
    map,
    title: "Residencias 4",
  });

  new google.maps.Marker({
    position: {lat:25.65353931692129, lng:-100.29101355620705},
    map,
    title: "Residencias 5",
  });
  */
}
// Info de resis 25.65310258792058, -100.29139610922921
// Info resis 5 25.65353931692129, -100.29101355620705
// Info resis 4 25.65324285321756, -100.29145401820948
//Info resis 3 25.653822137582708, -100.2905134875168
//Info resis 2 NO HAY
//Info resis 1 25.652952910261828, -100.29137748937288
window.initMap = initMap;