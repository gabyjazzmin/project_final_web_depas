let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.65310258792058, lng: -100.29139610922921 },
    zoom: 18,
    mapId: "19d44d248a609478",
  });

  const markers = [
    [
      "Residencias 1",
      25.652952910261828,
      -100.29137748937288,
      "house.svg",
      38,
      31,
    ],
    [
      "Residencias 3",
      25.653822137582708,
      -100.2905134875168,
      "house.svg",
      38,
      31,
    ],
    [
      "Residencias 4",
      25.65324285321756,
      -100.2914540182094,
      "house.svg",
      38,
      31,
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });
  }

  /*


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

//Generación de validación y funciones de success y error para contact form
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();
function sendmail(name, email, msg) {
  emailjs.send("service_t8ko2jv", "template_6bnwb2f", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh no!",
    text: "Le diste click al botón sin escribir tu info!",
    icon: "error",
    button: "Intenta de nuevo",
  });
}

function success() {
  swal({
    title: "Listo!",
    text: "Nos pondremos en contacto contigo en breve",
    icon: "success",
    button: "Entendido",
  });
}
