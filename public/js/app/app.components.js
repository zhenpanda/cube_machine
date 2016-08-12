// keep the app component as light as possible
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
// import components
var core_1 = require('@angular/core');
var message_list_component_1 = require('./messages/message-list.component');
var message_input_component_1 = require('./messages/message-input.component');
// moduleId connects app parts
// component is loaded into views/index.hbs
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// databinding to components

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4Qzs7Ozs7Ozs7Ozs7QUFFOUMsb0JBQW9CO0FBQ3BCLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUd4Qyx1Q0FBbUMsbUNBQW1DLENBQUMsQ0FBQTtBQUN2RSx3Q0FBb0Msb0NBQW9DLENBQUMsQ0FBQTtBQUd6RSw4QkFBOEI7QUFDOUIsMkNBQTJDO0FBUTNDO0lBQUE7SUFLQSxDQUFDO0lBWkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBQyxRQUFRO1lBQ2pCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsK0NBQXFCLENBQUM7U0FDNUQsQ0FBQzs7b0JBQUE7SUFPRixtQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksb0JBQVksZUFLeEIsQ0FBQTtBQUNELDRCQUE0QiIsImZpbGUiOiJhcHAuY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGtlZXAgdGhlIGFwcCBjb21wb25lbnQgYXMgbGlnaHQgYXMgcG9zc2libGVcblxuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCBpbiBtZXNzYWdlIG9iaiBjb250cnVzY3RvclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UnO1xuaW1wb3J0IHtNZXNzYWdlTGlzdENvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7TWVzc2FnZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuXG4vLyBtb2R1bGVJZCBjb25uZWN0cyBhcHAgcGFydHNcbi8vIGNvbXBvbmVudCBpcyBsb2FkZWQgaW50byB2aWV3cy9pbmRleC5oYnNcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6J215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlTGlzdENvbXBvbmVudCwgTWVzc2FnZUlucHV0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIG1lc3NhZ2UgPSB7XG4gIC8vICAgY29udGVudDogJ0EgbWVzc2FnZScsXG4gIC8vICAgYXV0aG9yOiAnTWF4J1xuICAvLyB9O1xufVxuLy8gZGF0YWJpbmRpbmcgdG8gY29tcG9uZW50c1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
