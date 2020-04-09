import { Country } from './../Model/Country';
import { CountryDL } from '../DL/CountryDL';

export class CountryBL
{
    dataLayer : CountryDL;

    constructor (dl: CountryDL | null)
    {
        if (dl != null)
            this.dataLayer = dl;
        else
            this.dataLayer = new CountryDL();
    }

    async GetData (country?: string) : Promise<Country[]>  {
        let result = await this.dataLayer.GetData(country)
            .then (c=> {return c});
        return result;
    }
} 
