export default class Profile {
  public firstName: string;
  public lastName: string;

  public universityid: number;
  public studyYear: number;
  public address: string;
  public sectionId: number;
  public gender: string;

  public constructor(
    firstName?: string,
    lastName?: string,
    sectionId?: number,
    address?: string,
    universityid?: number,
    studyYear?: number,
    gender?: string,
  ) {
    this.firstName = firstName !== undefined ? firstName : '' ;
    this.lastName = lastName !== undefined ? lastName : '' ;
    this.universityid = universityid !== undefined ? universityid : null;
    this.studyYear = studyYear !== undefined ? studyYear : null;
    this.address = address !== undefined ? address : '';
    this.sectionId = sectionId !== undefined ? sectionId : null;
    this.gender = gender !== undefined ? gender : null;

  }

}
