import { LanguageCode } from '@vendure/common/lib/generated-types';
import { DeepPartial } from '@vendure/common/lib/shared-types';
import { HasCustomFields } from '@vendure/common/lib/shared-types';
import { Column, Entity, ManyToOne } from 'typeorm';

import { Translation } from '../../common/types/locale-types';
import { VendureEntity } from '../base/base.entity';
import { CustomProductOptionGroupFieldsTranslation } from '../custom-entity-fields';

import { ProductOptionGroup } from './product-option-group.entity';

@Entity()
export class ProductOptionGroupTranslation extends VendureEntity
    implements Translation<ProductOptionGroup>, HasCustomFields {
    constructor(input?: DeepPartial<Translation<ProductOptionGroup>>) {
        super(input);
    }

    @Column('varchar') languageCode: LanguageCode;

    @Column() name: string;

    @ManyToOne(type => ProductOptionGroup, base => base.translations)
    base: ProductOptionGroup;

    @Column(type => CustomProductOptionGroupFieldsTranslation)
    customFields: CustomProductOptionGroupFieldsTranslation;
}
