"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var option_list_1 = require("./option-list");
var Option = (function () {
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
        // Add children in their own option list
        if (this.wrappedOption.hasOwnProperty('children')) {
            this.children = new option_list_1.OptionList(this.wrappedOption.children, true);
        }
    }
    Object.defineProperty(Option.prototype, "value", {
        get: function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        get: function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    Option.prototype.hasChildren = function () {
        return this.children ? (this.children.options.length > 0) : false;
    };
    Option.prototype.hasSelected = function () {
        return this.children ? this.children.hasSelected() : false;
    };
    Option.prototype.getSelected = function () {
        return this.children.getSelected();
    };
    Option.prototype.clearSelection = function () {
        var deselected = [];
        if (this.selected) {
            this.selected = false;
            deselected.push(this);
        }
        if (this.hasChildren()) {
            deselected.concat(this.children.clearSelection());
        }
        return deselected;
    };
    Option.prototype.setSelected = function (v) {
        this.selected = v.indexOf(this.value) > -1;
        if (this.hasChildren()) {
            this.children.value = v;
        }
    };
    return Option;
}());
exports.Option = Option;
