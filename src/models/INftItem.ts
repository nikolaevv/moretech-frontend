import { IShopItem } from "./IShopItem";

enum ShopItemType {
  Item = "Item",
  Pet = "Pet"
};

export interface INftItem {
  id: number;
  name: string;
  price: number;
  shopItem: IShopItem;
  type: ShopItemType;
}
