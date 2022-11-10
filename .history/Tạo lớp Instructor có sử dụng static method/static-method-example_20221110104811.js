class Instructor {
    constructor({ name, role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }

    // Instance method
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }
}