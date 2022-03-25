import { from, tap } from "rxjs"
import { find, pluck,take } from "rxjs/"

filterData(valueToSearch: string):void {

    const QUERY_BY_NAME = {};
    this.apollo.watchQuery <any>(
    {
        query: QUERY_BY_NAME,
        variables: {
            name:valueToSearch
        }
    }
    ).valueChanges.pipe(
        take(1),
        pluck ('data', 'characters'),
        tap(apiResponse) => this.parseCharactersData([..apiReponse.results])
    )


}