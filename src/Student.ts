import faker from "faker";

export class Student {
  private firstName: string;
  private lastName: string;
  private location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  getLatitude = (): number => {
    return this.location.latitude;
  };

  getLongitude = (): number => {
    return this.location.longitude;
  };

  getName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  };
}
