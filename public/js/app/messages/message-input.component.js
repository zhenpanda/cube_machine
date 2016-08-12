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
var message_1 = require('./message');
var message_service_1 = require("./message.service");
var MessageInputComponent = (function () {
    // create instance of messageService
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageInputComponent.prototype.onCreate = function (content) {
        var message = new message_1.Message(content, null, 'Dummy');
        //console.log(message);
        //calling the instanted obj's method
        this._messageService.addMessage(message);
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n  <section class=\"col-md-8 col-md-offset-2\">\n    <div class=\"form-group\">\n      <label for=\"content\">Content</label>\n      <input type=\"text\" class=\"form-control\" id=\"content\" #input>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate(input.value)\">Send Message</button>\n    </div>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBaUJqRDtJQUVFLG9DQUFvQztJQUNwQywrQkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUcsQ0FBQztJQUV2RCx3Q0FBUSxHQUFSLFVBQVMsT0FBZTtRQUN0QixJQUFNLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCx1QkFBdUI7UUFFdkIsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUExQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUseVZBUVQ7U0FHRixDQUFDOzs2QkFBQTtJQWNGLDRCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSw2QkFBcUIsd0JBWWpDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCI+Q29udGVudDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29udGVudFwiICNpbnB1dD5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ3JlYXRlKGlucHV0LnZhbHVlKVwiPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIGBcbiAgLy8gaW5qZWN0IHRoZSBtZXNzYWdlU2VydmljZSBpbnRvIE1lc3NhZ2VJbnB1dENvbXBvbmVudCBieSBwcm92aWRlcnNcbiAgLy9wcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xuXG4gIC8vIGNyZWF0ZSBpbnN0YW5jZSBvZiBtZXNzYWdlU2VydmljZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHt9XG5cbiAgb25DcmVhdGUoY29udGVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKGNvbnRlbnQsIG51bGwsICdEdW1teScpO1xuICAgIC8vY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAvL2NhbGxpbmcgdGhlIGluc3RhbnRlZCBvYmoncyBtZXRob2RcbiAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
