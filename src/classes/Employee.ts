class Employee {
  
  private _name: string;
  private _id: number;

  constructor(name: string, id: number) {
    this._name = name;
    this._id = id;
  }

  public toString():string {
    return `Employee [name: ${this._name}, id: ${this._id}]`;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get id(): number {
    return this._id
  }
  
}

export default Employee;