export class Model{
    user;
    items;

    constructor() {
        this.user = "Çınar";
        this.items = [
            new TodoItem("Sport",true),
            new TodoItem("Breakfast",false),
            new TodoItem("Reading",false),
            new TodoItem("Cinema",false),
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description,action){
        this.description = description;
        this.action = action;
    }
}