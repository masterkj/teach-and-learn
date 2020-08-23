export default class Profile {
  public firstName: string;
  public lastName: string;

  public university: number;
  public collage: number;

  public studyYear: number;
  public state: string;
  public city: string;
  public area: string;
  public village: string;


  public gender: string;

  public constructor(
    firstName?: string,
    lastName?: string,
    state?: string,
    city?: string,
    area?: string,
    village?: string,

    university?: number,
    collage?: number,
    studyYear?: number,
    gender?: string,
  ) {
    this.firstName = firstName !== undefined ? firstName : '' ;
    this.lastName = lastName !== undefined ? lastName : '' ;
    this.university = university !== undefined ? university : null;
    this.collage = collage !== undefined ? collage : null;
    this.studyYear = studyYear !== undefined ? studyYear : null;
    this.state = state !== undefined ? state : '';
    this.city = city !== undefined ? city : '';
    this.area = area !== undefined ? area : '';
    this.village = village !== undefined ? village : '';

    this.gender = gender !== undefined ? gender : null;

  }

}
