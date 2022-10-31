import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HhData } from 'src/top-page/top-page.model';
import { API_URL, SALARY_CLUSTER_ID } from './hh.constants';
import { HhResponse } from './hh.models';

@Injectable()
export class HhService {
  token: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.token = this.configService.get('HH_TOKEN') ?? '';
  }

  async getData(text: string) {
    try {
      const { data } = await this.httpService
        .get(API_URL.vacancies, {
          params: {
            text,
            cluster: true,
          },
          headers: {
            'User-Agent': 'OwlTop/1.0 (name)',
            Ahorization: 'Bearer' + this.token,
          },
        })
        .toPromise();
    } catch (error) {
      Logger.error(error);
    }
  }

  private parseDate(data: HhResponse): HhData {
    const salaryCluster = data.clusters.find((c) => c.id === SALARY_CLUSTER_ID);
  }
}
