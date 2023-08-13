export interface Billboard{
    id: string;
    label: string;
    imageUrl: string;
}
export interface Billboards{
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category{
    id:string,
    name:string,
    billboard: Billboard;
    
}
export interface Stores{
    id:string,
    name:string,

    
}

export interface Products{
    
    id: string
    category: Category
    name: string
    price: string;
    subcategory: Subcategory
    isFeatured: boolean
    isArchived: boolean
    images: Image[]
}
export interface Subcategory{
    
    id: string
    name: string
    hasPrice: boolean
    value?: string
}

export interface Image{
    id: string,
    url: string
}