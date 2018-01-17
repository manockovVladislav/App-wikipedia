import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WikiService {
    constructor(private jsonp: Jsonp) { }

    public search(term: string) {
        /*Куда слать запрос*/
        const wikiUrl = 'http://ru.wikipedia.org/w/api.php';

        /*Подготавливаем пораметры которые будем слать на википедию */
        const params = new URLSearchParams();
        /*поисковая фраза tern полученная из аргументов */
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        /*С помощью jsonp делаем get запрос к википедии и первым пораметром отпровляем
        сконфигурированный wikiUrl и пораметры которые скажут что нам нужно  */
        return this.jsonp.get(wikiUrl, { search: params }).map(response => {

            /*При получении ответа от сервера преобразуем нужный нам формат */
            let responseData = <string[]>response.json();
            let names = responseData[1];
            let descriptions = responseData[2];
            let links = responseData[3];
            let length = names.length;

            let result: any[] = [];
            /*Создаем объект result и конфигурируем его и возвращаем */
            for (let i = 0; i < length; i++) {
                result.push({
                    name: names[i],
                    link: links[i],
                    description: descriptions[i]
                });
            }
            return result;
        });

    }
}