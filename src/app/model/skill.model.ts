export class Skill {
  id: string;
  title: string;
  /* 0-5 */
  mastery: number;

  constructor(id: string, title: string, mastery: number) {
    this.id = id;
    this.title = title;
    this.mastery = mastery;
  }
}
