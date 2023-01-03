import { IFreightStrategy } from "./shipping/freight-strategy";

export class Freight {
  constructor(
  
    private freightService: IFreightStrategy
  ) {}

  setStrategy(freightService: IFreightStrategy) {
    this.freightService = freightService
  }

  calculate(weight: number) {
    const amount = this.freightService.calculate(weight)
    return amount;
  }
}