class Employee {
    _lastName: string = "";
    _firstName: string = "";
    _birthDate: Date = new Date();
    _address: string = "";
    _jobPosition: string = "";

  constructor(_lastName: string, _firstName: string, _birthDate: Date, _address: string, _jobPosition: string) {
    this._lastName = _lastName;
    this._firstName = _firstName;
    this._birthDate = _birthDate;
    this._address = _address;
    this._jobPosition = _jobPosition;
  }    

    getLastName(): string {
        return this._lastName;
    }
    setLastName(lastName: string): void {
        this._lastName = lastName;
    }

    getFirstName(): string {
        return this._firstName;
    }
    setFirstName(firstName: string): void {
        this._firstName = firstName;
    }

    getBirthDate(): Date {
        return this._birthDate;
    }
    setBirthDate(birthDate: Date): void {
        this._birthDate = birthDate;
    }

    getAddress(): string {
        return this._address;
    }
    setAddress(address: string): void {
        this._address = address;
    }

    getJobPosition(): string {
        return this._jobPosition;
    }
    setJobPosition(jobPosition: string): void {
        this._jobPosition = jobPosition;
    }
}