import { Request, Response } from "express";
import AppDataSource from "../database/data-source";
import { Product } from "../database/entities/product.entity";

class ProductController {
  async findAll(request: Request, response: Response): Promise<Response> {
    const productRepository = AppDataSource.getRepository(Product);

    const products = await productRepository.find();

    return response.status(200).send({
      data: products,
    });
  }
}

export default new ProductController();
