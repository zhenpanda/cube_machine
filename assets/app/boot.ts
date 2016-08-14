/// <reference path="../../typings.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.components';
import {MessageService} from "./messages/message.service";

import { provide, enableProdMode } from '@angular/core';

enableProdMode();


// MessageService ary provids shared service
bootstrap(AppComponent, [MessageService]);
