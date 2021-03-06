import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-radio-list-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiRadioListExample1 {
    readonly items = [
        {
            name: 'Simple',
            description: 'Something usual',
        },
        {
            name: 'Advanced',
            description: 'Something better',
        },
        {
            name: 'PRO',
            description: 'Something cool',
        },
    ];

    readonly testForm = new FormGroup({
        tariff: new FormControl(this.items[0]),
    });
}
