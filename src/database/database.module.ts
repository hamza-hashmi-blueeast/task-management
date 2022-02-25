import * as ormconfig from '../ormconfig';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot(ormconfig)]
})
export class DatabaseModule {}
