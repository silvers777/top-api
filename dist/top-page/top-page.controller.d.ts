import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';
export declare class TopPageController {
    create(dto: Omit<TopPageModel, '_id'>): Promise<void>;
    get(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: TopPageModel): Promise<void>;
    find(dto: FindTopPageDto): Promise<void>;
}
