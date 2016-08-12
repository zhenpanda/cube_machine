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
// import components
var message_component_1 = require('./messages/message.component');
// import in message obj contrusctor
var message_1 = require('./messages/message');
// moduleId connects app parts
// component is loaded into views/index.hbs
var AppComponent = (function () {
    function AppComponent() {
        // message = {
        //   content: 'A message',
        //   author: 'Max'
        // };
        this.message = new message_1.Message('A new message', null, 'Max');
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// databinding to components

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsb0JBQW9CO0FBQ3BCLGtDQUErQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQzlELG9DQUFvQztBQUNwQyx3QkFBc0Isb0JBQW9CLENBQUMsQ0FBQTtBQUUzQyw4QkFBOEI7QUFDOUIsMkNBQTJDO0FBTzNDO0lBQUE7UUFDRSxjQUFjO1FBQ2QsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixLQUFLO1FBQ0wsWUFBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFaRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFDLFFBQVE7WUFDakIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNqQyxDQUFDOztvQkFBQTtJQU9GLG1CQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxvQkFBWSxlQU14QixDQUFBO0FBQ0QsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgaW4gbWVzc2FnZSBvYmogY29udHJ1c2N0b3JcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlJztcblxuLy8gbW9kdWxlSWQgY29ubmVjdHMgYXBwIHBhcnRzXG4vLyBjb21wb25lbnQgaXMgbG9hZGVkIGludG8gdmlld3MvaW5kZXguaGJzXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOidteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gbWVzc2FnZSA9IHtcbiAgLy8gICBjb250ZW50OiAnQSBtZXNzYWdlJyxcbiAgLy8gICBhdXRob3I6ICdNYXgnXG4gIC8vIH07XG4gIG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZScsIG51bGwsICdNYXgnKTtcbn1cbi8vIGRhdGFiaW5kaW5nIHRvIGNvbXBvbmVudHNcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
