export class Education {
  id: string;
  date: string;
  place: string;
  speciality: string;

  constructor(id: string, date: string, place: string, speciality: string) {
    this.id = id;
    this.date = date;
    this.place = place;
    this.speciality = speciality;
  }
}
