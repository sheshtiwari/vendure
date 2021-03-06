import { LanguageCode } from '@vendure/common/lib/generated-types';
import { DeepPartial, HasCustomFields } from '@vendure/common/lib/shared-types';
import { Column, Entity } from 'typeorm';

import { VendureEntity } from '..';
import { CustomGlobalSettingsFields } from '../custom-entity-fields';

@Entity()
export class GlobalSettings extends VendureEntity implements HasCustomFields {
    constructor(input?: DeepPartial<GlobalSettings>) {
        super(input);
    }

    @Column('simple-array')
    availableLanguages: LanguageCode[];

    @Column(type => CustomGlobalSettingsFields)
    customFields: CustomGlobalSettingsFields;
}
