/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from './control_value_accessor';
export declare const DEFAULT_VALUE_ACCESSOR: any;
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {@link NgModel}, {@link NgFormControl}, and {@link NgControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" ngControl="searchQuery">
 *  ```
 *
 *  @experimental
 */
export declare class DefaultValueAccessor implements ControlValueAccessor {
    private _renderer;
    private _elementRef;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
