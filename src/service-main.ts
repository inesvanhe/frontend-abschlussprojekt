import "./style.css";
import { services } from "./services";
import {
  addService,
  getTotalServices,
  getSelectedServices,
} from "./servicesCalculator";

function renderServices(): void {
  const list = document.getElementById("selected-services");
  const total = document.getElementById("service-total");

  if (!list || !total) return;

  list.innerHTML = "";

  for (const service of getSelectedServices()) {
    const li = document.createElement("li");
    li.textContent = `${service.name} - ${service.price} €`;
    list.appendChild(li);
  }

  total.textContent = getTotalServices().toString();
}

const buttons = document.querySelectorAll("button[data-id]");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const id = Number(button.getAttribute("data-id"));
    const service = services.find((s) => s.id === id);

    if (service) {
      addService(service);
      renderServices();
    }
  });
}

const submitButton = document.getElementById("submit");

if (submitButton) {
  submitButton.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const mail = (document.getElementById("mail") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const plate = (document.getElementById("plate") as HTMLInputElement).value;
    const vehicle = (document.getElementById("vehicle") as HTMLInputElement)
      .value;
    const date = (document.getElementById("date") as HTMLInputElement).value;

    if (!name || !mail || !phone || !plate || !vehicle || !date) {
      alert("Bitte alle Felder ausfüllen!");
      return;
    }

    const order = {
      id: Date.now(),
      name,
      mail,
      phone,
      plate,
      vehicle,
      date,
      services: getSelectedServices(),
      total: getTotalServices(),
      status: "Offen",
    };

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    const confirmation = document.getElementById("confirmation");
    if (confirmation) {
      confirmation.classList.remove("hidden");
    }
  });
}
