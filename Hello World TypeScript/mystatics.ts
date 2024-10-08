
class Person {
    private name: string;
    
    public setName(newName: string): string {
        this.name = newName;
        return this.name;
    }
    public getName(): string {
        return this.name;
    }
}