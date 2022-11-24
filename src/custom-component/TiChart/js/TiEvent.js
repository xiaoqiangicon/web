
class TiEvent
{
    constructor(type) {
        this.type=type;
        this.timeStamp = new Date().getTime();
    }
}
export default TiEvent;