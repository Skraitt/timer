class Hand{
    private limit: number;
    private value: number;

    constructor(limit: number){
        this.limit = limit;
        this.value = 0;
    }

    get getValue(){
        return this.value;
    }

    set setValue(value: number){
        this.value = value;
    }

    run():void {
        this.value++;
        if(this.value >= this.limit){
            this.value = 0;
        }
    }
}

export default Hand;