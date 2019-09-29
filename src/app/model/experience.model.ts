export class Experience {
  id: string;
  date: string;
  position: string;
  responsibilities: string[];

  constructor(id: string, date: string, position: string, responsibilities: string[]) {
    this.id = id;
    this.date = date;
    this.position = position;
    this.responsibilities = responsibilities;
  }
}
