class EventHandler {
  constructor(public eventName: string) { }
}

class EventSvc {
  _eventHandler: EventHandler;
  constructor() {
    this._eventHandler = new EventHandler('An event');
  }
  
  get name(): string {
    return this._eventHandler.eventName;
  }
}