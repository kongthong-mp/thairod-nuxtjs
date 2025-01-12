export interface UpdateInventoryFormData {
  quantity: number
  cost: number
  warehouse: string
}

export interface WarehouseStock {
  warehouse: string
  amount: number
  unit: string
}

export interface InventoryDetailCard {
  backgroundColor: string,
  title: string,
  amount: number,
  unit: string
}
