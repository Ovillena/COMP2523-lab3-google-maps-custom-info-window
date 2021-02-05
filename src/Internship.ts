import faker from "faker";

export class Internship {
  private businessName: string;
  private location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.businessName = faker.name.firstName();
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

  getBusinessName = (): string => {
    return this.businessName;
  };
}
