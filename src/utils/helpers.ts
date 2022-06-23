import { ReactNode } from "react";
import { RootState } from "../store/store";
import { IStore, IResultCans } from "../types";

class Helper {

    private windowArea = 2.4;
    private doorArea = 1.52;
    private inkRange = 5;
    private canOfInk = [18, 3.6, 2.5, 0.5];
    private complementCanOfInk = [0.5];
    private minimumWallSizeWithDoor = 2.2;

    public totalArea(width: number, height: number) {
        if (width > 0 && height > 0) {
            const result = width * height;
            if (result < 1 || result > 50) {
                return 0;
            }
            return result;
        }
        return 0;
    }

    public isDoorAndWindowAcceptable(totalArea: number, doors: number = 0, windows: number = 0) {
        const maximumArea = totalArea;
        if (maximumArea < this.doorArea || maximumArea < this.windowArea) {
            return false;
        }
        if ((maximumArea - (doors * this.doorArea) - (windows * this.windowArea)) < 0) {
            return false;
        } else {
            return true;
        }
    }

    public isWallTallEnought(wallHeight: number) {
        if (wallHeight >= this.minimumWallSizeWithDoor) {
            return true;
        }
        return false
    }

    public getDoorArea = () => this.doorArea;

    public getWindowArea = () => this.windowArea;

    public setError = () => ({
        minimumWall: "Paredes devem ter uma área mínima de 1m² ou até área máxima de 50m²",
        maximumItem: "Portas e janelas devem ocupar até 50% da área total da parede",
        blank: ""
    })

    public calcArea = (width: number, height: number) => width * height;

    private calcTotalAreaFromWalls = (storeArray: any[]) => storeArray.reduce((x, y) => x + y.totalArea, 0);

    public amountOfInk = (storeArray: IStore[]) => {
        let rest = 0;
        let cans = 0;
        let total = [];
        let inkNecessary = this.calcTotalAreaFromWalls(storeArray) / this.inkRange;

        if(inkNecessary === 0){
            return []
        }

        for (let i = 0; i < this.canOfInk.length; i++) {
            if(inkNecessary >= this.canOfInk[i]){
                cans = Math.floor(inkNecessary / this.canOfInk[i]);
                rest = inkNecessary % this.canOfInk[i];
                if(this.canOfInk[i] === 0.5 && rest > 0){
                    total.push( ({ size: this.canOfInk[i], amount: cans+1 }) )
                } else {
                    total.push( ({ size: this.canOfInk[i], amount: cans }) )
                }
                inkNecessary = rest;
                cans = 0
            } else if (this.canOfInk[i] === 0.5 && inkNecessary < 0.5) {
                total.push( ({ size: this.canOfInk[i], amount: 1 }) )
            } else {
                continue
            }
        }
        return total;
    };
}

export default new Helper();