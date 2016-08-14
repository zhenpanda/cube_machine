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
var core_1 = require('@angular/core');
// import ts file
var message_1 = require('./message');
// import the MessageService
var message_service_1 = require("./message.service");
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        // output event emitter
        this.editClicked = new core_1.EventEmitter();
        this.color = "white";
        this.show = true;
    }
    ;
    //onClick event method
    // onClick() {
    //   // emit the event
    //   this.editClicked.emit('changed');
    // }
    MessageComponent.prototype.onEdit = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMessage(this.message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message',
            // need module Id to load component html
            templateUrl: 'message.component.html'
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFFckUsaUJBQWlCO0FBQ2pCLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUNsQyw0QkFBNEI7QUFDNUIsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFTakQ7SUFXRSwwQkFBcUIsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTHBELHVCQUF1QjtRQUNiLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFDbkQsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixTQUFJLEdBQUcsSUFBSSxDQUFDO0lBRTJDLENBQUM7O0lBRXhELHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxJQUFJO0lBRUosaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBcEJEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQWRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUMsWUFBWTtZQUNyQix3Q0FBd0M7WUFDeEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDOzt3QkFBQTtJQTZCRix1QkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksd0JBQWdCLG1CQTJCNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBpbXBvcnQgdHMgZmlsZVxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xuLy8gaW1wb3J0IHRoZSBNZXNzYWdlU2VydmljZVxuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjonbXktbWVzc2FnZScsXG4gIC8vIG5lZWQgbW9kdWxlIElkIHRvIGxvYWQgY29tcG9uZW50IGh0bWxcbiAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VDb21wb25lbnQge1xuICAvLyBzdGF0aWNcbiAgLy8gbWVzc2FnZTpNZXNzYWdlID0gbmV3IE1lc3NhZ2UoJ1RoZSBjb250ZW50JywgbnVsbCwgJ01heCcpO1xuXG4gIC8vIGFsbG93IHVzZXIgaW5wdXRcbiAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcbiAgLy8gb3V0cHV0IGV2ZW50IGVtaXR0ZXJcbiAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGNvbG9yID0gXCJ3aGl0ZVwiO1xuICBzaG93ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7fTtcblxuICAvL29uQ2xpY2sgZXZlbnQgbWV0aG9kXG4gIC8vIG9uQ2xpY2soKSB7XG4gIC8vICAgLy8gZW1pdCB0aGUgZXZlbnRcbiAgLy8gICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoJ2NoYW5nZWQnKTtcbiAgLy8gfVxuXG4gIG9uRWRpdCgpIHtcbiAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5lZGl0TWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xuICB9XG5cbiAgb25EZWxldGUoKSB7XG4gICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc2FnZSh0aGlzLm1lc3NhZ2UpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
