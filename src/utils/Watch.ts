import Hand from './Hand';

class Watch {
    watchLabel : HTMLElement;
    second : Hand;
    minute : Hand;
    hour : Hand;

    constructor(watchLabel : HTMLElement){
        this.watchLabel = watchLabel;
        this.second = new Hand(60);
        this.minute = new Hand(60);
        this.hour = new Hand(24);
    }

    moveWatch(){
        let currentTime = new Date();
        this.second.setValue = currentTime.getSeconds();
        this.minute.setValue = currentTime.getMinutes();
        this.hour.setValue = currentTime.getHours();
        console.log(`((${this.hour.getValue}<=9?"0":"")+${this.hour.getValue}+":"+(${this.minute.getValue}<=9?"0":"")+${this.minute.getValue}+":"+(${this.second.getValue}<=9?"0":"")+${this.second.getValue})`);
        this.watchLabel.innerHTML = `((${this.hour.getValue}<=9?"0":"")+${this.hour.getValue}+":"+(${this.minute.getValue}<=9?"0":"")+${this.minute.getValue}+":"+(${this.second.getValue}<=9?"0":"")+${this.second.getValue})`;
        setTimeout(()=>{
            this.moveWatch();
        },1000);
    }


}

export default Watch;