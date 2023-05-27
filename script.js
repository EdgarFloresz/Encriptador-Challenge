const encriptar = document.getElementById("buttonEncriptarS");
const desencriptar = document.getElementById("buttonDesencriptarS");
const encriptarSS = document.getElementById("buttonEncriptarSS");
const desencriptarSS = document.getElementById("buttonDesencriptarSS");
const copy = document.getElementById("buttonCopiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const rightImagen = document.getElementById("rightImagen");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")

const remplace = (newvalue) => {
    // textFinal.innerHTML = newvalue;
    textFinal.value = newvalue
    textoInicial.value = "";
    textoInicial.style.height = "auto"
    textFinal.classList.add("ajustar");
    rigth.classList.add("ajustar")
    rightImagen.classList.add("ocultar");
    textInfo.classList.add("ocultar");
    copy.classList.remove("bn_ocultar");
    // textoInicial.placeholder = "Ingrese el texto aquí";
}

const reset = () => {
    textoInicial.style.height = "auto";
    rigth.classList.remove("ajustar")
    textFinal.classList.remove("ajustar");
    rightImagen.classList.remove("ocultar");
    textInfo.classList.remove("ocultar")
    copy.classList.add("bn_ocultar");
    // textFinal.innerHTML = "";
    textFinal.value = "";
    textoInicial.value = "";
};

let remplazar = [
    	//["e", "enter"],
		//["i", "imes"],
		//["a", "ambar"],
		//["o", "ober"],
		//["u", "ufat"]
		["050", "'-"],
		["91", "+."],
		["56", "?="],
		["96", "*¡"],
		["526", "¿_"],
		["36", "&#"],
		["ü", "050"],
		["w", "6ü9"],
		["a", "2w1"],
		["á", "5w1"],
		["x", "á5a"],
		["z", "á0x"],
		["h", "w1z"],
		["o", "6xw"],
		["ó", "7xw"],
		["l", "3oz"],
		["d", "x5z"],
		["i", "z7h"],
		["í", "z8h"],
		["j", "9dh"],
		["b", "j2d"],
		["é", "3ow"],
		["e", "6éo"],
		["g", "w3á"],
		["m", "b2d"],
		["c", "3d3"],
		["s", "o8j"],
		["k", "1x7"],
		["r", "3dü"],
		["v", "xsm"],
		["f", "dlr"],
		["y", "b5i"],
		["ú", "y1k"],
		["u", "yúw"],
		["n", "ójw"],
		["ñ", "x6b"],
		["t", "c3k"],
		["p", "yíd"],
		["q", "z0f"],
];

const newAlert = (mensaje, icono, color, alertTitle, title) => {
    swal.fire({
        title: `<span class=${alertTitle}>${title}</span>`,
        html: `<span class='alertMessage'>${mensaje}</span>`,
        icon: `${icono}`,
        iconColor: `${color}`,
        background: "#2d2c2e",
        timer: 1500,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        showConfirmButton: true,
        confirmButtonColor: "#295afa",
        confirmButtonAriaLabe: "Confirmar",
        didClose: textoInicial.focus(),
    })
};

encriptar.addEventListener('click', () => {
    const texto = textoInicial.value.toLowerCase();
    if (texto != "") {
        function encript(newtext) {
            //for (let i = 38; i >= 0; i--){
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][0])) {
                    newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newtext;
        };
        remplace(encript(texto));
    } else {
        newAlert("Ingrese texto a encriptar", "error", "#fd1f4a", "errorTitle", "Ocurrió un Error")
        reset();
    };
});

desencriptar.addEventListener('click', () => {
    const texto = textoInicial.value.toLowerCase();
    if (texto != "") {
        function encript(newtext) {
            for (let i = 38; i >= 0; i--){
            //for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][1])) {
                    newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newtext;
        };
        remplace(encript(texto));
    } else {
        newAlert("Ingrese texto a desencriptar", "error", "#fd1f4a", "errorTitle", "Ocurrió un Error")
        reset();
    };
});


encriptarSS.addEventListener('click', () => {
    const texto = textoInicial.value.toLowerCase();
    if (texto != "") {
        function encript(newtext) {
            for (let i = 38; i >= 0; i--){
            //for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][0])) {
                    newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newtext;
        };
        remplace(encript(texto));
    } else {
        newAlert("Ingrese texto a encriptar", "error", "#fd1f4a", "errorTitle", "Ocurrió un Error")
        reset();
    };

});

desencriptarSS.addEventListener('click', () => {
    const texto = textoInicial.value.toLowerCase();
    if (texto != "") {
        function encript(newtext) {
            //for (let i = 38; i >= 0; i--) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][1])) {
                    newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newtext;
        };
        remplace(encript(texto));
    } else {
        newAlert("Ingrese texto a desencriptar", "error", "#fd1f4a", "errorTitle", "Ocurrió un Error")
        reset();
    };
});

copy.addEventListener("click", () => {
    let texto = textFinal;
    texto.select();
    document.execCommand('copy');
    // navigator.clipboard.writeText(texto.value);
    // clipboard función no compatible con móviles
    newAlert("Texto Copiado", "success", "#20bb20", "acepTitle", "Mensaje Copiado");
    reset();
});
//auto ajuste de textarea
const textarea = document.getElementById("textoInput");
textarea.addEventListener("keyup", e => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});
