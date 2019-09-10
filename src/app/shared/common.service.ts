import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class CommonService {
    refreshMap = new Subject();
    addToCart = new Subject();
    url: string;
    goToCart = new Subject();
    setRefreshMap() {
        this.refreshMap.next("refresh");
    }
    getRefreshMap() {
        return this.refreshMap
    }

    setAddToCart(count) {
        this.addToCart.next(count);
    }

    getAddTOCart() {
        return this.addToCart;
    }

    setGotoCart(val) {
        this.goToCart.next(val);
    }

    getGotoCart() {
        return this.goToCart;
    }

}