export class ProductModel {
    id ='';
    pName = '';
    price = 0;
    qStock = 0;
    picture = ''
    description = '';

    constructor(
        pName = '',
        price = 0,
        qStock = 0,
        picture = '',
        description = ''
    ){
        this.pName = pName;
        this.price = price;
        this.qStock = qStock;
        this.picture = picture;
        this.description = description;
    }
}