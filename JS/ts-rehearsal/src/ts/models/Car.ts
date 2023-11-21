export class Car {
  mileage: number;
  isFavourite: boolean;

  constructor(
    public brand: string,
    public model: string,
    public color: string
  ) {
    this.mileage = 0;
    this.isFavourite = false;
  }

  drive(amountToDrive: number) {
    this.mileage += amountToDrive;
  }
}
