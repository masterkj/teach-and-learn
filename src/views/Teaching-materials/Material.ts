export default class Material {
    public id: number
    public name:string

  constructor(id?: number, name?: string) {
    this.id = id !== undefined ? id : null;
    this.name = name !== undefined ? name : '';
  }
}
