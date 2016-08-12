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
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFFL0MsaUJBQWlCO0FBQ2pCLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQVNsQztJQUFBO0lBT0EsQ0FBQztJQUZDO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQVpWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUMsWUFBWTtZQUNyQix3Q0FBd0M7WUFDeEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QyxDQUFDOzt3QkFBQTtJQVNGLHVCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSx3QkFBZ0IsbUJBTzVCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBpbXBvcnQgdHMgZmlsZVxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6J215LW1lc3NhZ2UnLFxuICAvLyBuZWVkIG1vZHVsZSBJZCB0byBsb2FkIGNvbXBvbmVudCBodG1sXG4gIHRlbXBsYXRlVXJsOiAnbWVzc2FnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgLy8gc3RhdGljXG4gIC8vIG1lc3NhZ2U6TWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdUaGUgY29udGVudCcsIG51bGwsICdNYXgnKTtcblxuICAvLyBhbGxvdyB1c2VyIGlucHV0XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XG4gIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
