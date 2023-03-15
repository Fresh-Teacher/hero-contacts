import { Injectable } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class SeoService {
    constructor(private _meta: Meta) {}

    setTags(tags: MetaDefinition[]) {
        this._meta.addTags(tags);
    }

    updateMetaTags(tags: MetaDefinition[]): void {
        tags.forEach((tag) => this._meta.updateTag(tag));
    }
}
