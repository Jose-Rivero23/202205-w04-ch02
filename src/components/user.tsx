export class User {
  constructor(
    public name: string,
    public lastName: string,
    public birthday: Date,
    public gender: string,
    public mail: string,
    public newsletter: boolean
  ) {}
}
