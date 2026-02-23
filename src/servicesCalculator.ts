import type { Service } from "./services";

let selectedServices: Service[] = [];

export function addService(service: Service): void {
  selectedServices.push(service);
}

export function getTotalServices(): number {
  let total = 0;

  for (const service of selectedServices) {
    total += service.price;
  }

  return total;
}

export function getSelectedServices(): Service[] {
  return selectedServices;
}
