import { Country } from './../Model/Country';


export class CountryDL
{
    constructor ()
    {
        console.log ("DL instantiated");
    } 

    async GetData (country?: string) : Promise<Country[]> {
        let endpoint : string = "https://corona.lmao.ninja/countries";
        
        let countries = new Array <Country>();

        if (country != null)
            endpoint = endpoint.concat ("/", country); 

        let response = await fetch(endpoint);

        if (!response.ok)
            throw new Error (response.statusText)
            
        let data = await response.json().then (d=> {return d;});
    
        if (country == null) {
            data.map((c: any) => {
                let country = this.MapCountry(c);
                countries.push (country);
            });
        }
        else {
             let country = this.MapCountry (data);
             countries.push (country);
        }
             
        return countries;
    }
    
    private MapCountry (c: any) {
        let country = new Country();
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
