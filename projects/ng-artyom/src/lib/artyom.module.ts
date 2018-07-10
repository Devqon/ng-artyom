import { ArtyomService } from './artyom.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ARTYOM_CONFIG, Config } from './config';

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [],
  providers: [ArtyomService]
})
export class ArtyomModule {
  static forRoot(config: Config): ModuleWithProviders {
    const conf = {
      lang: 'en-GB',
      soundex: true, // Use the soundex algorithm to increase accuracy
    };
    Object.assign(conf, config);
    return {
      ngModule: ArtyomModule,
      providers: [
        {provide: ARTYOM_CONFIG, useValue: conf}
      ],
    };
  }
}
