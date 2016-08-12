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
var MessageComponent = (function () {
    function MessageComponent() {
        // output event emitter
        this.editClicked = new core_1.EventEmitter();
        this.color = "white";
        this.show = true;
    }
    //onClick event method
    MessageComponent.prototype.onClick = function () {
        // emit the event
        this.editClicked.emit('changed');
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
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFFckUsaUJBQWlCO0FBQ2pCLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQVNsQztJQUFBO1FBTUUsdUJBQXVCO1FBQ2IsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUNuRCxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxJQUFJLENBQUM7SUFRZCxDQUFDO0lBTkMsc0JBQXNCO0lBQ3RCLGtDQUFPLEdBQVA7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVZEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQWRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUMsWUFBWTtZQUNyQix3Q0FBd0M7WUFDeEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDOzt3QkFBQTtJQW1CRix1QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksd0JBQWdCLG1CQWlCNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBpbXBvcnQgdHMgZmlsZVxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6J215LW1lc3NhZ2UnLFxuICAvLyBuZWVkIG1vZHVsZSBJZCB0byBsb2FkIGNvbXBvbmVudCBodG1sXG4gIHRlbXBsYXRlVXJsOiAnbWVzc2FnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgLy8gc3RhdGljXG4gIC8vIG1lc3NhZ2U6TWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdUaGUgY29udGVudCcsIG51bGwsICdNYXgnKTtcblxuICAvLyBhbGxvdyB1c2VyIGlucHV0XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XG4gIC8vIG91dHB1dCBldmVudCBlbWl0dGVyXG4gIEBPdXRwdXQoKSBlZGl0Q2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBjb2xvciA9IFwid2hpdGVcIjtcbiAgc2hvdyA9IHRydWU7XG5cbiAgLy9vbkNsaWNrIGV2ZW50IG1ldGhvZFxuICBvbkNsaWNrKCkge1xuICAgIC8vIGVtaXQgdGhlIGV2ZW50XG4gICAgdGhpcy5lZGl0Q2xpY2tlZC5lbWl0KCdjaGFuZ2VkJyk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
