
export interface Food_types {
    id: string,
   name: string,
   slug: string,
   deleted_at: string,
   created_at: string,
   updated_at:  string,
  
}

interface Pagination{
    current_page: number,
    total_records: number,
    records_per_page: number,
}
interface DataItems {
    message: string,
    food_types: Food_types[],
    pagination: Pagination[],
  
}


export interface CategoryModel {
    code: number,
    data: DataItems,
    success: boolean,
}