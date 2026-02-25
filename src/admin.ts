interface Order {
  id: number;
  name: string;
  mail: string;
  phone: number;
  plate: string;
  vehicle: string;
  date: string;
  services: { name: string; price: number }[];
  total: number;
  status: "Offen" | "In Bearbeitung" | "Abgeschlossen";
}

function getOrders(): Order[] {
  return JSON.parse(localStorage.getItem("orders") || "[]");
}

function saveOrders(orders: Order[]): void {
  localStorage.setItem("orders", JSON.stringify(orders));
}

const ordersList = document.getElementById("orders-list")!;

function renderOrders(): void {
  const orders = getOrders();
  ordersList.innerHTML = "";

  for (const order of orders) {
    const div = document.createElement("div");
    div.textContent = order.name;

    const status = document.createElement("p");
    status.textContent = order.status;
    div.appendChild(status);

    const btnBearbeitung = document.createElement("button");
    btnBearbeitung.textContent = "In Bearbeitung";
    div.appendChild(btnBearbeitung);

    const btnAbgeschlossen = document.createElement("button");
    btnAbgeschlossen.textContent = "Abgeschlossen";
    div.appendChild(btnAbgeschlossen);

    btnBearbeitung.addEventListener("click", () => {
      order.status = "In Bearbeitung";
      saveOrders(orders);
      renderOrders();
    });

    btnAbgeschlossen.addEventListener("click", () => {
      order.status = "Abgeschlossen";
      saveOrders(orders);
      renderOrders();
    });

    ordersList.appendChild(div);
  }
}

renderOrders();
