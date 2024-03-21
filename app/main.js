window.onload = () => {
  const mailerform = document.getElementById("mailer-form");
  mailerform.onsubmit = async (e) => {
    e.preventDefault();
    const error = document.getElementById("error");
    error.innerHTML = "";
    const formData = new FormData(mailerform);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseText = await response.text();
    if (response.status > 300) {
      error.innerHTML = responseText;
      return;
    }
    console.log("SS");
    mailerform.reset();
    alert("correo enviado con exito!!");
  };
};
