export interface RevenueSummaryResponse {
    productsRevenues: RevenueDTO[],
    productsPurchasedCount: number,
    totalRevenue: number
}

export interface RevenueDTO {
    productName: string,
    purchaseCount: number,
    revenue: number
}

export interface SellingDetailsResponse {
    purchaseList: SellingPurchaseDTO[],
    purchaseCount: number,
    totalRevenue: number
}

export interface SellingPurchaseDTO {
    orderId: number,
    revenue: number,
    purchaseDate: Date,
    products: SellingProductDTO[]
}

export interface SellingProductDTO {
    name: string,
    quantity: number,
    price: number
}

export interface CostSummary {
    productsCosts: CostDTO[],
    productsPurchasedCount: number,
    totalCost: number
}

export interface CostDTO {
    productName: string,
    purchaseCount: number,
    cost: number
}

export interface BuyingDetailsResponse {
    purchaseList: BuyingPurchaseDTO[],
    purchaseCount: number,
    totalCost: number
}

export interface BuyingPurchaseDTO {
    cost: number,
    purchaseDate: Date,
    products: BuyingProductDTO[]
}

export interface BuyingProductDTO {
    name: string,
    quantity: number,
    price: number
}

export interface PurchaseOrder {
    products: PurchaseProduct[]
}

export interface PurchaseProduct {
    name: string,
    quantity: number,
    price: number,
    category: PurchaseCategory
}

export interface PurchaseCategory {
    name: string
}

