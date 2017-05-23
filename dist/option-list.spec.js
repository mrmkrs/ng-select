"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var option_list_1 = require("./option-list");
var numbers = [0, 1, 2, 3, 4];
describe('An OptionList\'s constructor', function () {
    var options;
    var invalidOptions;
    beforeEach(function () {
        var options = numbers.map(function (i) {
            return {
                label: "Option " + i,
                value: "" + i
            };
        });
        var invalidOptions = [{
                label: 'Option 1',
                value: '1'
            }, {
                view: 'Invalid option label',
                value: '2'
            }];
    });
    it('creates empty list if undefined is provided as parameter', function () {
        var optionList = new option_list_1.OptionList(undefined);
        expect(optionList.options.length).toBe(0);
        expect(optionList.hasShown).toBe(false);
        expect(optionList.highlightedOption).toBe(null);
    });
    it('creates empty list if null is provided as parameter', function () {
        var optionList = new option_list_1.OptionList(null);
        expect(optionList.options.length).toBe(0);
        expect(optionList.hasShown).toBe(false);
        expect(optionList.highlightedOption).toBe(null);
    });
});
describe('An OptionList\'s getOptionsByValue function', function () {
    var optionList;
    beforeEach(function () {
        var options = numbers.map(function (i) {
            return {
                label: "Option " + i,
                value: "" + i
            };
        });
        optionList = new option_list_1.OptionList(options);
    });
    it('returns empty list if list of options is empty', function () {
        optionList = new option_list_1.OptionList([]);
        var result = optionList.getOptionsByValue('test');
        expect(result.constructor).toBe(Array);
        expect(result.length).toBe(0);
    });
    it('returns empty list if value is not in list of options', function () {
        var result = optionList.getOptionsByValue('test');
        expect(result.constructor).toBe(Array);
        expect(result.length).toBe(0);
    });
    it('returns the option with requested value', function () {
        var result = optionList.getOptionsByValue('2');
        expect(result.length).toBe(1);
        expect(result[0].label).toBe('Option 2');
        expect(result[0].value).toBe('2');
    });
    it('returns all options with requested value', function () {
        optionList.options[4].wrappedOption.value = '3';
        var result = optionList.getOptionsByValue('3');
        expect(result.length).toBe(2);
        expect(result[0].value).toBe('3');
        expect(result[1].value).toBe('3');
    });
});
describe('An OptionList\'s get value function', function () {
    var optionList;
    beforeEach(function () {
        var options = numbers.map(function (i) {
            return {
                label: "Option " + i,
                value: "" + i
            };
        });
        optionList = new option_list_1.OptionList(options);
    });
    it('returns empty list if list of options is empty', function () {
        optionList = new option_list_1.OptionList([]);
        var value = optionList.value;
        expect(value.constructor).toBe(Array);
        expect(value.length).toBe(0);
    });
    it('returns empty list if no options are selected', function () {
        var value = optionList.value;
        expect(value.constructor).toBe(Array);
        expect(value.length).toBe(0);
    });
    it('returns value of selected option', function () {
        optionList.options[1].selected = true;
        var value = optionList.value;
        expect(value.length).toBe(1);
        expect(value[0]).toBe('1');
    });
    it('returns value of selected options', function () {
        optionList.options[2].selected = true;
        optionList.options[4].selected = true;
        var value = optionList.value;
        expect(value.length).toBe(2);
        expect(value[0]).toBe('2');
        expect(value[1]).toBe('4');
    });
});
describe('An OptionList\'s set value function', function () {
    var optionList;
    beforeEach(function () {
        var options = numbers.map(function (i) {
            return {
                label: "Option " + i,
                value: "" + i
            };
        });
        optionList = new option_list_1.OptionList(options);
    });
    it('has unchanged value if list of options is empty', function () {
        optionList = new option_list_1.OptionList([]);
        optionList.value = [];
        expect(optionList.value.length).toBe(0);
        optionList.value = ['2'];
        expect(optionList.value.length).toBe(0);
        optionList.value = ['0', '4'];
        expect(optionList.value.length).toBe(0);
    });
    it('has unchanged value when setting non-existing option value', function () {
        optionList.value = ['a'];
        expect(optionList.value.length).toBe(0);
        optionList.value = ['2'];
        expect(optionList.value.length).toBe(1);
        expect(optionList.value[0]).toBe('2');
        optionList.value = ['b', 'c'];
        expect(optionList.value.length).toBe(0);
        optionList.value = ['d', '3'];
        expect(optionList.value.length).toBe(1);
        expect(optionList.value[0]).toBe('3');
    });
    it('has unchanged value when setting value that is already set', function () {
        optionList.value = ['0', '4'];
        expect(optionList.value.length).toBe(2);
        expect(optionList.value[0]).toBe('0');
        expect(optionList.value[1]).toBe('4');
        optionList.value = ['0', '4'];
        expect(optionList.value.length).toBe(2);
        expect(optionList.value[0]).toBe('0');
        expect(optionList.value[1]).toBe('4');
    });
    it('selects single set value', function () {
        optionList.value = ['4'];
        expect(optionList.value.length).toBe(1);
        expect(optionList.value[0]).toBe('4');
    });
    it('selects multiple set values', function () {
        optionList.value = ['0', '2', '4'];
        expect(optionList.value.length).toBe(3);
        expect(optionList.value[0]).toBe('0');
        expect(optionList.value[1]).toBe('2');
        expect(optionList.value[2]).toBe('4');
    });
    it('selects values in the order of the option list', function () {
        optionList.value = ['2', '4', '0'];
        expect(optionList.value.length).toBe(3);
        expect(optionList.value[0]).toBe('0');
        expect(optionList.value[1]).toBe('2');
        expect(optionList.value[2]).toBe('4');
    });
});
