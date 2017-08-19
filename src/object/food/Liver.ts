import FoodBase from './FoodBase';

export default class Liver extends FoodBase {
  protected get assetNameNama() {
    return 'liver_nama';
  }
  protected get assetNameGood() {
    return 'liver_good';
  }
  protected get assetNameKoge() {
    return 'liver_koge';
  }

  getFoodName() {
    return 'liver';
  }
}
