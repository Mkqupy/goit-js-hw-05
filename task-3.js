class Storage{
    items;

    constructor(items){
        this.items = items;
    }

    getItems(){
        return this.items
    }

    addItem(item){
        this.items.push(item);
    }

    removeItem(item){
        const ind = this.items.indexOf(item);

        if (ind !== -1){
            this.items.splice(ind, 1)
        }
    }
}


const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
   ]);


   
   const items = storage.getItems();
   console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
   
   storage.addItem('Дроїд');
   console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
   storage.removeItem('Пролонгер');
   console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]