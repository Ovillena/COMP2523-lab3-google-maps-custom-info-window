import { Internship } from "./Internship";
import { Student } from "./Student";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
    this.googleInfoWindow = new google.maps.InfoWindow();
  }

  addMarker = (marker: Student | Internship) => {
    // takes in an existing student or marker and extracts it's location to create a marker
    if (marker.getName) {
      const window = new google.maps.InfoWindow({
        content: `<h2>Student</h2><p>${marker.getName()}<p>`,
      });
    } else {
      const window = new google.maps.InfoWindow({
        content: `<h2>${marker.getBusinessName()}'s business location is</h2>Latitude: ${marker.getLatitude()}<br>Longitude: ${marker.getLongitude()}`,
      }); //the business name looks like a person's name on the info window because faker produces people names only
    }

    const aMarker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: marker.getLatitude(),
        lng: marker.getLatitude(),
      },
    });

    aMarker.addListener("click", () => {
      window.open(this.googleMap, aMarker);
    });
  };
}
