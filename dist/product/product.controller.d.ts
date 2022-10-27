import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
export declare class ProductController {
    create(dto: Omit<ProductModel, '_id'>): Promise<void>;
    get(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: ProductModel): Promise<void>;
    find(dto: FindProductDto): Promise<void>;
}
