export class CaseData {
    CollectionDate: Date=new Date();
    
    TotalCases: number = 0;
    TotalDeaths: number = 0;
    TotalRecovered: number = 0;

    TotalCasesPerMillion: number = 0;
    TotalDeathsPerMillion: number = 0;

    TotalTests: number = 0;
    TotalTestPerMillion: number =0;

    TodayCases: number = 0;
    TodayDeaths: number = 0;

    ActiveCases: number = 0;
    CriticalCases: number = 0;

    Updated: Date = new Date();
}