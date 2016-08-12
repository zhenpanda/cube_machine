"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var message_component_1 = require('./message.component');
var message_service_1 = require("./message.service");
var MessageListComponent = (function () {
    // array of objs
    // messages: Message[] = [
    //   new Message('A new message', null, 'Max'),
    //   new Message('Another message', null, 'Anna')
    // ];
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.messages = this._messageService.getMessages();
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n  <!-- onClick triggers the event and event emit triggers and input $event -->\n  <!-- *ngFor loop -->\n  <my-message *ngFor=\"let message of messages\" [message]=\"message\" (editClicked) = \"message.content = $event\"></my-message>\n  ",
            // directives are instructions
            // structural directives add or delete part of DOM
            // attributes directives change value
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;
// databinding to components

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQWlCbkQ7SUFDRSxnQkFBZ0I7SUFFaEIsMEJBQTBCO0lBQzFCLCtDQUErQztJQUMvQyxpREFBaUQ7SUFDakQsS0FBSztJQUVMLDhCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBRyxDQUFDO0lBSXZELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQTdCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxpUEFJVDtZQUNELDhCQUE4QjtZQUM5QixrREFBa0Q7WUFDbEQscUNBQXFDO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBRS9CLENBQUM7OzRCQUFBO0lBa0JGLDJCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSw0QkFBb0IsdUJBZWhDLENBQUE7QUFDRCw0QkFBNEIiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8IS0tIG9uQ2xpY2sgdHJpZ2dlcnMgdGhlIGV2ZW50IGFuZCBldmVudCBlbWl0IHRyaWdnZXJzIGFuZCBpbnB1dCAkZXZlbnQgLS0+XG4gIDwhLS0gKm5nRm9yIGxvb3AgLS0+XG4gIDxteS1tZXNzYWdlICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCIgW21lc3NhZ2VdPVwibWVzc2FnZVwiIChlZGl0Q2xpY2tlZCkgPSBcIm1lc3NhZ2UuY29udGVudCA9ICRldmVudFwiPjwvbXktbWVzc2FnZT5cbiAgYCxcbiAgLy8gZGlyZWN0aXZlcyBhcmUgaW5zdHJ1Y3Rpb25zXG4gIC8vIHN0cnVjdHVyYWwgZGlyZWN0aXZlcyBhZGQgb3IgZGVsZXRlIHBhcnQgb2YgRE9NXG4gIC8vIGF0dHJpYnV0ZXMgZGlyZWN0aXZlcyBjaGFuZ2UgdmFsdWVcbiAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG4gIC8vcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdXG59KVxuXG4vLyBhbmd1bGFyIDIgaW50ZXJmYWNlIGFuZCBleGVjdXRlcyBzb21lIG1ldGhvZFxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gYXJyYXkgb2Ygb2Jqc1xuXG4gIC8vIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXG4gIC8vICAgbmV3IE1lc3NhZ2UoJ0EgbmV3IG1lc3NhZ2UnLCBudWxsLCAnTWF4JyksXG4gIC8vICAgbmV3IE1lc3NhZ2UoJ0Fub3RoZXIgbWVzc2FnZScsIG51bGwsICdBbm5hJylcbiAgLy8gXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHt9XG5cbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLl9tZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlcygpO1xuICB9XG59XG4vLyBkYXRhYmluZGluZyB0byBjb21wb25lbnRzXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
