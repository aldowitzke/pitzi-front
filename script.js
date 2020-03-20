const handleSubmit = () => {
  event.preventDefault();

  const url = "http://localhost:3000/api/v1/users/";

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const cpf = document.querySelector("#cpf").value;
  const device = document.querySelector("#device").value;
  const imei = document.querySelector("#imei").value;
  const price = document.querySelector("#price").value;
  const installment = document.querySelector("#installment").value;

  console.log(name);

  axios
  .post(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    user: {
      name: name,
      email: email,
      cpf: cpf,
      order_attributes: {
        price: price,
        installment: installment,
        device: device,
        imei: imei
      }
    }
  })
  .then(response => {
    const message = response.data.message;
    const ul = document.querySelector("#messages-list");
    const li = document.createElement("li");
    ul.innerHTML = ''
    ul.className = "alert alert-success";
    li.appendChild(document.createTextNode(message));
    ul.appendChild(li);
  })
  .catch(error => {
    const errorMessages = error.response.data.error;
    const ul = document.querySelector("#messages-list");
    ul.innerHTML = ''
    ul.className = "alert alert-danger";

    errorMessages.forEach(error => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(error));
        ul.appendChild(li);
      });
    });
};
