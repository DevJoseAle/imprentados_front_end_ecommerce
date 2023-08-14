import { Products } from "@/types";
import toast from "react-hot-toast";
import {create}from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

interface CartStore{
    items: Products[]
    addItem: (data: Products) =>void,
    deleteItem: (id: string) =>void,
    deleteAll: () =>void,
}

const useCart = create(
    persist<CartStore>((set, get) =>({
        items: [],
        addItem: (data: Products) =>{
            const currentItem = get().items;
            const existingItem = currentItem.find((item) => item.id === data.id);

            if(existingItem){
                return toast.error('El producto Ya está en tu carrito')
            }
            set({items: [...get().items, data]});
            toast.success('Producto añadido al carrito')
        },

        deleteItem: (id:string) =>{
            set({items: [...get().items.filter((item) =>item.id !== id)]})
            toast.success('Item eliminado Exitosamente')
        },
        deleteAll: ()=>set({items: []})
    }),{
        name: 'cart-storage',
        storage: createJSONStorage(()=>localStorage)
    }
    )
)


export default useCart

