import { Country } from './../Model/Country';

export class CountryDL
{
    async GetData (country?: string) : Promise<Country[]> {
        let endpoint : string = "https://corona.lmao.ninja/countries";

        const countries = new Array <Country>();

        if (country != null)
            endpoint = endpoint.concat ("/", country);

        const response = await fetch(endpoint);

        if (!response.ok)
            throw new Error (response.statusText)

        const data = await response.json().then (d=> {return d;});

        if (country == null) {
            data.map((c: any) => {
                const currentCountry = this.MapCountry(c);
                countries.push (currentCountry);
            });
        }
        else {
             const currentCountry = this.MapCountry (data);
             countries.push (currentCountry);
        }
        return countries;
    }

    private MapCountry (c: any) {
        const country = new Country();
        country.Name = c.country;
        country.Long = c.countryInfo.long;
        country.Lat = c.countryInfo.lat;
        country.CaseData.TotalCases = c.cases;
        country.CaseData.TotalDeaths = c.deaths;
        country.CaseData.TotalRecovered = c.recovered;
        country.CaseData.TodayCases = c.todayCases;
        country.CaseData.TodayDeaths = c.todayDeaths;
        country.CaseData.TotalCasesPerMillion = c.casesPerOneMillion;
        country.CaseData.TotalDeathsPerMillion = c.deathsPerOneMillion;
        country.CaseData.TotalTests = c.tests;
        country.CaseData.TotalTestPerMillion = c.testsPerOneMillion;
        country.CaseData.CriticalCases = c.critical;
        country.CaseData.ActiveCases = c.active;
        country.CaseData.Updated = new Date(c.updated);

        return country;
    }
}
