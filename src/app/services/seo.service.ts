import { Injectable } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class SeoService {
    constructor(private _meta: Meta) {}
    setSeoData(): void {
        const metaTags = [
            {
                name: 'title',
                content: `My Contcats App - Authentication Page`,
            },
            {
                name: 'description',
                content:
                    'My Contacts is a fast and efficient web app for storing your personal contacts',
            },
            {
                name: 'author',
                content: 'Abbas Shaikh',
            },
            {
                name: 'keywords',
                content: 'angular, app, web-app, pwa',
            },
            {
                name: 'type',
                content: 'website',
            },
        ];
        this.setTags(metaTags);
    }

    setTags(tags: MetaDefinition[]) {
        this._meta.addTags(tags);
    }

    updateMetaTags(tags: MetaDefinition[]): void {
        tags.forEach((tag) => this._meta.updateTag(tag));
    }
}
