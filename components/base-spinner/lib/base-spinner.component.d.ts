import { OnInit } from '@angular/core';
export declare class BaseSpinnerComponent implements OnInit {
    color: string;
    type: string;
    size: string;
    constructor();
    ngOnInit(): void;
    setMyStyles(): {
        'height': string;
        'width': string;
    };
}
